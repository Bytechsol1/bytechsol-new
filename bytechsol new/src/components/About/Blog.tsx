import NewCon from "../../shareable/NewCon";
import "../../assets/components-css/Blog.css";
import er from "../../assets/images/erp.png";
import d1 from "../../assets/images/det01.png";
import t8 from "../../assets/images/top8.png";
import b7 from "../../assets/images/benfit7.png";
import py from "../../assets/images/prototype.png";
import d15 from "../../assets/images/design15.png";
import bgl from "../../assets/images/blogbgl.png";
import bgr from "../../assets/images/blogbgr.png";
import ai from "../../assets/images/bl-detail2.png"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FaqSection from "../../shareable/faq";
import {blogSoftwarePros} from "../../shareable/faqData"
import tm from "../../assets/images/topmost.png"
import cw1 from "../../assets/images/cweb01.jpg"
import az1 from "../../assets/images/azone01.png"
import n1 from "../../assets/images/ncode01.jpg"


const blogPosts = [
  {
    id: 1,
    image: d1,
    category: "Development",
    title: "The Pros and Cons of Waterfall Software Development",
    date: "28 October, 2025",
    linkpath: "/blog/the-pros-and-cons-of-waterfall-software-development"
  },
  {
    id: 2,
    image: tm,
    category: "AI ML",
    title: "15 Most Advanced AI Systems in 2025 – Complete Overview",
    date: "31 October, 2025",
        linkpath: "/blog/advanced-ai-systems-2025"

  },
  {
    id: 3,
    image: cw1,
    category: "Custom Web",
    title: "Why Custom Web Solutions Are the Future of Digital Growth",
    date: "03 November, 2025",
    linkpath: "/blog/custom-web-solutions-digital-growth"
  },
  {
    id: 4,
    image: az1,
    category: "Development",
    title: "AR Zone App: Features, Benefits & How to Download for Android",
    date: "04 November, 2025",
        linkpath: "/blog/ar-zone-app-features-benefits-download-android"
  },
  {
    id: 5,
    image: n1,
    category: "Development",
    title: "What is No-Code? A Full Guide to No-Code for 2025",
    date: "06 November, 2025",
        linkpath: "/blog/what-is-no-code-guide-2025"
  },
  // {
  //   id: 6,
  //   image: d15,
  //   category: "UI UX",
  //   readTime: "14 MINUTES",
  //   title: "15 Innovative UX Design Examples for Your Next Project",
  //   date: "26 May, 2025",
  //       linkpath: "/blog"

  // },
];

 const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO",
    "Digital Marketing",
    "Branding",
    "E-Commerce",
    "Cloud Solutions",
    "QA & Testing",

  ];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Handle the search input change
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchBlog = ( e : any ) => {
    const query = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    setSearchQuery(query);

    // Filter blog posts based on the search query
    const filtered = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered); // Update the filtered posts state
  };
  return (
    <>
    <Helmet>
  <title>BytechSol Blog | Insights on Tech, AI, and Development</title>
  <meta
    name="description"
    content="Read BytechSol’s latest articles and insights about web development, UI/UX design, artificial intelligence, and business technology trends."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://bytechsol.com/blog" />
</Helmet>

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
            type="search"
            value={searchQuery}
            onChange={searchBlog}
            placeholder="Search"
            className="blog-search-input"
          />
        </div>
      </section>
      {/* Scrollable Services Section */}
      <div className="services-container d-none d-md-block">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1500, // time between slides
          disableOnInteraction: false,
        }}
        speed={1000} // slide animation speed
        breakpoints={{
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1400: { slidesPerView: 6 },
        }}
        className="services-scroll"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-item">{service}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {/* Blog Cards Section */}
      <section className="cards-six">
        <div className="blog-grid">
          {filteredPosts.map((post) => (
           <Link to={post.linkpath} className="blog-link"> <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-meta">
                <span>{post.category}</span> • <span>{post.readTime}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
            </div>
                          </Link>
          ))}
        </div>
      </section>

      <NewCon />
      <FaqSection faqs={blogSoftwarePros}/>
    </>
  );
};

export default Blog;
