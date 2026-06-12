---
name: Madrasah Modern Digital
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#3e4942'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#6e7a71'
  outline-variant: '#bdcac0'
  surface-tint: '#006c47'
  primary: '#006b47'
  on-primary: '#ffffff'
  primary-container: '#00875a'
  on-primary-container: '#ffffff'
  inverse-primary: '#71dba6'
  secondary: '#556158'
  on-secondary: '#ffffff'
  secondary-container: '#d9e6da'
  on-secondary-container: '#5b675e'
  tertiary: '#775900'
  on-tertiary: '#ffffff'
  tertiary-container: '#967000'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8df7c1'
  primary-fixed-dim: '#71dba6'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005235'
  secondary-fixed: '#d9e6da'
  secondary-fixed-dim: '#bdcabe'
  on-secondary-fixed: '#131e17'
  on-secondary-fixed-variant: '#3e4a41'
  tertiary-fixed: '#ffdf9e'
  tertiary-fixed-dim: '#fabd00'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  section-gap: 64px
  glass-padding: 20px
---

## Brand & Style
The brand personality for the design system is professional, progressive, and spiritually grounded. It aims to bridge traditional Islamic education values with a forward-thinking digital experience for MIN 3 MADIUN. The UI evokes a sense of clarity, trust, and academic excellence.

The design style is a refined **Glassmorphism**, utilizing layered transparency and frosted glass effects to create depth without visual clutter. By combining clean backgrounds with translucent UI elements, the system achieves a contemporary "lightweight" feel that emphasizes accessibility and modern educational standards.

## Colors
The color palette is centered around "Islamic Emerald," a vibrant yet professional green that represents growth and tradition. 

- **Primary**: A rich, deep green (#00875A) used for core branding and primary actions.
- **Secondary**: A soft, mint-tinted white (#E8F5E9) used for background surfaces and subtle highlights.
- **Tertiary**: A golden accent (#FFC107) reserved for high-priority alerts or "Excellence" markers (achievements/awards).
- **Glass Overlay**: A semi-transparent white (rgba(255, 255, 255, 0.7)) with a 20px backdrop blur is the primary container style.
- **Background**: High-quality photography of the school campus should be used with a 40% opacity Emerald overlay to maintain text legibility.

## Typography
This design system utilizes a dual-sans-serif approach to balance impact with readability. **Plus Jakarta Sans** provides a bold, contemporary geometric feel for headings and navigation labels, reflecting a modern institutional voice. **Inter** is used for body text to ensure maximum legibility across diverse educational content and administrative data.

Headlines should always use a heavier weight (Bold or ExtraBold) to create a strong visual hierarchy against the soft glass backgrounds.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous whitespace to prevent the glass elements from feeling cramped. 

- **Desktop**: 12-column grid with 24px gutters and 80px side margins.
- **Mobile**: 4-column grid with 16px gutters and 20px side margins.
- **Rhythm**: All spacing is derived from a 4px/8px base unit. 
- **Containment**: Content is grouped within glass "modules" that have internal padding of 20px to 32px, ensuring text never touches the edge of the frosted containers.

## Elevation & Depth
Depth is created through **Glassmorphism** rather than traditional heavy shadows.

- **Level 1 (Base)**: Background image with an emerald color overlay.
- **Level 2 (Panels)**: Frosted glass surfaces with a `backdrop-filter: blur(20px)`, a 1px white border at 20% opacity, and a very soft, high-spread green-tinted shadow (0 10px 30px rgba(0, 135, 90, 0.05)).
- **Level 3 (Floating Actions)**: Higher opacity glass or solid Primary Green elements with a crisp white 2px border to stand out from Level 2.

## Shapes
The shape language is consistently soft and approachable. A `rounded-lg` (16px) radius is the standard for all primary glass containers and cards. Buttons utilize a fully rounded (pill-shaped) or `rounded-md` style to invite interaction. Sharp corners are avoided to maintain the friendly, inclusive atmosphere of a primary school environment.

## Components
- **Buttons**: Primary buttons are solid "Islamic Emerald" with white text. Secondary buttons are frosted glass with a thin white stroke.
- **Cards (Glass Panels)**: Use for news, student announcements, and teacher profiles. Must include a 1px inner highlight on the top and left edges to simulate light hitting glass.
- **Input Fields**: Semi-transparent white backgrounds with a subtle emerald border on focus. Icons should be minimal, 2px stroke, in white or primary green.
- **Chips/Badges**: Small rounded tags used for categories (e.g., "Akademik", "Kegiatan Islam"). Use high-contrast backgrounds with white text.
- **Lists**: Items are separated by subtle 1px white lines at 10% opacity.
- **Iconography**: Use a consistent line-art style (2px weight) with rounded terminals. Icons should be predominantly white when placed on green or glass backgrounds.