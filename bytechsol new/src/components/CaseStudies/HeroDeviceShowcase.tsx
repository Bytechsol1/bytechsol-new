import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import homepage from "../../assets/images/voxiq-hover.png";
import analytics from "../../assets/images/voxiq-analytics.png";
import "./HeroDeviceShowcase.css";

function BrowserBar({ children }: { children: string }) {
  return <div className="vs-browser-bar"><span aria-hidden="true"><i /><i /><i /></span><span>{children}</span></div>;
}

export default function HeroDeviceShowcase() {
  const stage = useRef<HTMLDivElement>(null);
  const visible = useInView(stage, { margin: "150px", once: true });
  const reducedMotion = useReducedMotion();
  return (
    <div className="vs-device-showcase" ref={stage} aria-label="Voxxiq desktop and mobile presentation">
      <div className="vs-laptop vs-laptop--main">
        <div className="vs-laptop-screen">
          <BrowserBar>Voxxiq / Sales communication</BrowserBar>
          <img className="vs-desktop-image" src={homepage} alt="Voxxiq sales communication website" width={1024} height={493} decoding="async" />
        </div>
        <div className="vs-laptop-base" aria-hidden="true" />
      </div>
      <div className="vs-mobile vs-mobile--preview">
        <div className="vs-mobile-notch" aria-hidden="true" />
        <video
          src={visible && !reducedMotion ? "/media/voxxiq-website-mobile.mp4" : undefined}
          poster="/media/voxxiq-website-mobile-poster.png"
          aria-label="Voxxiq website mobile video preview"
          autoPlay={!reducedMotion} muted loop playsInline preload="none"
          disablePictureInPicture disableRemotePlayback width={780} height={1400}
        />
      </div>
      <div className="vs-laptop vs-laptop--analytics">
        <div className="vs-laptop-screen">
          <BrowserBar>Voxxiq / Analytics</BrowserBar>
          <img className="vs-desktop-image" src={analytics} alt="Voxxiq analytics website presentation" width={1349} height={542} decoding="async" />
        </div>
        <div className="vs-laptop-base" aria-hidden="true" />
      </div>
      <div className="vs-mobile vs-mobile--industry">
        <div className="vs-mobile-notch" aria-hidden="true" />
        <img
          src="/media/voxxiq-case-study-industry-sharp.png"
          alt="Mobile preview of Voxxiq industry case study content"
          width={640}
          height={1148}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

