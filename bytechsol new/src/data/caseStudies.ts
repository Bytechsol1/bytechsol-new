import loopImage from "../assets/images/loop-hover.png";
import voxiqImage from "../assets/images/voxiq-hover.png";
import voxiqWhatsAppImage from "../assets/images/voxiq-whatsapp.png";
import voxiqAnalyticsImage from "../assets/images/voxiq-analytics.png";
import skynodeImage from "../assets/images/skynode-hover.png";
import babylonImage from "../assets/images/babylon-hover.png";
import expeditedImage from "../assets/images/expedited-hover.png";
import clockitImage from "../assets/images/clockit-hover.png";
import frigoImage from "../assets/images/frigo-hover.png";
import cmjlImage from "../assets/images/cmjl-hover.png";
import labourImage from "../assets/images/labour-hover.png";
import { createEmptyCaseStudy } from "./voxxiqCaseStudy";
import { applyVoxiqSampleContent } from "./voxiqSampleContent";
import type { CaseStudyImage } from "./voxxiqCaseStudy";

export type CaseStudyContent = ReturnType<typeof createEmptyCaseStudy>;
export const caseStudyPath = (slug: string) => `/case-studies/${slug}`;

function project(
  slug: string,
  name: string,
  description: string,
  src: string,
  website?: string,
  gallery: NonNullable<CaseStudyImage>[] = [],
) {
  // Each project owns independent content. Expand these records when approved copy is ready.
  // Names, descriptions and images below come from the existing nine portfolio cards.
  const content: CaseStudyContent = createEmptyCaseStudy();
  const image = { src, alt: `${name} project preview` };
  content.hero = {
    ...content.hero,
    eyebrow: "Case study",
    title: name,
    description,
    images: [image, gallery[0] ?? null, gallery[1] ?? null],
    primaryCTA: website ? { label: "Visit website", href: website } : null,
  };
  content.overview = {
    ...content.overview,
    eyebrow: "Project overview",
    title: name,
    description,
    metadata: content.overview.metadata.map((field) => ({
      ...field,
      value: field.label === "Project Name" ? name : "",
    })),
  };
  content.solution.images = gallery.length
    ? [gallery[0], gallery[1] ?? null, null]
    : [image, null, null];
  [image, ...gallery].slice(0, content.showcase.length).forEach((screenshot, index) => {
    content.showcase[index].image = screenshot;
  });
  content.finalCTA.image = gallery.at(-1) ?? image;
  if (slug === "voxiq") applyVoxiqSampleContent(content);
  return { slug, name, content };
}

// Canonical route slugs match the actual project names shown in the portfolio.
export const caseStudies = [
  project("loop", "Loop", "Intelligent logistics and fleet management platform.", loopImage),
  project(
    "voxiq",
    "Voxxiq",
    "AI-powered voice analytics and communication.",
    voxiqImage,
    "https://voxiq.bytechsol.com/",
    [
      { src: voxiqWhatsAppImage, alt: "Voxxiq WhatsApp messaging website preview" },
      { src: voxiqAnalyticsImage, alt: "Voxxiq sales analytics website preview" },
    ],
  ),
  project("skynode", "Skynode", "Advanced edge computing solutions.", skynodeImage),
  project("babylon-os", "Babylon OS", "Comprehensive enterprise operating system.", babylonImage),
  project(
    "expedited-transport",
    "Expedited Transport",
    "Fast and reliable freight transportation.",
    expeditedImage,
  ),
  project("clockit", "ClockIt", "Time tracking and employee management.", clockitImage),
  project("frigo-labs", "Frigo Labs", "Innovative cold chain technology solutions.", frigoImage),
  project(
    "cmjl-mobile-app",
    "CMJL Mobile App",
    "Dedicated application for professional drivers.",
    cmjlImage,
  ),
  project(
    "labour-tracker-app",
    "Labour Tracker App",
    "Real-time workforce monitoring and portal.",
    labourImage,
  ),
];
