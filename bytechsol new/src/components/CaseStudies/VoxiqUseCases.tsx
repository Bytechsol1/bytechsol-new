import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  PhoneCall,
  Users,
  Building2,
  Store,
  House,
  Shield,
  Layers,
  Wallet,
  Network,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { industryUseCases } from "../../data/voxiqIndustries";
import type { IndustryUseCase } from "../../data/voxiqIndustries";
import IndustryMedia from "./IndustryMedia";
import { VoxiqPricing } from "./VoxiqDocumentSections";
import Reveal from "./CaseStudyReveal";
import { ProjectOverview, ProjectOutcomes } from "./VoxiqNarrative";
import { VoxiqPlatformModules, VoxiqSetup } from "./VoxiqDocumentSections";
import { VoxiqQuestions } from "./VoxiqClosingSections";
import HeroDeviceShowcase from "./HeroDeviceShowcase";
import ComparisonHover from "./ComparisonHover";
import { voxiqPremiumContent } from "../../data/voxiqPremiumContent";
import "./VoxiqPremium.css";
import "./VoxiqAgency.css";
import "./VoxiqUseCases.css";
import "./IndustryMedia.css";
import "./VoxiqNarrative.css";
import "./VoxiqEditorial.css";
import "./VoxiqReferenceLayout.css";

const website = "https://voxxiq.com/";
const canonical = "https://bytechsol.com/case-studies";
const icons = [Users, PhoneCall, Store, Building2, House, Shield, Layers, Wallet, Network];

function Action({
  children,
  to,
  secondary = false,
}: {
  children: ReactNode;
  to: string;
  secondary?: boolean;
}) {
  const className = "vx-action vx-action--" + (secondary ? "secondary" : "primary");
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </>
  );
  return to.startsWith("https://") ? (
    <a className={className} href={to} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link className={className} to={to} preventScrollReset>
      {content}
    </Link>
  );
}

function PageMetadata() {
  const title = "Voxxiq Case Study — Sales Communication Platform | BytechSol";
  const description =
    "Explore Voxxiq’s connected sales communication story, product visuals, challenges, and nine illustrative industry workflows in this BytechSol case study.";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Portfolio",
              item: "https://bytechsol.com/portfolio/",
            },
            { "@type": "ListItem", position: 2, name: "Voxxiq Case Study", item: canonical },
          ],
        })}
      </script>
    </Helmet>
  );
}

function useCaseStudyAnchors() {
  const { hash, pathname, key: locationKey } = useLocation();
  const reduced = useReducedMotion();
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const measure = () => {
      const navbar = header?.querySelector(".navbar-custom");
      const headerPosition = header ? getComputedStyle(header).position : "";
      const navbarPosition = navbar ? getComputedStyle(navbar).position : "";
      const staysVisible =
        headerPosition === "fixed" || headerPosition === "sticky" || navbarPosition === "fixed";
      setHeaderOffset(
        staysVisible && header ? Math.ceil(header.getBoundingClientRect().height) : 0,
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    measure();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    const scrollToAnchor = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (cancelled) return;
        const target = document.getElementById(hash.slice(1));
        if (target)
          target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        else if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
      });
    };
    void document.fonts.ready.then(scrollToAnchor);
    if (document.readyState !== "complete")
      window.addEventListener("load", scrollToAnchor, { once: true });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("load", scrollToAnchor);
    };
  }, [hash, pathname, locationKey, reduced]);

  return headerOffset;
}

function IndustrySection({ industry, index }: { industry: IndustryUseCase; index: number }) {
  return (
    <section
      className={
        "vu-case vr-story vr-story--" +
        (index % 2 ? "reverse " : "forward ") +
        "vu-case--" +
        industry.slug
      }
      id={industry.slug}
      aria-labelledby={"heading-" + industry.slug}
    >
      <div className="vx-container">
        <div className="vu-case-layout">
          <Reveal className="vu-case-story">
            <span className="vr-story-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 id={"heading-" + industry.slug}>{industry.name}</h2>
            <div>
              <p>{industry.solution}</p>
            </div>
            <details className="vr-story-challenge">
              <summary>
                The challenge <ChevronDown size={16} aria-hidden="true" />
              </summary>
              <p>{industry.challenge}</p>
            </details>
          </Reveal>
          <Reveal className="vu-case-visual">
            <IndustryMedia slug={industry.slug} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function VoxiqUseCases() {
  const headerOffset = useCaseStudyAnchors();
  const style = {
    "--vu-header-offset": headerOffset + "px",
  } as CSSProperties;
  return (
    <main className="vx-case vx-agency vu-page vu-single vu-flagship" style={style}>
      <PageMetadata />
      <section className="vu-hero">
        <div className="vx-container">
          <nav className="vu-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/portfolio/">Back to Portfolio</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span aria-current="page">Voxxiq Case Study</span>
          </nav>
          <div className="vu-hero-grid">
            <Reveal className="vu-hero-copy">
              <div className="vn-opening-title">
                <h1>
                  Voxxiq <em>Case Study.</em>
                </h1>
              </div>
              <div className="vn-opening-description">
                <p>{voxiqPremiumContent.hero.description}</p>
                <div className="vu-actions">
                  <Action to="/case-studies#project-overview">Explore the case study</Action>
                  <Action to={website} secondary>
                    Visit Voxxiq
                  </Action>
                </div>
                <dl className="vn-hero-meta">
                  <div>
                    <dt>Industry</dt>
                    <dd>Sales Technology</dd>
                  </div>
                  <div>
                    <dt>Platform</dt>
                    <dd>Browser-based SaaS</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal className="vu-hero-artwork">
              <HeroDeviceShowcase />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="vu-collection-intro-section" id="industries">
        <div className="vx-container">
          <Reveal className="vu-collection-intro">
            <div>
              <h2>Industry Case Studies</h2>
            </div>
            <div>
              <p className="vu-accuracy-note">
                These scenarios illustrate potential workflows. Modules depend on the current plan,
                region, integrations, and account setup. Confirm your required capabilities with
                Voxxiq.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="vu-industry-stories">
        {industryUseCases.map((industry, index) => (
          <IndustrySection key={industry.slug} industry={industry} index={index} />
        ))}
      </div>

      <ProjectOverview />
      <VoxiqPlatformModules />
      <VoxiqSetup />

      <section className="vu-comparison">
        <div className="vx-container">
          <Reveal className="vu-comparison-heading">
            <div>
              <h2>Industry fit at a glance</h2>
            </div>
          </Reveal>
          <ComparisonHover>
            <table className="vu-comparison-table">
              <thead>
                <tr>
                  <th scope="col">Industry</th>
                  <th scope="col">Main goal</th>
                  <th scope="col">Key Voxxiq capability</th>
                </tr>
              </thead>
              <tbody>
                {industryUseCases.map((industry, index) => {
                  const Icon = icons[index];
                  return (
                    <tr key={industry.slug}>
                      <th scope="row">
                        <Link to={"/case-studies#" + industry.slug} preventScrollReset>
                          <Icon size={18} aria-hidden="true" />
                          {industry.name}
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </Link>
                      </th>
                      <td>{industry.goal}</td>
                      <td>{industry.capability}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ComparisonHover>
        </div>
      </section>

      <VoxiqPricing />
      <ProjectOutcomes />
      <VoxiqQuestions />
    </main>
  );
}
