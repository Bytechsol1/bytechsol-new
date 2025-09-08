import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./shareable/Navbar";
import Footer from "./shareable/Footer";
import Home from "./components/home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Mobile from "./components/Services/subservice/mobile";
import Webecom from "./components/Services/subservice/webecom";
import Careers from "./components/Services/subservice/careers";
import ContactUs from "./components/ContactUs";
import FullStackExpertise from "./components/Services/subservice/FullStackExpertise";
import ProductDesign from "./components/Services/subservice/ProductDesign";
import SaasDesign from "./components/Services/subservice/Saas";
import OdooServices from "./components/Services/subservice/OdooServices";
import Blog from "./components/About/Blog";
import CustomWeb from "./components/Services/subservice/Customweb";
import { getNavThemeForPath } from "./themes/navThemes";
import WebApp from "./components/Services/subservice/WebApp";
import Aiml from "./components/Services/subservice/Aiml";

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Services />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/Webecom" element={<Webecom />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/FullStackExpertise" element={<FullStackExpertise />} />
        <Route path="/ProductDesign" element={<ProductDesign />} />
        <Route path="/SaasDesign" element={<SaasDesign />} />
        <Route path="/OdooServices" element={<OdooServices />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/CustomWeb" element={<CustomWeb />} />
        <Route path="/WebApp" element={<WebApp />} />
        <Route path="/Aiml" element={<Aiml />} />

      </Routes>

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
