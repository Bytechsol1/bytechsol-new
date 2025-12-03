// types/react-router-hash-link.d.ts

declare module "react-router-hash-link" {
  import * as React from "react";
  import { NavLinkProps } from "react-router-dom";

  export interface HashLinkProps extends NavLinkProps {
    /**
     * Enable smooth scrolling
     */
    smooth?: boolean;

    /**
     * Custom scroll behavior
     */
    scroll?: (el: HTMLElement) => void;

    /**
     * Optional class name
     */
    className?: string;

    /**
     * Optional children
     */
    children?: React.ReactNode;
  }

  export const HashLink: React.FC<HashLinkProps>;
  export const NavHashLink: React.FC<HashLinkProps>;

  export default HashLink;
}
