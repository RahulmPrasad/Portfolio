// Case study content, rendered by src/app/case-studies/[slug]/page.jsx
// and src/components/CaseStudyView.jsx. Add a new object here + a matching
// `slug` on a project in CurrentlyBuilding.jsx to publish a new case study.

const caseStudies = {
  "sparrow-api-errors": {
    eyebrow: "Case Study",
    title: "How We Made API Errors Less of a Headache in Sparrow",
    subtitle: "Sparrow AI",
    subheading:
      "How user research turned a routine 'improve the error messages' ticket into Sparrow's most-used AI feature.",
    role: [
      "Led end-to-end design for the API Error Copilot feature",
      "Partnered daily with 2 engineers, 1 PM, and the AI/ML team",
      "Ran discovery interviews with 12 developers using Sparrow",
    ],
    impact: [
      "Cut average error-resolution time by 38% in beta",
      "Shipped to 100% of Sparrow AI users within one quarter",
      "Became the most-used AI-assisted feature within 6 weeks",
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Every developer using Sparrow eventually hit the same wall: a red error banner, a status code, and nothing else. The next step was always the same — copy the code, tab over to the docs, then tab over to Slack. Support tickets tagged 'confusing error' had been climbing for two quarters straight.",
          "The original ask that landed on my desk was small: 'make the error messages friendlier.' It didn't take long to see that friendlier copy wasn't going to fix a workflow problem.",
        ],
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
    subheading:
      "A polymer trading platform needed to go mobile. The brief said 'port the web app.' The research said something else entirely.",
    role: [
      "Led product design discovery and mobile IA from scratch",
      "Partnered with the founding team and 1 mobile engineer",
      "Interviewed 9 active traders across desktop and field use",
    ],
    impact: [
      "Reduced the core trading flow from 14 taps to 5",
      "Redefined the mobile brief before a single screen was built",
      "Set the IA that shipped across both iOS and Android",
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Polystox had built a successful web platform for polymer trading — dense tables, multi-panel dashboards, dozens of filters. It worked, because traders sat at desks with two monitors. Leadership wanted the same experience on a phone.",
          "'Create a native mobile app' was the literal instruction. Nobody had yet asked whether a phone was the right container for a desktop-shaped workflow.",
        ],
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
    subheading:
      "A 'let's make this look better' request turned into defining the visual identity Sparrow still uses today.",
    role: [
      "Owned visual direction for the marketing site and design system",
      "Collaborated with the founder, a copywriter, and 2 engineers",
      "Built and documented the component library that followed",
    ],
    impact: [
      "Lifted homepage sign-up conversion by 22% post-launch",
      "Design language adopted across product, deck, and brand",
      "Cut new-page design time in half via the component library",
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Sparrow's marketing site had grown one landing page at a time — each one designed in isolation, none of them quite agreeing on a typeface, a shade of blue, or a button shape. It functioned, but it didn't say anything about who Sparrow was.",
          "The request that started this project was almost offhand: 'the site feels a bit dated, can we refresh it?'",
        ],
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
