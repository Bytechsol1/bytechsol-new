import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type IndustryVisual = {
  type: "image" | "video";
  src: string;
  description: string;
  width: number;
  height: number;
  poster?: string;
};

// AI-generated industry illustrations and illustrative Pexels footage.
// SDR: Kampus Production 8632773 and Mikhail Nilov 7735501.
// Enterprise: Vlada Karpovich 7552486 and Ketut Subiyanto 4630108.
// Insurance: Kampus Production 8440338 and 8440642.
// Collections: 7147205 and Tima Miroshnichenko 6700013.
// Source pages follow https://www.pexels.com/video/{id}/ under the Pexels license.
const industryVisuals: Record<string, IndustryVisual> = {
  "sales-teams": {
    type: "image",
    src: "/media/voxxiq-sales-team-clean-v3.webp",
    description: "Sales team in a modern office, with a headset-wearing agent in the foreground; AI-cleaned illustration",
    width: 2089,
    height: 753,
  },
  "sdr-bdr-teams": {
    type: "video",
    src: "/media/voxiq-sdr-meetings.mp4",
    poster: "/media/voxiq-sdr-meetings-poster.jpg",
    description: "Illustrative client video meeting and sales consultation",
    width: 1920,
    height: 1080,
  },
  "small-business": {
    type: "image",
    src: "/media/voxxiq-business-clean-v4.webp",
    description: "Small business professional working on a laptop in an office; AI-cleaned illustration",
    width: 2137,
    height: 736,
  },
  enterprise: {
    type: "video",
    src: "/media/voxxiq-enterprise.mp4",
    poster: "/media/voxxiq-enterprise-poster.jpg",
    description: "Illustrative enterprise teams reviewing reports and coordinating work",
    width: 1280,
    height: 720,
  },
  "real-estate": {
    type: "image",
    src: "/media/voxxiq-property-clean-v4.webp",
    description: "Real estate professional seated at her office desk; AI-cleaned illustration",
    width: 2138,
    height: 736,
  },
  insurance: {
    type: "video",
    src: "/media/voxxiq-insurance.mp4",
    poster: "/media/voxxiq-insurance-poster.jpg",
    description: "Illustrative insurance consultation with clients reviewing documents",
    width: 1280,
    height: 720,
  },
  saas: {
    type: "image",
    src: "/media/voxxiq-saas-clean-v3.webp",
    description: "SaaS team collaborating around laptops in a modern office; AI-cleaned illustration",
    width: 1993,
    height: 789,
  },
  collections: {
    type: "video",
    src: "/media/voxxiq-collections.mp4",
    poster: "/media/voxxiq-collections-poster.jpg",
    description: "Illustrative financial document review followed by a phone conversation",
    width: 1280,
    height: 720,
  },
  "gohighlevel-agencies": {
    type: "image",
    src: "/media/voxxiq-agencies-clean-v3.webp",
    description: "Agency professional working at multiple screens in a modern office; AI-cleaned illustration",
    width: 1920,
    height: 819,
  },
};

function IndustryVideo({ visual }: { visual: IndustryVisual }) {
  const frame = useRef<HTMLElement>(null);
  const nearViewport = useInView(frame, { margin: "200px", once: true });
  const reducedMotion = useReducedMotion();

  return (
    <figure className="vu-sdr-film" ref={frame}>
      <video
        aria-label={visual.description}
        src={nearViewport ? visual.src : undefined}
        poster={visual.poster}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        preload="none"
        width={visual.width}
        height={visual.height}
      >
        <a href={visual.src}>Watch the industry video</a>
      </video>
    </figure>
  );
}

export default function IndustryMedia({ slug }: { slug: string }) {
  const visual = industryVisuals[slug];
  if (!visual) return null;
  if (visual.type === "video") return <IndustryVideo visual={visual} />;

  return (
    <figure className="vu-industry-photo">
      <img
        src={visual.src}
        alt={visual.description}
        loading="lazy"
        decoding="async"
        width={visual.width}
        height={visual.height}
      />
    </figure>
  );
}
