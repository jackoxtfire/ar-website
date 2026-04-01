```markdown
# Design System Strategy: Kinetic Precision

## 1. Overview & Creative North Star: "The Kinetic Curator"
This design system moves beyond the "gym template" aesthetic to embrace **Kinetic Precision**. In a world of cluttered fitness apps, we find strength in editorial breathing room and high-impact asymmetry. The North Star is a high-energy, premium digital environment that feels like a high-end fashion editorial met a performance laboratory.

We break the "standard" grid by utilizing extreme typographic scales and intentional "bleeding" of imagery. By layering sharp, tech-forward elements over deep, charcoal voids, we create a sense of infinite depth and forward motion. The layout isn't just a container; it is a manifestation of the energy required to train at the highest level.

---

## 2. Colors & Surface Architecture
The palette is rooted in a high-contrast relationship between **Deep Charcoal (#0e0e0e)** and **Electric Blue (#95aaff)**. We avoid the "flat" look of standard apps by treating the screen as a three-dimensional space.

### The "No-Line" Rule
**Strict Mandate:** 1px solid borders for sectioning are prohibited. Separation must be achieved through background shifts. For example, a workout summary card (`surface-container-low`) should sit on the main `surface` background without a stroke. Use tonal transitions to define boundaries, allowing the UI to feel seamless and fluid.

### Surface Hierarchy & Nesting
Use the surface tiers to create "Physical Layering."
*   **Base:** `surface` (#0e0e0e) for the primary background.
*   **Secondary Sections:** Use `surface-container-low` (#131313) to group related content.
*   **Elevated Components:** Use `surface-container-high` (#20201f) for interactive elements like cards or navigation bars.

### The "Glass & Gradient" Rule
To elevate the "Electric Blue" beyond a flat hex code, apply a subtle gradient transitioning from `primary` (#95aaff) to `primary-container` (#829bff) on major CTAs. For floating headers or navigation overlays, use **Glassmorphism**: apply `surface` with 70% opacity and a `20px` backdrop-blur to allow high-impact fitness imagery to bleed through the interface.

---

## 3. Typography: Editorial Authority
We utilize a dual-typeface system to balance technical precision with aggressive energy.

*   **Display & Headlines (Space Grotesk):** This is our "voice." Use `display-lg` (3.5rem) with tight letter-spacing for hero headlines. The goal is "Oversized Impact"—headlines should feel like they are almost too big for the container, creating a sense of raw power.
*   **Body & Labels (Inter):** For data-heavy fitness metrics and descriptions, Inter provides the necessary legibility. Use `body-md` (0.875rem) for most text to maintain a sophisticated, airy feel.
*   **Hierarchy Note:** All-caps should be reserved for `label-md` and `label-sm` to denote secondary metadata or "Overline" text, creating a technical, "performance-tracking" vibe.

---

## 4. Elevation & Depth
In this system, elevation is a product of light and tone, not shadows.

*   **Tonal Layering:** Avoid traditional shadows. Depth is achieved by "stacking" surface-container tiers. A `surface-container-lowest` (#000000) card placed on a `surface-container-low` (#131313) background creates a "sunken" or "embedded" feel that looks custom and premium.
*   **Ambient Shadows:** If a floating action button (FAB) or high-priority modal requires a shadow, it must be ultra-diffused. Use a blur of `32px` at 6% opacity, using the `primary` color as the shadow tint rather than black.
*   **The Ghost Border Fallback:** If a border is required for input clarity, use `outline-variant` (#484847) at **15% opacity**. It should be a "suggestion" of a line, not a barrier.

---

## 5. Components & Interaction Patterns

### Buttons
*   **Primary:** A gradient of `primary` to `primary-container`. `0.375rem` (md) roundedness. No border. Text should be `on-primary-fixed` (#000000) for maximum contrast.
*   **Secondary:** `surface-container-highest` (#262626) background with `primary` text. This provides a high-end "tech" look.
*   **Tertiary:** Transparent background with `primary` text and an underline that only appears on hover/active states.

### Cards & Lists
*   **Rule:** Forbid divider lines. Use `spacing-6` (2rem) of vertical whitespace or a shift to `surface-container` to separate items.
*   **Image Integration:** Fitness imagery within cards should use a subtle `primary_dim` overlay at 10% to ensure brand consistency across various photo qualities.

### Inputs & Progress
*   **Inputs:** Use `surface-container-high` with a `Ghost Border`. When focused, the border transitions to a 1px solid `primary` (#95aaff) to signal energy.
*   **Progress Rings:** Use `tertiary` (#ffaced) as an accent for "Completion" states to provide a rewarding visual "pop" against the electric blue.

### Custom Component: The "Performance Strip"
A horizontal scrolling list of high-intensity metrics (BPM, Pace, Kcal) using `display-sm` typography and `label-sm` metadata, stripped of all containers, floating directly on the `surface`.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. For example, a headline might have a `spacing-12` left margin while the body text has a `spacing-16` margin.
*   **Do** use extreme contrast. Put your brightest `primary` text directly against your `surface-container-lowest` black.
*   **Do** prioritize mobile-first gestures. Ensure all touch targets use at least `spacing-10` (3.5rem) height.

### Don’t
*   **Don't** use "Card Shadows." If a card needs to stand out, change its background color or increase the whitespace around it.
*   **Don't** use default system icons. Use custom, thin-stroke (1.5pt) icons that match the `outline` token.
*   **Don't** clutter the screen. If a piece of information isn't vital to the workout or the "Energy," move it to a secondary screen or hide it behind a progressive disclosure pattern.

### Accessibility Note
While we lean into high-contrast blacks and blues, always ensure `on-surface` text on `surface` backgrounds meets WCAG AA standards. When using `tertiary` (#ffaced) accents, ensure they are paired with `on-tertiary` (#6f1a67) for readable labels.```