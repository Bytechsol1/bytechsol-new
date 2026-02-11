import type { NavbarProps } from "../shareable/Navbar";
import Logo from "../assets/images/logo.svg";
import LogoText from "../assets/images/Logotext.svg";
import LogoWhite from "../assets/images/lg-white.png";
import LogoTextWhite from "../assets/images/lg-white-text.png";


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

  "/about/": {
    logoIconSrc: Logo,
    logoTextSrc: LogoText,
    navClassName: "",
    backgroundColor: "#fff",
    variant: "light",
    linkClassName: "text-black",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--brand",
    sticky: true,
  },

  "/services/": {
    logoIconSrc: Logo,
    logoTextSrc: LogoText,
    navClassName: "",
    // backgroundColor: "#2B3990",
    variant: "dark",
    linkClassName: "text-black",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--price",
    sticky: true,
  },

  "/services/website-design-and-development/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },

  "/blog/": {
    logoIconSrc: Logo,
    logoTextSrc: LogoText,
    navClassName: "",
    backgroundColor: "",
    variant: "dark",
    linkClassName: "text-black",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--blog",
    sticky: true,
  },

  "/contact/": {
    logoIconSrc: Logo,
    logoTextSrc: LogoText,
    navClassName: "",
    backgroundColor: "white",
    variant: "dark",
    linkClassName: "text-black",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--contact",
    sticky: true,
  },

  "/services/seo-service/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },

  "/services/brand-building/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },

  "/services/erp-service/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },

  "/services/odoo-services/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },
  "/services/web-ecom": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },
  "/services/web-app/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },
  "/services/ai-ml/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },

  "/services/custom-web/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
    sticky: true,
  },
  "/services/e-commerce-solutions/": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#0F0C29",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--mobile",
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
  const rawPath = (pathname || "/").toLowerCase();

  // 1. Try exact match
  if (NAV_THEMES[rawPath]) return NAV_THEMES[rawPath];

  // 2. Try with trailing slash
  if (!rawPath.endsWith("/") && NAV_THEMES[rawPath + "/"]) {
    return NAV_THEMES[rawPath + "/"];
  }

  // 3. Try without trailing slash
  if (rawPath.endsWith("/") && rawPath.length > 1) {
    const noSlash = rawPath.slice(0, -1);
    if (NAV_THEMES[noSlash]) return NAV_THEMES[noSlash];
  }

  return NAV_THEMES.default;
}
