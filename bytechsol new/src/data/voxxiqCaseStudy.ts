export type CaseStudyAction = { label: string; href: string; hoverEffect?: "circle" } | null;
export type CaseStudyImage = { src: string; alt: string } | null;
export interface CopyBlock {
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
}
export interface DetailBlock {
  title: string;
  description: string;
}
export interface VisualBlock extends CopyBlock {
  image: CaseStudyImage;
}
const copy = (): CopyBlock => ({ eyebrow: "", title: "", highlightedText: "", description: "" });
const details = (count: number): DetailBlock[] =>
  Array.from({ length: count }, () => ({ title: "", description: "" }));
// Empty fields receive development-only skeletons. Sample copy is stored separately.
// Images require descriptive alt text; actions require both a label and a safe destination.
export const createEmptyCaseStudy = () => ({
  sampleContent: false,
  hero: {
    ...copy(),
    primaryCTA: null as CaseStudyAction,
    secondaryCTA: null as CaseStudyAction,
    images: [null, null, null] as CaseStudyImage[],
  },
  overview: {
    ...copy(),
    objective: "",
    additionalDescription: "",
    metadata: [
      "Project Name",
      "Industry",
      "Project Type",
      "Services",
      "Project Duration",
      "Product Website",
    ].map((label) => ({ label, value: "" })),
  },
  challenge: { ...copy(), items: details(3) },
  solution: {
    ...copy(),
    features: details(4),
    supportingContent: "",
    images: [null, null, null] as CaseStudyImage[],
  },
  showcase: Array.from({ length: 3 }, (): VisualBlock => ({ ...copy(), image: null })),
  capabilities: { ...copy(), items: details(6) },
  engineering: {
    ...copy(),
    technologies: [] as { name: string; image: CaseStudyImage }[],
    contributions: details(4),
  },
  outcome: { ...copy(), items: details(4) },
  finalCTA: {
    ...copy(),
    primaryCTA: null as CaseStudyAction,
    secondaryCTA: null as CaseStudyAction,
    image: null as CaseStudyImage,
  },
});

export const voxxiqCaseStudy = createEmptyCaseStudy();
