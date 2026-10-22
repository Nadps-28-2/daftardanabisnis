---
name: Nusantara Digital Merchant
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#414843'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#406652'
  primary: '#001f12'
  on-primary: '#ffffff'
  primary-container: '#0e3524'
  on-primary-container: '#779f88'
  inverse-primary: '#a7d0b7'
  secondary: '#3c6a00'
  on-secondary: '#ffffff'
  secondary-container: '#abf45f'
  on-secondary-container: '#3f6f00'
  tertiary: '#111c17'
  on-tertiary: '#ffffff'
  tertiary-container: '#26312b'
  on-tertiary-container: '#8d9991'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c2ecd3'
  primary-fixed-dim: '#a7d0b7'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#294e3b'
  secondary-fixed: '#aef762'
  secondary-fixed-dim: '#93da48'
  on-secondary-fixed: '#0e2000'
  on-secondary-fixed-variant: '#2c5000'
  tertiary-fixed: '#d9e6dd'
  tertiary-fixed-dim: '#bdcac1'
  on-tertiary-fixed: '#131e19'
  on-tertiary-fixed-variant: '#3e4943'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets micro, small, and medium enterprise owners (UMKM/MSMEs) across Indonesia—specifically warung operators, traditional culinaries, neighborhood grocers, and modern coffee stall merchants. The emotional tone must bridge institutional financial security with accessible, jargon-free warmth. It demystifies cashless transactions, QRIS settlement timelines, and digital merchant accounts through clarity and straightforward utility.

The design movement combines **Modern Tactile Cleanliness** with **Accessible Financial Minimalism**:
- **Approachable Authority:** Grounded in deep botanical greens that signal wealth preservation, security, and legitimacy, contrasted against energizing lime highlights that denote speed, instant receipt confirmation, and dynamic growth.
- **Friendly Ergonomics:** Generous touch targets, soft corners, and distinct card grouping designed for low-friction operation on lower-tier Android mobile displays in direct daylight or quick kitchen environments.
- **Micro-Clarity:** Avoiding dense fintech terminology in favor of conversational guidance, checklist progression indicators, step-by-step verification markers, and high-legibility typographic contrasts.

## Colors

The palette directly reflects the visual identity of progressive Indonesian commerce:

- **Primary Deep Forest Green (`#0E3524`):** The primary color anchors the interface. It is used for primary brand elements, headers, high-emphasis navigation surfaces, critical text titles, and high-trust status indications. It eliminates the cold, clinical feel of corporate banking blues.
- **Accent Vibrant Lime (`#9EE653`):** The catalytic accent for high-priority calls to action, successful verification statuses, active tabs, and dynamic focus borders. It guarantees instant visual capture on mobile screens.
- **Tertiary Soft Mint (`#E8F5EC`):** A soothing, low-saturation tint utilized for container backgrounds, passive guidance badges, card surfaces, and informational banner fills, preventing visual fatigue on plain white screens.
- **Neutral Deep Slate (`#1E293B` & `#334155`):** Reserved for ultra-crisp readable body copy, tabular transaction details, and secondary descriptions. Avoid pure blacks (`#000000`) to preserve an organic, friendly finish.
- **Clean White (`#FFFFFF`):** Base canvas background and foreground elevated cards, maximizing outdoor visibility and high contrast.

## Typography

**Plus Jakarta Sans** serves as the universal typeface across all roles due to its balance of humanist warmth, open counters, and Indonesian design heritage. Its geometric balance ensures numeric clarity for financial entries (such as Rupiah sums and fee percentages) while maintaining a friendly, non-intimidating posture.

- **Headlines:** Set in Bold (700) or ExtraBold (800) using primary forest green (`#0E3524`) to deliver clear structural anchoring.
- **Body Text:** Maintained at regular (400) weight with generous line-height ratios (1.5–1.6x) in slate (`#334155`), ensuring comfort for users with varying levels of literacy and differing screen brightnesses.
- **Numbers & Rupiah Currency:** Always rendered in semi-bold or bold tabular figures to allow instant visual scanning of balance cards and pricing tiers.

## Layout & Spacing

The layout model is strictly **mobile-first**, recognizing that more than 90% of merchant onboarding occurs on portable handheld devices. 

