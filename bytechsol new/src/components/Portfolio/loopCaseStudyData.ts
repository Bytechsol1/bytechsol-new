// Content adapted from the supplied case study. Unverified metrics and editorial
// placeholders are deliberately excluded from the visitor-facing page.
export const overview = [
  ['Product', 'Loop: team chat and work management'],
  ['Client', 'In-house product'],
  ['Category', 'Collaboration / productivity SaaS'],
  ['Platform', 'Responsive web app'],
  ['Our role', 'Strategy, UX/UI design, development, AI integration and deployment'],
  ['Stack', 'Next.js, React, Tailwind CSS, Supabase, Groq LLM API and Vercel'],
  ['In use by', '13 team members across leadership, engineering, AI/ML, QA and sales'],
  ['Modules', 'Home, Messages, Team, Files, Projects, Calendar, Ideas and Settings'],
];

export const challenges = [
  ['Lost context', 'A decision made in chat rarely made it onto the task it affected.'],
  ['No single view of the day', 'Each person checked four or five apps to know what was due, who was online and what changed.'],
  ['Per-seat costs', 'Every tool billed per user, and the bill grew with each hire.'],
  ['Generic AI', 'Off-the-shelf assistants knew nothing about our projects, and none worked in Roman Urdu, which much of the team writes in.'],
];

export const principles = [
  ['Consistent navigation', 'The sidebar, search and Ask AI stay in the same place as you move between chat, tasks and files.'],
  ['A clear start to the day', 'See your tasks, project progress, calendar and available teammates on the dashboard.'],
  ['Familiar interactions', 'Chat channels and project boards follow patterns the team already knows, making the workspace easier to learn.'],
  ['AI with context', 'Open the assistant from a conversation or task. It uses that context to help you catch up.'],
];

export const modules = [
  { id: 'home', label: 'Home', title: 'Start with what needs your attention.', image: 'workspace.svg', alt: 'Illustrated Loop dashboard with assigned tasks, project progress, calendar and team presence', description: 'Start the day with your assigned tasks, project progress and upcoming deadlines in one view.', details: ['Switch projects between list and Gantt views.', 'Add a task directly from its due date on the calendar.', 'See which teammates are online, away or offline.'] },
  { id: 'messages', label: 'Messages', title: 'Keep the conversation connected.', image: 'messaging.svg', alt: 'Illustrated Loop channel with a conversation and a contextual AI panel', description: 'Public channels and direct messages bring the team’s conversations into the same workspace as their work.', details: [
    'Use public channels or direct messages, with unread counts and teammate availability.',
    'Format messages with lists, links, quotes and code. Add files, emoji and @mentions.',
    'Schedule a message, react, reply or save it for later. Voice messaging remains on the roadmap.',
    'Search a conversation and find its members and shared files without leaving the thread.',
  ] },
  { id: 'projects', label: 'Projects', title: 'From a conversation to done.', image: 'projects.svg', alt: 'Illustrated Loop project board with To Do, In Progress, Review and Done columns', description: 'Three views of the same data: a Kanban board, a sortable list and a Gantt timeline.', details: [
    'Organise work across boards with custom columns, such as To do, In progress, Review and Done.',
    'Sort by status, priority, assignee or due date, and plan the same tasks on a timeline.',
    'Keep dates, estimates, checklists, files and linked work on each task.',
    'Discuss changes in task comments and follow their history.',
    'Move, duplicate, export, print or archive work, with recovery for deleted tasks.',
  ] },
  { id: 'files', label: 'Files', title: 'Find the file without the search around.', description: 'A shared library brings workspace files together, with their owner and original channel for context.', details: ['Search by name or filter by file type.', 'Upload files to the right conversation or destination.'] },
  { id: 'team', label: 'Team', title: 'Find the right teammate.', description: 'Browse the team by role or availability, in a grid or list.', details: ['See each person’s role, email and live status.', 'Open a profile, start a message or copy an email.'] },
  { id: 'calendar', label: 'Calendar', title: 'See what is coming up.', description: 'Company events, private meetings and task deadlines share one monthly calendar.', details: ['Admins can add company-wide events; teammates can invite others to private meetings.', 'Add locations, meeting links and daily, weekly or monthly repeats.'] },
  { id: 'ideas', label: 'Ideas', title: 'Turn a suggestion into a next step.', description: 'Anyone on the team can suggest an improvement and discuss it in comments.', details: ['Follow each idea through Under review, Planned and In progress.'] },
  { id: 'settings', label: 'Settings', title: 'Make the workspace comfortable.', description: 'Personal preferences cover how you work, communicate and use AI. Keyboard search helps you jump to a channel or person.', details: [
    'Set availability, notification rules and quiet hours.',
    'Choose a light, dark or system theme, message density and reduced motion.',
    'Adjust language, accessibility, privacy, read receipts and AI preferences.',
  ] },
];

export const aiFeatures = [
  ['Context-aware', 'Opened from a channel, it starts with “Catch me up on this conversation: main topics, decisions and anything that needs my reply.” Task detail has the same entry point.'],
  ['Always one click away', 'A global Ask AI button in the top bar, plus a sparkle button in every conversation header and task.'],
  ['Built for our team’s language', 'An Auto / English / Roman Urdu switch lets people ask and read answers the way they actually write.'],
  ['Room for longer conversations', 'Conversation history and full-screen mode keep longer threads with the assistant usable.'],
  ['User control', 'Writing suggestions while composing and summaries of unread conversations can each be turned off in preferences.'],
];

export const stack = [
  ['Frontend', 'Next.js (Turbopack), React, Tailwind CSS', 'One codebase for UI and server routes; fast builds'],
  ['Database', 'Supabase Postgres via REST and RPC', 'Relational model for channels, tasks and members without a custom API layer; RPC functions such as mark_channel_read'],
  ['Auth', 'Supabase Auth', 'Token-based sessions out of the box'],
  ['Files', 'Supabase Storage', 'Public bucket for avatars; message attachments served through signed URLs'],
  ['AI', 'Groq LLM API, called server-side', 'Low-latency inference that keeps the key off the client'],
  ['Hosting', 'Vercel', 'Zero-config deploys for Next.js'],
];

export const designPrinciples = [
  ['Three panes. One conversation.', 'Navigation, conversation list, conversation. Detail panels slide in from the right instead of opening new pages.'],
  ['Status at a glance', 'Presence dots on every avatar, coloured priority pills (Low, Medium, High, Urgent), overdue dates in red and unread counts as badges.'],
  ['Same data, many views', 'Projects switch between board, list and Gantt without reloading; the home dashboard reuses the same list/Gantt toggle.'],
  ['Empty states that guide', '“You are all caught up”, “Nothing on this date — add task for this day” and channel welcome screens turn blank screens into next steps.'],
  ['Keyboard-friendly', 'Formatting shortcuts (Ctrl+B, Ctrl+I, Ctrl+Shift+X), Enter to send and keyboard navigation in search.'],
  ['Accessible by preference', 'Light, dark and system themes, compact density, reduced motion and accessibility settings.'],
];

export const roadmap = [
  ['Advanced search filters by channel, sender, date and attachment type', 'In progress'],
  ['Voice messages: full rollout of the composer’s voice-note button', 'Planned'],
  ['AI weekly team digest of messages, project progress and decisions', 'Under review'],
  ['Two-factor authentication, session management and data export', 'Planned'],
  ['Email notification summaries', 'Planned'],
];
