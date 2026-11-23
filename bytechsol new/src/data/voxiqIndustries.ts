export type IndustryUseCase = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  workflow: string[];
  workflowLabels: string[];
  goal: string;
  capability: string;
  features: string[];
  metrics: [string, string][];
  cta: string;
};

// Owner-supplied illustrative workflows. Product availability is account dependent.
export const industryUseCases: IndustryUseCase[] = [
  {
    slug: "sales-teams",
    name: "Sales Teams",
    headline: "Turn More Dials Into Meaningful Sales Conversations",
    summary:
      "Bring prospect outreach and customer context into a more organized working day. Give representatives a clear next step after every conversation.",
    challenge:
      "Manual dialing, repetitive voicemails, and switching between tools take attention away from prospects. Managers also need a consistent view of call activity and conversations to guide coaching.",
    solution:
      "Connect outbound calling with contact context, call outcomes, and team reporting. Where enabled, CRM synchronization and voicemail workflows can carry the conversation into the next follow-up.",
    workflow: [
      "Import contacts from a list or supported CRM connection.",
      "Group outreach around the relevant campaign and pipeline stage.",
      "Work through contacts with the Power Dialer.",
      "Record the conversation outcome and next action.",
      "Synchronize supported contact updates with GoHighLevel.",
      "Review call activity and available recordings for coaching.",
    ],
    features: [
      "Power Dialer",
      "GoHighLevel Integration",
      "Voicemail Drop",
      "Local Presence",
      "Call Recording",
      "Live Coaching",
    ],
    metrics: [
      ["Daily calls", "Track completed call attempts by representative and working day."],
      ["Connection rate", "Compare connected calls with total call attempts."],
      ["Meetings booked", "Count meetings attributed to calling activity in your CRM."],
      ["Pipeline created", "Review opportunities associated with outreach in your sales records."],
    ],
    cta: "Help Your Sales Team Make Every Call Count",
    workflowLabels: [
      "Import leads",
      "Configure campaign",
      "Start calling",
      "Log outcomes",
      "Sync CRM",
      "Analyze performance",
    ],
    goal: "More conversations",
    capability: "Power Dialer",
  },
  {
    slug: "sdr-bdr-teams",
    name: "SDR / BDR Teams",
    headline: "Less Dialing. More Conversations. Better Prospecting.",
    summary:
      "Give prospecting a clear sequence from first attempt to next conversation. Keep lists, follow-ups, and outreach activity in context.",
    challenge:
      "Unanswered numbers, changing prospect lists, and repetitive follow-ups consume a large part of the prospecting day. Teams need to understand which attempts turn into useful conversations.",
    solution:
      "Organize prospecting around a shared dialing workflow. Automated dialing, answering machine detection, and enabled messaging channels can support the next action when configured for the account.",
    workflow: [
      "Import a CSV list or contacts from a supported CRM.",
      "Configure the campaign and enabled dialing mode.",
      "Use answering machine detection where enabled.",
      "Contact prospects using an appropriate caller identity.",
      "Follow up through SMS or WhatsApp where enabled.",
      "Record meetings in your CRM and review campaign activity.",
    ],
    features: [
      "Auto Dialer",
      "Answering Machine Detection",
      "Local Presence",
      "SMS Follow-Ups",
      "Call Analytics",
      "CRM Integration",
    ],
    metrics: [
      ["Conversations per hour", "Compare connected conversations with active prospecting time."],
      ["Connection rate", "Review successful connections as a share of call attempts."],
      ["Meetings booked", "Track meetings recorded against prospecting campaigns."],
    ],
    cta: "Build a More Productive Prospecting Workflow",
    workflowLabels: [
      "Import prospects",
      "Configure dialing",
      "Detect voicemail",
      "Connect with leads",
      "Follow up",
      "Track meetings",
    ],
    goal: "More meetings",
    capability: "Auto Dialer",
  },
  {
    slug: "small-business",
    name: "Small Businesses",
    headline: "Never Let an Important Customer Conversation Slip Away.",
    summary:
      "Keep customer calls and callbacks organized as your business grows. Help a small team see what needs attention next.",
    challenge:
      "Limited staff availability and disconnected communication tools make missed calls difficult to manage. A customer inquiry can lose context when it moves between team members.",
    solution:
      "Bring business numbers, inbound routing, voicemail, and follow-up activity into a connected calling workflow. Configure routing and messaging around the modules available to your business.",
    workflow: [
      "Receive an inbound call on an available business number.",
      "Guide the caller with configured IVR or routing options.",
      "Connect the call with an available staff member.",
      "Use voicemail or missed-call text-back where enabled.",
      "Arrange the next appointment and retain the conversation context.",
    ],
    features: [
      "Business Phone Numbers",
      "IVR",
      "Inbound Call Routing",
      "Voicemail",
      "SMS Follow-Ups",
      "Missed-Call Text-Back",
    ],
    metrics: [
      ["Missed calls", "Review unanswered inbound calls over a defined period."],
      ["Callback speed", "Measure the time between a missed call and the next attempt."],
      ["Appointments booked", "Count appointments linked to customer conversations."],
    ],
    cta: "Make Business Communication Simpler",
    workflowLabels: [
      "Customer calls",
      "IVR routing",
      "Staff answers",
      "Missed-call follow-up",
      "Customer booking",
    ],
    goal: "Fewer missed leads",
    capability: "IVR and Text-Back",
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    headline: "One Calling Platform. Complete Operational Visibility.",
    summary:
      "Create a consistent view of calling activity across departments. Organize access, seats, and reporting around the way your teams work.",
    challenge:
      "Multiple departments and locations introduce different calling practices, administrative needs, and reporting formats. Operations leaders need clear ownership and appropriate access to shared information.",
    solution:
      "Structure a centralized calling workspace around teams, calling seats, and reporting. Confirm access controls, account hierarchy, and integration requirements against the available enterprise offering.",
    workflow: [
      "Define the teams and departments that need access.",
      "Set supported roles and permissions for each responsibility.",
      "Assign available business numbers and calling seats.",
      "Organize outreach around the relevant team campaigns.",
      "Review available calling controls against your own policies.",
      "Use available reports to understand activity across teams.",
    ],
    features: [
      "Role-Based Access",
      "Sub-Accounts",
      "Centralized Reporting",
      "Audit Logs",
      "Enterprise Integrations",
      "SSO",
    ],
    metrics: [
      ["Team activity", "Review call activity by team and reporting period."],
      ["Platform adoption", "Review active users relative to assigned seats."],
      [
        "Policy exceptions",
        "Review exceptions to the calling requirements that apply to your operation.",
      ],
    ],
    cta: "Bring Your Calling Operations Together",
    workflowLabels: [
      "Configure teams",
      "Assign permissions",
      "Manage numbers",
      "Run campaigns",
      "Review calling policies",
      "Review analytics",
    ],
    goal: "Centralized management",
    capability: "Permissions and Reporting",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    headline: "Reach Property Leads Faster. Turn Conversations Into Appointments.",
    summary:
      "Organize buyer and seller outreach around the next useful conversation. Keep property interests and follow-ups connected.",
    challenge:
      "Agents handle inquiries from buyers, sellers, and listing campaigns at the same time. Delayed callbacks and scattered notes make it harder to coordinate viewings and maintain context.",
    solution:
      "Use organized contact lists, calling campaigns, and recorded outcomes to structure property outreach. Supported CRM and calendar connections can help coordinate the next appointment.",
    workflow: [
      "Capture a buyer or seller inquiry in your lead system.",
      "Assign the lead by property interest, location, or team responsibility.",
      "Use the calling workflow to contact the prospect.",
      "Record the prospect's property requirements and interest.",
      "Arrange a viewing through supported calendar connections.",
      "Update the lead record and schedule the next follow-up.",
    ],
    features: [
      "Power Dialer",
      "Local Presence",
      "CRM Integration",
      "SMS and WhatsApp",
      "Appointment Scheduling",
      "AI Lead Calling",
    ],
    metrics: [
      ["Lead response time", "Measure the interval from inquiry to first outreach attempt."],
      ["Appointments booked", "Track viewings or consultations recorded in your calendar."],
      [
        "Qualified leads",
        "Count leads that meet the qualification criteria recorded by your team.",
      ],
    ],
    cta: "Connect With Property Leads More Effectively",
    workflowLabels: [
      "Receive inquiry",
      "Assign lead",
      "Initiate call",
      "Qualify interest",
      "Book viewing",
      "Update CRM",
    ],
    goal: "Faster lead response",
    capability: "CRM and Calling",
  },
  {
    slug: "insurance",
    name: "Insurance",
    headline: "Simplify Policy Outreach and Strengthen Customer Retention.",
    summary:
      "Give renewals and policyholder follow-ups a clear place in the working day. Keep customer context close to every call.",
    challenge:
      "Insurance teams balance new inquiries, renewals, and customer servicing. They also need to follow the calling, consent, and recording requirements that apply to their operations.",
    solution:
      "Organize outreach by policy status, renewal timing, and the next action. Available campaign and recording tools can support a documented follow-up process alongside your own policies.",
    workflow: [
      "Segment policyholders by renewal date or policy status.",
      "Create an outreach campaign for the relevant group.",
      "Review available customer information with preview dialing where supported.",
      "Contact the policyholder under your applicable calling requirements.",
      "Document the conversation and next action.",
      "Schedule a relevant follow-up through enabled channels.",
    ],
    features: [
      "Preview Dialer",
      "Campaign Management",
      "Call Recording",
      "CRM Integration",
      "SMS Reminders",
      "Calling Policy Controls",
    ],
    metrics: [
      ["Renewal contact rate", "Compare contacted policyholders with renewals due."],
      ["Customer retention", "Review renewals using your policy administration records."],
      ["Follow-up completion", "Track completed actions against scheduled follow-ups."],
    ],
    cta: "Simplify Insurance Customer Outreach",
    workflowLabels: [
      "Identify renewals",
      "Build campaign",
      "Review customer",
      "Contact policyholder",
      "Record outcome",
      "Schedule follow-up",
    ],
    goal: "Better renewals",
    capability: "Preview Dialer",
  },
  {
    slug: "saas",
    name: "SaaS Companies",
    headline: "Convert More Product Interest Into Sales Conversations.",
    summary:
      "Connect demo inquiries and trial registrations with a considered follow-up workflow. Give your sales team the context to start a useful conversation.",
    challenge:
      "Demo requests and trial registrations arrive across different channels and time zones. Teams need a clear handoff from product interest to outreach, scheduling, and follow-up.",
    solution:
      "Structure lead outreach around contact synchronization, calling activity, and supported scheduling connections. Treat early-access AI calling as an optional capability subject to access.",
    workflow: [
      "Capture trial registrations or demo inquiries in your lead system.",
      "Synchronize contact details through a supported connection.",
      "Assign outreach to the relevant sales representative.",
      "Record product interest and the next useful action.",
      "Schedule a demo through supported calendar connections.",
      "Review follow-up activity alongside conversion records in your own systems.",
    ],
    features: [
      "CRM Synchronization",
      "Power Dialer",
      "Follow-Up Automation",
      "Call Analytics",
      "Appointment Booking",
      "AI Agent Caller",
    ],
    metrics: [
      ["First response time", "Measure the interval between registration and first outreach."],
      ["Trial-to-demo conversion", "Compare booked demos with the relevant trial cohort."],
      [
        "Trial-to-paid conversion",
        "Use subscription records to track conversion for a defined cohort.",
      ],
    ],
    cta: "Make Every SaaS Lead Follow-Up Count",
    workflowLabels: [
      "New trial registration",
      "Capture lead",
      "Initiate outreach",
      "Qualify interest",
      "Book demo",
      "Track conversion",
    ],
    goal: "Better trial conversion",
    capability: "Follow-Up Workflows",
  },
  {
    slug: "collections",
    name: "Collections",
    headline: "Organize High-Volume Collections Outreach With Confidence.",
    summary:
      "Keep account outreach, call outcomes, and return calls in context. Give teams a consistent record of the next agreed action.",
    challenge:
      "Large account lists, unanswered calls, and disputed conversations make outreach difficult to coordinate. Teams must also account for the requirements that apply to their calling activity.",
    solution:
      "Use campaign-based calling, structured outcomes, and communication history to organize account outreach. Your team must assess supported controls against its own operational requirements.",
    workflow: [
      "Import and organize account contact lists.",
      "Create a campaign for the appropriate account group.",
      "Apply permitted calling restrictions where supported and review your own requirements.",
      "Contact the account holder using an enabled dialing workflow.",
      "Record conversation outcomes and commitments in your account system.",
      "Review call history and coordinate the next permitted action.",
    ],
    features: [
      "Auto Dialer",
      "Call Recording",
      "Campaign Management",
      "Call Outcome Logging",
      "Inbound Call Routing",
      "Compliance Configuration",
    ],
    metrics: [
      ["Right-party contact rate", "Track verified account-holder conversations against attempts."],
      ["Promises to pay", "Record commitments using your account management process."],
      ["Recovery activity", "Review outreach alongside payment records in your own systems."],
    ],
    cta: "Improve Visibility Across Collections Operations",
    workflowLabels: [
      "Import accounts",
      "Configure campaign",
      "Check calling restrictions",
      "Contact customer",
      "Record outcome",
      "Track follow-up",
    ],
    goal: "Organized outreach",
    capability: "Auto Dialer and Recording",
  },
  {
    slug: "gohighlevel-agencies",
    name: "GoHighLevel Agencies",
    headline: "Power Client Conversations Under Your Own Brand.",
    summary:
      "Coordinate calling workflows across your client portfolio. Keep account setup and CRM handoffs organized as your agency grows.",
    challenge:
      "Agencies managing multiple GoHighLevel clients need consistent follow-ups and clear account ownership. Branding and client workspace requirements also vary across agency offerings.",
    solution:
      "Connect agency calling workflows with supported CRM synchronization and client account tools. White-label branding and workspace options depend on the available agency plan.",
    workflow: [
      "Set up the agency workspace available to your plan.",
      "Create supported client workspaces or sub-accounts.",
      "Connect each supported GoHighLevel account.",
      "Assign available numbers and seats to client operations.",
      "Run organized client outreach and synchronize supported call outcomes.",
      "Review client activity using the available agency reporting tools.",
    ],
    features: [
      "White-Label Branding",
      "GoHighLevel Integration",
      "Client Sub-Accounts",
      "Calling Workflows",
      "CRM Synchronization",
      "Agency Management",
    ],
    metrics: [
      [
        "Client lead response time",
        "Measure the interval from lead arrival to outreach by client.",
      ],
      ["Appointment booking rate", "Compare appointments with eligible leads in client records."],
      ["Active seats", "Review seat activity across client workspaces."],
      ["Client retention", "Track renewals and recurring revenue in your agency records."],
    ],
    cta: "Expand Your Agency's Calling Capabilities",
    workflowLabels: [
      "Configure agency",
      "Add clients",
      "Connect GHL",
      "Assign calling seats",
      "Run outreach",
      "Monitor client performance",
    ],
    goal: "Client management",
    capability: "White-Label and GHL",
  },
];

