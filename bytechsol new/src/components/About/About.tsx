import React from "react";
import big from "../../assets/images/bigimg.jpg";
import "../../assets/components-css/About.css";
import co from "../../assets/images/comp.png";
import bk from "../../assets/images/blacky.png";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import ContactSection from "../../shareable/contact";
import TrustedBySection from "../../shareable/trust500";

const accordionData = [
  {
    id: "1",
    title: "UI UX Design",
    content:
      "We create intuitive and beautiful user experiences tailored for your product goals.",
  },
  {
    id: "2",
    title: "Branding",
    content:
      "We help you build a strong brand identity that resonates with your audience.",
  },
  {
    id: "3",
    title: "Marketing",
    content:
      "We craft conversion-driven marketing strategies to grow your product reach.",
  },
  {
    id: "4",
    title: "Website",
    content:
      "From landing pages to full platforms, we design and develop high-converting websites.",
  },
];


const About: React.FC = () => {
  return (
    <>
      {/* 1st Section */}
      <section className="Designed-section">
        <div className="container1">
          <h1 className="head">
            Designed for billions & we are the team{" "}
            <span>future unicorns.</span>
          </h1>
          <p>
            We’re not just a design agency. We’re the product-thinking team
            behind 100M+ <br /> users, $2B+ funding, & 250+ VC-backed success
            stories.
          </p>
        </div>
        <img className="big" src={big} alt="Big Visual" />
      </section>
<TrustedBySection/>
      {/* 2rd Section */}
   <section className="metrics-section">
  <p className="metrics-heading">
    Bold design, billion-dollar proof. We measure <br />
    impact, not just ship pixels.
  </p>

  <div className="metrics-grid ">
    <div className="card1 ">
      <p className="metric-number1">01/</p>
      <h2 className="metric-value1">$2B+</h2>
      <p className="metric-description1">
        raised through <br /> UX-led launches
      </p>
    </div>

    <div className="car2">
      <p className="metric-number2">02/</p>
      <h2 className="metric-value2">400%</h2>
      <p className="metric-description2">
        uplift in conversions <br /> (avg. 300%)
      </p>
    </div>

    <div className="cam3">
      <p className="metric-number3">03/</p>
      <h2 className="metric-value3">100+M</h2>
      <p className="metric-description3">
        users reached through <br /> our SaaS and AI platforms
      </p>
    </div>

    <div className="css4">
      <p className="metric-number4">04/</p>
      <h2 className="metric-value4">140+</h2>
      <p className="metric-description4">
        Awards recognised by <br /> Awwwards, CSSDA, Behance
      </p>
    </div>

    <div className="csm5">
      <p className="metric-number5">05/</p>
      <h2 className="metric-value5">250+ Testimonials</h2>
      <p className="metric-description5">
        trusted by YC-backed, VC-funded, a16z, Sequoia, <br /> 500+ global
      </p>
    </div>
  </div>
</section>

      {/* 3th Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-content">
            <h1 className="vision-heading">
              From one laptop to 22+ countries, we help <br />
              bold visions become intuitive brands.
            </h1>

            <div className="vision-grid">
              <div className="vision-image">
                <img src={co} alt="Vision Preview" />
              </div>
              <div className="vision-text">
                <p>
                  Wavespace didn’t start in a co-working space or some glossy
                  VC-funded setup. It started in a small bedroom, just one
                  laptop, a noisy fan, and a founder who couldn’t stop thinking
                  about why so many good ideas fail.
                </p>
                <p>
                  So we helped early teams fix broken onboarding, redesign
                  confusing UX, and turn messy ideas into real products. One
                  founder at a time.
                </p>
                <p>
                  But now? Wavespace works with 500+ startups, helps teams
                  launch faster MVPs, improve conversion, and build systems that
                  scale. Our design now powers 100M+ users across 22 countries,
                  from early-stage AI tools to Series B SaaS giants.
                </p>
                <p>
                  But honestly? We still build like it’s day one, fast, honest,
                  human. Behind every screen is someone betting it all on an
                  idea.
                </p>
                <a href="#" className="vision-btn">
                  Shape your vision <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th Section */}
      <section className="why-bytechsol-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src={bk}
                alt="Bytechsol Team"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4 fs-1 fw-bold">Why Bytechsol? We <br />care like co-founders.</h2>
              <p className="mb-4 fs-6">
                Not another agency. We are your team that gives a damn. <br />Because we treat your product like it's ours.
              </p>

              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2
                      className="accordion-header"
                      id={`flush-heading-${index}`}
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse-${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse-${index}`}
                      >
                        <span className="service-index2">0{index + 1}</span>
                        &nbsp;
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse-${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading-${index}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial/>
      {/* 5th Section */}
     <section className="belief-behind">
  <div className="container">
    <div className="row align-items-start">
      <div className="col-lg-6 mb-4">
        <h1 className="belief-heading">
          The beliefs behind <br /> the builds
        </h1>
      </div>
      <div className="col-lg-6">
        <div className="belief-item">
          <h2>01 Empathy</h2>
          <p>
            Before we create a design, put pen to paper, or <br /> build, we listen.Because the goods always come <br /> from understanding. We put ourselves in your users’ <br /> shoes so your product enters their lives smoothly.
          </p>
        </div>

        <div className="belief-item">
          <h2>02 Clarity</h2>
          <p>
            We don’t design to sound smart. We design so your <br /> users feel smart.Every word, flow, and screen is crafted <br />to remove friction, not add flash.
          </p>
        </div>

        <div className="belief-item">
          <h2>03 Momentum</h2>
          <p>
            Start small. Learn fast. Move with focus. We don’t believe in <br /> perfection. We believe in progress. That is why we ship, test, <br /> and are constantly North Star aligned.
          </p>
        </div>

        <div className="belief-item">
          <h2>04 Outcomes</h2>
          <p>
            A good-looking app that doesn’t convert is just <br /> decoration. We obsess over real results, <br /> conversions, activations, and retention.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
   <FaqSection/>
   <ContactSection/>
    </>
  );
};

export default About;
