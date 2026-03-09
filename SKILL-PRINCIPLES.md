# Sidebar AI — Core Principles for All Legal Skills

*Extracted from `legal-ai-feasibility-report.md`. Every skill we build must follow these.*

> **Companion documents:**
> - [`legal-ai-feasibility-report.md`](./legal-ai-feasibility-report.md) — Full research, architecture, and competitive analysis
> - [`How-to-Build-Claude-Skills-Tutorial.md`](/Users/peterlee/Library/Application%20Support/Claude/local-agent-mode-sessions/7debe6cc-e009-4b37-9adc-89f34f43ba18/49b63688-9d08-446f-a331-7a86409b8331/local_3094d384-d8d1-42c8-b17a-e16a65e87d94/outputs/How-to-Build-Claude-Skills-Tutorial.md) — General tutorial on how to build Claude skills (folder structure, YAML frontmatter, testing, distribution)

---

## 0. Multi-Turn Context Gathering

Skills should be **fast to use, not annoying.** Only ask for context that changes the output. If you can infer it, infer it. If it doesn't matter, don't ask.

### The Golden Rule: Maximum 1 Question Round

The user should never go back and forth more than once before the skill starts working. That means:
- **Best case:** User provides everything upfront → skill runs immediately
- **Acceptable:** Skill asks 1 batch of questions → user answers → skill runs
- **Unacceptable:** Multiple rounds of questions before any work begins

### Per-Skill Context Requirements

Each skill has a different depth of questioning. Only ask what is **absolutely required** — meaning the output would be wrong or misleading without it.

#### Contract Change Analysis (`/legal:redline-summary`) — Ask 1 Thing

