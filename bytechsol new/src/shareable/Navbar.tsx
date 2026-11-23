import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, BarChart, BrainCircuit, Monitor, PenTool, AppWindow, Search, Layers, ShoppingCart, Code, ChevronDown, Menu, X } from "lucide-react";
import "../assets/components-css/Navbar.css";
import "../App.css";

export type NavbarProps = {
  logoIconSrc: string;
  logoTextSrc?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  variant?: "light" | "dark";
  navClassName?: string;
  linkClassName?: string;
  buttonClassName?: string;
  buttonSchemeClass?: string;
  sticky?: boolean;
};

const services = [
  { to: "/services/website-design-and-development/", label: "Web Design & Development", Icon: Monitor },
  { to: "/services/web-app/", label: "Web Applications", Icon: AppWindow },
  { to: "/services/custom-web/", label: "Custom Web Solutions", Icon: Code },
  { to: "/services/odoo-services/", label: "Odoo Services", Icon: BarChart },
  { to: "/services/erp-service/", label: "ERP Services", Icon: Layers },
  { to: "/services/e-commerce-solutions/", label: "E-Commerce Solutions", Icon: ShoppingCart },
  { to: "/services/ai-ml/", label: "AI & ML Solutions", Icon: BrainCircuit },
  { to: "/services/seo-service/", label: "SEO Services", Icon: Search },
  { to: "/services/brand-building/", label: "Brand Building", Icon: PenTool },
];
const links = [["/about/", "About"], ["/blog/", "Blog"], ["/portfolio/", "Portfolio"], ["/careers/", "Careers"]];

const Navbar: FC<NavbarProps> = ({
  logoIconSrc, logoTextSrc, backgroundColor, backgroundImage, variant = "light",
  navClassName = "", linkClassName = "text-dark", buttonClassName = "", buttonSchemeClass = "", sticky = true,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const hoverCloseTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 992px)");
    const close = () => { setMenuOpen(false); setServicesOpen(false); };
    desktop.addEventListener("change", close);
    return () => {
      desktop.removeEventListener("change", close);
      if (hoverCloseTimer.current !== null) window.clearTimeout(hoverCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (servicesOpen) {
        setServicesOpen(false);
        servicesButton.current?.focus();
      } else {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, servicesOpen]);

  const closeMenus = () => {
    if (hoverCloseTimer.current !== null) window.clearTimeout(hoverCloseTimer.current);
    setMenuOpen(false);
    setServicesOpen(false);
  };
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
    : backgroundColor ? { backgroundColor } : {};

  return (
    <header ref={header} className={`site-header${sticky ? " site-header--sticky" : ""}`}>
      <nav className={`site-navbar ${navClassName}`} style={backgroundStyle} aria-label="Main navigation" data-variant={variant}
        data-menu-theme={/text-(white|light)/.test(linkClassName) ? "dark" : "light"}>
        <div className="site-navbar__inner">
          <Link className="site-navbar__brand" to="/" aria-label="BytechSol home" onClick={closeMenus}>
            <img src={logoIconSrc} alt="" className="site-navbar__logo-icon" />
            {logoTextSrc && <img src={logoTextSrc} alt="BytechSol" className="site-navbar__logo-text" />}
          </Link>
          <button ref={menuButton} className="site-navbar__toggle" type="button" aria-controls="site-navigation"
            aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => { setMenuOpen(!menuOpen); setServicesOpen(false); }}>
            {menuOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
          </button>
          <div id="site-navigation" className="site-navbar__menu" data-open={menuOpen}>
            <ul className="site-navbar__links">
              <li className="site-navbar__services"
                onMouseEnter={() => {
                  if (hoverCloseTimer.current !== null) window.clearTimeout(hoverCloseTimer.current);
                  if (window.matchMedia("(min-width: 992px) and (hover: hover)").matches) setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  if (window.matchMedia("(min-width: 992px) and (hover: hover)").matches) {
                    hoverCloseTimer.current = window.setTimeout(() => setServicesOpen(false), 200);
                  }
                }}
                onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false); }}>
                <div className="site-navbar__services-row">
                  <Link to="/services/" className={`site-navbar__link ${linkClassName}`} onClick={closeMenus}>Services</Link>
                  <button ref={servicesButton} className="site-navbar__services-toggle" type="button" aria-label="Browse services"
                    aria-controls="site-services" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>
                    <ChevronDown size={17} aria-hidden="true" />
                  </button>
                </div>
                <div id="site-services" className="site-navbar__services-menu" data-open={servicesOpen}>
                  {services.map(({ to, label, Icon }) => <Link key={to} to={to} className="site-navbar__service" onClick={closeMenus}>
                    <span className="site-navbar__service-icon"><Icon size={20} aria-hidden="true" /></span><span>{label}</span>
                  </Link>)}
                </div>
              </li>
              {links.map(([to, label]) => <li key={to}><Link to={to} className={`site-navbar__link ${linkClassName}`} onClick={closeMenus}>{label}</Link></li>)}
            </ul>
            <Link to="/contact/" className={`contact-btn site-navbar__contact ${buttonClassName} ${buttonSchemeClass}`} onClick={closeMenus}>
              <span className="btn-label">Contact us <ArrowUpRight size={19} aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
