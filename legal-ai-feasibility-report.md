# Legal AI Feasibility Report: 4 Pain Points for Law Firms
## Built with Claude API + iManage Integration

*Research compiled: March 8, 2026*

> **Companion documents:**
> - [`SKILL-PRINCIPLES.md`](./SKILL-PRINCIPLES.md) — Core principles, anti-hallucination rules, and design patterns extracted from this report. Use as the reference when building any new skill.
> - [`How-to-Build-Claude-Skills-Tutorial.md`](/Users/peterlee/Library/Application%20Support/Claude/local-agent-mode-sessions/7debe6cc-e009-4b37-9adc-89f34f43ba18/49b63688-9d08-446f-a331-7a86409b8331/local_3094d384-d8d1-42c8-b17a-e16a65e87d94/outputs/How-to-Build-Claude-Skills-Tutorial.md) — General tutorial on building Claude skills (folder structure, YAML, testing, distribution).

---

## Executive Summary

All four pain points identified by your lawyer colleagues are **technically feasible** to build using Claude's API capabilities with iManage as the document/email backbone. Here's the quick scorecard:

| Pain Point | Feasibility | Market Gap | Complexity | Priority |
|------------|------------|------------|------------|----------|
| 1. Redline/Blackline + AI Summary | **HIGH** | Large gap — no one does AI summarization of changes | Medium | Quick Win |
| 2. M&A Signature Automation | **HIGH** | Existing tools lack AI intelligence layer | High | Phase 2 |
| 3. AI Client Knowledge Base | **HIGH** | White space — no product exists | High | Strategic |
| 4. Contract Negotiation Playbooks | **HIGH** | No tool profiles opposing counsel systematically | High | Strategic |

---

## The iManage Foundation

**iManage is THE platform** — used by 90%+ of AmLaw 100 firms. Everything flows through it.

### What iManage Provides
- **Document Management (iManage Work)**: All documents organized by client/matter workspaces with version control
- **Email Management**: Auto-files emails into client/matter workspaces via Outlook integration
- **Security & Ethical Walls**: Granular access controls critical for law firm confidentiality
- **REST API (OAuth 2.0)**: Full CRUD on documents, emails, metadata, versions, workspaces, and search
- **Cloud Platform**: Modern API access, easier integration than on-prem; now the default for new deployments
- **Event Hub**: Webhooks for new/modified documents — enables real-time AI processing triggers

### Key API Capabilities
- Search, retrieve, and upload documents programmatically
- Access document version history
- Read/write custom metadata fields
- Full-text and metadata search across the repository
- Security-aware access (API respects iManage security policies)

### AI Features Already in iManage
- **iManage Insight+**: AI-powered search and knowledge discovery
- **iManage Extract** (formerly RAVN): AI document classification and data extraction
- **Threat Manager**: Behavioral analytics for insider threat detection
- **Microsoft Copilot integration**: Announced but limited

**No known direct Anthropic/Claude partnership exists yet — this is the opportunity.**

---

## Pain Point #1: Redline/Blackline Automation + AI Summarization

### The Problem
Lawyers receive revised contracts and need to:
1. Compare versions (redline = markup showing changes; blackline = clean final)
2. Review every change — often hundreds per document
3. Write a summary memo explaining what changed and why it matters
4. Step 3 takes 1-4 hours per complex agreement and is entirely manual

### What Exists Today
- **Litera Compare** (market leader), **Microsoft Word Compare**, **Draftable** — these show WHAT changed
- **None of them explain WHY changes matter** — that's the gap

### How Claude Solves This

**Architecture:**
```
Email/iManage Trigger → Document Extraction (.docx/.pdf parsing)
    → Deterministic Diff Engine (diff-match-patch, not Claude)
    → Claude AI Summarization Layer
    → Output: Redline doc + AI Summary Memo → Push back to iManage/Email
```

**What Claude would produce:**
1. **Executive Summary**: "47 changes. 5 substantively significant. Most impactful: indemnification cap reduced, non-compete scope narrowed."
2. **Risk-Flagged Changes**: HIGH/MEDIUM/LOW severity per change
3. **Section-by-Section Breakdown**: By contract section with risk assessment
4. **Direction Analysis**: "This change shifts risk from Seller to Buyer"
5. **Suggested Responses**: Draft pushback language

**Key Design Principle**: Claude should NOT be the diff engine — use deterministic algorithms for character-level comparison. Claude is the intelligence layer that summarizes and assesses legal significance.

### Feasibility Details
- A 30-page contract = ~15K-25K tokens; two versions = 30K-50K tokens — well within Claude's 200K context
- Cost: ~$0.10-$0.50 per comparison in API costs
- Even 100-page agreements (both versions) fit in context
- **MVP approach**: Email-in, email-out. Lawyer forwards two attachments → gets back redline + AI summary in minutes

### Verdict: **HIGHLY FEASIBLE — Best candidate for quick win MVP**

---

## Pain Point #2: M&A Signature Automation

### The Problem
M&A closings involve 50-200+ documents requiring signatures from multiple parties across jurisdictions. Current pain points:
- Manual tracking via spreadsheets and email
- Pre-signed signature pages held in escrow
- Coordinating counterparts across dozens of parties
- Last-minute changes requiring re-circulation
- Post-closing binder assembly is a multi-day manual process

### What Exists Today
- **DocuSign / Adobe Sign**: Not designed for deal complexity (treat documents individually, no escrow model)
- **Litera Transact**: Leading M&A closing platform — checklist management, sig page tracking, binder assembly
- **Legatics**: Cloud-based transaction management, strong UX
- **None use AI** to intelligently parse documents and automate the workflow

### How Claude Solves This (Phased Approach)

**Phase 1 — Closing Checklist Generation (Highest Impact, Lowest Risk)**
- Claude reads the purchase agreement and auto-generates a structured closing checklist
- Identifies all conditions to closing, required deliverables, and ancillary documents
- Immediate value, minimal risk

**Phase 2 — Signature Block ID + Signature Page Generation**
- Claude scans all closing documents and extracts every signature block
- Identifies signing party, capacity, notarization requirements
- Auto-generates standalone signature pages following firm formatting
- Cross-references against party list to flag missing/incorrect blocks

**Phase 3 — Routing + Tracking**
- Integration with DocuSign API for automated routing
- Real-time status dashboard: "12 of 47 documents fully executed"
- Targeted follow-up reminders to parties with outstanding signatures

**Phase 4 — Full Orchestration + iManage Integration**
- End-to-end: checklist → routing → escrow → release → binder assembly
- Pull drafts from iManage, push executed docs back
- Automated closing binder organization

### Legal Considerations
- **ESIGN Act + UETA**: Electronic signatures legally valid for most M&A documents
- **Exceptions requiring wet signatures**: Some UCC filings, real property deeds, certain foreign jurisdiction docs, stock certificates
- **Cross-border complexity**: EU (eIDAS), UK, Asia-Pacific have varying e-signature requirements
- Claude can flag these exceptions automatically

### Verdict: **HIGHLY FEASIBLE — Phase 1 (checklist generation) is an immediate win**

---

## Pain Point #3: AI Client Knowledge Base

### The Problem
Institutional knowledge about clients is fragmented:
- Strategy lives in partners' heads (walks out when they leave)
- Past briefs, memos, correspondence buried in iManage with no synthesis
- No system captures *how* the firm argued for a client, what worked, opposing counsel patterns
- Every new associate starts from scratch on a client's history

### What Exists Today
- **iManage Insight+**: Finds documents, doesn't synthesize strategic knowledge
- **Harvey AI / CoCounsel**: General-purpose legal AI assistants, not per-client knowledge systems
- **No existing product builds synthesized, queryable per-client knowledge profiles** — this is white space

### How Claude Solves This

**Architecture: Per-Client RAG Knowledge Base**
```
iManage (Source) → Document Ingestion Pipeline
    → Legal-Aware Chunking (respect section boundaries, argument blocks)
    → Embedding Generation → Vector Database (per-client namespaces)
    → Claude Query Interface with Ethical Wall Enforcement
    → Client Profile Store (living summaries periodically regenerated)
```

**What lawyers could ask:**
- "What arguments have we made for Client X on statute of limitations?"
- "Summarize our history with Client X in the 9th Circuit"
- "What has opposing counsel Smith & Jones argued against us in Client X matters?"
- "What positions did Client X take on indemnification in their last 3 deals?"

**Document types Claude can ingest and understand:**
| Document Type | Feasibility |
|---------------|-------------|
| Briefs / Motions | Excellent — highly structured, argument-heavy |
| Legal Memos | Excellent — IRAC structure maps well |
| Correspondence | Good — identifies strategic positions, negotiation dynamics |
| Deposition Transcripts | Good — Q&A format, key admissions, contradictions |
| Court Filings | Excellent — structured, well-suited to NLP |
| Contracts | Excellent — clause extraction is well-studied |

**Critical Feature — Opposing Counsel Profiles:**
```
Opposing Counsel: Smith & Jones LLP
Matters Against: 4 (2 litigation, 2 arbitration)
Common Tactics:
  - Aggressive discovery (motion to compel in 3/4 matters)
  - Daubert challenges (2/4 matters)
  - Late-stage settlement (settled 2 matters within 30 days of trial)
Key Arguments Used:
  - Statute of limitations (3/4 matters)
  - Comparative fault (2/4 matters)
```

### Ethical Walls — Non-Negotiable
- Per-client vector namespaces with strict access controls
- Integration with firm's identity provider (Azure AD / Entra ID)
- Mirror iManage security groups
- Full audit logging of every query and retrieved document
- No cross-client synthesis unless explicitly authorized
- This must be **bulletproof** — a single cross-client leak = malpractice + bar discipline

### Verdict: **HIGHLY FEASIBLE — White space opportunity, but requires rigorous security engineering**

---

## Pain Point #4: Contract Negotiation History & Playbooks

### The Problem
In contract negotiations, lawyers want to:
- See how a specific opposing lawyer/firm has historically negotiated
- Know their typical positions, fallbacks, and concession patterns
- Have a "run book" for each deal type with suggested responses
- Learn from past deal outcomes to improve future negotiations

### What Exists Today
- **Luminance**: Closest competitor — AI negotiation against playbooks, but limited historical profiling
- **Ironclad / ContractPodAi**: CLM with some analytics, but no opposing counsel profiling
- **ThoughtRiver**: Rule-based playbook matching, not data-driven
- **No existing tool systematically builds opposing counsel profiles from historical negotiation data** — genuine differentiator

### How Claude Solves This

**Data Flow:**
```
iManage → Retrieve contract version sets per deal
    → Claude analyzes each version pair (redline analysis)
    → Structured extraction: clause type, change direction, proposing party, outcome
    → Store in database → Aggregate per opposing party
    → Generate deal-specific playbooks
```

**Opposing Counsel Profile Example:**
> "Smith & Jones LLP, when representing technology vendors, consistently pushes to (1) cap liability at fees paid in prior 12 months, (2) exclude consequential damages entirely, (3) narrow IP indemnification to third-party infringement claims only. They typically concede on (2) if offered mutual exclusion with carve-outs for IP and confidentiality. Average negotiation: 3.2 rounds over 18 days."

**AI Playbook Workflow:**
1. **Deal initiation**: Lawyer identifies deal type + opposing counsel
2. **Profile retrieval**: System pulls opposing counsel profile + relevant historical deals
3. **Playbook generation**: Claude generates deal-specific playbook with:
   - Firm's standard positions for this deal type
   - Adjustments based on opposing counsel's known patterns
   - Predicted areas of contention with suggested responses
4. **Real-time support**: As markups come in, Claude compares against predicted patterns and suggests responses
5. **Post-deal learning**: Final outcome ingested to improve future predictions

**Context Window Strategy:**
- Single deal deep analysis (all drafts): 80K-150K tokens — fits in one pass
- Cross-deal patterns: Use summarize-then-aggregate approach
  - Phase 1: Analyze each deal → structured summary
  - Phase 2: Feed multiple summaries into context for pattern ID

### Ethical Considerations
- Aggregated patterns are likely permissible; specific deal details require care
- ABA Rule 1.6 (Confidentiality) and Rule 1.9 (Former Clients) are relevant
- Mitigations: aggregate at statistical level, access controls, client consent, ethics committee review
- GDPR may apply to profiling individual lawyers in EU matters

### Verdict: **HIGHLY FEASIBLE — Strongest market differentiator, needs 10-15 deals per opposing party for reliable patterns**

---

## Unified Architecture Vision

All four pain points share common infrastructure:

```
┌──────────────────────────────────────────────────────────────┐
│                        LAW FIRM USERS                         │
│              Partners / Associates / Paralegals               │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                     AI APPLICATION LAYER                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐│
│  │ Redline  │ │   M&A    │ │  Client  │ │   Negotiation    ││
│  │ Summary  │ │ Closing  │ │Knowledge │ │    Playbooks     ││
│  │  Engine  │ │Automator │ │   Base   │ │                  ││
│  └──────────┘ └──────────┘ └──────────┘ └──────────────────┘│
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                    CLAUDE API (Anthropic)                      │
│  - Document analysis & summarization                          │
│  - Structured data extraction                                 │
│  - Pattern recognition across deals                           │
│  - Playbook generation                                        │
│  - Natural language query interface                           │
│  Context: 200K tokens | No training on API data               │
└──────────────────────────┬───────────────────────────────────┘
                           │
              ┌────────────┼────────────────┐
              ▼            ▼                ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────────┐
│Vector DB     │  │ Structured   │  │ Ethical Wall      │
│(Pinecone/    │  │ Database     │  │ Enforcer          │
│ Weaviate/    │  │(profiles,    │  │(access controls,  │
│ pgvector)    │  │ playbooks,   │  │ audit logging,    │
│              │  │ deal history) │  │ security groups)  │
└──────────────┘  └──────────────┘  └──────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                   iMANAGE (Source of Truth)                    │
│  REST API (OAuth 2.0) | Event Hub (webhooks)                  │
│  Documents | Emails | Metadata | Version History              │
│  Security Policies | Ethical Walls | Workspaces               │
└──────────────────────────────────────────────────────────────┘
```

---

## Regulatory & Compliance Summary

| Concern | Status | Mitigation |
|---------|--------|------------|
| Attorney-Client Privilege | Manageable | Anthropic API = no training on data; service provider model |
| Ethical Walls | Critical | Per-client namespaces; mirror iManage security; audit logging |
| Data Residency (GDPR) | Consideration | AWS Bedrock offers Claude with EU data residency options |
| Bar Association Rules | Permissive | ABA + state bars allow AI with supervision and confidentiality |
| SOC 2 Compliance | Required | Anthropic API is SOC 2 compliant; application layer needs it too |
| Malpractice Risk | Manageable | AI is assistive, not autonomous; attorney reviews all output |
| E-Signatures (M&A) | Mostly Solved | ESIGN Act + UETA; flag exceptions for wet signatures |

---

## Recommended Build Sequence

### Phase 1: Redline/Blackline + AI Summary (Quick Win — 2-3 months to MVP)
- Email-in/email-out or web upload interface
- Deterministic diff + Claude summarization
- Immediate, demonstrable value
- Lowest regulatory risk

### Phase 2: M&A Closing Checklist Generator (3-4 months)
- Claude parses purchase agreements → generates structured checklists
- Signature block identification and page generation
- iManage integration for document retrieval

### Phase 3: Client Knowledge Base (6-9 months)
- Per-client RAG with iManage as document source
- Legal-aware chunking and embedding pipeline
- Ethical wall enforcement
- Query interface for lawyers

### Phase 4: Negotiation Playbooks (9-12 months)
- Historical deal analysis and opposing counsel profiling
- Builds on Phase 1 (redline analysis) and Phase 3 (knowledge base)
- Playbook generation and real-time negotiation support
- Requires sufficient historical data accumulation

---

## Bottom Line

**All four pain points are buildable with Claude's current capabilities + iManage APIs.** The technology is ready. The key challenges are:

1. **Security engineering** — ethical walls and privilege protection must be bulletproof
2. **Data quality** — historical documents need cleanup to reconstruct deal timelines
3. **Lawyer adoption** — trust requires high accuracy, source citations, and human-in-the-loop design
4. **Speed to market** — Harvey, Luminance, and CoCounsel are adding features rapidly

The strongest competitive moat is in **Pain Points 3 & 4** (client knowledge base + negotiation playbooks) — no existing product does this. Pain Point 1 (redline summaries) is the fastest path to demonstrating value and getting lawyer buy-in.

---

# PART 2: Extended Features Research

*Additional research compiled: March 8, 2026*

---

## Pain Point #5: Sub-Deal Context Orchestration (The "Deal Context Graph")

### The Problem
Complex deals (M&A, financing, real estate) have a main deal with many interconnected sub-deals. Different attorneys work on different pieces but need to understand how their work relates to the whole. Currently this coordination is manual, error-prone, and context gets lost.

### How Deals Actually Link Together

A typical M&A deal has a **layered document hierarchy**:

**Tier 1 — Master Agreement (Purchase Agreement / SPA)**
- Contains the master definitions section (10-20 pages of defined terms)
- Terms cascade into all ancillary documents via: *"capitalized terms used but not defined herein shall have the meanings ascribed to them in the Purchase Agreement"*
- Conditions precedent reference other documents: *"Seller shall have delivered the Transition Services Agreement, duly executed"*
- Exhibits often contain forms of ancillary agreements

**Tier 2 — Ancillary Transaction Documents**
- Transition Services Agreement (TSA) — references SPA for Business definition, Transferred Assets, Closing Date
- IP License/Assignment — "Licensed IP" must match SPA asset schedules
- Employment/Non-Compete Agreements — scope must align with SPA restrictive covenants
- Escrow Agreement — amount, release conditions, claims process must mirror SPA indemnification precisely
- Supply Agreements — pricing/volumes must match SPA disclosure schedules

**Tier 3 — Financing Documents**
- Credit Agreement — "Acquisition" defined by reference to SPA; funding conditions interconnected
- Security Agreements/Guarantees — collateral descriptions must align with what's being acquired
- Intercreditor Agreements — priorities must be internally consistent

**Tier 4 — Regulatory & Third-Party**
- HSR/antitrust filings, CFIUS, third-party consents — all reference the deal structure

### The 5 Critical Cross-Reference Patterns

| Pattern | Risk | Example |
|---------|------|---------|
| **Defined term cascade** | Change in SPA silently changes meaning in every ancillary | Modifying "Material Adverse Effect" in SPA affects TSA, Escrow, IP License |
| **Conditions precedent web** | Missing one link can block closing | Credit agreement funding conditioned on SPA terms "not materially different" from commitment date |
| **Economic term consistency** | Numbers must reconcile across docs | Purchase price → escrow amount (10%) → tax allocation → working capital adjustments |
| **Temporal dependencies** | Dates must be consistent | If SPA outside date extends, financing commitment letter expiration must also extend |
| **Rep & warranty mirroring** | What seller reps in SPA must be consistent with what buyer reps to lenders | "SunGard provisions" in acquisition financing |

### Solution: The Deal Context Graph

**Architecture: A knowledge graph that maps all deal documents and their relationships**

```
DealContextGraph {
  deal: Deal
  documents: [Document]           // All deal docs with version history
  definedTerms: [DefinedTerm]     // Every defined term + where it's defined + where it's used
  crossReferences: [CrossReference] // Every cross-doc reference
  dependencies: [Dependency]       // What changes when something else changes
  parties: [Party]                 // All entities and their roles
  economicTerms: [EconomicTerm]   // Dollar amounts, percentages, dates
}
```

**Stored in a graph database (Neo4j or similar)** with nodes for documents, defined terms, provisions, parties, and economic terms — connected by relationship edges like `DEFINES`, `INCORPORATES_BY_REFERENCE`, `CONDITIONS_UPON`, `MUST_BE_CONSISTENT_WITH`.

### Key Capabilities

**1. Unified Defined Terms Register**
- For each term: where it's defined, where it's used by reference, and flag any inconsistencies
- Example alert: *"'Closing Date' is defined differently in the Escrow Agreement (Section 1.1) vs. the SPA (Section 1.1)"*

**2. Change Impact Analysis (The Killer Feature)**
When a new draft of any document is uploaded:
1. Diff against prior version
2. Identify which defined terms, provisions, or economic terms changed
3. Traverse the graph to find all downstream dependencies
4. Generate alerts:
   > *"The definition of 'Material Adverse Effect' in the SPA was modified. This term is incorporated by reference in: TSA (Section 1.1), Escrow Agreement (Section 1.1), IP License (Section 1.1). Attorneys on those workstreams should review."*
5. For economic changes:
   > *"Purchase Price changed from $500M to $480M. The Escrow Amount (defined as 10% of Purchase Price) should be updated from $50M to $48M."*

**3. Cross-Workstream Query**
An attorney working on the Escrow Agreement can ask:
- *"What is the indemnification cap in the SPA?"*
- *"What conditions precedent reference my document?"*
- *"Has the purchase price changed since my last draft?"*

**4. Interactive Deal Map**
Visual graph showing all documents, their relationships, status (draft/agreed/executed), and color-coded by workstream or risk level.

### Market Gap: Wide Open
| Capability | Current Tools | Gap |
|---|---|---|
| Deal checklist / status tracking | Legatics, Litera Transact | Covered |
| Document storage / sharing | HighQ, VDRs | Covered |
| Single-document AI review | Luminance, Kira | Covered |
| **Cross-document relationship mapping** | **None** | **OPEN** |
| **Defined term cascade tracking** | **None** | **OPEN** |
| **Change impact analysis across deal docs** | **None** | **OPEN** |
| **AI-generated deal map with semantic links** | **None** | **OPEN** |

### Verdict: **HIGHLY FEASIBLE — No existing tool does this. Massive differentiation opportunity.**

---

## Pain Point #6: iManage Drive + Automated Document Upload

### Good News: iManage Drive Exists

**iManage Drive** is a desktop application that presents iManage as a **virtual mapped drive** (like `S:` drive on Windows). It is NOT like Google Drive (no real-time co-authoring), but it does provide:
- Windows Explorer / macOS Finder experience — browse workspaces as folders
- Drag-and-drop filing
- Offline cache for recently accessed documents
- Works with any application via standard File > Open / Save dialogs

### Other Access Methods
| Method | Type | Use |
|---|---|---|
| iManage Drive | Virtual mapped drive | Desktop file-system access |
| iManage Work Desktop (FileSite) | Native app + Office panels | Deep Office/Outlook integration |
| iManage Work Web | Browser-based | Remote/cross-platform access |
| iManage Share | Secure external sharing | Share docs with clients/co-counsel |

### Automated Upload Pipeline: Fully Supported

The iManage REST API fully supports automated document creation. Here's how AI-generated documents get pushed back:

```
AI Generates Document (DOCX/PDF)
    ↓
Identify Target Workspace:
    GET /api/v1/workspaces?filter=custom1='[MATTER_NUMBER]'
    ↓
Create/Find Target Folder:
    POST /api/v1/workspaces/{id}/folders
    (e.g., "AI-Generated Summaries" subfolder)
    ↓
Upload Document with Metadata:
    POST /api/v1/workspaces/{id}/folders/{folder_id}/documents
    Metadata: doc_type, author, matter number, client number, description
    ↓
Set Security/Access Controls:
    PUT /api/v1/documents/{id}/security
    (Apply appropriate ACLs, respect ethical walls)
    ↓
Notify Attorneys:
    Via iManage webhooks, email, or Teams integration
```

### Key Details
- **OAuth 2.0 authentication** — supports both user-delegated and application-level (client credentials) flows
- **Version control** — subsequent AI runs upload new versions, not duplicate documents
- **iManage Share** — AI-generated summaries can be shared externally with clients/co-counsel via secure links with expiration dates and access controls
- **File size limits** — 500MB-1GB per document (AI-generated docs are typically <10MB, so no concern)
- **Rate limits** — hundreds to low thousands of requests/minute (more than sufficient)
- **Document linking** — related documents can be linked together via the API

### Verdict: **FULLY FEASIBLE — iManage API supports complete automation pipeline**

---

## Pain Point #7: Processing 100+ Page Documents Without Hallucination

### Why LLMs Hallucinate on Long Legal Documents

**The "Lost in the Middle" Problem** (Liu et al., Stanford/UC Berkeley, 2023):
- LLMs perform best on information at the **beginning or end** of context
- Accuracy drops 10-25% for information in the middle third
- Longer contexts exacerbate the effect
- This is especially dangerous for legal documents where a critical clause could appear on page 73 of 150

**Legal documents are uniquely challenging because they are:**
- Maximally information-dense (every word is load-bearing)
- Highly cross-referential (definitions in Article I, used everywhere)
- Structurally hierarchical (articles > sections > subsections > clauses)
- Precision-dependent ("shall" vs. "may" is legally significant)

**A 50K-token legal document is cognitively harder for an LLM than a 150K-token novel.**

### The Solution: Multi-Pass Processing Architecture

**Never send a raw 100+ page document to an LLM in a single call for complex analysis.** Instead:

#### Pass 1: Structure Extraction (Full Context OK)
Send entire document. Extract only:
- Table of contents + section boundaries
- Document type classification
- All parties identified
- Complete definitions dictionary
- Cross-reference graph (which sections reference which)

*This works reliably because it's extraction, not reasoning.*

#### Pass 2: Section-by-Section Deep Analysis (Parallel)
For each major section, send:
- The section text (~5K-10K tokens)
- All defined terms used in that section
- Structural context (where this sits in the document)
- Any directly cross-referenced sections

*Run all sections in parallel for speed. Each call is small and focused.*

#### Pass 3: Cross-Reference Resolution + Synthesis
Send:
- All section summaries from Pass 2 (compressed to ~15K-20K tokens total)
- The structural map from Pass 1
- Generate integrated analysis, flag inconsistencies, resolve cross-references

#### Pass 4: Verification (Spot-Check)
Select 5-10 high-importance claims and verify each against source text.

### Recommended Approaches by Document Size

| Document Size | Strategy | API Calls | Accuracy |
|---|---|---|---|
| <30 pages (~15K tokens) | Full context, single pass | 1-3 | High |
| 30-100 pages (15K-50K tokens) | Hybrid full-context + section-level | 25-35 | 95%+ |
| 100-300 pages (50K-150K tokens) | Strict section-level + RAG | 50-80 | 95%+ with verification |
| Full deal room (50+ docs, 1000+ pages) | Document triage → hierarchical processing | 200-500 | 95%+ with verification |

### 7 Non-Negotiable Anti-Hallucination Rules for Legal Documents

1. **Always require citations** — every claim must reference a specific section/page
2. **Always extract definitions first** — make them available to all subsequent processing
3. **Always use structured output** — JSON schemas, not free-form prose
4. **Always verify numerical values** (dollar amounts, percentages, dates) in a separate pass
5. **Never trust single-pass analysis** of any document over 50 pages
6. **Always provide source text** — never ask the model to recall from "memory"
7. **Implement fuzzy quote matching** — verify quoted text actually appears in the source

### The Most Dangerous Hallucination Pattern
Not fabricating entire clauses — it's **subtle errors**: wrong threshold numbers, misattributed obligations (saying Borrower must do X when it's the Lender's obligation), incorrect cross-reference resolution. These require systematic verification.

### Chunking Strategy: Legal-Aware Section Chunking

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

### Verdict: **SOLVABLE — Multi-pass + section-aware chunking + verification passes eliminate hallucination risk**

---

## Pain Point #8: AI Document Triage Skill ("Smart Skim")

### The Problem
Lawyers spend hours reading 100+ page contracts. Experienced lawyers know which sections to focus on and which to skim — but junior associates don't, and even seniors waste time on boilerplate.

### How Lawyers Actually Read Contracts

**First pass (2-5 min):** Table of contents, parties, effective date, overall structure

**Second pass — The "money pages" (where they spend 80% of time):**
- Indemnification — caps, baskets, survival periods
- Reps & warranties — non-standard or heavily qualified
- Termination — triggers, cure periods, termination fees
- Liability limitations — caps, consequential damages exclusions
- Non-compete/non-solicit — scope, duration, geography
- Change of control provisions
- Conditions precedent

**Third pass:** Definitions affecting the substantive provisions

**Final pass (skim):** Boilerplate — severability, entire agreement, counterparts, notices

### Boilerplate vs. Must-Read

| Typically Skimmable (GREEN) | Must Read Carefully (RED) |
|---|---|
| Severability | Indemnification (especially caps, baskets, escrows) |
| Counterparts | Termination rights and consequences |
| Entire agreement | Liability limitations and exclusions |
| Notices provisions | Reps & warranties (deal-specific ones) |
| Standard amendments/waivers | Covenants (especially restrictive) |
| Standard assignment | Purchase price adjustments / earnouts |
| Headings / interpretation | Conditions to closing |
| Standard definitions ("Business Day") | Non-compete / non-solicit |
| Force majeure (standard form) | IP ownership and licensing |
| Governing law (unless unusual) | Data protection / privacy terms |

**Critical caveat:** Even "boilerplate" can contain hidden traps. A severability clause with a reformation provision, or an entire agreement clause with unusual carve-outs. The AI must flag deviations from standard, not just classify by section heading.

### The "Smart Skim" Output

**Attention Score (1-5 per section):**
| Score | Label | Color | Meaning |
|---|---|---|---|
| 1 | Standard | Green | Boilerplate, matches market standard |
| 2 | Mostly Standard | Light Green | Minor variations, quick check |
| 3 | Review Recommended | Yellow | Deal-specific terms, moderate customization |
| 4 | Careful Review | Orange | Non-standard language, unusual provisions |
| 5 | Critical Attention | Red | Highly unusual, major risk areas, red flags |

**Example Output:**
```
DOCUMENT TRIAGE REPORT
======================
Contract: Asset Purchase Agreement
Parties: [Party A] / [Party B]
Total Pages: 47
Estimated Review Time: Full read ~3 hrs → Guided read ~1.5 hrs

PAGE-BY-PAGE HEAT MAP:
pp. 1-2    [GREEN]   Preamble, recitals — Standard
pp. 3-5    [GREEN]   Definitions — Mostly standard (NOTE: unusual MAE definition p.4)
pp. 6-8    [YELLOW]  Purchase Price & Adjustments — Deal-specific, review working capital
pp. 9-15   [RED]     Reps & Warranties — Non-standard knowledge qualifiers, unusual IP reps p.12
pp. 16-18  [YELLOW]  Covenants — Standard interim operating covenants with customization
pp. 19-21  [RED]     Indemnification — Unusual basket structure, no cap on fundamental reps
pp. 22-23  [ORANGE]  Termination — Reverse termination fee at 4.5% (above market 2-4%)
pp. 24-25  [GREEN]   Conditions to Closing — Standard
pp. 26-28  [GREEN]   Miscellaneous — Boilerplate, standard form

PRIORITY READING ORDER:
1. pp. 19-21 — Indemnification [CRITICAL]
2. pp. 9-15 — Reps & Warranties [CRITICAL]
3. pp. 22-23 — Termination [HIGH]
4. pp. 6-8 — Purchase Price [MEDIUM]
5. pp. 16-18 — Covenants [MEDIUM]
6. pp. 3-5 — Definitions [LOW - but check MAE definition]
7. pp. 24-28 — Conditions & Misc [LOW]
```

**Per-Section Speed Summary:**
```
INDEMNIFICATION (pp. 19-21) — Attention: CRITICAL
Summary: Seller indemnifies for breaches of reps with $2M basket (1% of
purchase price — market) and $20M cap (10% — market). HOWEVER: fundamental
reps are uncapped, and there is a special indemnity for environmental
matters with no time limitation.
⚠ FLAG: Uncapped fundamental reps exposure. No survival limit on
environmental indemnity — unusual, typically 6-10 year cap.
```

### Building This as a Claude Skill

A **Claude Skill** packages a specialized system prompt + structured I/O for a reusable task. The "Smart Skim" skill would include:

**System Prompt Contains:**
- Detailed taxonomy of clause types and boilerplate vs. substantive classification
- Market standard benchmarks for each contract type (M&A, credit agreements, SaaS, leases)
- Scoring rubric for the 1-5 attention scale
- Output format specification (heat map, reading order, section summaries)
- Instruction to err on the side of caution (flag as "review" rather than "skip" when uncertain)

**UX Flow:**
1. Upload PDF/DOCX contract
2. Processing (10-30 seconds)
3. Triage Dashboard: heat map + priority reading order + time savings estimate
4. Click any section for 1-2 sentence summary + attention score + specific flags
5. "Next priority section" button for guided reading

### No Existing Tool Does This
- **Kira / Luminance / ThoughtRiver** do clause extraction and risk scoring but don't produce a "reading guide" or "attention heat map" for single-document triage
- This fills a genuine gap — democratizing the expertise of senior associates who already do this mental triage

### Verdict: **HIGHLY FEASIBLE — Can be built as a Claude Skill. Start with M&A purchase agreements as the first contract type.**

---

## Updated Architecture: Complete Platform Vision

```
┌──────────────────────────────────────────────────────────────────┐
│                         LAW FIRM USERS                            │
│               Partners / Associates / Paralegals                  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                      AI APPLICATION LAYER                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────────────┐  │
│  │ Redline  │ │   M&A    │ │  Client  │ │   Negotiation      │  │
│  │ Summary  │ │ Closing  │ │Knowledge │ │    Playbooks       │  │
│  │  Engine  │ │Automator │ │   Base   │ │                    │  │
│  └──────────┘ └──────────┘ └──────────┘ └────────────────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────────────────────┐  │
│  │Deal Graph│ │ Smart    │ │    Multi-Pass Document            │  │
│  │ Context  │ │  Skim    │ │    Processing Engine              │  │
│  │Orchestr. │ │ Triage   │ │    (Anti-Hallucination)           │  │
│  └──────────┘ └──────────┘ └──────────────────────────────────┘  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
              ┌────────────┼──────────────────┐
              ▼            ▼                  ▼
┌──────────────┐  ┌──────────────┐  ┌────────────────────┐
│ Graph DB     │  │ Vector DB    │  │ Structured DB      │
│ (Neo4j)      │  │ (Pinecone/   │  │ (Postgres)         │
│              │  │  pgvector)   │  │                    │
│ Deal Context │  │ RAG for      │  │ Profiles, playbooks│
│ Graph: docs, │  │ knowledge    │  │ deal history,      │
│ terms, refs, │  │ base queries │  │ audit logs         │
│ dependencies │  │              │  │                    │
└──────────────┘  └──────────────┘  └────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                    CLAUDE API (Anthropic)                          │
│  Multi-pass processing | Structured extraction | Summarization    │
│  Pattern recognition | Playbook generation | Document triage      │
│  200K context | No training on API data | SOC 2 compliant         │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                   iMANAGE (Source of Truth)                        │
│  REST API (OAuth 2.0) | Event Hub (webhooks) | iManage Drive      │
│  Documents | Emails | Metadata | Version History                  │
│  Security Policies | Ethical Walls | Workspaces                   │
│  iManage Share (external collaboration)                           │
│                                                                    │
│  Automated pipeline: AI generates docs → uploads to workspace     │
│  → sets metadata + security → notifies attorneys                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Updated Build Sequence

### Phase 1: Smart Skim + Redline Summary (Quick Wins — 2-3 months)
- Smart Skim document triage skill (start with M&A purchase agreements)
- Redline/blackline AI summarization
- Both can be standalone tools with immediate value
- Builds lawyer trust in the AI

### Phase 2: Multi-Pass Document Engine + iManage Integration (3-4 months)
- Anti-hallucination processing pipeline for 100+ page documents
- Automated upload/download pipeline with iManage
- Closing checklist generator for M&A

### Phase 3: Deal Context Graph (6-9 months)
- Cross-document relationship mapping
- Defined term cascade tracking
- Change impact analysis and alerts
- Interactive deal map visualization
- Per-client knowledge base (RAG)

### Phase 4: Negotiation Intelligence (9-12 months)
- Opposing counsel profiling from historical data
- AI-generated deal playbooks
- Real-time negotiation support
- Post-deal learning loop

---

## Bottom Line (Updated)

All 8 features are technically feasible. The new features strengthen the platform significantly:

| New Feature | Feasibility | Market Gap | Differentiator? |
|---|---|---|---|
| Sub-deal context graph | HIGH | **No existing tool** — wide open | Yes, massive |
| iManage auto-upload pipeline | HIGH | API fully supports it | Table stakes |
| Multi-pass anti-hallucination | HIGH | Engineering challenge, not a product gap | Technical moat |
| Smart Skim document triage | HIGH | **No existing tool** produces reading guides | Yes, strong |

The **Deal Context Graph** (sub-deal orchestration with change impact analysis) and **Smart Skim** (AI document triage) are both genuine white-space opportunities with no existing competition. Combined with the original 4 pain points, this is a comprehensive legal AI platform that addresses the full lifecycle of deal work.

---

# PART 3: Platform Architecture & Liability Strategy

*Research compiled: March 8, 2026*

---

## Critical Decision: No Custom Backend/Frontend Needed

### The Liability Problem
If you build on AWS and store lawyer data there, **you are liable for any data breach**. Attorney-client privileged data is the most sensitive category — a breach could mean malpractice suits, bar discipline, and the end of your business.

### The Solution: Claude Cowork + Enterprise + Plugins

**Anthropic hosts everything.** You build plugins, not infrastructure.

| What You Need | Who Provides It | Your Liability |
|---|---|---|
| UI/Frontend | Anthropic (claude.com / Cowork) | None — you don't build or host it |
| Data Storage | Anthropic | Anthropic is **data processor**; you're controller but not storing data |
| AI Processing | Anthropic (Claude API) | None — runs on Anthropic's infrastructure |
| Security Certifications | Anthropic (SOC 2 Type II, HIPAA BAA, GDPR DPA) | You inherit their certifications |
| No-Training Guarantee | Anthropic (contractual on commercial plans) | Covered by Anthropic's terms |

### Liability Architecture Comparison

| Model | Who Stores Data? | Who's Liable for Breach? | Your Risk |
|---|---|---|---|
| **You build on AWS** | You | **You get sued** | HIGH |
| **Claude Enterprise + Cowork** | Anthropic | Anthropic is data processor | LOW |
| **Claude API via AWS Bedrock** | AWS (zero-retention option) | AWS is processor | MEDIUM |

**Recommended: Claude Cowork plugin model.** Anthropic holds the data, has SOC 2, and carries breach liability as data processor. You never touch the data.

---

## What You Build as Cowork Plugins (No Infrastructure)

Claude Cowork (launched January 2026) supports a plugin system with four components — **none require writing code**:

1. **Skills** — Markdown files with procedural instructions (the "brain")
2. **Slash Commands** — Explicit triggers for repeatable workflows
3. **MCP Connectors** — Wire Claude to external systems (iManage, DocuSign, etc.)
4. **Sub-agents** — Coordinate parallel workstreams

### Your Legal Plugin Suite

| Plugin | Type | Slash Command |
|---|---|---|
| Smart Skim / Document Triage | Skill | `/legal:smart-skim` |
| Redline Summary | Skill | `/legal:redline-summary` |
| M&A Closing Checklist | Skill | `/legal:closing-checklist` |
| Deal Context Query | Skill | `/legal:deal-context` |
| Client Knowledge Base | Project + Skill | `/legal:client-kb` |
| Negotiation Playbook | Skill | `/legal:playbook` |

### Distribution: Claude Marketplace

**Claude Marketplace launched March 6, 2026.** You can sell your legal plugins through Anthropic's store:
- Launch partners include Harvey, Snowflake, GitLab, Rogo, Replit
- Anthropic takes **no commission**
- Customers with committed annual Anthropic spend can use a portion for marketplace purchases
- Each law firm subscribes to Claude Enterprise and installs your plugins
- **You never touch their data**

### Private Plugin Marketplaces (Enterprise Feature)
- Law firm admins can build curated internal catalogs of approved plugins
- Can source plugins from private GitHub repos
- PwC partnership available for regulated industries

---

## The ONE Piece of Infrastructure: iManage MCP Connector

iManage is not in the pre-built Cowork connectors (Feb 2026 added Google Drive, DocuSign, Gmail — not iManage). You need a custom MCP server.

### Big News: iManage Is Building Native MCP Support

Announced at **ILTACON 2025**: iManage is implementing native MCP support for iManage Cloud.

- iManage will expose an MCP-compatible interface directly
- Any MCP client (like Claude Cowork) can connect natively
- User permissions and audit trails stay intact
- **If this is live, you need ZERO custom infrastructure**

### If Native MCP Isn't Ready Yet: Build a Lightweight Connector

**Architecture (stateless — no data storage on your side):**
```
Lawyer in Claude Cowork
    → Claude calls your MCP Connector
    → Cloudflare Worker (stateless, no data stored)
    → iManage REST API (OAuth 2.0)
    → Documents flow through, never stored on your infra
```

**Tech stack:**
- Python + `fastmcp` library (or MCP Python SDK)
- `httpx` for iManage REST API calls
- Deploy on **Cloudflare Workers** (serverless, stateless, no data persistence)

**What the MCP server does:**
1. Authenticate via OAuth 2.0 (token management)
2. Search documents by client/matter
3. Download document content
4. Upload AI-generated documents
5. Read/write metadata
6. Browse workspaces and folders

**Development time:**
| Scope | Timeline |
|---|---|
| Basic (search + download + metadata) | 2-4 weeks |
| Full (upload, versioning, workspace nav, error handling) | 6-12 weeks |

---

## How Law Firms Get iManage API Access

### The Process Is Simple (Technically)

| Step | Who Does It | How Hard | How Long |
|---|---|---|---|
| 1. Register app in iManage Control Center | Law firm's iManage admin | Easy — UI form | Minutes |
| 2. Admin clicks Settings > Applications > Add Application | iManage admin | Trivial | 5 minutes |
| 3. System auto-generates Client ID + Client Secret | Automatic | N/A | Instant |
| 4. You provide a `manifest.yaml` to the admin | You (one-time) | Simple | 1 hour to write |
| 5. Admin uploads your manifest | iManage admin | Click a button | 1 minute |

**API access is included in their existing iManage subscription** — not an add-on.

### Who at the Law Firm Is Involved

| Person | Role | Effort |
|---|---|---|
| **iManage Admin** | Registers the app, provides credentials | 30 minutes |
| **IT/Security Team** | Approves the integration (vendor security review) | **This is the bottleneck** |
| **Managing Partner** | Business approval | Signs off |

### The Real Bottleneck: Security Review

The technical setup takes minutes. **The vendor security approval process is what takes time:**

| Firm Size | Approval Timeline | What They Want to See |
|---|---|---|
| **AmLaw 100** (big firms) | 3-6 months | SOC 2 Type II, pen test results, VSAQ, data residency |
| **Mid-size** (50-200 attorneys) | 1-3 months | SOC 2 report, no-training guarantee, encryption |
| **Small firms** (5-50 attorneys) | Weeks | Basic security overview, Anthropic's trust page |

### Your Key Advantage
Since you're on Claude Cowork (Anthropic's platform), you **inherit Anthropic's SOC 2 Type II**. You point the firm's IT team to [trust.anthropic.com](https://trust.anthropic.com). You're not storing data — Anthropic is.

### iManage Cloud vs. On-Premises

| Deployment | API Difficulty | Notes |
|---|---|---|
| **iManage Cloud** | Easy | REST API internet-accessible, no firewall issues |
| **On-Premises** | Harder | Firewalls, SSO redirects can intercept API calls, need IT collaboration |

Most firms are on Cloud or migrating. Cloud is meaningfully easier for API integrations.

---

## Precedent: Harvey AI Already Did This

**Harvey AI** (the leading legal AI company) built an iManage integration and published a technical blog about it:
- They are an official **iManage Technology Partner**
- Tested with Ropes & Gray, Blank Rome, and CMS law firms
- Supports both Cloud and on-prem
- 200+ technology partners already exist in iManage ecosystem

**This proves:**
- The path is well-traveled
- iManage is receptive to AI integrations
- Law firms are willing to approve these connections

### Common Gotchas (From Harvey's Engineering Blog)
- **Rate limiting** — iManage enforces limits; need exponential backoff
- **On-prem network paths** — firewalls and SSO can intercept API calls
- **OAuth token refresh** — requires careful persistence handling
- **No official Python/Node SDK** — raw REST only
- **Document Profile Invalid errors** — known issue when creating workspaces

---

## Recommended Next Steps

### Step 1: Check if iManage Native MCP Is Live
→ If YES: configure it in Cowork (zero build effort)
→ If NO: proceed to Step 2

### Step 2: Build Minimal iManage MCP Server (2-4 weeks)
→ Deploy on Cloudflare Workers (stateless, no data storage)
→ Provide `manifest.yaml` to each law firm
→ Their admin registers it in 5 minutes

### Step 3: Apply to iManage Technology Partner Program
→ Official certification = trust signal for law firms
→ Makes security review process much easier
→ Apply at imanage.com/resources/partners/become-a-partner/

### Step 4: Build First Cowork Plugin
→ Start with `/legal:smart-skim` (document triage)
→ No infrastructure needed — just a markdown skill file
→ Immediate value, builds lawyer trust

### Step 5: Publish to Claude Marketplace
→ Distribute through Anthropic's store
→ No commission from Anthropic
→ Law firms install through their Claude Enterprise subscription

---

## What You CAN'T Do Without Your Own Backend

| Limitation | Impact | Workaround |
|---|---|---|
| Custom branded UI | Users see "Claude", not your brand | Acceptable if selling as a plugin |
| Automated batch pipelines | No scheduled/cron processing | Everything is user-initiated |
| White-label product | Can't resell as "YourBrand Legal AI" | Sell through Marketplace instead |
| Graph database (Neo4j) | Can't host the Deal Context Graph natively | Use Claude Projects for context; or accept minimal infra for this one feature |
| Vector database | Can't host custom RAG indexes | Use Claude Projects' built-in knowledge base |
| Multi-tenant isolation | Each firm needs own Claude Enterprise | This is actually a feature — firm controls own data |

### The Graph Database Question

The **Deal Context Graph** (Pain Point #5) ideally wants a Neo4j graph database. Options:

1. **Skip it for MVP** — Use Claude's context and Projects to maintain deal structure knowledge without a formal graph DB. Less sophisticated but zero infrastructure.
2. **Neo4j Aura (managed cloud)** — Neo4j hosts it, you don't run servers. Still adds a third party to the data flow.
3. **Encode graph structure in Claude Projects** — Store relationship data as structured documents in Claude Projects. Less queryable but zero infra.

**Recommendation:** Start with option 1 (no graph DB), prove value with the simpler skills first, then evaluate whether a graph DB is needed based on user feedback.

---

## Final Architecture: Zero Infrastructure Model

```
┌──────────────────────────────────────────────────────────────────┐
│                    LAW FIRM (Claude Enterprise)                    │
│                                                                    │
│  Lawyers use Claude Cowork with your installed plugins:           │
│  /legal:smart-skim | /legal:redline-summary | /legal:deal-context │
│  /legal:closing-checklist | /legal:playbook | /legal:client-kb    │
│                                                                    │
│  Data stays in Anthropic's infrastructure (SOC 2, no training)    │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                  ANTHROPIC (Hosts Everything)                      │
│                                                                    │
│  Claude Cowork Platform                                           │
│  ├── Your Plugin Skills (markdown, no code)                       │
│  ├── Claude Projects (per-client knowledge base)                  │
│  ├── Document Processing (multi-pass, anti-hallucination)         │
│  └── Structured Outputs (JSON schemas)                            │
│                                                                    │
│  Security: SOC 2 Type II | HIPAA BAA | GDPR DPA                  │
│  Data: No training on commercial data | Configurable retention    │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│              iMANAGE MCP CONNECTOR (Your Only Infra)              │
│                                                                    │
│  Option A: iManage Native MCP (if live — ZERO build effort)      │
│  Option B: Cloudflare Worker (stateless, no data stored)          │
│                                                                    │
│  Passthrough only — translates Claude requests to iManage API     │
│  No data persists on your infrastructure                          │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                   iMANAGE (Law Firm's DMS)                        │
│                                                                    │
│  Documents | Emails | Metadata | Version History                  │
│  Security Policies | Ethical Walls | Workspaces                   │
│  Owned and managed by the law firm                                │
│  API access included in existing subscription                     │
└──────────────────────────────────────────────────────────────────┘
```

**Your liability surface: Near zero.** You build markdown skill files and potentially one stateless Cloudflare Worker. No data storage. No servers. No databases. Anthropic and iManage handle the infrastructure and security.

---

## Updated Build Sequence (Revised for Zero-Infra Model)

### Phase 1: First Cowork Plugins (Weeks 1-8)
- Build `/legal:smart-skim` skill (document triage — no iManage needed, just upload)
- Build `/legal:redline-summary` skill (upload two docs, get comparison + summary)
- Test with lawyer colleagues
- Zero infrastructure, zero liability

### Phase 2: iManage Connectivity (Weeks 4-12, parallel with Phase 1)
- Check if iManage native MCP is live
- If not, build Cloudflare Worker MCP connector (2-4 weeks)
- Apply to iManage Technology Partner Program
- First law firm pilot (their admin registers app in 5 minutes)

### Phase 3: Advanced Skills + Marketplace (Months 3-6)
- Build `/legal:closing-checklist` (M&A)
- Build `/legal:deal-context` (cross-document queries using Claude Projects)
- Publish to Claude Marketplace
- Onboard 2-3 pilot law firms

### Phase 4: Knowledge & Intelligence Layer (Months 6-12)
- Build `/legal:client-kb` (per-client knowledge using Claude Projects)
- Build `/legal:playbook` (negotiation intelligence)
- Evaluate whether Deal Context Graph needs a real graph DB
- Scale through Marketplace

---

## Bottom Line (Final)

**You don't need to build a backend or frontend.** The Claude Cowork plugin model lets you:

1. **Build** legal skills as markdown files (no code for basic skills)
2. **Connect** to iManage via MCP (native support coming, or one Cloudflare Worker)
3. **Distribute** through Claude Marketplace (launched March 6, 2026)
4. **Store nothing** — Anthropic hosts the data, iManage hosts the documents
5. **Inherit security** — SOC 2 Type II, HIPAA BAA, GDPR DPA from Anthropic

**If AWS gets breached, it's not your problem.** Because you're not on AWS. Anthropic is the data processor. The law firm's data lives in Anthropic's infrastructure (covered by their security certifications) and in iManage (the firm's own system).

Your total infrastructure: potentially one stateless Cloudflare Worker. That's it.

---

# PART 4: Competitive Analysis, Redline Mechanics & IT Onboarding Reality

*Research compiled: March 8, 2026*

---

## Harvey AI: Feature-by-Feature Comparison

### Where Harvey IS Strong (Don't Compete Here)

| Feature | Harvey | Notes |
|---|---|---|
| Legal research | Excellent — 200+ legal knowledge sources | Harvey + CoCounsel own this space |
| Contract drafting | Yes — in-Word drafting with firm style matching | Don't build this |
| Basic redline detection | Yes — custom vision model for PDFs | But no AI *summarization* of why changes matter |
| Firm-wide knowledge search | Yes — "Firm Knowledge" feature | Firm-wide only, NOT per-client isolated |
| Playbook-based review | Yes — applies YOUR existing playbook | Does not *generate* playbooks from data |
| Workflow automation | Yes — 18,000+ custom workflows built | Visual or natural language workflow builder |
| iManage integration | Yes — direct OAuth, open beta | Official iManage Technology Partner |
| Mobile app | Yes — launched Sept 2025 | Voice prompts, document scanning |

### Where Harvey Does NOT Compete (YOUR Opportunity)

| Feature | Harvey | Your Product | Gap? |
|---|---|---|---|
| **Per-client knowledge base** | No — firm-wide only | Yes — per-client/matter RAG with ethical walls | **OPEN** |
| **Opposing counsel profiling** | No | Yes — historical negotiation pattern analysis | **OPEN** |
| **AI-generated negotiation playbooks** | No — applies YOUR playbook, doesn't create one | Yes — generates from historical data | **OPEN** |
| **Cross-document deal relationship mapping** | No — no deal graph or defined term cascade tracking | Yes — Deal Context Graph with change impact alerts | **OPEN** |
| **Smart Skim / reading guide** | No — no prioritized reading order or heat map | Yes — color-coded triage, priority order, time savings | **OPEN** |
| **M&A signature automation** | Mentioned in passing | Yes — dedicated workflow for sig pages + closing | **OPEN** |
| **Redline AI *summarization*** | Detects redlines but doesn't explain WHY changes matter | Yes — risk assessment, direction analysis, suggested responses | **OPEN** |

### The Pricing Gap

| | Harvey | Your Cowork Plugins |
|---|---|---|
| Price | **~$1,200/lawyer/month** | Claude Enterprise + your plugin fee |
| Minimum | **$288,000/year** (20 seats, 12 months) | No minimums |
| Target | AmLaw 100 only | Any firm with Claude Enterprise |
| Implementation | Weeks of training, custom setup | Install plugin, start using |

**Harvey prices out 95% of the market.** Your plugin model serves the massive mid-market.

### Key Competitors to Watch

| Tool | Threat Level | Why |
|---|---|---|
| **DeepJudge** | Medium | "Negotiation Intelligence" — analyzes opposing counsel positions. Closest to your playbook feature |
| **Luminance** | Medium | Launched "Institutional Memory" (Jan 2026) — learns from firm's past negotiations |
| **CoCounsel** | Low | Piggybacks on Thomson Reuters' existing firm relationships. Research-focused |
| **Spellbook** | Low | SMB-friendly, contract drafting in Word. Different market |

### Strategic Positioning

```
Harvey = General-purpose legal AI (research, drafting, review)
         Enterprise-only, $288K/year minimum

You   = Legal operations intelligence layer
         (deal context, negotiation intelligence, document triage)
         Cowork plugin, accessible pricing, complementary to Harvey
```

**A firm could use BOTH** — Harvey for research/drafting AND your plugins for deal orchestration.

---

## How Redline/Blackline Actually Works in Claude Cowork

### Two Versions of the Product

#### Version 1: Simple (Zero Infrastructure, Works Today)

**What the lawyer does:**
1. Opens Claude Cowork
2. Types `/legal:redline-summary`
3. Uploads Document A (original) and Document B (revised) as DOCX or PDF
4. Claude reads both documents, compares them, and produces a structured summary

**What Claude returns (in conversation):**
- Executive summary: "47 changes. 5 substantively significant."
- Risk-flagged changes: HIGH / MEDIUM / LOW per change
- Section-by-section breakdown with risk assessment
- Direction analysis: "This change shifts risk from Seller to Buyer"
- Suggested response language

**Limitations of Version 1:**
- Comparison is LLM-based (probabilistic), not deterministic diff
- Claude cannot generate a DOCX file with Word track changes markup
- Output is text/markdown in the conversation — lawyer copies or screenshots it
- Lawyer must manually upload two files (no iManage integration)

**But this is still valuable** — the AI summarization (WHY changes matter) is what no existing tool provides. Even without a proper redline DOCX, the intelligence layer is the differentiation.

#### Version 2: Production (Requires One MCP Server)

**Architecture:**
```
Lawyer types /legal:redline-summary
    → Specifies matter number or doc IDs
    → MCP Server pulls both versions from iManage (OAuth 2.0)
    → MCP Server runs deterministic diff (diff-match-patch algorithm)
    → Returns structured diff to Claude
    → Claude summarizes with legal intelligence (risk, direction, suggestions)
    → MCP Server generates DOCX with track changes (python-docx)
    → MCP Server generates AI summary memo as DOCX
    → MCP Server uploads both to iManage workspace
    → Lawyer gets notification, opens from iManage
```

**What the lawyer gets:**
1. **In-conversation:** Immediate AI summary with risk flags
2. **In iManage:** DOCX with actual Word track changes (redline)
3. **In iManage:** AI summary memo (shareable with client/co-counsel)

**The MCP server handles:**
- iManage API calls (pull/push documents)
- Deterministic diff computation (NOT Claude)
- DOCX generation with track changes markup (using `python-docx`)
- Stateless — deployed on Cloudflare Workers, no data persisted

**Why you need the MCP server for Version 2:**
| Need | Why Claude Can't Do It Alone |
|---|---|
| Deterministic diff | Claude's comparison is probabilistic — can miss subtle changes |
| DOCX with track changes | Claude cannot generate `.docx` files with `<w:ins>/<w:del>` XML |
| iManage pull/push | Need MCP to call iManage REST API |
| File generation | Claude outputs text, not downloadable Word documents |

### Recommendation: Ship Version 1 First

Version 1 requires **zero infrastructure** — just a markdown skill file. Ship it in days, not weeks. Let lawyers test the AI summarization value immediately.

Then build Version 2 (MCP server) over 2-4 weeks to add:
- Automated iManage document retrieval
- Proper deterministic diff
- DOCX output with track changes
- Auto-filing results back to iManage

---

## The Real Effort to Get iManage API Access from Law Firm IT

### The Technical Setup: Trivial (Minutes)

Registering your app in iManage takes 5 minutes. The iManage admin:
1. Opens Control Center → Settings → Applications → Add Application
2. Uploads your `manifest.yaml` (or enters details manually)
3. System generates Client ID + Client Secret
4. Done

**API access is included in iManage subscriptions.** No extra purchase needed.

### The Real Bottleneck: Security Review

The technical setup is not the problem. **Getting through the firm's security/vendor approval process is the real timeline.**

#### What the IT Security Review Involves

1. **Initial screening call** (30-60 min) — What data do you touch? Where does it go?
2. **Vendor Security Assessment Questionnaire (VSAQ)** — 50-800 questions depending on firm size
3. **Architecture review** — They want a data flow diagram (this is the most scrutinized document)
4. **SOC 2 report review** — If you don't have SOC 2, this is often a hard stop at large firms
5. **Legal/DPA review** — Separate from IT. Firm's counsel reviews your terms
6. **Insurance verification** — Cyber liability, E&O ($5-10M minimum at large firms)

#### Realistic Timelines

| Firm Size | Security Review | Technical Setup | Total Timeline |
|---|---|---|---|
| **10-person firm** | Minimal/none — partner decides | 1-3 days | **1-3 weeks** |
| **50-person firm** | Semi-formal — IT director reviews | 3-5 days | **3-8 weeks** |
| **AmLaw 200** (100-300 lawyers) | Formal — full VSAQ + legal + procurement | 1-2 weeks | **2-5 months** |
| **AmLaw 100** (300+ lawyers) | Rigorous — SIG-based VSAQ + audit + committee | 2-4 weeks | **4-9 months** |

#### Common Objections from Law Firm IT

| Objection | Your Response |
|---|---|
| "Client data leaves our environment" | "Data is processed by Anthropic with zero retention. We are a stateless passthrough." |
| "AI trains on our data" | "Anthropic contractually guarantees no training on commercial API data. See their trust page." |
| "No SOC 2" | Leverage Anthropic's SOC 2 for the AI layer. Get your own SOC 2 for the application layer ($30-80K). |
| "Where is data stored?" | "Documents stay in your iManage. AI processing is in-memory on Anthropic's SOC 2 certified infrastructure." |
| "We already have Harvey" | "We're complementary, not competitive. Harvey does research/drafting. We do deal context and negotiation intelligence." |

#### Common Deal-Breakers

- No SOC 2 of any kind — hard stop at AmLaw 200+
- Data used for model training — absolute deal-breaker
- Cannot sign the firm's DPA
- No cyber liability insurance
- Ethical walls not supported

### How to Accelerate the Process

#### 1. Build a "Security Package" (One-Time, 40-80 Hours)
Pre-build a single PDF containing:
- Architecture overview + data flow diagram
- Encryption details (at rest, in transit)
- Subprocessor list (Anthropic) with their SOC 2
- Data retention and deletion policies
- Incident response plan summary
- Insurance certificates
- Anthropic's security documentation

**Have this ready to send within minutes of IT asking.** Fast, professional response = credibility.

#### 2. Pre-Complete the SIG Lite Questionnaire (40-80 Hours First Time, 8-20 Hours Per Firm After)
SIG Lite (Shared Assessments Standard Information Gathering) is the most common framework at law firms. Having it pre-completed saves 2-4 weeks per firm.

#### 3. Get iManage Technology Partner Certification (1-3 Months)
- Your app appears in iManage's ecosystem
- "We're an iManage certified partner" = trust signal
- Dramatically reduces IT concerns about the integration layer
- Apply at imanage.com/resources/partners/become-a-partner/
- Cost: ~$5K-$25K/year depending on tier

#### 4. Get SOC 2 Type II ($30-80K, 3-6 Months)
- Table stakes for AmLaw 200+ firms
- Since you're mostly a thin layer on top of Anthropic, your audit scope is small
- Your SOC 2 covers: your application, your MCP server, your employee access controls, your incident response
- Anthropic's SOC 2 covers: AI inference, data processing, model security

#### 5. Start with Small Firms, Build References
- 10-50 person firms onboard in weeks, not months
- Get 3-5 reference customers first
- "We passed [Firm X]'s security review" = most powerful accelerator for the next firm
- Offer early customers discounts in exchange for being referenceable

#### 6. Offer Sandbox Pilots
- 30-day pilot with synthetic documents or non-sensitive matters
- Some firms have a faster "sandbox" approval process
- Creates internal champions who pressure IT to fast-track full review

### How Harvey Handles This (For Reference)

- Harvey invested in SOC 2 Type II **before going to market**
- Dedicated trust/security team that handles VSAQs full-time
- iManage Technology Partner (official certification)
- Sales cycle: 3-9 months for large firms
- Dedicated customer success managers + phased rollouts
- Key lesson: They treat security review as a **first-class product feature**

### Effort Estimate for a Startup

| Activity | One-Time Effort | Per-Firm Effort |
|---|---|---|
| Security package document | 40-80 hours | 2-4 hours to customize |
| SOC 2 Type II | 200-400 hours + $30-80K | Annual renewal |
| First VSAQ completion | 40-80 hours | 8-20 hours per firm |
| iManage Partner application | 20-40 hours | N/A |
| DPA template | 10-20 hours (with legal counsel) | 4-8 hours negotiation |
| Architecture docs | 8-16 hours | 1-2 hours to customize |
| Per-firm meetings | N/A | 10-30 hours over 1-6 months |

**Total one-time investment:** ~300-500 hours + $30-80K for SOC 2
**Per-firm ongoing:** 20-60 hours spread over 1-6 months (less for small firms)

---

## Bottom Line (Final — Updated)

### The Go-To-Market Path

```
Week 1-2:    Build /legal:smart-skim + /legal:redline-summary as Cowork Skills
             (Zero infra. Just markdown files. Test with your lawyer colleagues.)

Week 3-4:    Ship Version 1 to 2-3 small firm contacts
             (They upload docs manually. No iManage needed yet.)

Month 2-3:   Build iManage MCP server on Cloudflare Workers
             Check if iManage native MCP is live first
             Apply to iManage Technology Partner Program

Month 2-4:   Start SOC 2 Type II process ($30-80K)
             Build security package document
             Pre-complete SIG Lite questionnaire

Month 3-6:   Onboard first paying law firms (start small, 10-50 person firms)
             Publish to Claude Marketplace
             Build remaining skills (/legal:closing-checklist, /legal:deal-context)

Month 6-9:   SOC 2 Type II complete
             Approach mid-size and AmLaw 200 firms with references
             Build /legal:client-kb and /legal:playbook

Month 9-12:  Scale through Marketplace
             iManage Partner certification complete
             Evaluate graph DB for Deal Context Graph
```

### What You Build vs. What Others Provide

| Component | Who Provides | Your Effort |
|---|---|---|
| Frontend/UI | Anthropic (Claude Cowork) | Zero |
| Backend/Processing | Anthropic (Claude API) | Zero |
| Data Storage | Anthropic + iManage | Zero |
| Security Certifications | Anthropic (SOC 2, HIPAA, GDPR) | Your own SOC 2 for your app layer |
| Legal Skills/Plugins | **You** | Markdown skill files |
| iManage MCP Connector | iManage (if native MCP) or **You** (Cloudflare Worker) | 2-4 weeks |
| Security Package | **You** | 40-80 hours one-time |
| Sales/Onboarding | **You** | 20-60 hours per firm |

---

# PART 5: Redline/Blackline Product Walkthrough & Anti-Hallucination Strategy

*Research compiled: March 8, 2026*

---

## The Lawyer's Pain Today (What We're Fixing)

```
Current workflow — EVERY round of contract negotiation:

1. Lawyer sends Contract v1 to opposing counsel via email
   → Email + attachment auto-filed to iManage ✓

2. Opposing counsel sends back Contract v2 (their markup) via email
   → Email + attachment auto-filed to iManage ✓

3. THE PAINFUL PART (1-4 hours of manual work):
   → Lawyer opens v1 and v2 side by side
   → Runs Word Compare or Litera Compare to generate redline
   → Manually reads through EVERY change (often 100-200+ changes)
   → Writes a 2-page memo to the client explaining:
     "Here's what they changed and why it matters"
   → This happens EVERY round × EVERY deal × EVERY attorney
```

---

## Phase 1: Manual Upload (Ship in Days, Zero Infrastructure)

### What the Lawyer Does

1. Opens Claude Cowork
2. Types `/legal:redline-summary`
3. Uploads Document A (original v1) and Document B (revised v2) as DOCX or PDF
4. Claude reads both, compares them, generates structured analysis

### What Claude Returns (In Conversation)

```
═══════════════════════════════════════════════════════
   CONTRACT CHANGE ANALYSIS
   Purchase Agreement: Project Phoenix
   Comparing: v1 (sent Feb 28) → v2 (received Mar 8)
═══════════════════════════════════════════════════════

EXECUTIVE SUMMARY
─────────────────
37 total changes detected.
• 4 CRITICAL — require partner review
• 6 MODERATE — substantive but expected
• 27 MINOR — stylistic, formatting, cross-references

Estimated review time: Full read ~3 hrs → With this guide ~45 min

CRITICAL CHANGES
────────────────
1. INDEMNIFICATION CAP [Section 8.4, p.23]
   Changed: Cap reduced from $50,000,000 to $20,000,000
   Risk: Reduces our client's recovery by 60%
   Direction: Favors SELLER
   Suggested response: Counter at $40M with mutual cap.

2. NON-COMPETE SCOPE [Section 5.2(a), p.14]
   Changed: Duration extended 12 → 24 months; geography "US" → "worldwide"
   Risk: Significantly restricts client's post-closing operations
   Direction: Favors BUYER
   Suggested response: Accept 18 months, limit geography to
   jurisdictions where Target operates.

MODERATE CHANGES
────────────────
5. "MATERIAL ADVERSE EFFECT" [Section 1.1, p.4]
   Changed: Added carve-out for "general economic conditions"
   Impact: Weakens MAE trigger, harder to walk away

MINOR CHANGES (Skim)
─────────────────────
• 12 formatting changes
• 8 cross-reference corrections
• 4 defined term capitalization fixes
• 3 "shall" → "will" changes (no legal significance)
```

### What Phase 1 Can and Can't Do

| Capability | Phase 1 | Notes |
|---|---|---|
| AI summarization of WHY changes matter | **YES** | The core differentiator — no other tool does this |
| Risk-flag each change (HIGH/MEDIUM/LOW) | **YES** | |
| Suggest response language | **YES** | |
| Direction analysis (favors Buyer vs Seller) | **YES** | |
| Deterministic character-level diff | No | Claude's comparison is probabilistic |
| Generate DOCX with track changes | No | Output is text in conversation |
| Auto-pull docs from iManage | No | Lawyer uploads manually |
| Auto-file results to iManage | No | Lawyer copies output |

**This is still massively valuable.** The intelligence layer — explaining WHY changes matter and suggesting responses — is what takes lawyers 1-4 hours manually. No existing tool does this.

### Handling Large Documents in Phase 1 (The Hallucination Problem)

**For contracts under 50 pages (~25K tokens per doc):**
Both versions fit in Claude's context window. Upload both, Claude compares in a single pass. Accuracy is high.

**For contracts 50-100 pages:**
The `/legal:redline-summary` skill instructs Claude to use a **two-pass approach**:

```
Pass 1: Structure + Definitions
─────────────────────────────────
- Read both documents
- Extract table of contents + section boundaries
- Extract ALL defined terms from both versions
- Note which sections exist in both vs. added/removed

Pass 2: Section-by-Section Comparison
──────────────────────────────────────
- For each section, compare v1 vs v2
- Classify each change: type, severity, direction
- Generate per-section analysis
- Compile into final summary
```

**For contracts 100+ pages (the hallucination danger zone):**
The skill instructs the lawyer to use `/legal:redline-summary-large` which breaks the document into chunks:

```
Step 1: Lawyer uploads both versions
Step 2: Claude extracts structure + definitions from each (Pass 1)
Step 3: Claude asks: "I've identified 12 major sections. I'll analyze
        each section pair separately to ensure accuracy. Starting with
        Article I: Definitions..."
Step 4: Claude processes section by section, producing analysis for each
Step 5: Claude compiles all section analyses into final summary
Step 6: Claude runs a verification pass on all CRITICAL findings,
        quoting exact text from both versions to confirm accuracy
```

**The key anti-hallucination rules built into the skill:**

1. **Always cite section + page:** Every claimed change references `[Section X.Y, p.Z]`
2. **Always quote both versions:** Show the exact text from v1 AND v2, not just a summary
3. **Never compare from memory:** Each section comparison includes the actual source text
4. **Flag uncertainty:** If Claude isn't confident a change is real, it says so: `"⚠ VERIFY: This may be a formatting difference, not a substantive change"`
5. **Separate facts from interpretation:** "CHANGE: cap reduced from $50M to $20M" (fact) vs. "RISK: this reduces recovery by 60%" (interpretation — clearly labeled)
6. **Verification pass for numbers:** All dollar amounts, percentages, dates, and thresholds get a dedicated verification step where Claude re-reads the source text to confirm

---

## Phase 2: Automated with iManage (2-4 Weeks to Build, After Security Approval)

### What Changes

```
Phase 1 (manual):
  Lawyer uploads two docs → Claude compares → text summary in conversation

Phase 2 (automated):
  Email arrives in iManage → system detects new version automatically
  → pulls both versions → deterministic diff → Claude summarizes
  → generates DOCX redline + blackline + AI memo
  → uploads all to iManage → lawyer gets notification
  → 2-3 minutes, fully automated
```

### The Automated Flow

```
Opposing counsel emails Contract v2
    ↓
iManage auto-files email + attachment to Matter workspace
    ↓
iManage Event Hub fires webhook: "new document in Matter #12345"
    ↓
MCP Server receives notification
    ↓
Detects: "This is a new version of Purchase Agreement"
(matches filename pattern, matter number, document metadata)
    ↓
Pulls Contract v1 (previous) + v2 (new) from iManage API
    ↓
Runs deterministic diff (diff-match-patch — NOT Claude)
(Character-level, catches every single change, zero hallucination)
    ↓
Sends structured diff + both doc texts to Claude
    ↓
Claude generates AI analysis:
  • Executive summary
  • Risk-flagged changes with citations
  • Direction analysis
  • Suggested responses
  • Connects to negotiation history (if available)
    ↓
MCP Server generates 3 DOCX files:
  1. Redline (actual Word track changes via python-docx)
  2. Blackline (clean merged version)
  3. AI Summary Memo
    ↓
MCP Server uploads all 3 to iManage workspace with metadata:
  doc_type: "AI-GENERATED", author: "AI Assistant"
    ↓
Lawyer gets notification: "AI analysis ready for Contract v2"
```

### What Lands in the Lawyer's iManage Folder

```
Matter #12345 — Project Phoenix Acquisition
└── Contracts
    └── Purchase Agreement
        ├── v1 - Purchase Agreement (sent Feb 28).docx
        ├── v2 - Purchase Agreement (received Mar 8).docx
        ├── v2 - REDLINE (v1→v2).docx              ← AUTO-GENERATED
        ├── v2 - BLACKLINE (clean).docx             ← AUTO-GENERATED
        └── v2 - AI Change Analysis.docx            ← AUTO-GENERATED
```

### The Outbox Side (When YOUR Lawyer Sends Markup)

Works in reverse:
```
Lawyer saves Contract v3 (their markup of v2) to iManage
    → System auto-generates:
        1. Redline (v2 → v3) showing YOUR changes
        2. AI summary of what YOU changed
        3. Draft cover email to opposing counsel
    → Lawyer reviews, approves, sends
    → Everything auto-filed
```

### Negotiation Intelligence Over Multiple Rounds

Over rounds, the system accumulates context:
```
Round 1: v1 → v2 (their markup)    → AI analysis
Round 2: v2 → v3 (our response)    → AI analysis
Round 3: v3 → v4 (their counter)   → AI analysis

By Round 3, the system can report:
"Smith & Jones has conceded on 3 of 4 critical changes.
Remaining holdout: indemnification cap. In prior deals with
this firm, they conceded this point 67% of the time when
offered a mutual cap structure."
```

---

## Anti-Hallucination Strategy for 100+ Page Documents

### Why This Is Critical

Legal documents are the **worst-case scenario for LLM hallucination:**
- Every word is legally significant ("shall" vs. "may")
- Dense cross-references (Section 2.1 refers to Section 7.3)
- Precise numbers (a $50M cap vs. $50K cap is a catastrophic error)
- Information spread across 100+ pages with critical details on any page

**The most dangerous hallucination is not making up whole clauses — it's subtle errors:** wrong dollar amounts, misattributed obligations (saying Borrower must do X when it's the Lender's), incorrect cross-reference resolution.

### The Multi-Pass Architecture (Built Into Every Skill)

Every skill that processes large documents uses this pattern:

```
┌─────────────────────────────────────────────────────────┐
│ PASS 1: STRUCTURE EXTRACTION                             │
│ Send: Full document (or first/last pages if too large)   │
│ Extract: Table of contents, section boundaries,          │
│          document type, all parties, all defined terms,   │
│          cross-reference map                              │
│ Why it works: Extraction (not reasoning) — high accuracy │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ PASS 2: SECTION-BY-SECTION ANALYSIS (Parallel)           │
│ For each section, send:                                   │
│   • Section text (~5K-10K tokens)                        │
│   • Definitions dictionary (from Pass 1)                 │
│   • Structural context (where this sits)                 │
│   • Cross-referenced sections                            │
│ Each call is small + focused = high accuracy             │
│ Run all sections in parallel = fast                      │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ PASS 3: SYNTHESIS + CROSS-REFERENCE RESOLUTION           │
│ Send: All section summaries (compressed ~15K-20K tokens) │
│       + structural map from Pass 1                       │
│ Generate: Integrated analysis, flag inconsistencies,     │
│           resolve cross-references                       │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ PASS 4: VERIFICATION (The Trust Layer)                    │
│ Select 5-10 highest-risk claims from the analysis        │
│ For each: re-read the source text, confirm the claim     │
│ Output: "VERIFIED ✓" or "CORRECTION: actual text says…"  │
│ All dollar amounts, dates, and thresholds are verified   │
└─────────────────────────────────────────────────────────┘
```

### Recommended Strategy by Document Size

| Document Size | Passes | Approach | Expected Accuracy |
|---|---|---|---|
| Under 30 pages (~15K tokens) | 1 pass | Full context, single call | 95%+ |
| 30-50 pages (15K-25K tokens) | 1-2 passes | Full context + verification | 97%+ |
| 50-100 pages (25K-50K tokens) | 2-3 passes | Structure extraction + section analysis | 95%+ |
| 100-200 pages (50K-100K tokens) | 4 passes | Full multi-pass pipeline | 95%+ with verification |
| 200-300 pages (100K-150K tokens) | 4 passes + RAG | Section-level + retrieval augmented | 95%+ with verification |
| 300+ pages or 50+ doc deal room | Triage first | Smart Skim → prioritized multi-pass | 95%+ on priority sections |

### The 7 Non-Negotiable Anti-Hallucination Rules

These are encoded into **every skill's system prompt:**

```
ANTI-HALLUCINATION RULES (built into every /legal: skill)
═══════════════════════════════════════════════════════════

1. ALWAYS CITE: Every claim references [Section X.Y, p.Z]
   Bad:  "The indemnification cap is $20M"
   Good: "The indemnification cap is $20M [Section 8.4(a), p.23, line 7]"

2. ALWAYS QUOTE: Show exact source text, don't paraphrase
   Bad:  "The non-compete was extended"
   Good: "Changed FROM: '12 months following the Closing Date'
          Changed TO: '24 months following the Closing Date'
          [Section 5.2(a), p.14]"

3. NEVER COMPARE FROM MEMORY: Each section analysis includes
   the actual source text in the prompt — never rely on earlier
   context window content

4. FLAG UNCERTAINTY: When not confident, say so explicitly
   "⚠ VERIFY: This appears to be a formatting change, not
    substantive. Confirm with source document."

5. SEPARATE FACTS FROM INTERPRETATION:
   FACT (from document): "Cap changed from $50M to $20M"
   INTERPRETATION (AI analysis): "This reduces recovery by 60%"
   Both labeled clearly so the lawyer knows what's from the doc
   vs. what's AI reasoning

6. VERIFY ALL NUMBERS: Dollar amounts, percentages, dates,
   and thresholds get a dedicated verification step
   "VERIFICATION: Re-reading Section 8.4(a)... confirmed:
    previous cap was $50,000,000, new cap is $20,000,000 ✓"

7. STRUCTURED OUTPUT: Use JSON-like schemas, not free-form
   prose. Structured output constrains the model and reduces
   hallucination vs. open-ended narrative
```

### How Multi-Pass Works Differently in Phase 1 vs Phase 2

The multi-pass pipeline works in BOTH phases, but the orchestration mechanism is different:

#### Phase 1 (Cowork Only — Claude Orchestrates Itself)

In Cowork with no MCP server, Claude follows the skill's instructions to break its own work into steps **sequentially within the conversation**:

```
100-PAGE CONTRACT IN PHASE 1 (Cowork only, no MCP):

Lawyer uploads both versions → Claude reads them → then:

Claude: "I've received both versions of the Credit Agreement
(142 pages each). This is too large for reliable single-pass
analysis. I'll process section by section.

STEP 1/4 — STRUCTURE EXTRACTION
I've identified 14 Articles and 287 defined terms.
Here's the document map: [structure output]

STEP 2/4 — SECTION-BY-SECTION COMPARISON
Analyzing Article I: Definitions...
  3 changes found: [output]
Analyzing Article II: The Loan Facility...
  7 changes found: [output]
Analyzing Article III: Conditions Precedent...
  2 changes found: [output]
...continuing through all 14 articles sequentially...

STEP 3/4 — SYNTHESIS
Combining all findings into integrated summary...

STEP 4/4 — VERIFICATION
Re-checking 6 critical findings against source text...
✓ Confirmed: interest rate changed from SOFR+250 to SOFR+300
✓ Confirmed: leverage covenant tightened from 4.0x to 3.5x
..."

Processing time: 3-5 minutes (sequential)
```

**Key limitation:** Sections are analyzed one after another, not in parallel. Claude manages the pipeline itself based on the skill's instructions. Slower but works with zero infrastructure.

#### Phase 2 (MCP Server Orchestrates — Parallel, Faster)

With the MCP server, your **code** orchestrates the pipeline and can run section analyses in parallel:

```
100-PAGE CONTRACT IN PHASE 2 (MCP server):

iManage webhook fires → MCP server pulls both versions → then:

MCP Server:
  1. Extracts text + detects sections programmatically
     (python-docx + regex for "ARTICLE I", "Section 2.1")

  2. Claude API call #1: Extract definitions from both versions

  3. 14 Claude API calls IN PARALLEL:
     Thread 1:  Compare Article I  (v1 vs v2) + definitions
     Thread 2:  Compare Article II (v1 vs v2) + definitions
     Thread 3:  Compare Article III(v1 vs v2) + definitions
     ...all 14 running simultaneously...

  4. Collect all 14 results

  5. Claude API call #16: Synthesize all section results

  6. Claude API call #17: Verify critical findings

Processing time: 45-90 seconds (parallel)
```

#### Phase 1 vs Phase 2 Multi-Pass Comparison

| | Phase 1 (Cowork) | Phase 2 (MCP Server) |
|---|---|---|
| **Who orchestrates?** | Claude itself (via skill prompt) | Your Python code |
| **Section detection** | Claude reads and identifies sections | Code parses DOCX (regex + python-docx) |
| **Section analysis** | Sequential (one after another) | **Parallel** (all sections at once) |
| **Definitions handling** | Claude extracts in Step 1, references in Step 2 | Code extracts, injects into each parallel API call |
| **Speed (100-page doc)** | 3-5 minutes | 45-90 seconds |
| **Accuracy** | Good (Claude follows instructions) | Better (deterministic splitting + focused calls) |
| **Infrastructure** | Zero | One server (~$5-10/month) |

**Both approaches use the same anti-hallucination rules.** The difference is speed and precision of orchestration, not the fundamental strategy.

### How This Works in Practice (100-Page Contract Example)

**Phase 1 version (Cowork, sequential):**
```
Lawyer uploads 100-page Credit Agreement (v1 + v2)
    ↓
Skill detects: document is ~45K tokens per version
Decision: Use multi-pass pipeline
    ↓
STEP 1 — Structure Extraction (30 seconds)
Claude reads both versions, extracts:
  • 14 Articles identified
  • 287 defined terms extracted
  • 23 cross-references mapped
    ↓
STEP 2 — Section Comparison (sequential, ~3-4 minutes)
Claude analyzes each Article one by one against both versions
  Output: 14 section analysis reports
    ↓
STEP 3 — Synthesis (20 seconds)
  • Combine all section findings
  • Generate executive summary + prioritized change list
    ↓
STEP 4 — Verification (30 seconds)
  • 6 critical findings re-checked against source text
  • All dollar amounts confirmed
    ↓
Total time: ~4-5 minutes
Lawyer gets: Complete AI analysis in conversation
```

**Phase 2 version (MCP server, parallel):**
```
iManage webhook fires → MCP server pulls both versions
    ↓
MCP server parses DOCX, detects 14 Articles programmatically
    ↓
API call #1: Extract definitions (10 seconds)
    ↓
14 API calls in PARALLEL: Compare each Article (30-45 seconds)
    ↓
API call #16: Synthesize (15 seconds)
    ↓
API call #17: Verify critical findings (15 seconds)
    ↓
Generate DOCX redline + blackline + AI memo
    ↓
Upload to iManage
    ↓
Total time: ~90 seconds
Lawyer gets: 3 documents in iManage + in-conversation summary
```

### What If Claude Still Gets Something Wrong?

**Defense in depth:**

1. **Phase 1 (manual upload):** The lawyer reads Claude's analysis alongside the actual documents. Claude is a reading assistant, not a replacement. Any error is caught during normal review.

2. **Phase 2 (automated):** The deterministic diff engine (not Claude) catches every character-level change with 100% accuracy. Claude only summarizes and interprets — the raw diff is always available as ground truth.

3. **Verification pass:** Critical claims are double-checked against source text before being presented.

4. **Confidence indicators:** Each finding is labeled with confidence level. LOW confidence items are flagged for manual review.

5. **Source quotes:** The lawyer can see the exact quoted text from both versions, not just Claude's paraphrase. If the quote doesn't match what they see in the document, they know immediately.

**The system is designed so that Claude's errors are detectable, not silent.** A wrong dollar amount with a source citation is easily caught when the lawyer glances at the cited section. A wrong dollar amount without a citation would go unnoticed — that's why citations are mandatory.

---

## How Phase 1 and Phase 2 Work Together

```
PHASE 1 (Day 1 — Zero Infrastructure)
══════════════════════════════════════
What you build: One markdown skill file for Claude Cowork
What the lawyer does: Upload two docs, get AI summary
What you learn: Which features lawyers actually use and value
Cost: $0 infrastructure
Timeline: Ship in days

        ↓ (lawyer feedback informs Phase 2 priorities)

PHASE 2 (Month 2-3 — One MCP Server)
══════════════════════════════════════
What you build: Cloudflare Worker MCP server
What it adds:
  ✓ Automatic iManage document detection
  ✓ Deterministic diff (100% accurate change detection)
  ✓ DOCX output with real Word track changes
  ✓ Auto-upload results back to iManage
  ✓ Inbox/outbox automation (the original ask)
Prerequisite: Law firm IT security approval for iManage API
Cost: Cloudflare Workers (~$5/month)
Timeline: 2-4 weeks to build

        ↓ (with iManage data flowing, you can build intelligence)

PHASE 3 (Month 4-6 — Intelligence Layer)
═════════════════════════════════════════
What you add:
  ✓ Negotiation history across rounds (v1→v2→v3→v4)
  ✓ Opposing counsel pattern recognition
  ✓ "They typically concede on this after round 3"
  ✓ Connects to Smart Skim and Deal Context Graph
Prerequisite: Enough historical data from Phase 2
Cost: Same infrastructure (just smarter skills)
Timeline: Skill refinement based on real usage data
```

**Phase 1 proves value. Phase 2 adds automation. Phase 3 adds intelligence.**
Each phase builds on the last, and you can ship Phase 1 to your lawyer colleagues this week.

---

## Phase 2 & 3: Actual Coding Effort

### Phase 2: The MCP Server (What You're Actually Building)

One Python server with **9 functions**:

```
MCP Server Functions:
─────────────────────
1. authenticate_imanage()         — OAuth 2.0 token management
2. listen_for_new_documents()     — Webhook receiver from iManage
3. detect_version_pair()          — Match new doc to previous version
4. pull_documents()               — Download DOCX files from iManage
5. extract_text()                 — Parse DOCX to plain text
6. run_diff()                     — Deterministic diff (diff-match-patch)
7. call_claude_for_summary()      — Send diff to Claude API
8. generate_redline_docx()        — Create DOCX with track changes
9. upload_to_imanage()            — Push results back to iManage
```

### Coding Effort Per Function

| Function | Complexity | Lines of Code | Time | Notes |
|---|---|---|---|---|
| `authenticate_imanage()` | Medium | ~80-120 | 2-3 days | OAuth 2.0 flow + token refresh |
| `listen_for_new_documents()` | Easy | ~30-50 | 0.5 days | HTTP webhook endpoint |
| `detect_version_pair()` | Medium | ~60-100 | 1-2 days | Filename/metadata matching heuristics |
| `pull_documents()` | Easy | ~40-60 | 0.5 days | GET to iManage REST API |
| `extract_text()` | Easy | ~20-40 | 0.5 days | python-docx library |
| `run_diff()` | Easy | ~30-50 | 0.5 days | diff-match-patch library |
| `call_claude_for_summary()` | Easy | ~40-80 | 1 day | Anthropic SDK + prompt |
| `generate_redline_docx()` | **Hard** | ~150-250 | 3-5 days | Word track changes XML |
| `upload_to_imanage()` | Easy | ~40-60 | 0.5 days | POST to iManage API |

### The Hard Part: DOCX Track Changes

Word track changes are XML (`<w:ins>`, `<w:del>` elements). Options:

1. **Use third-party API (Draftable/Aspose)** — They generate redlines as a service (~$0.10-0.50/comparison). Saves 3-5 days of coding. **Recommended for MVP.**
2. **Build custom with python-docx + lxml** — More control but 3-5 days of XML work.

### Phase 2 Total

| Approach | Lines of Code | Calendar Time | Cost |
|---|---|---|---|
| With third-party diff API (Draftable) | ~400-600 lines | **2-3 weeks** | ~$5-10/month hosting |
| Fully custom DOCX generation | ~600-900 lines | **4-6 weeks** | ~$5-10/month hosting |

### Tech Stack

```
Framework:    FastMCP (pip install fastmcp)
HTTP:         httpx (async HTTP client)
DOCX:         python-docx + lxml (or Draftable API for MVP)
Diff:         diff-match-patch (pip install diff-match-patch)
Claude:       anthropic SDK (pip install anthropic)
Auth:         authlib (OAuth 2.0)
Hosting:      Fly.io or Railway (~$5-10/month, stateless)
```

### What the Core Code Looks Like

```python
# The entire MCP server — ~500 lines total

from fastmcp import FastMCP
from anthropic import Anthropic
import httpx
from docx import Document
from diff_match_patch import diff_match_patch

mcp = FastMCP("legal-redline")
claude = Anthropic()

@mcp.tool()
async def redline_summary(matter_id: str, doc_id_v1: str, doc_id_v2: str):
    """Compare two contract versions and generate AI analysis."""

    # 1. Pull both docs from iManage
    v1_bytes = await pull_from_imanage(matter_id, doc_id_v1)
    v2_bytes = await pull_from_imanage(matter_id, doc_id_v2)

    # 2. Extract text
    v1_text = extract_docx_text(v1_bytes)
    v2_text = extract_docx_text(v2_bytes)

    # 3. Deterministic diff
    dmp = diff_match_patch()
    diffs = dmp.diff_main(v1_text, v2_text)
    dmp.diff_cleanupSemantic(diffs)

    # 4. Claude AI analysis
    analysis = claude.messages.create(
        model="claude-sonnet-4-6",
        messages=[{
            "role": "user",
            "content": f"""Compare these contract versions.
            V1: {v1_text}
            V2: {v2_text}
            Diff: {format_diff(diffs)}

            Produce: executive summary, risk-flagged changes,
            direction analysis, suggested responses.
            CITE every change with [Section, page]."""
        }]
    )

    # 5. Generate redline DOCX + summary memo
    redline_docx = generate_tracked_changes(v1_bytes, diffs)
    summary_docx = generate_memo(analysis.content)

    # 6. Upload back to iManage
    await upload_to_imanage(matter_id, redline_docx, "REDLINE")
    await upload_to_imanage(matter_id, summary_docx, "AI-SUMMARY")

    return analysis.content
```

---

### Phase 3: Negotiation Intelligence (Mostly Prompt Engineering)

Phase 3 adds ~80 lines of code to the existing MCP server + new skill files.

| Component | Type | Lines of Code | Time |
|---|---|---|---|
| `get_negotiation_history()` MCP tool | Code | ~40 lines | 1-2 days |
| `get_opposing_counsel_history()` MCP tool | Code | ~40 lines | 1-2 days |
| Negotiation history skill prompt | Prompt engineering | Markdown file | 2-3 days |
| Opposing counsel profiling prompt | Prompt engineering | Markdown file | 3-5 days |
| Pattern recognition prompts | Prompt engineering | Markdown file | 2-3 days |
| Testing with real deal data | Testing | N/A | 3-5 days |

### Phase 3 MCP Additions

```python
# ADD to existing MCP server — ~80 lines

@mcp.tool()
async def get_negotiation_history(matter_id: str, contract_name: str):
    """Retrieve all rounds of negotiation for a contract."""
    versions = await search_imanage(
        matter_id=matter_id,
        filename_pattern=f"{contract_name}*",
        sort="date_asc"
    )
    analyses = await search_imanage(
        matter_id=matter_id,
        doc_type="AI-SUMMARY",
        related_to=contract_name
    )
    return {
        "versions": versions,
        "analyses": analyses,
        "round_count": len(versions),
        "opposing_counsel": extract_opposing_counsel(versions)
    }

@mcp.tool()
async def get_opposing_counsel_history(firm_name: str):
    """Pull historical negotiation patterns for a firm."""
    past_deals = await search_imanage(
        metadata_filter=f"opposing_counsel='{firm_name}'",
        doc_type="AI-SUMMARY"
    )
    return past_deals
```

### Phase 3 Total

| Metric | Value |
|---|---|
| New code | ~80 lines |
| New skill files | 3-5 markdown files |
| Effort split | ~30% code, ~70% prompt engineering |
| Calendar time | **2-3 weeks** |
| Additional infrastructure | $0 (same server) |

---

### Combined Coding Summary

```
Phase 1:  0 lines of code      (markdown skill file only)
Phase 2:  ~500 lines of Python  (one MCP server, 9 functions)
Phase 3:  ~80 lines of Python   (2 new MCP tools)
──────────────────────────────────────────────────
Total:    ~580 lines of Python + skill markdown files

Calendar time:
  Phase 1: Days
  Phase 2: 2-3 weeks
  Phase 3: 2-3 weeks
  Total:   5-8 weeks from start to full product

Infrastructure cost:
  Phase 1: $0
  Phase 2: ~$5-10/month (Fly.io/Railway)
  Phase 3: $0 additional
```

**The product value is in the prompt engineering, not the code.** The MCP server is a thin orchestration layer — diff-match-patch, python-docx, Anthropic SDK, and iManage's API do the heavy lifting. Teaching Claude what lawyers care about is the real differentiator.

---

# PART 6: API Cost Analysis — What Law Firms Actually Pay

## The Business Model: They Own Everything, You Build the Code

**You are NOT a middleman.** The law firm owns and pays for both API keys directly:

1. **Their iManage API credentials** — From their own IT team (they already have iManage)
2. **Their Anthropic API key** — They sign up with Anthropic directly and pay usage costs
3. **Their Claude Enterprise subscription** — Per-seat cost for Claude Cowork access

**What YOU provide:** The MCP server code (the plugin). You charge a software license fee for the code itself — a one-time fee, annual license, or per-firm subscription. You never touch their data, you never see their API bills, you never store anything.

**Why this is better:**
- Zero liability — you don't process or store their data
- No API cost risk — if they run 10,000 comparisons a month, that's their Anthropic bill
- Simple sales pitch — "Here's the plugin, plug in your keys, it works"
- Law firms prefer this — they control their own vendor relationships

**Phase 1 has ZERO API costs** — the lawyer uses Claude directly in Cowork. API costs only apply in Phase 2 and 3, where the MCP server calls Claude's API using **the firm's own Anthropic API key**.

## No Backend Needed — The MCP Server IS the Product

```
┌─────────────────────────────────────────────────────────────────┐
│                    WHAT YOU BUILD                                │
│                                                                 │
│  One MCP server (~580 lines of Python)                          │
│  That's it. No backend. No frontend. No database.               │
│                                                                 │
│  The MCP server:                                                │
│  ├── Connects to iManage (using THEIR API credentials)          │
│  ├── Calls Claude API (using THEIR Anthropic API key)           │
│  ├── Contains all optimization logic (model routing,            │
│  │   prompt caching, chunking strategy)                         │
│  ├── Contains all anti-hallucination rules                      │
│  └── Returns results to Claude Cowork                           │
│                                                                 │
│  Runs as: Cloudflare Worker, Fly.io, Railway, or even           │
│           on the firm's own servers                              │
│                                                                 │
│  Config: The firm provides a .env file with:                    │
│    ANTHROPIC_API_KEY=sk-ant-...    (their key)                  │
│    IMANAGE_CLIENT_ID=...           (their credentials)          │
│    IMANAGE_CLIENT_SECRET=...       (their credentials)          │
│    IMANAGE_BASE_URL=...            (their iManage instance)     │
└─────────────────────────────────────────────────────────────────┘
```

**All cost optimizations are baked into the MCP server code you write.** The firm doesn't configure anything — your code automatically:
- Routes simple passes to Haiku (cheap) and analysis passes to Sonnet (accurate)
- Enables prompt caching on system prompts and anti-hallucination rules
- Chunks documents using legal-aware section splitting
- Uses the most accurate model for the task, then optimizes cost second

---

## Current Claude API Pricing (March 2026)

| Model | Input (per MTok) | Output (per MTok) | Best For |
|-------|-----------------|-------------------|----------|
| **Sonnet 4.6** | $3.00 | $15.00 | Primary workhorse — section analysis, redline summary |
| **Haiku 4.5** | $1.00 | $5.00 | Verification passes, structure extraction, boilerplate detection |
| **Opus 4.6** | $15.00 | $75.00 | Complex negotiation analysis (use sparingly) |

### Cost Reduction Options (Built Into Your MCP Server Code)

These are NOT things the firm configures. **Your MCP server code does this automatically:**

| Optimization | Savings | How Your Code Implements It |
|-------------|---------|-------------|
| **Model Routing** | 50-70% | Your code picks Sonnet for analysis (accurate), Haiku for structure/verification (fast + cheap). Accuracy first, cost second. |
| **Prompt Caching** | Up to 90% on cached input | Your code sets `cache_control` in the Anthropic SDK. System prompts + anti-hallucination rules cached across all calls (cache read = 0.10× input price) |
| **Batch API** | 50% off everything | Your code can offer a "process overnight" option for non-urgent bulk reviews. Results within 24 hours. |
| **Smart Chunking** | Fewer calls needed | Your code splits documents at legal section boundaries (not arbitrary token limits), reducing redundant context across calls |

---

## Cost Per Document: 100-Page Contract Comparison (Phase 2)

A 100-page legal contract ≈ 50,000 words ≈ 75,000 tokens.

Comparing two versions of a 100-page contract triggers the full multi-pass pipeline:

### API Call Breakdown

```
Pass 1: Structure Extraction (1 call)
  Input:  ~75,000 tokens (full document)
  Output: ~5,000 tokens (TOC, sections, page map)

Pass 2: Section-by-Section Analysis (10 parallel calls)
  Input:  ~15,000 tokens each × 10 = 150,000 tokens
  Output: ~3,000 tokens each × 10 = 30,000 tokens

Pass 3: Cross-Reference + Synthesis (2 calls)
  Input:  ~90,000 tokens (all section summaries + context)
  Output: ~13,000 tokens (unified analysis + final summary)

Pass 4: Verification Spot-Checks (4 calls)
  Input:  ~20,000 tokens each × 4 = 80,000 tokens
  Output: ~2,000 tokens each × 4 = 8,000 tokens

────────────────────────────────────────────────────
TOTAL: 17 API calls
  Input:  ~395,000 tokens
  Output: ~56,000 tokens
```

### Cost Scenarios for 100-Page Comparison

```
┌─────────────────────────────────────────────────────────────────────┐
│ SCENARIO 1: All Sonnet 4.6 (Simple, No Optimization)              │
│                                                                     │
│   Input:  395K × $3.00/MTok  = $1.19                               │
│   Output:  56K × $15.00/MTok = $0.84                               │
│   ──────────────────────────────────                                │
│   TOTAL: $2.03 per comparison                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ SCENARIO 2: Model Mixing (Haiku for simple passes)                 │
│                                                                     │
│   Structure (Haiku):     75K × $1 + 5K × $5     = $0.10            │
│   Section Analysis (Sonnet): 150K × $3 + 30K × $15 = $0.90        │
│   Synthesis (Sonnet):    90K × $3 + 13K × $15   = $0.47            │
│   Verification (Haiku):  80K × $1 + 8K × $5     = $0.12            │
│   ──────────────────────────────────                                │
│   TOTAL: $1.59 per comparison                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ SCENARIO 3: Model Mixing + Prompt Caching                          │
│                                                                     │
│   Same as Scenario 2, but system prompts + anti-hallucination      │
│   rules (~8K tokens) cached across all 17 calls.                   │
│   Cache savings: 8K × 17 calls × 90% discount = ~$0.35 saved      │
│   ──────────────────────────────────                                │
│   TOTAL: ~$1.25 per comparison                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ SCENARIO 4: Everything Optimized (Model Mix + Cache + Batch API)   │
│                                                                     │
│   Batch API gives additional 50% off.                               │
│   BUT: Results take up to 24 hours (not suitable for live use).    │
│   ──────────────────────────────────                                │
│   TOTAL: ~$0.63 per comparison (batch only)                        │
└─────────────────────────────────────────────────────────────────────┘
```

**Recommended: Scenario 3 (~$1.25/comparison)** — Best balance of speed and cost.

---

## Cost by Document Size

| Document Size | Pages | Tokens (approx) | Passes | API Calls | Cost (Optimized) |
|--------------|-------|-----------------|--------|-----------|-------------------|
| Short contract | 10-30 | 15-40K | Single pass | 1-2 | **$0.10 - $0.25** |
| Medium contract | 30-50 | 40-60K | 2-pass | 4-6 | **$0.30 - $0.60** |
| Long contract | 50-100 | 60-75K | Full pipeline | 12-17 | **$0.80 - $1.25** |
| Very long (M&A) | 100-200 | 75-150K | Full pipeline+ | 20-30 | **$1.50 - $3.00** |
| Mega document | 200-500 | 150-375K | Full pipeline+ | 30-60 | **$3.00 - $7.00** |

**Key insight:** Even a 500-page M&A agreement costs under $7 to process. A junior associate billing $400/hour would take 4+ hours to manually review it ($1,600+). The AI costs are negligible compared to lawyer time saved.

---

## Monthly Cost Estimates (What the Firm Pays Anthropic Directly)

These are the firm's Anthropic API bills. You don't see or touch this money.

### 20-Lawyer Firm (Your Target Scenario)

**Conservative estimate** (each lawyer uses the tool a few times per week):

```
Feature                  Usage/Week     Cost/Use    Weekly     Monthly
─────────────────────────────────────────────────────────────────────
Redline comparisons      20/week        $1.25       $25.00     $100
Smart Skim triage        30/week        $0.30       $9.00      $36
M&A closing checklists   5/week         $0.50       $2.50      $10
Negotiation lookups      10/week        $0.10       $1.00      $4
─────────────────────────────────────────────────────────────────────
TOTAL                                               $37.50     $150/month
Per lawyer:                                                    $7.50/month
```

**Heavy usage** (active M&A practice, multiple deals closing):

```
Feature                  Usage/Week     Cost/Use    Weekly     Monthly
─────────────────────────────────────────────────────────────────────
Redline comparisons      50/week        $1.25       $62.50     $250
Smart Skim triage        80/week        $0.30       $24.00     $96
M&A closing checklists   15/week        $0.50       $7.50      $30
Negotiation lookups      30/week        $0.10       $3.00      $12
Knowledge base queries   40/week        $0.15       $6.00      $24
─────────────────────────────────────────────────────────────────────
TOTAL                                               $103.00    $412/month
Per lawyer:                                                    $20.60/month
```

**The firm's total AI spend for 20 lawyers: $150 - $412/month in API costs.**
That's less than a single hour of a senior partner's billable time ($500-1,000/hr).

### Mid-Size Firm (100 lawyers)

```
Monthly API cost:        ~$580 - $1,500/month
Per lawyer:              ~$5.80 - $15/month
```

### Large Firm (500 lawyers)

```
Monthly API cost:        ~$2,300 - $6,000/month
Per lawyer:              ~$4.60 - $12/month
```

**Note:** Per-lawyer costs go DOWN with firm size because not every lawyer uses every feature every day. The heavy users subsidize the light users when averaged out.

---

## The Firm's Total Cost to Use Your Plugin

```
┌──────────────────────────────────────────────────────────────────┐
│            TOTAL MONTHLY COST FOR A 20-LAWYER FIRM               │
│                                                                  │
│  Claude Enterprise subscription:   (Anthropic pricing, ~TBD)     │
│  Your plugin license fee:          $500 - $1,500/month           │
│  Anthropic API costs (their key):  $150 - $412/month             │
│  MCP server hosting:               $5 - $10/month                │
│  ──────────────────────────────────                              │
│  Total non-subscription cost:      $655 - $1,922/month           │
│  Per lawyer:                       $33 - $96/month               │
│                                                                  │
│  vs. Harvey AI:                    $24,000/month (20 × $1,200)   │
│  vs. Junior associate time saved:  $4,400/month per lawyer       │
│                                                                  │
│  ROI: If plugin saves each lawyer 30 min/day:                    │
│    20 lawyers × 30 min × $400/hr × 22 days = $88,000/month      │
│    Plugin total cost: ~$1,500/month                              │
│    ROI: 58x return                                               │
└──────────────────────────────────────────────────────────────────┘
```

---

## Your Revenue Model (What You Charge)

**You sell software, not API access.** Your costs are near-zero (no API bills, no data storage). Your revenue is pure software licensing.

### Suggested Pricing (Per-Firm License, Not Per-Lawyer)

| Tier | Monthly Fee | Firm Size | What's Included |
|------|------------|-----------|-----------------|
| **Starter** | $500/month | Up to 10 lawyers | Redline summaries + Smart Skim |
| **Professional** | $1,500/month | Up to 50 lawyers | All features including negotiation intelligence |
| **Enterprise** | $3,000/month | Unlimited lawyers | All features + custom playbooks + priority support |

### Why Per-Firm (Not Per-Lawyer)

- Law firms hate per-seat pricing — it discourages adoption
- Per-firm pricing is simpler to sell ("$1,500/month, everyone can use it")
- Harvey charges per-seat ($1,200/lawyer) and firms complain about it
- Your $1,500/month vs Harvey's $24,000/month for 20 lawyers = instant sale

### Comparison

| | Your Plugin | Harvey |
|--|------------|--------|
| 20-lawyer firm cost | $1,500/month total | $24,000/month |
| What the firm also pays | ~$150-412/month API (to Anthropic) | Nothing extra |
| Minimum commitment | Month-to-month | Annual ($288K+) |
| What it requires | Claude Enterprise + iManage | Harvey platform |
| Deployment time | Hours (Phase 1) | Months |

### Your Economics

```
5 firms × $1,500/month = $7,500/month revenue
Your costs: ~$0/month (no API bills, no data hosting)
Only cost: your time building and supporting the plugin
Gross margin: ~100% (pure software)
```

---

## Phase 1 vs Phase 2/3 Cost Summary

```
PHASE 1 (Cowork only — no MCP server):
  Your infrastructure cost:    $0
  Firm's API cost:             $0 (covered by Claude subscription)
  Your revenue:                Free plugin → build user base → upsell Phase 2
  Backend needed:              NO

PHASE 2 (MCP server — redline automation):
  Your infrastructure cost:    $0 (firm hosts MCP or you host on Fly.io ~$5-10/mo)
  Firm's API cost:             ~$7-20/lawyer/month (paid to Anthropic directly)
  Your revenue:                $500-1,500/month software license per firm
  Backend needed:              NO — the MCP server IS the product

PHASE 3 (Negotiation intelligence):
  Your infrastructure cost:    $0 additional
  Firm's API cost:             ~$1-3/lawyer/month additional
  Your revenue:                $1,500-3,000/month (upgrade from Phase 2)
  Backend needed:              NO — just 80 more lines added to the MCP server
```

### Accuracy-First Model Routing (Built Into Your MCP Code)

```python
# This logic lives in YOUR MCP server code
# The firm never sees or configures this

MODEL_ROUTING = {
    # Accuracy-critical passes → best model
    "section_analysis":    "claude-sonnet-4-6",    # $3/$15 per MTok
    "cross_reference":     "claude-sonnet-4-6",    # needs nuanced understanding
    "synthesis":           "claude-sonnet-4-6",    # final summary must be perfect

    # Structured/mechanical passes → fast cheap model
    "structure_extraction": "claude-haiku-4-5",    # $1/$5 per MTok
    "verification":         "claude-haiku-4-5",    # spot-checking, yes/no answers
    "boilerplate_detect":   "claude-haiku-4-5",    # pattern matching

    # Complex judgment calls (rare, only when needed)
    "negotiation_strategy": "claude-opus-4-6",     # $15/$75 per MTok
}

# Prompt caching — automatic, no config needed from the firm
CACHE_CONTROL = {
    "system_prompt":           True,  # anti-hallucination rules, ~8K tokens
    "legal_analysis_template": True,  # reused across all section analyses
    "contract_type_guidance":  True,  # M&A, NDA, etc. specific rules
}
```

This gives firms the **most accurate results possible** while keeping costs low automatically. The firm doesn't make any decisions about models — your code handles it all.

**Bottom line: The firm pays Anthropic directly for API usage (~$150-412/month for 20 lawyers). You charge a software license (~$1,500/month). You have zero API costs, zero data liability, zero infrastructure beyond a tiny MCP server. No backend needed.**

---

# PART 6: Go-To-Market Strategy — First Client Pricing & Pilot Model

*Strategy compiled: March 8, 2026*

---

## Target Market: Boutique Law Firms (10-25 Lawyers)

### Why Boutique First
- **Fast decision-making** — one managing partner says yes, you're in
- **Minimal security review** — no 6-month vendor approval process
- **No iManage needed initially** — many use Clio, NetDocuments, or even basic file systems
- **Under $3,000 = expense report approval** — no committee, no procurement
- **Hungry for competitive edge** — boutiques compete against big firms with bigger budgets

---

## The Pilot Model: Build Two, Get Paid to Train Everyone

### What You Build for Free (Proof Phase)

**Two core Claude Cowork skills — no MCP server, no custom infrastructure:**

| Skill | What It Does | Why It's Free |
|---|---|---|
| **Contract Change Analysis** (`/legal:redline-summary`) | Upload two contract versions → AI explains what changed, why it matters, risk flags, suggested pushback language | Your strongest demo — value is obvious in 5 minutes |
| **Smart Skim** (`/legal:smart-skim`) | Upload a 100+ page contract → AI produces a prioritized reading guide with color-coded sections (MUST READ / CHECK / SKIP) | Saves hours on day one, no competitor does this |

**What these require:**
- Claude Cowork (the firm needs Claude Team or Pro — $20-30/user/month, paid by the firm directly to Anthropic)
- Your skill files (markdown — no code, no servers, no databases)
- That's it. No MCP. No iManage integration. Lawyers upload documents manually.

**What these do NOT require:**
- No MCP server or custom connector
- No iManage / Clio / NetDocuments integration
- No backend infrastructure
- No database
- No vector store
- No IT team involvement from the firm

### The Pilot Engagement (Weeks 1-4)

| Week | What Happens | Cost to Firm |
|---|---|---|
| Week 1 | You deploy both skills to the firm's Claude Cowork environment. Set up for 1-2 lawyers (typically a senior associate + a junior). | **$0** |
| Week 2-3 | The 1-2 pilot lawyers use both tools on real contracts. You're available for questions. They see the time savings firsthand. | **$0** |
| Week 4 | Pilot lawyers report back to managing partner: "This saves us hours every week." You schedule the firm-wide onboarding. | **$0** |

### What You Get Paid For: Firm-Wide Onboarding

Once the 1-2 pilot lawyers have seen the value, the firm pays you to:

1. **Train every lawyer at the firm** (10-25 people) on both tools
2. **Customize workflows** for each practice group (corporate team uses it differently than litigation)
3. **Create quick-reference documentation** so attorneys can use it independently
4. **Provide 30 days of post-training support** (email/Slack for questions)

### First-Client Pricing

| What | Price |
|---|---|
| Build + deploy both skills (1-2 lawyers, 2-4 week pilot) | **Free** |
| Firm-wide onboarding, training, workflow customization, 30-day support | **$2,950** |

**Why $2,950:**
- Under $3,000 = single partner can approve without committee
- Feels calculated, not arbitrary
- A partner billing $500/hour pays this off in 6 hours of saved time
- Your tools save more than that in the first week across the firm
- Low enough to be a no-brainer after they've seen it working

### After You Have Proof (Client #2+)

| Client # | Pilot | Onboarding Price | Why |
|---|---|---|---|
| **Client 1-2** | Free | **$2,950** | Building track record + testimonials |
| **Client 3-5** | Free | **$4,950** | You have 1-2 references now |
| **Client 6+** | **$2,000** (paid pilot) | **$5,950-8,000** | Proven product, case studies, testimonials |
| **Client 10+** | **$3,000** (paid pilot) | **$8,000-12,000** | Established reputation |

---

## Phase 2: MCP Integration & Advanced Tools (Where the Real Money Is)

Once a firm is using the two core skills and loves them, they'll ask: "Can we connect this to iManage so we don't have to upload files manually?" and "Can it also do X?"

**That's when you sell Phase 2 — and this is where you charge significantly more.**

### Why MCP Integration Costs More

| Phase 1 (Cowork Skills Only) | Phase 2 (MCP Integration) |
|---|---|
| Markdown skill files — no code | Custom MCP server — real engineering |
| No infrastructure | Cloudflare Worker deployment |
| No security review needed | IT team security review required |
| Lawyers upload files manually | Automated document pull/push from iManage, Clio, or NetDocuments |
| Zero ongoing maintenance | Ongoing connector maintenance |
| Works in minutes | Requires OAuth setup, API credentials, testing |

### Phase 2 Pricing (Per Tool, One-Time)

| Tool | What It Adds | First Clients | Standard |
|---|---|---|---|
| **iManage / Clio / NetDocuments MCP Connector** | Automated document retrieval + filing. No more manual uploads. | **$5,000-8,000** | **$12,000-18,000** |
| **Deal Context Graph** | Cross-document relationship mapping. Change a term → see every affected document. | **$3,000-5,000** | **$8,000-12,000** |
| **Client Intelligence / Knowledge Base** | Per-client knowledge with ethical wall isolation. Query past deals, arguments, positions. | **$3,000-5,000** | **$8,000-12,000** |
| **Negotiation Playbooks** | Opposing counsel profiling from historical data. AI-generated strategy recommendations. | **$3,000-5,000** | **$8,000-12,000** |
| **M&A Closing Automation** | AI reads purchase agreement → generates full closing checklist with status tracking. | **$3,000-5,000** | **$8,000-12,000** |

### Phase 2 Bundles

| Bundle | What's Included | First Clients | Standard |
|---|---|---|---|
| **DMS Integration Only** | MCP Connector + Version 2 of both core skills (auto-pull from DMS) | **$5,000-8,000** | **$12,000-18,000** |
| **Full Platform** | MCP Connector + all 4 advanced tools | **$15,000-25,000** | **$40,000-65,000** |

---

## Revenue Model Summary

### One-Time Project Fees (Not Subscription)

Boutique firms hate recurring vendor fees. Everything is one-time:
- You build it, deploy it, train the team, hand it over
- They own the skills and run them independently
- 30-day support included, then they're on their own

### Optional Recurring Revenue (Later)

Once you have 5+ clients, offer optional add-ons:
- **Quarterly tune-ups** ($500-1,000/quarter) — update prompts, add new document types, retrain on workflow changes
- **On-call support** ($200-500/month) — "call us when it breaks" safety net
- **New tool builds** — each new skill or feature is a separate project fee

### What the Firm Pays Separately (Not Your Revenue)

| Cost | Who Pays | Amount |
|---|---|---|
| Claude Team or Pro subscription | Firm pays Anthropic directly | $20-30/user/month |
| Claude API usage (Phase 2+ tools only) | Firm pays Anthropic directly | ~$50-500/month depending on volume |

**You never touch these costs.** The firm has a direct relationship with Anthropic. This keeps your pricing clean and your liability at zero.

---

## Realistic First-Year Revenue Projection

### Conservative Scenario (3 Clients in Year 1)

| Client | Phase 1 | Phase 2 | Total |
|---|---|---|---|
| Client 1 (Month 1-2) | $2,950 | $5,000 (DMS connector) | **$7,950** |
| Client 2 (Month 4-5) | $4,950 | $8,000 (DMS + 1 advanced tool) | **$12,950** |
| Client 3 (Month 7-8) | $4,950 | $15,000 (full platform) | **$19,950** |
| **Year 1 Total** | | | **$40,850** |

### Moderate Scenario (6 Clients in Year 1)

| Clients | Phase 1 Revenue | Phase 2 Revenue | Total |
|---|---|---|---|
| Clients 1-2 | $5,900 | $10,000 | $15,900 |
| Clients 3-5 | $14,850 | $24,000 | $38,850 |
| Client 6 | $5,950 | $15,000 | $20,950 |
| **Year 1 Total** | | | **$75,700** |

---

## The Sales Conversation (How to Close)

### Step 1: Get the Meeting
- "I've built two AI tools that save your attorneys hours on contract review. Can I show you in 15 minutes?"
- Target: managing partner or head of corporate practice

### Step 2: Live Demo (15 Minutes)
- Show Contract Change Analysis on a sample contract — the risk flags and suggested responses sell themselves
- Show Smart Skim on a 100+ page agreement — the reading guide is an instant "wow"

### Step 3: Offer the Pilot
- "I'll set this up for two of your attorneys at no cost. They use it for 2-4 weeks on real contracts. If they love it, I'll train your whole team for $2,950."
- This is a zero-risk offer. No partner says no to free.

### Step 4: After the Pilot
- The pilot lawyers become your internal champions
- Schedule the firm-wide training ($2,950)
- During training, every lawyer asks "can it also do X?" — that's your Phase 2 pipeline

### Step 5: Phase 2 Upsell (Month 3-6)
- "Your team keeps asking about connecting to iManage and building a client knowledge base. Here's what that looks like..."
- By now you have proof, trust, and internal champions

---

## Key Principles

1. **Free pilot → paid training** is the entire first-client model
2. **$2,950** is the magic number — under $3K, single partner approval, feels like nothing after they've seen it work
3. **Phase 1 = Cowork skills only** — no MCP, no infrastructure, no IT involvement. Just markdown skill files.
4. **Phase 2 = MCP + advanced tools** — this is where real engineering and real money start. Charge 3-5x more.
5. **The firm pays Anthropic directly** for Claude subscriptions and API usage. You never touch their data or their AI costs.
6. **One-time fees, not subscriptions** — boutique firms buy projects, not SaaS. Add optional recurring support later.
7. **Start with 10-25 lawyer boutiques** — fast decisions, minimal security review, builds your track record for larger firms later.
