// Editorial summaries of voxxiq content/Voxiq Case Study (1).docx, dated 29 October 2026.
// Published product claims remain attributed. Industry scenarios are illustrative.
export const voxiqDocumentContent = {
  industryPlans: {
    "sales-teams": "Calls Growth ($40) for recordings and advanced analytics",
    "sdr-bdr-teams": "Calls Growth ($40) + SMS add-on ($70)",
    "small-business": "Calls Starter ($20) + SMS add-on ($70) for text-back",
    enterprise: "Calls Scale ($70) with an enterprise agreement",
    "real-estate": "Calls Growth ($40) + SMS ($70), AI agent subject to early access",
    insurance: "Calls Growth ($40) + SMS add-on ($70)",
    saas: "Calls Scale ($70) for AI call insights",
    collections: "Calls Growth ($40) + SMS add-on ($70)",
    "gohighlevel-agencies": "Agency Growth, up to 25 clients, priced on request",
  } as Record<string, string>,
  challenges: [
    {
      title: "Dead time between calls",
      description:
        "Looking up numbers, dialing by hand, and waiting through rings interrupts the calling day.",
    },
    {
      title: "Voicemail drag",
      description: "Repeating the same message takes time away from live conversations.",
    },
    {
      title: "Low answer rates",
      description: "Unfamiliar, out-of-area caller IDs make prospects less likely to answer.",
    },
    {
      title: "Slow lead response",
      description: "Inbound enquiries can wait hours for a callback while interest fades.",
    },
    {
      title: "Tool sprawl",
      description:
        "Calls, messages, recordings, and CRM notes become difficult to follow across separate apps.",
    },
    {
      title: "Calling rules across regions",
      description:
        "Regulated teams need calling-hour, consent, DNC, and applicable FDCPA checks built into their process.",
    },
  ],
  modules: [
    {
      title: "Power dialer",
      description:
        "Move to the next contact when a call ends, with one-click skip, pause, and reschedule controls.",
      category: "Calling",
    },
    {
      title: "Auto dialer",
      description:
        "Configure dial speed and ratio, with answering machine detection to filter voicemail.",
      category: "Calling",
    },
    {
      title: "Manual preview dialer",
      description:
        "Review the contact before calling, use keyboard shortcuts, and log the outcome in one click.",
      category: "Calling",
    },
    {
      title: "Local presence",
      description: "Use number pools to match caller ID to a prospect's area code.",
      category: "Calling",
    },
    {
      title: "Voicemail drop",
      description:
        "Use pre-recorded messages and campaign-specific templates for unanswered calls.",
      category: "Calling",
    },
    {
      title: "Inbound and IVR",
      description:
        "Route by rep, team, skill, or hours, with round-robin distribution and overflow handling.",
      category: "Routing",
    },
    {
      title: "AI Agent Caller",
      description:
        "Early-access lead qualification, meeting booking, and handoff with a summary and lead score. Confirm current access and pricing.",
      category: "Early access",
    },
    {
      title: "SMS",
      description:
        "A two-way shared inbox with templates, missed-call text-back, and click-to-call. A separately priced add-on in the source.",
      category: "Messaging",
    },
    {
      title: "WhatsApp",
      description:
        "Business-number messaging with images, documents, and outcome-based follow-ups. Plan inclusion is unresolved in the source.",
      category: "Messaging",
    },
    {
      title: "Call recording",
      description:
        "Playback, transcription, keyword search, and coaching playlists, subject to recording consent and plan availability.",
      category: "Coaching",
    },
    {
      title: "Live coaching",
      description: "Listen, whisper, and barge controls with a live call-floor view.",
      category: "Coaching",
    },
    {
      title: "Analytics",
      description:
        "Team activity, connect rates, talk-to-dial ratio, leaderboards, script tests, and scheduled reports.",
      category: "Visibility",
    },
    {
      title: "Compliance tools",
      description:
        "Published capabilities include DNC checks, calling hours, consent logging, and exportable reports. Teams must verify applicable requirements.",
      category: "Governance",
    },
    {
      title: "Enterprise controls",
      description:
        "The source describes SSO/SAML, Okta, permissions, audit logs, and regional sub-accounts. Confirm account-level availability.",
      category: "Governance",
    },
  ],
  setup: [
    {
      title: "Create an account",
      description: "Open the browser workspace in Chrome. Calling uses WebRTC.",
    },
    {
      title: "Connect the CRM",
      description: "Connect GoHighLevel or Pipedrive to the team's customer records.",
    },
    {
      title: "Map fields",
      description: "Match contact fields so notes and call outcomes sync back.",
    },
    { title: "Invite reps", description: "Assign seats, roles, and phone numbers to the team." },
    {
      title: "Launch the dialer",
      description: "Load a CSV or CRM list, configure dialing and voicemail, and begin.",
    },
  ],
  plans: [
    {
      name: "Calls Starter",
      price: "$20",
      detail: "Browser calling, history, leads, notes, follow-ups, calendar, and basic analytics.",
    },
    {
      name: "Calls Growth",
      price: "$40",
      detail: "Starter capabilities with call recording, playback, and advanced analytics.",
    },
    {
      name: "Calls Scale",
      price: "$70",
      detail:
        "Growth capabilities with AI call insights, company-wide reporting, and priority support.",
    },
  ],
};