- **Grid Architecture:** 4 columns on mobile screens (`< 640px`) with 16px margins; 8 columns on tablet viewports (`640px - 1024px`) with 24px margins; and 12 columns for desktop viewports (`> 1024px`) with a locked max container width of 1140px centered on screen.
- **Vertical Rhythm:** Content follows an 8pt base grid for structural layout intervals and 4pt for micro spacing (badge inner padding, icon offsets).
- **Thumb Zone Compliance:** Primary interactive triggers, persistent onboarding step drawers, and next actions must sit within the bottom 40% of the mobile viewport.

## Elevation & Depth

Visual hierarchy combines tonal layering with crisp, low-intensity ambient green shadowing to avoid the grimy appearance of pure black shadows on white backgrounds:

- **Surface 0 (Base Canvas):** Pure Clean White (`#FFFFFF`) or ultra-subtle tint (`#FAFCFA`) for full background pages.
- **Surface 1 (Primary Cards & Step Containers):** White surface framed by an ultra-thin 1px stroke of `#E2ECE5` combined with an ambient shadow: `0 4px 16px -2px rgba(14, 53, 36, 0.06), 0 2px 6px -1px rgba(14, 53, 36, 0.04)`.
- **Surface 2 (Floating Action Bars & QR Previews):** Elevated white or deep green modal sheets with `0 12px 32px -4px rgba(14, 53, 36, 0.12)`.
- **Informational Insets:** Zero elevation with flat, low-contrast fills of Soft Mint (`#E8F5EC` or `#F0F8F2`) and 0px drop shadow, creating natural nested areas for tips, notes, and fee breakdowns.

## Shapes

The interface embraces organic, friendly pill geometry (Level 3 roundedness). This creates an inviting, accessible environment that reduces the intimidation of financial setup:

- **Base Cards & Modules:** Styled with generous `1.5rem` (`rounded-2xl`) to `2rem` (`rounded-3xl`) borders, matching the rounded aesthetic of the merchant logo.
- **Action Buttons & Badges:** Fully pill-shaped (`9999px`) to invite touch and denote effortless tap targets.
- **Form Inputs & QR Code Containers:** Smooth 16px radius (`rounded-2xl`) maintaining visual cohesion with adjacent cards.

## Components

### Buttons
- **Primary CTA (DANA Bisnis Activation / Next Step):** Pill-shaped, background in vibrant lime `#9EE653`, text in primary forest green `#0E3524` (Bold), height `52px` on mobile for thumb accessibility. On hover/active, transitions to `#86D940`.
- **Secondary Action:** Pill-shaped, transparent fill with 1.5px solid `#0E3524` border, text `#0E3524`.
- **Tertiary/Ghost:** Borderless, text `#0E3524` with soft mint hover fill `#E8F5EC`.

### Educational & Feature Cards
- **Guide Step Cards:** Base background `#FFFFFF` or `#F0F8F2`, radius `24px`, interior padding `20px`. Must feature prominent step numbers enclosed in circular lime badges (`#9EE653`) with forest green bold text.
- **Comparison / Value Metric Cards:** Split layout with dark forest green headers for the "After QRIS" state and neutral slate headers for the "Manual Cash" state.

### Input Fields & Verification Controls
- **Text & Document Upload Fields:** Height `52px`, radius `16px`, background `#FFFFFF`, border `1.5px solid #CBD5E1`. On focus, shifts border color to `#0E3524` with a subtle `0 0 0 3px rgba(158, 230, 83, 0.35)` focus ring.
- **Checkboxes & Radios:** Softly rounded boxes (checkboxes: 6px radius; radios: circle), 22px diameter. Selected state fills with `#0E3524` and displays a `#9EE653` check indicator.

### Badges & Status Chips
- **Fee Tier / Status Indicators ("MDR 0%", "Instan Cair", "Terverifikasi"):** Pill container, background `#E8F5EC`, border `1px solid #C8E8D2`, label font in bold `#0E3524`.

### Interactive QR Mockup Container
- Prominently framed white tile surrounded by a 4px vibrant lime (`#9EE653`) border, mimicking real physical acrylic stands placed at merchant cash registers.