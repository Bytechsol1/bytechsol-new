import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/components-css/Blogdetail.css";
import { fetchPostBySlug, fetchAllPosts } from "../../apiServices/wpApi";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { Helmet } from "react-helmet";
import FaqSection from "../../shareable/faq";

const Blogdetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState<{ id: string; label: string }[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [faqs, setFaqs] = useState<any[]>([]);

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const removeOldWPTOC = (html: string) => {
    return html
      .replace(/<div id="ez-toc-container[\s\S]*?<\/div>/gi, "")
      .replace(/<nav[\s\S]*?<\/nav>/gi, "")
      .replace(/<ul class="ez-toc-list[\s\S]*?<\/ul>/gi, "");
  };
  const removeFaqHtml = (html: string) => {
    return html.replace(/<div class="schema-faq[\s\S]*?<\/div>/gi, "");
  };

  const generateToc = (rawHtml: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, "text/html");

    const headings = Array.from(doc.querySelectorAll("h2, h3"));

    let h2Index = 0;
    let h3Index = 0;

    const tocItems: any[] = [];

    headings.forEach((h) => {
      let text = h.textContent.trim();
      if (!text) return;

      const tag = h.tagName.toLowerCase();

      if (tag === "h2") {
        h2Index++;
        h3Index = 0;

        const id = slugify(text);
        h.id = id;

        tocItems.push({
          id,
          number: `${h2Index}.`,
          label: text,
          type: "h2",
        });
      }

      if (tag === "h3") {
        h3Index++;

        const id = slugify(text);
        h.id = id;

        tocItems.push({
          id,
          number: `${h2Index}.${h3Index}.`,
          label: text,
          type: "h3",
        });
      }
    });

    return {
      tocItems,
      updatedHtml: doc.body.innerHTML,
    };
  };

  const extractFaqs = (html: string) => {
    if (!html) return [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const faqSections = [...doc.querySelectorAll(".schema-faq-section")];

    const extractedFaqs = faqSections.map((section) => {
      const q = section.querySelector(".schema-faq-question")?.innerText || "";
      const a = section.querySelector(".schema-faq-answer")?.innerHTML || "";

      return { question: q, answer: a };
    });

    setFaqs(extractedFaqs);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const p = await fetchPostBySlug(slug as string);

        const cleaned = removeOldWPTOC(p.content);

        let { updatedHtml, tocItems } = generateToc(cleaned);

        extractFaqs(updatedHtml);

        updatedHtml = removeFaqHtml(updatedHtml);

        setToc(tocItems);
        setPost({ ...p, content: updatedHtml });


        const r = await fetchAllPosts();
        setRelated(r.filter((x: any) => x.id !== p.id).slice(0, 3));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    setTimeout(() => {
      const container = document.querySelector(".blog-detail-body");
      if (!container) return;

      const nodes = Array.from(container.childNodes);

      nodes.forEach((node: any, i) => {
        const emptyHead =
          (node.tagName === "H2" || node.tagName === "H3") &&
          node.classList?.contains("wp-block-heading") &&
          node.textContent.trim() === "";

        if (emptyHead) {
          const prev: any = nodes[i - 1];

          if (prev && prev.tagName === "P" && prev.textContent.trim()) {
            const text = prev.textContent.trim();
            const id = slugify(text);

            node.innerHTML = text;
            node.id = id;
            prev.remove();
          }
        }
      });
    }, 50);
  }, [post]);

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  const mainImage =
    post?.og_image ||
    post?.image ||
    "https://bytechsol.com/cms/wp-content/uploads/2024/11/default-blog.png";

  return (
    <>
      <Helmet>
        <title>{post.title} | BytechSol Blog</title>
        <meta name="description" content={post.title} />
        <link rel="canonical" href={`https://bytechsol.com/blog/${slug}/`} />
      </Helmet>

      <section className="blog-detail-section">
        <div className="container">
          <img
            src={mainImage}
            alt={post.title}
            className="blog-detail-image"
            onError={(e) => {
              e.currentTarget.src =
                "https://bytechsol.com/cms/wp-content/uploads/2024/11/default-blog.png";
            }}
          />

          <div className="container blog-detail-container">
            {/* TOC */}
            {toc.length > 0 && (
              <aside className="blog-sidebar d-none d-md-block">
                <h4>Table of Contents</h4>
                <ul className="toc-list">
                  {toc.map((item) => (
                    <li
                      key={item.id}
                      className={item.type === "h3" ? "toc-sub" : "toc-main"}
                    >
                      <a href={`#${item.id}`}>
                        {item.number} {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <article className="blog-main">
              <h1 className="blog-detail-title">{post.title}</h1>
              <p className="text-muted">
                {post.date} • {post.author}
              </p>

              <div
                className="blog-detail-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <aside className="blog-meta1 text-start">
              <div className="blog-meta-item">
                <h5>PUBLISHED</h5>
                <p>{post.date}</p>
              </div>

              <div className="blog-meta-item">
                <h5>Author</h5>
                <p>{post.author}</p>
              </div>

              <div className="blog-meta-item text-start">
                <h5>SOCIAL SHARE</h5>
                <div className="blog-social-icons">
                  <a href="https://www.linkedin.com/company/bytechsol-llc" target="_blank">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.instagram.com/bytechsol1/" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100092258931848" target="_blank">
                    <FaFacebookF />
                  </a>
                  <a href="https://x.com/BytechSol" target="_blank">
                    <FaXTwitter />
                  </a>
                </div>
              </div>

              <div className="newsletter-section">
                <h5>NEWSLETTER</h5>
                <p>Get the latest updates, blogs and news delivered to your inbox.</p>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                    setEmail("");
                    setTimeout(() => setSubscribed(false), 3000);
                  }}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="newsletter-btn">
                    Submit
                  </button>
                </form>

                {subscribed && <p className="subscribed-msg">Subscribed!</p>}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      <section className="related-blogs">
        <div className="container">
          <h2>Related Blogs</h2>

          <div className="related-blog-grid">
            {related.map((r) => (
              <Link to={`/blog/${r.slug}/`} key={r.id} className="related-blog-card">
                <img src={r.image} alt={r.title} />

                <div className="related-blog-content">
                  <span className="related-category">{r.category}</span>
                  <h4>{r.title}</h4>
                  <p className="related-date">{r.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogdetail;