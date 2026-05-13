# AI photo prompts — Sidebar AI brand library

Use these prompts in your image generator of choice (Midjourney v6, ChatGPT image, Sora, Recraft v3, Flux Pro, etc.). Each prompt is calibrated for sidebarai.us — partner-grade tone, navy + gold + warm-stone palette, restrained editorial photography rather than SaaS-stock or AI-cliché imagery.

## Anti-pattern guardrails (apply to every prompt)

> Negative directives: no glowing neural networks, no holographic touchscreens, no robot iconography, no abstract gradient blobs, no diverse-business-people-pointing-at-laptops stock photography, no over-saturated colors, no fisheye, no shallow depth-of-field gimmicks, no AI-cliché futurism, no over-perfect skin retouching, no symmetric hand-poses, no signage that reads as gibberish, no logos.

---

## 1. Hero portrait — Jinwoong Lee (founder)

**Save to:** `/public/founder-portrait.jpg` (replaces the placeholder in `components/seminars/SeminarsFounder.tsx`)

```
Editorial portrait of a Korean American man in his early thirties, seated at a walnut conference table in a modernized Chicago boutique law-firm office. He is facing camera, half-turned toward a printed brief on the table, mid-sentence, calm and analytical expression — not smiling for the camera, not dramatic. Wearing a charcoal-navy single-breasted wool suit, white open-collar shirt, no tie, no jewelry. Hands resting naturally — one open on the brief, the other holding a fountain pen. Slim tortoise-shell eyeglasses. Short side-parted black hair, well-groomed, real skin texture, no retouching that erases natural lines.

Setting: low-key lit conference room with floor-to-ceiling windows behind him diffusing soft winter daylight from camera-left, partially obscured shelves of leather-bound legal volumes to the right, a closed MacBook Pro and a paper redline document on the table, no exposed monitors. Warm walnut wood-paneling on the far wall. No corporate-logo signage anywhere.

Color grade: muted editorial, deep navy + warm stone + a hint of brushed gold from the table lamp at frame-edge. Shot on Hasselblad H6D-100c, 80mm f/2.8 lens, f/4.0, 1/250s, ISO 200. Real photographic look — film grain present, no plastic AI smoothing. 4:5 portrait crop. 8K. Sharp focus on his eyes; mild fall-off everywhere else.

Quietly authoritative. Wall Street Journal "Person of Interest" register, not LinkedIn headshot.
```

Variations to A/B:
- Swap the suit for a navy turtleneck + charcoal blazer for a more "engineer in court attire" register.
- Stand at the window looking down at street level for a "thinking" alternate.

---

## 2. Hero context photo — homepage above-the-fold scene

**Save to:** `/public/home-hero.jpg` (currently the homepage hero uses an inline dashboard mock — this is optional, for use on `/sprint` or as a background plate on the homepage hero).

```
Editorial wide shot of a boutique law-firm conference room mid-meeting, photographed from a low corner perspective. Three figures partially in frame: a managing partner (mid-fifties, silver-temple, blazer over collared shirt) standing with hand resting on a printed contract draft; a younger associate (early thirties, woman, navy sheath dress) leaning to point at a laptop screen showing a contract-redline interface in dark mode; a senior paralegal (forties, glasses, cardigan) seated taking handwritten notes in a Moleskine notebook. The laptop screen is intentionally not perfectly readable but clearly shows a structured legal-document review UI in navy/gold.

Setting: walnut conference table, floor-to-ceiling windows revealing a soft-focus city skyline at golden hour (Chicago-coded but not literally identifiable — Wacker Drive could read this way), framed historical bar-association certificates on the far wall, a paper file stack and two leather portfolios on the table, an iPad with a stylus resting nearby. No corporate logos. No visible brand on the laptop.

Color grade: warm editorial — deep navy walls, brushed-gold light from a single overhead pendant, soft window-light from camera-right. Shot on Sony A7R IV, 35mm f/1.8 lens, f/4.0, 1/200s, ISO 400. Real photographic look, subtle film grain, natural skin tones, three-dimensional depth, no AI plastic smoothing. 16:9 landscape crop. 8K.

Mood: serious working session, not posed. Wall Street Journal magazine-feature register.
```

---

## 3. Seminar context photo — `/seminars` hero plate

**Save to:** `/public/seminar-room.jpg` (use as an editorial card image in `SeminarsHero.tsx` or as background of the right column).