export const featureDescriptions: Record<string, string> = {
  "Power Dialer":
    "Move through an organized contact list with less interruption between calling tasks.",
  "GoHighLevel Integration":
    "Keep contact context and call outcomes connected to your enabled CRM workflow.",
  "Voicemail Drop":
    "Use an approved recorded message for repetitive voicemail tasks where enabled.",
  "Local Presence": "Manage an appropriate outbound caller identity in supported locations.",
  "Call Recording":
    "Return to conversation details for follow-up and quality review where recording is enabled.",
  "Live Coaching":
    "Support representatives during calls using the monitoring tools available to your account.",
  "Auto Dialer": "Organize outbound attempts around a configured campaign and contact list.",
  "Answering Machine Detection":
    "Handle answering-machine responses within a supported dialing workflow.",
  "SMS Follow-Ups": "Carry a relevant next step into an enabled text-messaging channel.",
  "Call Analytics": "Review calling activity and identify questions to investigate with your team.",
  "CRM Integration":
    "Connect customer records with calling activity through a supported integration.",
  "Business Phone Numbers":
    "Give business conversations a dedicated number in an available region.",
  IVR: "Guide inbound callers toward the appropriate team through configured menu options.",
  "Inbound Call Routing": "Direct incoming calls to the people assigned to handle them.",
  Voicemail: "Keep a message available for follow-up when a call goes unanswered.",
  "Shared Inbox":
    "Coordinate communication ownership using the shared views available to your team.",
  "Role-Based Access": "Match access to team responsibilities using supported permission settings.",
  "Sub-Accounts":
    "Organize separate operations through the account hierarchy supported by your plan.",
  "Centralized Reporting": "Bring available team activity into a consistent reporting view.",
  "Audit Logs":
    "Review recorded administrative activity if audit history is included in your offering.",
  "Enterprise Integrations":
    "Assess supported connections against your organization's existing systems.",
  SSO: "Confirm supported identity-provider options with Voxxiq before planning a rollout.",
  "SMS and WhatsApp":
    "Share a relevant follow-up through communication channels enabled for the account.",
  "Appointment Scheduling": "Coordinate the next meeting through an available calendar connection.",
  "AI Lead Calling":
    "Explore AI-assisted lead outreach if early access is available to your account.",
  "Preview Dialer": "Review available contact information before initiating the next call.",
  "Campaign Management": "Group contacts around a clear outreach purpose and follow-up process.",
  "SMS Reminders": "Send relevant reminders through supported, enabled messaging workflows.",
  "Calling Policy Controls":
    "Assess available calling settings against your team's documented requirements.",
  "CRM Synchronization": "Carry supported contact updates between your CRM and calling workflow.",
  "Follow-Up Automation": "Configure supported next actions around the outcomes your team records.",
  "Appointment Booking":
    "Move a conversation toward a scheduled meeting through supported connections.",
  "AI Agent Caller":
    "Evaluate AI-assisted calling through early access before including it in daily operations.",
  "Call Outcome Logging":
    "Capture the result of a conversation and the next action for an account.",
  "Compliance Configuration":
    "Review available settings alongside the requirements that apply to your operation.",
  "White-Label Branding":
    "Use your agency identity where branding options are included in the plan.",
  "Client Sub-Accounts": "Keep client operations organized through supported workspace boundaries.",
  "Calling Workflows":
    "Give client outreach a repeatable sequence from contact to recorded outcome.",
  "Agency Management": "Coordinate client workspaces and seats through the available agency tools.",
  "Missed-Call Text-Back":
    "Send a relevant response after an unanswered inbound call where the module is enabled.",
};
