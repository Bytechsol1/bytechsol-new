import ContactSection from "../../shareable/contact";
import "../../assets/components-css/Blog.css";
import dl from "../../assets/images/dlrs.png";
import er from "../../assets/images/erp.png";
import gu from "../../assets/images/uxgui.png";
import t8 from "../../assets/images/top8.png";
import b7 from "../../assets/images/benfit7.png";
import py from "../../assets/images/prototype.png";
import d15 from "../../assets/images/design15.png";

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
      {/* 1st Section */}
      <section className="csd-blog-section">
        <div className="container">
          <p className="csd-blog-subtitle d-none d-md-block">All Blogs</p>

          <div className="csd-blog-header d-none d-sm-flex align-items-center">
            <i className="fa-solid fa-magnifying-glass me-2"></i>
            <input
              type="text"
              className="csd-blog-search"
              placeholder="Search..."
            />
          </div>

          <h1 className="csd-blog-title">bytechsol Blog</h1>

          <div className="csd-blog-header d-flex align-items-cente me-5 w-50 d-block d-md-none">
            <i className="fa-solid fa-magnifying-glass me-2"></i>
            <input
              type="text"
              className="csd-blog-search"
              placeholder="Search..."
            />
          </div>

          <p className="csd-blog-description fs-1">
            Top 15 Banking Apps with <br /> Exceptional UX Design <br /> (2025)
          </p>
        </div>
        <div
          className="dg-products-image"
          style={{
            height: "500px",
            width: "50%",
            marginTop: "-280px",
            marginLeft: "650px",
          }}
        >
          <img src={dl} alt="blog" />
        </div>
      </section>
      {/* 2nd section----------- */}
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

      <ContactSection />
    </>
  );
};

export default Blog;