```
Editorial wide shot of an in-progress AI seminar inside a Chicago boutique law-firm's conference room. Eight participants seated around a long walnut conference table: two managing partners (mid-fifties, one Black man, one white woman), three practice leaders (early forties, mixed gender, mixed ethnicity), a COO/operations lead (late thirties, woman, blazer), an associate (early thirties), and an in-house IT MSP rep (forties, button-down, no tie). One presenter standing at the head of the table beside a projected slide on a flat-screen monitor showing a clean "Claude for Legal — Sprint Plan" diagram in navy and gold typography, well-lit and readable but not the focus of the frame. Several attendees are taking notes on legal pads; two are leaning forward toward the presenter. Casual-professional dress — no jackets-on-chair stock pose.

Setting: large conference table, warm walnut paneling, framed Illinois Supreme Court admission certificates on the far wall, a glass-walled hallway visible behind the participants suggesting a high-floor view, paper copies of a printed runbook and individual notepads in front of each attendee, a water carafe and stoneware cups, no laptop screens dominating the table. No corporate logos. No name tags. No camera-aware poses — captured mid-thought.

Color grade: warm editorial — navy walls, brushed gold from overhead pendant lights, daylight from camera-left windows. Hasselblad X2D, 45mm f/3.5 lens, f/5.6, 1/160s, ISO 400. Real photographic look, soft natural shadows, subtle grain, no plastic AI smoothing. 16:10 crop. 8K.

Editorial Wall Street Journal "Future of Work" feature register. Quiet authority. Working session, not a sales seminar.
```

---

## 4. Ethics-section visual (optional)

**Save to:** `/public/aba-rules.jpg` (use as a card image inside `SeminarsEthics.tsx`).

```
Editorial overhead shot of an attorney's working desk, top-down composition. Centered: an open hardcover ABA Model Rules of Professional Conduct book, page visible showing Rule 1.6 (Confidentiality of Information) with an annotated sticky note ("rev. for AI usage policy 2026 — JL") and a fountain pen resting across the page. Surrounding objects: a closed MacBook Pro at the top of the frame, a printed Sidebar AI-branded one-page client policy template (legible "Bar-compliant AI usage policy template" header, real legible legal-document body text, navy + gold accents matching the brand), a Mont Blanc fountain pen, a paper coffee cup with no logo, a small brass paperweight, eyeglasses set to the side. Warm walnut wood desk. Single window of daylight at top of frame.

Color grade: warm editorial — paper-white, walnut, gold pen, navy accents on the policy template. Shot on Phase One IQ4 medium format, 80mm f/2.8 lens, f/5.6, 1/125s, ISO 100. Razor-sharp, no AI plastic smoothing, natural paper texture. Square 1:1 crop. 8K.

Magazine-feature register — the kind of overhead shot the New York Times Magazine runs alongside a partner profile.
```

---

## 5. Implementation sprint scene (for `/sprint` page or homepage card)

**Save to:** `/public/sprint-day-3.jpg`

```
Editorial mid-shot of two engineers and one law-firm partner working together at a long conference table, late afternoon. The engineer (Korean American man, early thirties, navy turtleneck + charcoal blazer, the same person as the founder portrait) is gesturing toward a laptop screen showing a clean configuration UI in navy and gold. The second engineer (woman, late twenties, mixed ethnicity, navy crewneck sweater over an oxford shirt) is typing on her own laptop, focused. The partner (mid-fifties, white, charcoal blazer, white shirt, no tie) is leaning in toward the screen, hand on chin, expression of genuine engagement — not posed agreement.

Setting: walnut conference table covered with paper runbooks (legible Sidebar AI-branded covers, real legal-document body text), printed deal documents, a stack of contract drafts with sticky notes, two open MacBook Pros, a tablet stylus, a stoneware coffee mug. Floor-to-ceiling window behind them showing soft golden-hour Chicago sky. Framed bar certificates and a leather-bound case-reporter set on the far wall.

Color grade: warm editorial — golden-hour daylight, walnut, navy accents from the laptop screens. Sony A1, 50mm f/1.4 lens, f/2.8, 1/250s, ISO 200. Real photographic look, subtle film grain, natural skin tones. 3:2 landscape. 8K.

Mood: collaborative working session, late on Day 3 of the sprint. Bloomberg Businessweek register, not vendor pitch.
```

---

## File placement quick-reference

| Page / component | File path | Aspect | Notes |
|---|---|---|---|
| Founder portrait (seminars + about) | `/public/founder-portrait.jpg` | 4:5 | Replace the placeholder card in `components/seminars/SeminarsFounder.tsx`. Wire by replacing the placeholder block with a `next/image` Image. |
| Home hero background plate (optional) | `/public/home-hero.jpg` | 16:9 | Currently the homepage uses an inline UI mock. Use as background plate if you want a photographic hero variant. |
| Seminars hero card plate | `/public/seminar-room.jpg` | 16:10 | Slot into the right column of `SeminarsHero.tsx`. |
| Ethics section card | `/public/aba-rules.jpg` | 1:1 | Optional. Could anchor a future `/bar-ethics` page. |
| Sprint page card | `/public/sprint-day-3.jpg` | 3:2 | For the future `/sprint` page. |

Once each photo is saved, replace the corresponding placeholder block in the component with a `next/image` `<Image>` that points to the new file. Keep the bracket-corner styling — it's a Sidebar-AI visual signature.
