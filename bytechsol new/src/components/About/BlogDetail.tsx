import React, { useState } from "react";
import "../../assets/components-css/Blogdetail.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import bd from "../../assets/images/bdetailimg.png"; 
import FaqSection from "../../shareable/faq";
import er from "../../assets/images/erp.png";
import gu from "../../assets/images/uxgui.png";
import t8 from "../../assets/images/top8.png";
import { homePageFaqs } from "../../shareable/faqData";


const blogPosts = [
  {
    id: 1,
    image: er,
    category: "UI UX",
    readTime: "14 MINUTES",
    title: "Top 20 UI/UX Design Agencies in the USA - July 2025 Rankings",
    date: "26 May, 2025",
  },
  {
    id: 2,
    image: gu,
    category: "UI UX",
    readTime: "14 MINUTES",
    title: "8 Common Mistakes in UX User Flows to Avoid",
    date: "26 May, 2025",
  },
  {
    id: 3,
    image: t8,
    category: "UI UX",
    readTime: "14 MINUTES",
    title: "Top 8 Usability Testing Consultancy Agencies You Can Trust (2025)",
    date: "26 May, 2025",
  },
];

const Blogdetail = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Handle search input change
  const searchBlog = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      {/* Blog Detail Section */}
      <section className="blog-detail-section">
        <div className="container">
          <img src={bd} alt="Blog Header" className="blog-detail-image" />
          <div className="container blog-detail-container">
            
            {/* Left Sidebar */}
            <aside className="blog-sidebar d-none d-md-block">
              <h4>Table of Contents</h4>
              <ul>
                <li>Introduction</li>
                <li>Discovery</li>
                <li>Strategy</li>
              </ul>
            </aside>

            {/* Main Content */}
            <article className="blog-main">
              <div className="blog-detail-head">
                <h1 className="blog-detail-title">
                  Top 20 UI/UX Design Agencies in the USA - July 2025 Rankings
                </h1>
              </div>

              <div className="blog-detail-body">
                <p>
                  When most people think of a mobile app development company, they
                  picture developers coding away in a vacuum. But in reality, building a
                  successful app is a collaborative process—spanning product strategy,
                  UX design, development, QA, and long-term support.
                </p>

                <p>
                  Whether you’re launching a customer-facing platform or an internal
                  tool, the right partner does more than just build software—they help
                  shape your product.
                </p>

                <p>
                  In this article, we’ll take you behind the scenes to explore what a
                  mobile app development company actually does—and what it takes to
                  build an app that lasts.
                </p>

                <h3>Discovery & Strategy</h3>
                <ul>
                  <li>UX & UI Design</li>
                  <li>Agile Development</li>
                  <li>Quality Assurance</li>
                  <li>Launch: Bringing Your Product to Market</li>
                  <li>Iteration & Long-Term Support</li>
                </ul>

                <h3>Discovery & Strategy</h3>
                <p>
                  Every successful app starts with clarity, not code. Before a single
                  feature is scoped or a screen is designed, a mobile app development
                  company should first work to understand your business goals, target
                  users, and key success metrics.
                </p>

                <ul>
                  <li>Stakeholder interviews to define objectives</li>
                  <li>Market research and competitor analysis</li>
                  <li>User persona development</li>
                  <li>Feature prioritization (MVP planning)</li>
                  <li>Technical feasibility analysis</li>
                </ul>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="blog-meta1 text-end">
              <div className="blog-meta-item">
                <h5>(PUBLISHED)</h5>
                <p>26 July 2025</p>
              </div>
              <div className="blog-meta-item">
                <h5>(WRITER)</h5>
                <p>Karla Smith</p>
              </div>

              <div className="blog-meta-item">
                <h5>(SOCIAL SHARE)</h5>
                <div className="blog-social-icons">
                  <a
                    href="https://www.linkedin.com/company/bytechsol-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/bytechsol1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100092258931848"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://x.com/BytechSol"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section className="related-blogs">
        <div className="container">
          <h2>Related Blogs</h2>
          <div className="related-blog-grid">
            {filteredPosts.map((post) => (
              <div key={post.id} className="related-blog-card">
                <img src={post.image} alt={post.title} />
                <div className="related-blog-content">
                  <span className="related-category">{post.category}</span>
                  <h4>{post.title}</h4>
                  <p className="related-date">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={homePageFaqs}/>
    </>
  );
};

export default Blogdetail;
