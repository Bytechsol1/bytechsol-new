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
import CustomSoftwareDev from "./components/Services/subservice/CustomSoftwareDev";
import Blog from "./components/About/Blog";
import { getNavThemeForPath } from "./themes/navThemes";

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
        <Route path="/CustomSoftwareDev" element={<CustomSoftwareDev />} />
        <Route path="/Blog" element={<Blog />} />
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
