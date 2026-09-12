// Case study content, rendered by src/app/case-studies/[slug]/page.jsx
// and src/components/CaseStudyView.jsx. Add a new object here + a matching
// `slug` on a project in CurrentlyBuilding.jsx to publish a new case study.

import { Zap, Users, Rocket, Target, Smartphone, TrendingUp, Layers } from "lucide-react";

// One hero image per project — also reused as the square media block under
// the Problem/Solution sections until real supporting shots or clips exist
// for each case study. Swap `media` below to `{ type: "video", src: "..." }`
// once you have footage.
const HERO = {
  sparrow: "https://framerusercontent.com/images/elmW9GbYcA4tCuS8DgcR7wUhus.png?width=4864&height=2200",
  polystox: "https://framerusercontent.com/images/6RY2hSZsomPvEIsPhxBYVy5vSw.png?width=5760&height=2880",
  sparrowDesign: "https://framerusercontent.com/images/LEqROcmPmHoaEj7B6RShFNIjU.png?width=3640&height=2240",
  intasohn: "/int5.png",
};

const caseStudies = {
  // Scaffolding only — every TODO below is a placeholder so the modal in
  // InfiniteSliderHorizontalDemo.tsx has something real to render. Swap in
  // the actual problem/solution/impact copy for the Intasöhn project.
  "intasohn-inspection-services": {
    eyebrow: "Case Study",
    title: "TODO: Intasöhn GmbH — Third Party Inspection Services website",
    subtitle: "Intasöhn GmbH",
    image: HERO.intasohn,
    subheading: "TODO: one-line summary of what this project was and why it mattered.",
    tldr: "TODO: 2-4 sentence TL;DR of the problem, what you did, and the outcome.",
    role: "TODO: your role on this project and who you worked with.",
    impact: [
      {
        icon: Zap,
        title: "TODO: impact headline",
        description: "TODO: one concrete result, in plain terms.",
      },
      {
        icon: Users,
        title: "TODO: impact headline",
        description: "TODO: one concrete result, in plain terms.",
      },
      {
        icon: Rocket,
        title: "TODO: impact headline",
        description: "TODO: one concrete result, in plain terms.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: ["TODO: what was the problem or ask that started this project?"],
        media: { type: "image", src: HERO.intasohn, alt: "Intasöhn website" },
      },
      {
        heading: "Solution",
        paragraphs: ["TODO: what did you design/build, and why?"],
      },
      {
        heading: "Reflection",
        paragraphs: ["TODO: what did you learn, or what would you do differently?"],
      },
    ],
  },

  "sparrow-api-errors": {
    eyebrow: "Case Study",
    title: "How We Made API Errors Less of a Headache in Sparrow",
    subtitle: "Sparrow AI",
    image: HERO.sparrow,
    subheading:
      "How user research turned a routine 'improve the error messages' ticket into Sparrow's most-used AI feature.",
    tldr: "Sparrow's error messages were confusing developers into support tickets. I traced what people actually did in the sixty seconds after an error appeared, found they wanted diagnosis rather than decoration, and shipped an inline Error Copilot that explains the cause and proposes a fix in place — cutting resolution time by 38% and becoming Sparrow's most-used AI feature within six weeks.",
    role: "Design lead — owned research, UX, and interaction design for the Error Copilot feature, working daily with 2 engineers, 1 PM, and the AI/ML team.",
    impact: [
      {
        icon: Zap,
        title: "Faster Error Resolution",
        description:
          "Cut average resolution time by 38% in beta by surfacing the cause and a concrete fix inline, instead of sending developers off to docs and Slack.",
      },
      {
        icon: Users,
        title: "Fastest-Growing AI Feature",
        description:
          "Became Sparrow's most-used AI-assisted feature within 6 weeks of launch, with usage climbing every week post-release.",
      },
      {
        icon: Rocket,
        title: "Shipped to Every Customer",
        description:
          "Rolled out to 100% of Sparrow AI users within a single quarter, with no dedicated onboarding required.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Every developer using Sparrow eventually hit the same wall: a red error banner, a status code, and nothing else. The next step was always the same — copy the code, tab over to the docs, then tab over to Slack. Support tickets tagged 'confusing error' had been climbing for two quarters straight.",
          "The original ask that landed on my desk was small: 'make the error messages friendlier.' It didn't take long to see that friendlier copy wasn't going to fix a workflow problem.",
        ],
        media: { type: "image", src: HERO.sparrow, alt: "Sparrow error banner in context" },
      },
      {
        heading: "The Starting Point",
        paragraphs: [
          "I pushed back on scoping this as a copy pass. Before writing a single word of new error text, I wanted to know what developers actually did in the sixty seconds after an error appeared — and whether better wording would have changed any of it.",
          "That reframing was the hardest sell of the whole project. It meant delaying a 'quick fix' by two weeks to run research first, with no guarantee the findings would justify it.",
        ],
      },
      {
        heading: "Building the Evidence",
        paragraphs: [
          "I shadowed 12 developers across three customer teams while they worked through real API errors, screen-recording each session with permission. In parallel, I pulled every distinct error type Sparrow had surfaced over the previous 90 days and mapped them against support ticket volume and time-to-resolution.",
          "A pattern emerged fast: the top 8 error types accounted for over 70% of support load, and in every recorded session, developers went looking for the same three things — what broke, why it broke, and what to change — usually in a different tab than Sparrow.",
        ],
      },
      {
        heading: "What Users Actually Told Us",
        paragraphs: [
          "Nobody asked for prettier error messages. What they wanted was for Sparrow to do the diagnosis they were doing manually: read the failed request, the response, and the surrounding context, and tell them what was actually wrong — in their code, not just in the abstract.",
          "'I don't need Sparrow to be nicer about it,' one engineer told me. 'I need it to just tell me what to change.'",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "That insight became the Error Copilot: an inline panel that reads the failing request in context, explains the likely cause in plain language, and proposes a concrete fix — with a one-click escalation to a deeper AI conversation when the fix isn't obvious.",
          "I designed it to appear exactly where developers were already looking, rather than as a separate destination, and worked with engineering to keep the explanation latency under two seconds so it never felt like a detour.",
        ],
        media: { type: "image", src: HERO.sparrow, alt: "The Error Copilot panel" },
      },
      {
        heading: "Reflection",
        paragraphs: [
          "The biggest lesson wasn't about the feature — it was about the two weeks I almost didn't ask for. If I'd shipped the copy pass as briefed, we would have polished the wrong problem. Now, 'what are people actually doing right now' is the first question I ask on every ticket that arrives pre-scoped.",
        ],
      },
    ],
  },

  "polystox-mobile": {
    eyebrow: "Case Study",
    title: "Squeezing a Web Platform onto a Phone?",
    subtitle: "Polystox Case Study — Part 1",
    image: HERO.polystox,
    subheading:
      "A polymer trading platform needed to go mobile. The brief said 'port the web app.' The research said something else entirely.",
    tldr: "Polystox asked for a straight port of their trading platform to mobile. Research showed traders only ever reached for their phone to monitor a position, react to an alert, and approve a deal — never to run the full desk. Reframing the brief around that gap cut the core flow from 14 taps to 5, before a single production screen was built.",
    role: "Product design lead — ran discovery from scratch, defined the mobile IA, and partnered with the founding team and one mobile engineer.",
    impact: [
      {
        icon: Zap,
        title: "5-Tap Core Flow",
        description:
          "Reduced the trading team's most important mobile flow — react to an alert, approve a deal — from 14 taps in an early full-parity prototype down to 5.",
      },
      {
        icon: Target,
        title: "Reframed the Brief",
        description:
          "Replaced 'port the web app' with a focused monitor-alert-approve companion, before a single production screen was built.",
      },
      {
        icon: Smartphone,
        title: "Set the Shipped IA",
        description:
          "The information architecture from this discovery phase shipped unchanged across both iOS and Android.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Polystox had built a successful web platform for polymer trading — dense tables, multi-panel dashboards, dozens of filters. It worked, because traders sat at desks with two monitors. Leadership wanted the same experience on a phone.",
          "'Create a native mobile app' was the literal instruction. Nobody had yet asked whether a phone was the right container for a desktop-shaped workflow.",
        ],
        media: { type: "image", src: HERO.polystox, alt: "Polystox desktop trading platform" },
      },
      {
        heading: "The Starting Point",
        paragraphs: [
          "I started by mapping every screen of the web platform against how often it was actually used, and by whom. A pattern showed up immediately: traders wanted the full dashboard at their desk, but reached for their phone for a much narrower set of moments — checking a live price, approving a deal, reacting to an alert.",
          "That gap between 'what the web app does' and 'what a phone gets used for' became the real design question.",
        ],
      },
      {
        heading: "Building the Evidence",
        paragraphs: [
          "I sat with 9 traders — some at their desks, some on the trading floor — and asked them to walk through the last time they touched Polystox on a phone versus a laptop. I logged every action: what they checked, how fast they needed an answer, and what they gave up on entirely because it was 'a desktop thing.'",
          "Nearly every mobile moment traced back to three jobs: monitor a live position, react to a price alert, and approve or reject a pending deal — never the full trading workflow.",
        ],
      },
      {
        heading: "What Users Actually Told Us",
        paragraphs: [
          "'I'm not going to place a trade from my phone in a parking lot,' one trader said. 'I just need to know if I need to run back inside.'",
          "The phone wasn't a smaller desktop. It was a different job entirely — a glance-and-react tool, not a workstation.",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "I proposed reframing the brief: instead of porting the full platform, design a focused mobile companion around monitoring, alerts, and approvals — with the full trading console staying on web where it belonged.",
          "That reframing cut the core flow traders cared about most — reacting to an alert and approving a deal — from 14 taps in an early full-parity prototype down to 5, and gave engineering a scoped, buildable v1 instead of an open-ended port.",
        ],
        media: { type: "image", src: HERO.polystox, alt: "The mobile companion app" },
      },
      {
        heading: "Reflection",
        paragraphs: [
          "Part 2 covers how that companion-app framing held up once real trades started flowing through it — including the one workflow we got wrong on the first try. For now: the best mobile answer to 'port the web app' is sometimes to ask what the phone is actually for.",
        ],
      },
    ],
  },

  "sparrow-design-language": {
    eyebrow: "Case Study",
    title: "Revamping the Sparrow Website & Forging a New Design Language",
    subtitle: "Sparrow Design",
    image: HERO.sparrowDesign,
    subheading:
      "A 'let's make this look better' request turned into defining the visual identity Sparrow still uses today.",
    tldr: "Sparrow's site had grown one inconsistent page at a time. Instead of a visual refresh, I built a small, disciplined design language — one type scale, one blue, a handful of reusable components — documented as a library the team could build from. It lifted sign-ups 22% and cut new-page design time roughly in half.",
    role: "Visual design lead — owned the design language and marketing site, working with the founder, a copywriter, and 2 engineers.",
    impact: [
      {
        icon: TrendingUp,
        title: "+22% Sign-Up Conversion",
        description:
          "The relaunched homepage lifted sign-up conversion by 22% against the previous inconsistent design.",
      },
      {
        icon: Layers,
        title: "Adopted Company-Wide",
        description:
          "The design language spread beyond the website into the product, the pitch deck, and the brand — not just the pages I touched.",
      },
      {
        icon: Zap,
        title: "~50% Faster Page Design",
        description:
          "A documented component library cut new marketing page design time roughly in half for the team after launch.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Sparrow's marketing site had grown one landing page at a time — each one designed in isolation, none of them quite agreeing on a typeface, a shade of blue, or a button shape. It functioned, but it didn't say anything about who Sparrow was.",
          "The request that started this project was almost offhand: 'the site feels a bit dated, can we refresh it?'",
        ],
        media: { type: "image", src: HERO.sparrowDesign, alt: "The old, inconsistent Sparrow site" },
      },
      {
        heading: "The Starting Point",
        paragraphs: [
          "Before opening Figma, I audited every live page and pulled screenshots into one board. Laid out side by side, the inconsistency was hard to miss — four different heading fonts, seven shades of the 'brand' blue, buttons with three different corner radii.",
          "A refresh wasn't going to fix that. It needed a system, not a repaint.",
        ],
      },
      {
        heading: "Building the Evidence",
        paragraphs: [
          "I ran a short positioning exercise with the founder and team: three words Sparrow should feel like, three words it should never feel like. 'Precise, calm, capable' came up unprompted from almost everyone — and 'corporate' and 'gimmicky' were the words nobody wanted.",
          "I paired that with a competitive scan of the developer-tools space to see where everyone else was already crowding, so Sparrow's new language wouldn't just blend in.",
        ],
      },
      {
        heading: "What Users Actually Told Us",
        paragraphs: [
          "In quick reactions tests on early direction concepts, the boldest, most 'designed' options tested worst — people used words like 'trying too hard.' The direction that read as quiet and confident, with more restraint than flair, consistently won.",
          "That told me the new language needed fewer decorative flourishes and more precision in the details that are easy to skip: spacing rhythm, type scale, motion timing.",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "I built a compact design language from that brief: a single type family with a disciplined scale, one blue used consistently, and a small set of reusable components — not a full new site redesigned page by page.",
          "I documented it as a living component library so future pages could be assembled from approved parts instead of designed from scratch, which is what actually made it stick after I moved on to other work.",
        ],
        media: { type: "image", src: HERO.sparrowDesign, alt: "The new Sparrow design language" },
      },
      {
        heading: "Reflection",
        paragraphs: [
          "The 22% lift in sign-ups was the number leadership cared about, but the system living on past launch day is the part I'm proudest of — it's still the base every new Sparrow page starts from.",
        ],
      },
    ],
  },
};

export default caseStudies;

export function getCaseStudy(slug) {
  return caseStudies[slug] ?? null;
}

export function getAllCaseStudySlugs() {
  return Object.keys(caseStudies);
}
