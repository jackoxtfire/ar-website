# Design System Strategy: The Curated Equilibrium

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Curated Equilibrium."** 

Axel Rieger’s fitness philosophy is not about aggressive transformation or elite performance; it is about stability, professionalism, and personal longevity. To reflect this, the UI must move away from the "industrial gym" aesthetic of loud colors and heavy grids. Instead, we embrace a high-end editorial feel—reminiscent of architectural journals or boutique concierge services.

We break the "template" look through:
*   **Intentional Asymmetry:** Breaking the vertical axis with staggered content blocks.
*   **Breathing Room:** Using whitespace as a functional element to lower cognitive load and convey luxury.
*   **Tonal Sophistication:** Moving beyond lines and borders to define space through light and depth.

---

## 2. Colors & Surface Philosophy
This palette is designed to feel anchored and expensive. We use a high-contrast relationship between the deep Navy and the warm Cream to create a sense of heritage and trust.

### Primary Palette
*   **Primary (`#031631`):** A deep, rich Navy used for primary branding and high-authority type.
*   **Secondary (`#725a38`):** Matte Gold/Bronze. Use this sparingly for "Golden Moments"—calls to action, status indicators, or subtle iconography.
*   **Background (`#fcf9f3`):** A warm Off-White that feels like premium stationery, providing more warmth and approachability than pure white.

### The "No-Line" Rule
To maintain a high-end feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through:
1.  **Background Shifts:** Place a `surface-container-low` section against a `surface` background to define a change in content.
2.  **Vertical Space:** Use the spacing scale (e.g., `16` or `20`) to create a clear separation of ideas without a visual "fence."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Lowest Tier:** Main page background.
*   **Highest Tier:** Interactive cards or modals.
*   **Glass & Gradient Rule:** For floating elements (like a navigation bar or a sticky CTA), use a backdrop-blur (12px–20px) with a semi-transparent version of the `surface` color. This creates a "frosted glass" effect that keeps the experience feeling integrated and airy.

---

## 3. Typography
The typography strategy balances the technical precision of **Space Grotesk** with the human-centric clarity of **Inter**.

*   **Space Grotesk (Headlines):** Its geometric, slightly wider stance suggests stability and "engineered" fitness. Use `display-lg` for hero statements with a `-2%` letter-spacing to give it a tight, editorial look.
*   **Inter (Body):** Used for all functional reading. Its neutral tone ensures that Axel's expertise feels approachable. 
*   **Hierarchy Note:** Always maintain a high contrast between headline and body. If a headline is `headline-lg`, ensure the body remains `body-md` to emphasize the authoritative "Voice of the Trainer."

---

## 4. Elevation & Depth
We eschew traditional "Material" shadows in favor of **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-high` background creates a soft, natural lift that mimics natural light hitting physical paper.
*   **Ambient Shadows:** If a shadow is required for a floating button or modal, it must be "Ambient":
    *   **Blur:** 40px–60px.
    *   **Opacity:** 4%–6%.
    *   **Color:** Tinted with Navy (`#031631`) rather than black, making it feel like a part of the environment.
*   **The Ghost Border:** For accessibility in form fields, use the `outline-variant` token at **20% opacity**. It should be felt more than seen.

---

## 5. Components

### Logo Integration
The geometric AR monogram must be rendered with the 'A' in **Primary (Navy)** and the 'R' in **Secondary (Gold)**. The text 'AR Fitness' and 'Axel Rieger' should follow in **Primary**, using `title-md` sizing.

### Buttons
*   **Primary:** Background: `primary`. Text: `on-primary`. Shape: `rounded-md`. No shadow.
*   **Secondary (Gold):** Background: `secondary`. Text: `on-secondary`. Use this for "Conversion" moments (e.g., "Book a Session").
*   **Interaction:** On hover, use a subtle scale-up (1.02x) rather than a color change to maintain the premium feel.

### Cards & Lists
*   **The Card Rule:** No borders. Use `surface-container-lowest` for the card background.
*   **Lists:** Forbid divider lines. Use the Spacing Scale `3` to separate list items. If separation is needed, use a subtle background shift on every second item.

### Input Fields
*   **Style:** Minimalist. No box, just a bottom-aligned `outline-variant` (ghost border).
*   **Focus State:** The bottom border transitions to **Secondary (Gold)**.

### Featured Components: The "Progress Arc"
Since this is for fitness stability, use a custom component: a thin, Matte Gold arc (`secondary`) that tracks user consistency. It should be semi-transparent and use a soft `surface-tint` to blend into the background.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Let an image overlap two different surface containers to create depth.
*   **Do** prioritize "Natural" imagery. Photos should feature soft natural lighting, high-end home gym environments, and professional attire.
*   **Do** use large amounts of `spacing-20` between major sections to let the design "breathe."

### Don't
*   **Don't** use pure black (`#000000`). Use `on-surface` (Dark Grey) for all text to keep the tone "calm."
*   **Don't** use "Action" photography (sweat, shouting, heavy weights). Focus on "Post-Action" or "Controlled Movement."
*   **Don't** use sharp corners. Use the `rounded-md` (0.75rem) or `rounded-lg` (1rem) tokens to keep the UI approachable.
*   **Don't** use high-contrast borders or dividers. They create "visual noise" that contradicts the stable, calm brand identity.