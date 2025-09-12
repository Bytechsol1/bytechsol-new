import React, { useState } from "react";
import "../../../assets/components-css/webecom.css";
import { FiChevronDown } from "react-icons/fi";
// import w1 from "../../../assets/images/wecom.jpg";
import TrustedBySection from "../../../shareable/trust500";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import es from "../../../assets/images/estore.png"
import sp from "../../../assets/images/shopify.png"
import wo from "../../../assets/images/woocom.png"
import py from "../../../assets/images/payment.png"
import mk from "../../../assets/images/marketplace.png"


const accordionItemswebdev = [
  { title: "Platform selection and customization", description: "We select the appropriate e-commerce platform, either Shopify, WooCommerce, or Magento, and customize it to your brand. The theme customization, versatile layouts, and key functionality integration will help your store to express your identity and, at the same time, enable further future expansion as your business expands." },
  { title: " Product catalog and inventory setup", description: " We design a properly structured and pleasing product catalog that is easy to navigate. Whether it is uploading product details and photos or managing product categories and stock levels, and SKUs, we are meticulous and easy to navigate, leaving customers with fast search products and you with a store that is helped to manage with ease." },
  { title: " Secure payment gateway integration", description: "We combine reputable payment gateways such as Stripe, PayPal, and credit card processors to ensure that transactions are fast and secure. SSL certification and compliance checks will make customers comfortable when shopping with your store and secure their sensitive financial data at all stages." },
  { title: " Shopping cart and checkout optimization", description: "We streamline your checkout process and shopping cart to minimise drop-offs and maximize conversions. A frictionless purchase journey has also been achieved, which generates higher sales and improves the overall shopping experience of the customer." },
  { title: "Mobile-responsive store design", description: "We design so that your e-commerce shop operates on all devices, and most importantly, mobile. The pages of products, carts, and checkouts are best viewed on a smaller screen and are quick and easy to navigate. This will ensure good performance that will keep the mobile shoppers interested and will promote repeat buying." },
];

const accordionItemssoft = [
  { title: " Custom Theme Design & Branding", description: " Our Shopify themes are conversion-oriented and attractive to the eye, and they embody your brand image. Customization of layout and color scheme, typography to the details, so that your customers have a unique shopping experience that appeals to your audience and makes your store attractive in general." },
  { title: "Product Catalog Setup", description: "  Your product catalog is organized and uploaded by our team with high-quality images, detailed descriptions, and categories. Your products are showcased on the front line, and it is easy to navigate through the stores as we maximise visibility and increase the likelihood of sales conversion." },
  { title: "Payment Gateway Integration", description: "  We set up safe and dependable payment gateways, such as PayPal, Stripe, and our local ones. This guarantees that your customers can have an easy checkout experience, allowing them to shop with confidence and decreasing cart abandonment rates on your Shopify store." },
  { title: "Mobile Responsiveness", description: "Most online shoppers shop with their mobile phones, and thus, we build Shopify stores that are entirely responsive. This ensures a smooth shopping process on smartphones, tablets, and desktops, and you can get more sales on each device." },
  { title: "Performance Optimization", description: "  We optimize your Shopify shop to make it fast, secure, and user-friendly. Faster page loading to streamlined checkout procedures; we aim to provide a stress-free shopping experience that spurs greater interaction and customer satisfaction." },
];

const accordionItemspwa = [
  { title: " Custom Theme Development", description: "We create and develop custom WooCommerce themes to fit your brand image. Our approach to modern design, usability, and conversion optimization will make your storefront engaging and will help you build trust in your online business." },
  { title: "Product Management & Setup", description: " Our team manages uploads of products, product categories, product attributes, and product descriptions so that there is easy navigation. We make sure that your product catalog is easy to understand, searchable, and SEO, enabling potential customers to locate your products with ease and enhancing the overall sales potential." },
  { title: "Secure Payment Gateway Integration", description: "We combine safe and sound payment gateways such as PayPal, Stripe, and local. Frictionless checkout means that your customers will be able to shop conveniently and safely, which will decrease cart abandonment and boost your WooCommerce shop revenue." },
  { title: " Mobile-Friendly Store Design", description: " WooCommerce stores are fully optimized to be mobile-friendly. This is so that your customers can have a satisfying, expedited, and interactive shopping experience on smartphones, tablets, and desktops- enabling you to capture sales opportunities on any device." },
  { title: "Store Performance & Security Optimization", description: " We can ensure that your WooCommerce store runs smoothly and securely, whether it is by ensuring faster page loads or rolling out more sophisticated security. Our optimization tactics will provide efficient service, keeping your information safe and ensuring customers a safe and reliable shopping experience." },
];

const accordionItemsaas = [
  { title: "  Multiple Gateway Support", description: "Our system combines several payment gateways, such as international and domestic service providers, which provide your customers with the option of how they pay. From credit/debit cards to digital wallets, we guarantee a seamless payment process, decreasing cart abandonment, and increasing customer satisfaction." },
  { title: " Secure Transactions", description: " Security is our priority. To prevent sensitive data from being compromised, we have put in place SSL encryption, PCI-DSS up to date, and a fraud detection tool. This makes all transactions on your site safe, dependable, and trusted by all customers all over the world." },
  { title: "One-Click Checkout Setup", description: "We enable one-click options in the checkout to enhance the user experience. This lowers the friction to the buying process because it makes buying easy and quicker, which aids in raising the number of repeat purchases and customer loyalty." },
  { title: "Local Currency & Tax Support", description: "We allow payment in various currencies, and we set automated tax rates. This will guarantee that your online store will be international to serve international clients, as well as offering the right pricing and being in line with the local financial rules." },
  { title: "Ongoing Monitoring & Support", description: "We offer round-the-clock monitoring, updating, and technical services for payment gateways. Whether it is the troubleshooting of failed transactions or the addition of new functionality, we will keep your payment system stable and business-friendly." },
];

const accordionItemsenter = [
  { title: " Multi-Vendor Functionality", description: " We build powerful multi-vendor applications in which vendors can create and manage their storefronts freely, add their goods, and monitor sales. This designation provides an easy management of the vendors and provides the customers with a variety of product options within one platform." },
  { title: "Secure & Scalable Architecture", description: "Our solutions are based on a secure and scalable architecture that can support high traffic, multiple vendors, and large product catalogs. This guarantees your marketplace to be efficient since your business expands without having to lose speed or security." },
  { title: "Vendor & Customer Dashboards", description: "We develop visually friendly boards for the vendors and customers. Vendors are able to handle inventory, monitor orders, and analyze sales, and customers can navigate with ease, check out, and monitor orders. This produces a harmonious environment on both sides." },
  { title: "Advanced Search & Filtering", description: "We incorporate advanced search and filtering capabilities to enhance the shopping experience. Customers get fast access to products in terms of category, price, brand, and custom filters, which will lower bounce rates and increase sales conversions." },
  { title: "Integrated Payment & Commission System", description: "We use Web-based payment gateways that have automatic commission management. Vendors get paid on time, and you earn commissions without any hassles. This instills transparency, credit, and a hassle-free financial transaction throughout your marketplace." },
];

const Webecom: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    {/* 1st Section */}
        <section className="dg-products-section py-5" style={{ backgroundColor: "#1C3134" }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left content */}
          <div className="col-lg-7">
            <div className="dg-products-content text-start">
              <h1 className="dg-products-heading">
                Next-Level E-Commerce Solutions for Your Digital Store
              </h1>
              <p className="dg-products-description">
                Our e-commerce solutions assist companies in creating scalable,
            secure, and easy-to-use online stores that drive sales. We design
            custom websites, integrate payment gateways, and develop advanced
            shopping carts to expand your online store and boost revenue.
              </p>
              <div className="dg-products-buttons">
                <a href="#contact" className="dg-button dg-button-primary">
                  Start your website project today <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
    
          {/* Right image */}
          {/* <div className="col-lg-5 text-center">
            <div className="dg-products-image">
              <img src={lig} alt="UI/UX Illustration" className="img-fluid" />
            </div>
          </div> */}
    
        </div>
      </div>
    </section>

      <TrustedBySection />

      {/* 1st card */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img src={es} alt="CMS Development" className="webdesign-img1 img-fluid" />
          </div>
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1">E-Commerce Store Setup</h2>
            <p className="webdesign-desc1">
              Our e-commerce shop setup service can assist you in starting up a high-end, scalable, and easy-to-use online shop. We develop complete functional stores, including product catalog design to payment gateway integration, providing you with smooth navigation, blistering performance, and a secure shopping experience that meets your business requirements.
            </p>
            <div className="webdesign-accordion1 mt-4">
              {accordionItemswebdev.map((item, index) => (
                <div
                  className="webdesign-accordion-item1"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header1">
                    <span className="webdesign-accordion-index1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title1">
                      {item.title}
                    </span>
                    <FiChevronDown
                      className={`webdesign-icon1 ${
                        activeIndex === index ? "rotated" : ""
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
               {/* 2nd card------- */}
    <section className="webdesign-section container-fluid py-5">
      <div className="container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading">Shopify Store Setup</h2>
          <p className="webdesign-desc">
          Our Shopify store set-up service helps you in the creation of a professional and user-friendly online shop that is tailored to your business. Whether it is helping you design your custom theme or set up a product catalog, you want it integrated with a payment gateway, or mobile responsiveness, we make sure that your Shopify store is sales-optimised, performance-optimised, and growth-optimised.
          </p>

          <div className="webdesign-accordion mt-4">
            {accordionItemssoft.map((item, index) => (
              <div
                className="webdesign-accordion-item"
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="webdesign-accordion-header">
                  <span className="webdesign-accordion-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="webdesign-accordion-title">{item.title}</span>
                  <FiChevronDown
                    className={`webdesign-icon ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="webdesign-accordion-desc">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0">
          <img
            src={sp}
            alt="Web design preview"
            className="webdesign-img img-fluid"
          />
        </div>
      </div>
      </div>
    </section>

  {/* 3rd card --------------*/}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={wo}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1">WooCommerce Store Setup</h2>
            <p className="webdesign-desc1">
          With our WooCommerce store setup service, you will be in a position to operate a flexible, scalable, and fully custom online store on WordPress. Whether it is developing our own themes, product catalog setup, payment gateway integration, and security optimization, we make sure that your WooCommerce store is machine-tuned, conversion-driven, and growth-oriented.
            </p>

            <div className="webdesign-accordion1 mt-4">
              {accordionItemspwa.map((item, index) => (
                <div
                  className="webdesign-accordion-item1"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header1">
                    <span className="webdesign-accordion-index1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title1">
                      {item.title}
                    </span>
                    <FiChevronDown
                      className={`webdesign-icon1 ${
                        activeIndex === index ? "rotated" : ""
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
        {/* 4th card----- */}
    <section className="webdesign-section container-fluid py-5">
      <div className="container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading">Payment Gateway Integration</h2>
          <p className="webdesign-desc">
          Our payment gateway integration service provides hassle-free, secure, and online transactions to your e-commerce store. We combine reliable payment solutions such as PayPal, Stripe, and domestic gateways, allowing the customer to choose a variety of options and ensuring compliance, fraud prevention, and unproblematic checkout processes that raise conversion and customer confidence.
          </p>

          <div className="webdesign-accordion mt-4">
            {accordionItemsaas.map((item, index) => (
              <div
                className="webdesign-accordion-item"
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="webdesign-accordion-header">
                  <span className="webdesign-accordion-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="webdesign-accordion-title">{item.title}</span>
                  <FiChevronDown
                    className={`webdesign-icon ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="webdesign-accordion-desc">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0">
          <img
            src={py}
            alt="Web design preview"
            className="webdesign-img img-fluid"
          />
        </div>
      </div>
      </div>
    </section>
    {/* 5th card --------------*/}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={mk}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1">Marketplace Development</h2>
            <p className="webdesign-desc1">
          Our marketplace development services assist you in the development of scalable, feature-rich multi-vendor marketplaces such as Amazon, eBay, or Etsy. Our marketplaces are secure and user-friendly, enabling vendors to control products whilst providing customers with efficient search, safe payment, and easy order management mechanisms.
            </p>

            <div className="webdesign-accordion1 mt-4">
              {accordionItemsenter.map((item, index) => (
                <div
                  className="webdesign-accordion-item1"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header1">
                    <span className="webdesign-accordion-index1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title1">
                      {item.title}
                    </span>
                    <FiChevronDown
                      className={`webdesign-icon1 ${
                        activeIndex === index ? "rotated" : ""
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>


      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title">
           Your Growth, Our Priority
          </h2>
          <div className="group7-columns">
            {[...Array(3)].map((_, idx) => (
              <div className="group7-column" key={idx}>
                <img src={icon} alt="Icon" className="group7-icon" />
                <h3 className="group7-heading">
                  {
                    [
                      "Focused on What Matters",
                      "A Team by Your Side",
                      "Quality You Can Rely On",
                    ][idx]
                  }
                </h3>
                <p className="group7-description">
                  {
                    [
                      "We are not a company that just creates websites, but creates solutions to help your business flourish and attract customers to achieve real results.",
                      "Our engineers, designers, and strategists collaborate closely with you. We take care and commitment to everything and do it in-house (we never outsource anything).",
                      "We put our heart into every project, making sure your website is secure, fast, and built to support your success long-term.",
                    ][idx]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
              <Testimonial/>
              <FaqSection/>
              <ContactSection/>
    </>
  );
};

export default Webecom;
