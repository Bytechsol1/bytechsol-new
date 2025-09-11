import type { NavbarProps } from "../shareable/Navbar";
import Logo from "../assets/images/logo.svg";
import LogoText from "../assets/images/Logotext.svg";
import LogoWhite from "../assets/images/lg-white.png";
import LogoTextWhite from "../assets/images/lg-white-text.png";
import w1 from "../assets/images/wecom.jpg"
import wa from "../assets/images/webapp.svg"

export type NavTheme = NavbarProps & {
  buttonSchemeClass?: string;
};

export const NAV_THEMES: Record<string, NavTheme> & { default: NavTheme } = {
  "/": {
    logoIconSrc: Logo,
    logoTextSrc: LogoText,
    navClassName: "bg-transparent",
    variant: "dark",
    linkClassName: "text-black",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--brand",
    sticky: true,
  },

  "/about": {
    logoIconSrc: Logo,
    logoTextSrc: LogoText,
    navClassName: "bg-white",
    variant: "light",
    linkClassName: "text-dark",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--brand",
    sticky: true,
  },

  "/price": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#2B3990",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--price",
    sticky: true,
  },

  "/website-design-and-development": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#000",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },

  "/blog": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#000",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--blog",
    sticky: true,
  },

  "/contact": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#289dd8",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--brand",
    sticky: true,
  },

  "/seoservice": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#004E92",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--navy",
    sticky: true,
  },

  "/brandbuilding": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#002F7A",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--navy",
    sticky: true,
  },

  "/erpservice": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--saas",
    sticky: true,
  },

  "/odoo-services": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#203A43",
    // variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--custom",
    sticky: true,
  },
 "/webecom": {
  logoIconSrc: Logo,
  logoTextSrc: LogoText,
  navClassName: "",
  backgroundImage: w1, // ✅ imported image
  linkClassName: "text-black",
  buttonClassName: "",
  buttonSchemeClass: "btn-scheme--custom",
  sticky: true,
},
 "/webapp": {
  logoIconSrc: LogoWhite,
  logoTextSrc: LogoTextWhite,
  navClassName: "",
  backgroundColor: "#289DD8",
  backgroundImage: wa, // ✅ imported image
  linkClassName: "text-white",
  buttonClassName: "",
  buttonSchemeClass: "btn-scheme--custom",
  sticky: true,
},
 "/aiml": {
  logoIconSrc: LogoWhite,
  logoTextSrc: LogoTextWhite,
  navClassName: "",
  backgroundColor: "#575E7C",
  linkClassName: "text-white",
  buttonClassName: "",
  buttonSchemeClass: "btn-scheme--custom",
  sticky: true,
},

 "/customweb": {
  logoIconSrc: LogoWhite,
  logoTextSrc: LogoTextWhite,
  navClassName: "",
  backgroundColor: "#2B3990",
  linkClassName: "text-white",
  buttonClassName: "",
  buttonSchemeClass: "btn-scheme--custom",
  sticky: true,
},

  default: {
    logoIconSrc: Logo,
    logoTextSrc: LogoText,
    navClassName: "bg-white",
    variant: "light",
    linkClassName: "text-dark",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--brand",
    sticky: true,
  },
};

export function getNavThemeForPath(pathname: string): NavTheme {
  const key = (pathname || "/").replace(/\/+$/, "").toLowerCase() || "/";
  return NAV_THEMES[key] ?? NAV_THEMES.default;
}
