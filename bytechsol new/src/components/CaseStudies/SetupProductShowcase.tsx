import { motion, useReducedMotion } from "framer-motion";
import homepage from "../../assets/images/voxiq-hover.png";
import "./SetupProductShowcase.css";

const screens = [
  { name: "Create an account", caption: "Voxxiq / Product website", src: homepage, width: 1024, height: 493 },
  { name: "Connect the CRM", caption: "Voxxiq / GoHighLevel agency workflows", src: "/media/voxxiq-setup-agencies.webp", width: 2160, height: 1350 },
  { name: "Map fields", caption: "CRM field mapping / Illustration", src: "/media/voxxiq-setup-mapping.svg", width: 1440, height: 840 },
  { name: "Invite reps", caption: "Voxxiq / SaaS team workflows", src: "/media/voxxiq-setup-saas.webp", width: 2160, height: 1350 },
  { name: "Launch the dialer", caption: "Voxxiq / Manual dialer", src: "/media/voxxiq-setup-manual.webp", width: 2160, height: 1350 },
];

export default function SetupProductShowcase({ selected, onSelect }: { selected: number; onSelect: (index: number) => void }) {
  const reducedMotion = useReducedMotion();
  return (
    <div className="sp-carousel" role="region" aria-roledescription="carousel" aria-label="Voxxiq five-step visual journey">
      <div className="sp-carousel-halo" aria-hidden="true" />
      <div className="sp-carousel-orbit" aria-hidden="true" />
      <div className="sp-carousel-shadow" aria-hidden="true" />
      <div className="sp-carousel-float">
      <div className="sp-carousel-stage">
        {screens.map((screen, index) => {
          const offset = ((index - selected + 7) % 5) - 2;
          const distance = Math.abs(offset);
          const active = offset === 0;
          return (
            <motion.button key={screen.name} type="button" className="sp-carousel-screen"
              tabIndex={-1} onClick={() => onSelect(index)}
              aria-label={`View step ${index + 1}: ${screen.name}`} aria-current={active ? "step" : undefined}
              initial={false}
              animate={{ x: `${offset * 36}%`, y: distance === 0 ? -12 : distance === 1 ? 16 : -4,
                scale: active ? 1 : distance === 1 ? 0.76 : 0.57,
                rotateY: offset * -13, opacity: active ? 1 : distance === 1 ? 0.64 : 0.26, zIndex: 5 - distance }}
              transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <img src={screen.src} alt={screen.caption} width={screen.width} height={screen.height} loading="lazy" decoding="async" />
              <span className="sp-carousel-caption">{screen.name}</span>
            </motion.button>
          );
        })}
      </div>
      </div>
    </div>
  );
}
