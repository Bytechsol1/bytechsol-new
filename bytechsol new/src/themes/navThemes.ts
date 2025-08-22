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
    linkClassName: "text-white",
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
    buttonSchemeClass: "btn-scheme--navy",
    sticky: true,
  },

  "/mobile": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#000",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--dark",
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
    buttonSchemeClass: "btn-scheme--dark",
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

  "/fullstackexpertise": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#00053F",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--navy",
    sticky: true,
  },

  "/productdesign": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#2B3990",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--navy",
    sticky: true,
  },

  "/SaasDesign": {
    logoIconSrc: Logo,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#000",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--saas",
    sticky: true,
  },

  "/customsoftwaredev": {
    logoIconSrc: LogoWhite,
    logoTextSrc: LogoTextWhite,
    navClassName: "",
    backgroundColor: "#000",
    variant: "dark",
    linkClassName: "text-white",
    buttonClassName: "",
    buttonSchemeClass: "btn-scheme--dark",
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
