/* =========================================================================
 * lib/seminars-faq.ts
 *
 *   Plain data module — no "use client" — so it can be imported by both the
 *   client-side SeminarsFAQ component AND the server-rendered /seminars page
 *   metadata + JSON-LD blocks. (Next.js drops named exports from client
 *   component files when they cross the server boundary; pulling the data
 *   into a non-client module is the documented fix.)
 * ========================================================================= */

export interface SeminarsFaqItem {
  question: string;
  answer: string;
}

export const SEMINARS_FAQ_ITEMS: SeminarsFaqItem[] = [
  {
    question: "What's a typical attendee list look like?",
    answer:
      "A working group of three to twelve people. The managing partner, two or three practice leaders, the COO or operations lead, your head of IT (or your IT MSP rep), and one or two associates who'll actually use the tools day-to-day. We discourage open-firm attendance — the seminar is decision-grade, not introductory.",
  },
  {
    question: "Half-day vs. full-day — which one should we book?",
    answer:
      "Most firms start with the half-day. It's enough to walk one workflow, cover bar ethics for your jurisdiction, and produce a written decision. The full-day adds a second workflow build, an extended ethics Q&A with bar-rule mapping for adjacent jurisdictions, and a half-hour with your IT team on integration prerequisites. Firms over fifteen attorneys or multi-jurisdiction practices usually prefer the full-day.",
  },
  {
    question: "How does the seminar happen?",
    answer:
      "Live remote, over video — your team joins from wherever they sit. The whole seminar is async-friendly in the sense that there's no travel, no hosting, no conference-room logistics for your firm. But the seminar itself is live with a senior engineer for the full session — never a recording, never a chatbot. During the workflow build in module four we're screen-sharing into your firm's real software while your team watches and reacts in real time.",
  },
  {
    question: "Do we need to prepare anything?",
    answer:
      "Three things, gathered in advance during a thirty-minute intake call: (1) one workflow you'd like us to build live — contract review, intake, conflict check, deposition prep, or due-diligence chronology; (2) two sanitized matter examples (we'll show you the redaction standard); (3) the integrations that matter to you — DMS, billing, calendar. That's it. We bring everything else.",
  },
  {
    question: "What does the seminar cost?",
    answer:
      "We discuss pricing in the intake call after the inquiry — it depends on the seminar format (half-day vs. full-day or split), the depth of pre-work, and whether the seminar attaches to an implementation sprint or a retainer afterward. We're transparent about it on the call. We don't publish pricing on this page because the wrong number on the screen distracts from whether the seminar is the right call for your firm at all.",
  },
  {
    question: "Can the seminar count toward CLE?",
    answer:
      "We're not currently a registered CLE provider. The ABA-rule and state-rule modules cover content that would typically qualify, and several state bars allow self-reported CLE for technical-competence training under Rule 1.1 — but you'll want to confirm with your state's CLE board. We can provide attendance documentation if that's helpful.",
  },
  {
    question: "What if our firm decides not to move forward after the seminar?",
    answer:
      "That's a fine outcome. Module five ends with a written one-page plan — sprint, pilot, or wait. \"Wait\" is on the menu, and we'll tell you why if it's the right call. The seminar is decision-grade. The point is the decision, not the sale.",
  },
  {
    question: "Is this just a sales pitch for the five-day sprint?",
    answer:
      "No. The seminar is a complete deliverable in its own right — your firm walks away with the workflow we built, the bar-ethics briefing, the policy template, and the one-page plan, whether or not you book a sprint after. Roughly half the firms that book a seminar end up running a sprint; the other half run a pilot, an internal program, or wait. All three outcomes are real recommendations we've given to firms that booked the seminar.",
  },
];
