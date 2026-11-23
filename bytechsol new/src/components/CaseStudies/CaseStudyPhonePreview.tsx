import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { BatteryFull, Signal, Wifi } from "lucide-react";
import "./CaseStudyPhonePreview.css";

export default function CaseStudyPhonePreview() {
  const preview = useRef<HTMLElement>(null);
  const nearViewport = useInView(preview, { margin: "150px", once: true });
  const reducedMotion = useReducedMotion();
  return (
    <figure className="vp-phone-scene" ref={preview}>
      <div className="vp-phone-orbit" aria-hidden="true" />
      <div className="vp-phone-device">
        <div className="vp-phone-status" aria-hidden="true">
          <span>9:41</span>
          <span className="vp-phone-island" />
          <span><Signal size={12} /><Wifi size={12} /><BatteryFull size={16} /></span>
        </div>
        <div className="vp-phone-screen">
          <video
            src={nearViewport && !reducedMotion ? "/media/voxxiq-website-mobile.mp4" : undefined}
            poster="/media/voxxiq-website-mobile-poster.png"
            aria-label="Video scrolling through the Voxxiq website"
            width={780}
            height={1400}
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            preload="none"
            disablePictureInPicture
            disableRemotePlayback
          />
        </div>
        <div className="vp-phone-home" aria-hidden="true"><span /></div>
      </div>
    </figure>
  );
}

