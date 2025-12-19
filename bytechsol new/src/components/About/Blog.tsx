/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "../../assets/components-css/Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../../apiServices/wpApi";
import FaqSection from "../../shareable/faq";
import NewCon from "../../shareable/NewCon";
import { blogSoftwarePros } from "../../shareable/faqData";
import bgl from "../../assets/images/blogbgl.png";
import bgr from "../../assets/images/blogbgr.png";
const services = [
  "Web Development", "App Development", "UI/UX Design", "SEO",
  "Digital Marketing", "Branding", "E-Commerce", "Cloud Solutions", "QA & Testing"
];
const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
        setFilteredPosts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);
  const searchBlog = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
  };
  if (loading) return <p className="text-center my-5">Loading blogs...</p>;
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
      {/* Blog Header */}
      <section className="blog-section">
        <div className="blog-bg-left d-none d-lg-block" style={{ backgroundImage: `url(${bgl})` }}></div>
        <div className="blog-bg-right" style={{ backgroundImage: `url(${bgr})` }}></div>
        <h1 className="gradient-text2 text-start text-md-center ms-4">Blogs</h1>
        <h6 className="gradient-text1 text-start text-md-center ms-4">Read. Grow. Automate.</h6>
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
      {/* Services slider */}
      <div className="services-container d-none d-md-block">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          speed={1000}
          breakpoints={{ 768: { slidesPerView: 4 }, 1024: { slidesPerView: 5 }, 1400: { slidesPerView: 6 } }}
          className="services-scroll"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-item">{service}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Blog cards grid */}
      <section className="cards-six">
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <Link to={post.linkpath} className="blog-link" key={post.id}>
              <div className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-meta">
                  <span>{post.category}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-date">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <NewCon />
    </>
  );
};
export default Blog;