| Context | Required? | Why | Can Infer? |
|---|---|---|---|
| Client role (Buyer/Seller) | **YES** | Flips the entire risk direction framing. "Cap reduced" is bad for Buyer, good for Seller. Without this, every risk assessment is ambiguous. | No — must ask |
| Document type | No | Infer from content (first few pages reveal if it's a purchase agreement, credit agreement, NDA, etc.) | **Yes** |
| Deal stage | No | Doesn't change the analysis — changes are changes regardless of round number | N/A |
| What user wants | No | Default to full analysis. If they want less, they'll say so. | **Yes — default full** |

**Implementation:**
```markdown
## Before Starting

If the user uploads two documents without specifying their role:
- Ask ONE question: "Are you representing the Buyer or Seller?"
- That's it. Infer everything else from the documents.
- If they say "compare these" with no role, you still must ask — this is
  the one thing you cannot get wrong.

If the user says "compare these as Buyer's counsel" — start immediately.
Do not ask anything else.
```

#### Smart Skim (`/legal:smart-skim`) — Ask 0 Things (Usually)

| Context | Required? | Why | Can Infer? |
|---|---|---|---|
| Document type | No | Read the first 2-3 pages — it's obvious if it's a purchase agreement, credit agreement, lease, etc. | **Yes** |
| Client role | No | Smart Skim flags unusual sections regardless of side | N/A |
| Specific concerns | No | Skill flags everything unusual — user can focus on what they care about after | N/A |

**Implementation:**
```markdown
## Before Starting

Start immediately when the user uploads a document.
Do NOT ask questions — infer the document type from content.

Only ask if the document is genuinely ambiguous (rare):
"This appears to be either a credit agreement or a loan
participation agreement — which is it?"

Otherwise: read, analyze, deliver the reading guide.
```

#### Client Intelligence (`/legal:client-kb`) — Ask 1 Thing

| Context | Required? | Why | Can Infer? |
|---|---|---|---|
| Client name | **YES** | Ethical walls — querying the wrong client is malpractice. Never guess. | No — must confirm |
| Query / what they want | **YES** | Open-ended tool — need to know what they're looking for | No — must ask |
| Scope (all matters or specific) | No | Default to all matters for the client. They'll narrow if needed. | **Yes — default all** |

**Implementation:**
```markdown
## Before Starting

The user must specify a client. If they don't:
- Ask: "Which client, and what are you looking for?"
- ONE question. Not two separate messages.

If they say "What arguments have we used for Acme Corp on
statute of limitations?" — start immediately. Client = Acme Corp,
query = statute of limitations arguments. Don't re-ask.
```

#### Negotiation Playbooks (`/legal:playbook`) — Ask 1-2 Things

| Context | Required? | Why | Can Infer? |
|---|---|---|---|
| Opposing counsel/firm | **YES** | The entire playbook is built around their patterns | No — must ask |
| Deal type | **YES** | Tactics differ by deal type (M&A vs lease vs financing) | Sometimes — if they mention "the acquisition" infer M&A |
| Client role | No | Usually obvious from context ("we're buying..." = Buyer) | **Usually yes** |
| Negotiation stage | No | Doesn't change the playbook — it's historical data | N/A |

**Implementation:**
```markdown
## Before Starting

If the user provides opposing counsel + deal context, start immediately.
Example: "What's Baker & Sterling's pattern on M&A indemnification?"
→ Opposing = Baker & Sterling, deal type = M&A. Start.

If missing opposing counsel:
- Ask: "Which firm or attorney are you going against, and what type of deal?"
- ONE question. Both pieces in one ask.
```

#### Deal Context Graph (`/legal:deal-context`) — Ask 0 Things

| Context | Required? | Why | Can Infer? |
|---|---|---|---|
| Which document changed | No | If they upload a new version, diff against the previous automatically | **Yes** |
| Which related docs to check | No | The graph knows all related documents — check everything | **Yes** |

**Implementation:**
```markdown
## Before Starting

When a new document version is uploaded or a change is detected:
- Automatically identify what changed
- Automatically traverse the deal graph for all affected documents
- Deliver the impact analysis

No questions needed. The whole point of this skill is speed —
"a term changed, here's everything affected" should take seconds.
```

#### M&A Closing Automation (`/legal:closing-checklist`) — Ask 0 Things

| Context | Required? | Why | Can Infer? |
|---|---|---|---|
| New vs updating existing | No | If no prior checklist exists, it's new. If one exists, it's an update. | **Yes** |
| Document type | No | It's a purchase agreement — that's the only input this skill takes | **Yes** |

**Implementation:**
```markdown
## Before Starting

When the user uploads a purchase agreement:
- Start immediately. Generate the closing checklist.
- If a prior checklist exists for this matter, show what's changed.
- No questions needed — the document contains everything.

Only confirm if something is genuinely unusual:
"This appears to be an asset purchase, not a stock purchase.
Generating checklist for asset purchase. Correct?"
```

### Summary

| Skill | Questions Before Starting | What to Ask |
|---|---|---|
| Contract Change Analysis | **1 question max** | Buyer or Seller? (only if not stated) |
| Smart Skim | **0 questions** | Start immediately — infer doc type |
| Client Intelligence | **1 question max** | Which client + what are you looking for? |
| Negotiation Playbooks | **1 question max** | Opposing counsel + deal type (if not stated) |
| Deal Context Graph | **0 questions** | Auto-detect and run |
| M&A Closing Checklist | **0 questions** | Auto-generate from document |

### Anti-Annoyance Rules (Apply to All Skills)

1. **Never ask what you can infer.** If the user uploaded a 120-page document that starts with "STOCK PURCHASE AGREEMENT," don't ask "what type of document is this?"
2. **Never ask one question at a time.** If you need client name and query, ask both in one message.
3. **Never re-ask what the user already said.** If they wrote "compare these as Buyer's counsel," don't ask "are you the Buyer or Seller?"
4. **Default to doing more, not less.** If they don't specify scope, analyze everything. They can tell you to narrow down. It's better to over-deliver than to stop and ask "did you want full analysis or just a summary?"
5. **Confirm only when it's fast.** A one-line confirmation ("Analyzing as Buyer's counsel — starting now.") is fine. A paragraph restating everything they said is annoying.
6. **If in doubt, start working.** It's better to produce a Buyer-perspective analysis and have the user say "actually I'm the Seller" than to stall with questions. The user can redirect — they can't un-wait.

---

## 1. The 7 Non-Negotiable Anti-Hallucination Rules

These are encoded into **every skill's system prompt**. No exceptions.

### Rule 1: ALWAYS CITE
Every claim references `[Section X.Y, p.Z]`. No unsourced statements.
```
Bad:  "The indemnification cap is $20M"
Good: "The indemnification cap is $20M [Section 8.4(a), p.23, line 7]"
```

### Rule 2: ALWAYS QUOTE BOTH VERSIONS
Show exact source text, don't paraphrase. When comparing changes, show the FROM and TO text.
```
Bad:  "The non-compete was extended"
Good: "Changed FROM: '12 months following the Closing Date'
       Changed TO: '24 months following the Closing Date'
       [Section 5.2(a), p.14]"
```

### Rule 3: NEVER COMPARE FROM MEMORY
Each section analysis includes the actual source text in the prompt. Never rely on earlier context window content.

### Rule 4: FLAG UNCERTAINTY
When not confident, say so explicitly.
```
"⚠ VERIFY: This appears to be a formatting change, not substantive. Confirm with source document."
```

### Rule 5: SEPARATE FACTS FROM INTERPRETATION
```
FACT (from document): "Cap changed from $50M to $20M"
INTERPRETATION (AI analysis): "This reduces recovery by 60%"
```
Both labeled clearly so the lawyer knows what's from the doc vs. what's AI reasoning.

### Rule 6: VERIFY ALL NUMBERS
Dollar amounts, percentages, dates, and thresholds get a dedicated verification step.
```
"VERIFICATION: Re-reading Section 8.4(a)... confirmed:
 previous cap was $50,000,000, new cap is $20,000,000 ✓"
```

### Rule 7: STRUCTURED OUTPUT
Use structured schemas (JSON-like), not free-form prose. Structured output constrains the model and reduces hallucination vs. open-ended narrative.

---

## 2. Multi-Pass Processing Architecture

**Never send a raw 100+ page document in a single call for complex analysis.** Use this pipeline:

### Pass 1: Structure Extraction (Full Context OK)
- Send entire document
- Extract ONLY: table of contents, section boundaries, document type, all parties, all defined terms, cross-reference graph
- This works reliably because it's **extraction, not reasoning**

### Pass 2: Section-by-Section Deep Analysis (Parallel if MCP, Sequential if Cowork)
For each major section, send:
- The section text (~5K-10K tokens)
- All defined terms used in that section
- Structural context (where this sits in the document)
- Any directly cross-referenced sections
- Each call is small and focused = high accuracy

### Pass 3: Cross-Reference Resolution + Synthesis
- Send all section summaries (compressed ~15K-20K tokens total)
- The structural map from Pass 1
- Generate integrated analysis, flag inconsistencies, resolve cross-references

### Pass 4: Verification (The Trust Layer)
- Select 5-10 highest-risk claims from the analysis
- For each: re-read the source text, confirm the claim
- Output: "VERIFIED ✓" or "CORRECTION: actual text says..."
- All dollar amounts, dates, and thresholds are verified

### Strategy by Document Size

| Document Size | Passes | Approach |
|---|---|---|
| Under 30 pages (~15K tokens) | 1 pass | Full context, single call |
| 30-50 pages (15K-25K tokens) | 1-2 passes | Full context + verification |
| 50-100 pages (25K-50K tokens) | 2-3 passes | Structure extraction + section analysis |
| 100-200 pages (50K-100K tokens) | 4 passes | Full multi-pass pipeline |
| 200-300 pages (100K-150K tokens) | 4 passes + RAG | Section-level + retrieval augmented |
| 300+ pages or 50+ doc deal room | Triage first | Smart Skim → prioritized multi-pass |

---

## 3. Legal Document Chunking: Section-Aware, Not Arbitrary

Never split documents at arbitrary token limits. Use **legal-aware section chunking**:

```
Document Parsing
    ↓
Section Detection (ARTICLE I, Section 2.1, EXHIBIT A, etc.)
    ↓
Hierarchical Tree Construction
    Document
    ├── ARTICLE I: DEFINITIONS
    │   ├── Section 1.1: Defined Terms
    │   └── Section 1.2: Interpretation
    ├── ARTICLE II: THE TRANSACTION
    │   ├── Section 2.1: Purchase Price
    │   └── Section 2.2: Adjustments
    └── EXHIBITS
    ↓
Each chunk carries metadata:
    - Full path: ARTICLE II > Section 2.3 > (b) Prepayment
    - Parent section summary
    - Adjacent sibling sections
    - Defined terms used
    - Outbound cross-references
```

**Critical:** Always extract definitions first and make them available to all subsequent processing. Definitions are the backbone of legal documents — a term defined in Article I is used everywhere.

---

## 4. How Lawyers Actually Read Contracts (Smart Skim Model)

Skills that triage documents must mirror how experienced lawyers read:

### The Reading Order
1. **First pass (2-5 min):** Table of contents, parties, effective date, overall structure
2. **Second pass — "money pages" (80% of time):** Indemnification, reps & warranties, termination, liability limitations, non-compete/non-solicit, change of control, conditions precedent
3. **Third pass:** Definitions affecting substantive provisions
4. **Final pass (skim):** Boilerplate — severability, entire agreement, counterparts, notices

### Attention Scoring (1-5)

| Score | Label | Color | Meaning |
|---|---|---|---|
| 1 | Standard | Green | Boilerplate, matches market standard |
| 2 | Mostly Standard | Light Green | Minor variations, quick check |
| 3 | Review Recommended | Yellow | Deal-specific terms, moderate customization |
| 4 | Careful Review | Orange | Non-standard language, unusual provisions |
| 5 | Critical Attention | Red | Highly unusual, major risk areas, red flags |

### Boilerplate vs. Must-Read

| Typically Skimmable (GREEN) | Must Read Carefully (RED) |
|---|---|
| Severability | Indemnification (caps, baskets, escrows) |
| Counterparts | Termination rights and consequences |
| Entire agreement | Liability limitations and exclusions |
| Notices provisions | Reps & warranties (deal-specific) |
| Standard amendments/waivers | Covenants (especially restrictive) |
| Standard assignment | Purchase price adjustments / earnouts |
| Headings / interpretation | Conditions to closing |
| Standard definitions ("Business Day") | Non-compete / non-solicit |
| Force majeure (standard form) | IP ownership and licensing |
| Governing law (unless unusual) | Data protection / privacy terms |

**Critical caveat:** Even "boilerplate" can contain hidden traps. A severability clause with a reformation provision, or an entire agreement clause with unusual carve-outs. The AI must flag **deviations from standard**, not just classify by section heading.

---

## 5. The 5 Cross-Reference Patterns (Deal Context)

When building skills that work across multiple documents in a deal:

| Pattern | Risk | Example |
|---|---|---|
| **Defined term cascade** | Change in main agreement silently changes meaning in every ancillary doc | Modifying "Material Adverse Effect" in purchase agreement affects TSA, Escrow, IP License |
| **Conditions precedent web** | Missing one link can block closing | Credit agreement funding conditioned on purchase agreement terms |
| **Economic term consistency** | Numbers must reconcile across docs | Purchase price → escrow amount (10%) → tax allocation → working capital |
| **Temporal dependencies** | Dates must be consistent | If outside date extends, financing commitment must also extend |
| **Rep & warranty mirroring** | What seller reps must be consistent with what buyer reps to lenders | "SunGard provisions" in acquisition financing |

---

## 6. The Most Dangerous Hallucination Patterns

Not fabricating entire clauses — it's **subtle errors**:
- Wrong threshold numbers ($50M vs $50K)
- Misattributed obligations (saying Borrower must do X when it's the Lender's)
- Incorrect cross-reference resolution (Section 7.3 says X, but AI attributes it to Section 7.2)
- "Shall" vs "may" confusion (legally significant)

**Design all skills to make errors detectable, not silent.** A wrong dollar amount with a source citation is easily caught when the lawyer checks. A wrong dollar amount without a citation goes unnoticed.

---

## 7. Output Design Principles

### Change Analysis Output Structure
Every change analysis must include:
1. **Executive summary:** Total changes, how many critical/moderate/minor
2. **Risk-flagged changes:** HIGH / MEDIUM / LOW per change
3. **Section-by-section breakdown** with risk assessment
4. **Direction analysis:** "This change shifts risk from Seller to Buyer"
5. **Suggested responses:** Draft pushback language
6. **Estimated review time:** "Full read ~3 hrs → With this guide ~45 min"

### Classification: CRITICAL / MODERATE / MINOR
- **CRITICAL:** Substantive changes that alter rights, obligations, or risk exposure. Require partner review.
- **MODERATE:** Substantive but expected in negotiation. Require attorney review.
- **MINOR:** Stylistic, formatting, cross-reference corrections. Can skim.

---

## 8. Ethical Wall Enforcement

Non-negotiable for any skill that touches client data:
- Per-client vector namespaces with strict access controls
- Integration with firm's identity provider (Azure AD / Entra ID)
- Mirror iManage security groups
- Full audit logging of every query and retrieved document
- No cross-client synthesis unless explicitly authorized
- **A single cross-client leak = malpractice + bar discipline**

---

## 9. Data Safety Principles

Encoded into every client communication and skill behavior:
1. **Your documents never leave your firm's systems** — processed in-memory, never stored by us
2. **We never store, access, or train AI on your data** — Anthropic's contractual no-training guarantee
3. **Attorney-client privilege stays intact** — service provider model, data processor relationship
4. **The firm owns their API keys and relationships** — they pay Anthropic directly, we never see their bills
5. **Every output is assistive, not autonomous** — attorney reviews all output, AI is a reading assistant

---

## 10. Phase Architecture

Every skill follows this phase model:

### Phase 1: Cowork Only (Zero Infrastructure)
- Markdown skill file only, no MCP
- Lawyer uploads documents manually
- Claude orchestrates multi-pass pipeline sequentially within conversation
- Processing time: 3-5 minutes for 100-page doc
- Ship in days

### Phase 2: MCP Server (Automation)
- One Python server (~500 lines, 9 functions)
- Deterministic diff (diff-match-patch, NOT Claude) for character-level accuracy
- Parallel section analysis via Claude API
- Auto-pull/push to iManage
- DOCX output with real track changes
- Processing time: 45-90 seconds for 100-page doc

### Phase 3: Intelligence Layer (Pattern Recognition)
- ~80 more lines of Python (2 new MCP tools)
- Negotiation history across rounds
- Opposing counsel pattern recognition
- Connects to historical data for predictions
- Mostly prompt engineering, not code

**Phase 1 proves value. Phase 2 adds automation. Phase 3 adds intelligence.**

---

## 11. Model Routing Strategy

Built into MCP server code (Phase 2+). The firm never configures this:

| Pass Type | Model | Why |
|---|---|---|
| Structure extraction | Haiku 4.5 ($1/$5 per MTok) | Mechanical extraction, fast + cheap |
| Section analysis | Sonnet 4.6 ($3/$15 per MTok) | Needs nuanced legal understanding |
| Cross-reference resolution | Sonnet 4.6 | Needs nuanced understanding |
| Synthesis / final summary | Sonnet 4.6 | Must be accurate |
| Verification / spot-checks | Haiku 4.5 | Yes/no confirmation, fast |
| Boilerplate detection | Haiku 4.5 | Pattern matching |
| Complex negotiation strategy | Opus 4.6 ($15/$75 per MTok) | Rare, only when needed |

**Accuracy first, cost second.** Use prompt caching on system prompts + anti-hallucination rules (90% savings on cached input).

---

## 12. What No Competitor Does (Our Differentiators)

Build skills that exploit these gaps — no existing tool does any of these:

| Capability | Existing Tools | Us |
|---|---|---|
| AI summarization of WHY changes matter | No — they show WHAT changed | Yes — risk assessment, direction, suggested responses |
| Prioritized reading guide / heat map | No | Yes — Smart Skim with color-coded sections |
| Per-client knowledge base with ethical walls | No — Harvey is firm-wide only | Yes |
| Opposing counsel profiling from historical data | No | Yes |
| AI-generated negotiation playbooks | No — Luminance applies YOUR playbook | Yes — generates from data |
| Cross-document deal relationship mapping | No | Yes — Deal Context Graph |
| Defined term cascade tracking | No | Yes |
| Change impact analysis across deal documents | No | Yes |

---

## 13. Legal-Specific Language Rules

Every skill must use language lawyers understand:
- **No jargon abbreviations without expansion:** Always write "purchase agreement" not "SPA", "transition services agreement" not "TSA", "Material Adverse Effect" not "MAE"
- **Use legal precision:** "shall" vs "may" matters. "Indemnification cap" not "liability limit."
- **Reference specific sections:** `[Section 8.4(a), p.23]` not "in the indemnification section"
- **Direction language:** "Favors SELLER" / "Favors BUYER" — lawyers think in terms of whose position improves
- **Risk categories:** HIGH RISK / REVIEW / STANDARD — map to partner review / attorney review / safe to skip

---

## 14. The Kitchen Analogy (Skills + MCP)

From the Anthropic Skills Guide:
- **MCP = the professional kitchen** — access to tools, ingredients, equipment (iManage API, document retrieval, file upload)
- **Skills = the recipes** — step-by-step instructions on how to create something valuable (anti-hallucination rules, multi-pass pipeline, output formatting)
- Together, lawyers accomplish complex tasks without figuring out every step themselves

Without skills: users connect MCP but don't know what to do next. With skills: pre-built workflows activate automatically, consistent results every time.

---

## Quick Reference: Skill File Structure

```
legal-redline-summary/
├── SKILL.md                    # Required — instructions + YAML frontmatter
├── scripts/                    # Optional — validation scripts
│   └── verify_citations.py     # Check all citations reference real sections
├── references/                 # Optional — loaded as needed
│   ├── contract-types.md       # M&A, NDA, credit agreement benchmarks
│   ├── market-standards.md     # What's "normal" for each clause type
│   └── anti-hallucination.md   # The 7 rules (linked from SKILL.md)
└── assets/                     # Optional — output templates
    └── memo-template.md        # Format for AI summary memo
```

### YAML Frontmatter Requirements
```yaml
---
name: legal-redline-summary          # kebab-case, no spaces/capitals
description: Analyzes two contract versions and explains what changed,
  why it matters, risk level, and suggested responses. Use when user
  uploads two contract versions, says "compare contracts", "redline
  summary", "what changed", or "contract change analysis".
metadata:
  author: Sidebar AI
  version: 1.0.0
---
```

- `name`: kebab-case only, must match folder name
- `description`: MUST include what it does AND when to trigger it. Under 1024 chars.
- No XML tags (`< >`) — security restriction
- Can't use "claude" or "anthropic" in name
