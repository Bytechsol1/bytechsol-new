import type { createEmptyCaseStudy } from "./voxxiqCaseStudy";

type Content = ReturnType<typeof createEmptyCaseStudy>;

// Temporary, illustrative copy for layout review. Replace this file with approved copy later.
// These statements describe a sample narrative, not verified delivery details or outcomes.
export function applyVoxiqSampleContent(content: Content): Content {
  content.sampleContent = true;
  Object.assign(content.hero, {
    eyebrow: "Voxxiq / Sample case study",
    title: "Voxxiq",
    highlightedText: "Every conversation. Connected.",
    description:
      "A connected workspace for sales conversations. This sample story explores how calling, messaging, and reporting could come together in one clear digital experience.",
    secondaryCTA: { label: "Talk to our team", href: "/contact/", hoverEffect: "circle" },
  });
  Object.assign(content.overview, {
    eyebrow: "01 / Project overview",
    title: "A clearer way to connect",
    highlightedText: "people and conversations.",
    description:
      "In this illustrative project, a growing sales team needs a more consistent way to manage customer conversations. The proposed experience brings everyday communication tasks into a focused, approachable workspace.",
    objective:
      "The sample brief: make it easier to move from an initial conversation to a useful follow-up, with less time spent switching between disconnected tools.",
    additionalDescription:
      "Our example approach balances a welcoming product website with practical workflows for agents and managers. The following scope and delivery details are temporary copy for design review.",
    metadata: [
      { label: "Project Name", value: "Voxxiq" },
      { label: "Industry", value: "Sales communication / sample" },
      { label: "Project Type", value: "Web platform / sample scope" },
      { label: "Services", value: "Product strategy, UI/UX, development / sample" },
      { label: "Project Duration", value: "Discovery to launch / illustrative timeline" },
      { label: "Product Website", value: "voxiq.bytechsol.com" },
    ],
  });
  Object.assign(content.challenge, {
    eyebrow: "02 / The challenge",
    title: "Less switching.",
    highlightedText: "More meaningful conversations.",
    description:
      "The sample scenario starts with a familiar problem: agents need context, managers need visibility, and customers expect a consistent experience across channels.",
    items: [
      {
        title: "Disconnected workflows",
        description:
          "Calling, notes, and follow-ups sit in different places, making the next action harder to find.",
      },
      {
        title: "Limited shared context",
        description:
          "A conversation can lose its history when it moves between people, channels, or stages.",
      },
      {
        title: "Reporting without clarity",
        description:
          "Busy dashboards need a simpler hierarchy so teams can identify the information that matters.",
      },
    ],
  });
  Object.assign(content.solution, {
    eyebrow: "03 / Our approach",
    title: "One experience.",
    highlightedText: "Built around the team.",
    description:
      "For this example narrative, we start with everyday tasks, simplify the information architecture, and connect the moments that make up a sales conversation.",
    features: [
      {
        title: "A focused conversation workspace",
        description: "Keep contact context and the next useful action within easy reach.",
      },
      {
        title: "Messaging that fits the workflow",
        description:
          "Present channel choices and follow-up steps through a consistent interaction pattern.",
      },
      {
        title: "Reporting with a clear hierarchy",
        description:
          "Organize activity and performance views around questions a manager needs to answer.",
      },
      {
        title: "A consistent visual language",
        description:
          "Use reusable components to keep navigation, controls, and content predictable.",
      },
    ],
    supportingContent:
      "Sample process: explore the workflow, map the experience, prototype the key screens, then refine the interface through review. Actual project milestones will replace this narrative.",
  });
  if (content.hero.images[0]) content.solution.images[2] = content.hero.images[0];
  const showcaseCopy = [
    {
      eyebrow: "04 / Product experience",
      title: "A confident first impression.",
      highlightedText: "A clear next step.",
      description:
        "The existing Voxxiq website preview anchors this sample showcase. The accompanying narrative illustrates a direct product introduction, a clear hierarchy, and an approachable path into the experience.",
    },
    {
      eyebrow: "05 / WhatsApp experience",
      title: "Keep the conversation going.",
      highlightedText: "Across channels.",
      description:
        "The supplied WhatsApp screenshot shows a different side of the product story. This sample section reserves space to explain messaging journeys, customer context, and the connection between channels.",
    },
    {
      eyebrow: "06 / Analytics experience",
      title: "Turn activity into",
      highlightedText: "a clearer perspective.",
      description:
        "The supplied analytics screenshot introduces the reporting experience. This illustrative narrative focuses on readable information, useful comparisons, and a straightforward route from overview to detail.",
    },
  ];
  content.showcase.forEach((block, index) => Object.assign(block, showcaseCopy[index]));
  Object.assign(content.capabilities, {
    eyebrow: "07 / Core capabilities",
    title: "Everyday tools.",
    highlightedText: "One connected experience.",
    description:
      "Six illustrative capability areas show how the finished case study could present the product. Final feature names and scope will be confirmed with the real project content.",
    items: [
      {
        title: "Calling workspace",
        description:
          "A sample workflow that keeps conversation controls and contact details together.",
      },
      {
        title: "Messaging journeys",
        description:
          "An example of how follow-ups could remain connected to the wider customer journey.",
      },
      {
        title: "Contact context",
        description:
          "A proposed view of the information an agent needs before starting a conversation.",
      },
      {
        title: "Activity visibility",
        description: "An illustrative activity view that helps a team understand its working day.",
      },
      {
        title: "Manager reporting",
        description:
          "A sample reporting structure designed around readable summaries and useful detail.",
      },
      {
        title: "Responsive interaction",
        description: "An example of consistent navigation and clear controls across screen sizes.",
      },
    ],
  });
  Object.assign(content.engineering, {
    eyebrow: "08 / Engineering & contribution",
    title: "A thoughtful foundation.",
    highlightedText: "Room to evolve.",
    description:
      "The labels below represent sample architecture areas, not a confirmed technology stack. Approved tools, responsibilities, and implementation details will be added with the final case study.",
    technologies: [
      "Frontend",
      "API layer",
      "Data layer",
      "Events",
      "Reporting",
      "Integrations",
    ].map((name) => ({ name, image: null })),
    contributions: [
      {
        title: "Experience mapping",
        description:
          "Sample contribution: organize the main journeys and define a shared information structure.",
      },
      {
        title: "Interface design",
        description:
          "Sample contribution: establish reusable layouts, visual hierarchy, and interaction patterns.",
      },
      {
        title: "Product implementation",
        description:
          "Sample contribution: translate the selected designs into a consistent web experience.",
      },
      {
        title: "Review & refinement",
        description:
          "Sample contribution: review responsiveness, accessibility, and the clarity of key tasks.",
      },
    ],
  });
  Object.assign(content.outcome, {
    eyebrow: "09 / Illustrative outcome",
    title: "Designed for clarity.",
    highlightedText: "Ready for the next conversation.",
    description:
      "These are example outcome themes for the layout, not measured results. Verified outcomes and supporting evidence will replace them when the real project story is available.",
    items: [
      {
        title: "A clearer journey",
        description: "Illustrative goal: make the next useful step easier to recognize.",
      },
      {
        title: "A connected workflow",
        description: "Illustrative goal: preserve context as conversations move between tasks.",
      },
      {
        title: "Readable reporting",
        description:
          "Illustrative goal: help teams understand an overview before exploring details.",
      },
      {
        title: "A consistent foundation",
        description:
          "Illustrative goal: give future screens a shared visual and interaction language.",
      },
    ],
  });
  Object.assign(content.finalCTA, {
    eyebrow: "Let's build what's next",
    title: "Your next idea.",
    highlightedText: "Our next conversation.",
    description:
      "Have a digital product in mind? Talk to BytechSol about the experience you want to create and the challenges you want to solve.",
    primaryCTA: { label: "Discuss your project", href: "/contact/" },
    secondaryCTA: { label: "Explore our portfolio", href: "/portfolio/" },
  });
  return content;
}
