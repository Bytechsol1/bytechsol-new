import NewCon from "../../shareable/NewCon";
import "../../assets/components-css/Blog.css";
import er from "../../assets/images/erp.png";
import gu from "../../assets/images/uxgui.png";
import t8 from "../../assets/images/top8.png";
import b7 from "../../assets/images/benfit7.png";
import py from "../../assets/images/prototype.png";
import d15 from "../../assets/images/design15.png";
import bgl from "../../assets/images/blogbgl.png";
import bgr from "../../assets/images/blogbgr.png";
import rg from "../../assets/images/blogrg.png";
import lf from "../../assets/images/bloglf.png";

// Scroll function
const scroll = (direction: string) => {
  const container = document.getElementById("servicesScroll");
  const scrollAmount = 200;

  if (container) {
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
};

// Blog posts
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
  {
    id: 4,
    image: b7,
    category: "UI UX",
    readTime: "14 MINUTES",
    title: "7 Benefits of Hiring a Usability Testing Consultancy",
    date: "26 May, 2025",
  },
  {
    id: 5,
    image: py,
    category: "UI UX",
    readTime: "14 MINUTES",
    title: "What is UX Prototyping? Why DO You Need Consultancy?",
    date: "26 May, 2025",
  },
  {
    id: 6,
    image: d15,
    category: "UI UX",
    readTime: "14 MINUTES",
    title: "15 Innovative UX Design Examples for Your Next Project",
    date: "26 May, 2025",
  },
];

const Blog = () => {
  return (
    <>
      {/* Blog Section */}
      <section className="blog-section">
        {/* Left Image */}
        <div
          className="blog-bg-left d-none d-lg-block"
          style={{ backgroundImage: `url(${bgl})` }}
        ></div>

        {/* Right Image */}
        <div
          className="blog-bg-right"
          style={{ backgroundImage: `url(${bgr})` }}
        ></div>

        <h1 className="gradient-text2 text-start text-md-center ms-4">Blogs</h1>
        <h6 className="gradient-text1 text-start text-md-center ms-4">
          Read. Grow. Automate.
        </h6>

        {/* Search Placeholder */}
        <div className="blog-search-placeholder">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            placeholder="Search"
            className="blog-search-input"
          />
        </div>
      </section>
      {/* Scrollable Services Section */}
      <div className="services-container d-none d-md-block">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <img src={rg} alt="" />
        </button>

        <div className="services-scroll" id="servicesScroll">
          <div className="service-item">Web Development</div>
          <div className="service-item">App Development</div>
          <div className="service-item">UI/UX Design</div>
          <div className="service-item">SEO</div>
          <div className="service-item">Digital Marketing</div>
          <div className="service-item">Branding</div>
          <div className="service-item">E-Commerce</div>
          <div className="service-item">Cloud Solutions</div>
          <div className="service-item">QA & Testing</div>
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <img src={lf} alt="Right Arrow" />
        </button>
      </div>

      {/* Blog Cards Section */}
      <section className="cards-six">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-meta">
                <span>{post.category}</span> • <span>{post.readTime}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
            </div>
          ))}
        </div>
      </section>

      <NewCon />
    </>
  );
};

export default Blog;
