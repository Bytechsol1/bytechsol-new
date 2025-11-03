import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import Navbar from "./shareable/Navbar";
import Footer from "./shareable/Footer";
import Home from "./components/home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Webecom from "./components/Services/subservice/webecom";
import Careers from "./components/Services/subservice/careers";
import ContactUs from "./components/ContactUs";
import FullStackExpertise from "./components/Services/subservice/FullStackExpertise";
import ProductDesign from "./components/Services/subservice/ProductDesign";
import SaasDesign from "./components/Services/subservice/Saas";
import OdooServices from "./components/Services/subservice/OdooServices";
import Blog from "./components/About/Blog";
import CustomWeb from "./components/Services/subservice/CustomWeb";
import { getNavThemeForPath } from "./themes/navThemes";
import WebApp from "./components/Services/subservice/WebApp";
import Aiml from "./components/Services/subservice/Aiml";
import Development from "./components/Services/subservice/Development";
import NotFound from "./components/404";
import Blogdetail from "./components/About/BlogDetail";
import Blogdetail2 from "./components/About/BlogDetail2";
import Blogdetail3 from "./components/About/BlogDetail3";
import Blogdetail4 from "./components/About/BlogDetail4";

function AppShell() {
  const location = useLocation();
  const theme = getNavThemeForPath(location.pathname);

  return (
    <>
      <Navbar
        logoIconSrc={theme.logoIconSrc}
        logoTextSrc={theme.logoTextSrc}
        backgroundColor={theme.backgroundColor}
        variant={theme.variant}
        navClassName={theme.navClassName}
        linkClassName={theme.linkClassName}
        buttonClassName={theme.buttonClassName}
        buttonSchemeClass={theme.buttonSchemeClass}
        sticky={theme.sticky}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/website-design-and-development"
            element={<Development />}
          />
          <Route path="/services/E-Commerce-solutions" element={<Webecom />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route
            path="/services/seo-service"
            element={<FullStackExpertise />}
          />
          <Route path="/services/brand-building" element={<ProductDesign />} />
          <Route path="/services/ERP-service" element={<SaasDesign />} />
          <Route path="/services/odoo-services" element={<OdooServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/custom-web" element={<CustomWeb />} />
          <Route path="/services/web-app" element={<WebApp />} />
          <Route path="/services/Ai-Ml" element={<Aiml />} />
          <Route path="/blog/the-pros-and-cons-of-waterfall-software-development" element={<Blogdetail />} />
          <Route path="/blog/advanced-ai-systems-2025" element={<Blogdetail2/>} />
          <Route path="/blog/custom-web-solutions-digital-growth" element={<Blogdetail3/>} />
          <Route path="/blog/ar-zone-app-features-benefits-download-android" element={<Blogdetail4/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
