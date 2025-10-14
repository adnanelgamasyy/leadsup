# The Leads Up - Design System Documentation

This design system outlines the core visual and interactive components for The Leads Up website, ensuring brand consistency, scalability, and a professional user experience.

---

## I. Color Palette

The color palette is modern, professional, and uses a strong accent for calls-to-action.

### Primary Palette

| Color Name | Hex Code | Usage | CSS Variable |
|------------|----------|-------|--------------|
| **Charcoal** | `#1A202C` | All major headlines and bold text | `--charcoal` |
| **Dark Gray** | `#4A5568` | Paragraphs and standard body copy | `--dark-gray` |
| **White** | `#FFFFFF` | Primary background for most sections | `--white` |
| **Light Gray** | `#F7FAFC` | Card backgrounds and section separators | `--light-gray` |

### Accent & CTA Palette

| Color Name | Hex Code | Usage | CSS Variable |
|------------|----------|-------|--------------|
| **Primary Orange** | `#FF6B2C` | Buttons, highlights, key interactive elements | `--primary-orange` |
| **Primary Orange Dark** | `#D95821` | Orange text on white (accessibility) | `--primary-orange-dark` |
| **Success Green** | `#48BB78` | "Cold calling results" card | `--success-green` |
| **Data Blue** | `#4299E1` | "Cold calling results" card | `--data-blue` |
| **Warning Yellow** | `#ECC94B` | "Cold calling results" card | `--warning-yellow` |

### Border & Card Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Card Border** | `#E2E8F0` | Card and element borders |

---

## II. Typography

The typography is clean, modern, and highly readable, creating a clear visual hierarchy.

### Font Family
**Inter** - Available on Google Fonts

```css
font-family: 'Inter', sans-serif;
```

### Typographic Scale

| Element | Font Weight | Size | Line Height | CSS Class |
|---------|-------------|------|-------------|-----------|
| **H1 (Hero Headline)** | 700 (Bold) | 4.5rem (72px) | 1.1 | `text-h1` |
| **H2 (Section Headlines)** | 700 (Bold) | 3rem (48px) | 1.2 | `text-h2` |
| **H3 (Card/Item Titles)** | 600 (Semi-Bold) | 1.5rem (24px) | 1.3 | `text-h3` |
| **Body (Paragraphs)** | 400 (Regular) | 1rem (16px) | 1.6 | `text-body` |
| **Small Text (Labels, Metadata)** | 400 (Regular) | 0.875rem (14px) | 1.4 | `text-small` |
| **Lozenge/Tags** | 500 (Medium) | 0.75rem (12px) | 1 | `text-tag` |

### Tag/Lozenge Styling
- **Text Transform:** Uppercase
- **Letter Spacing:** 1px

---

## III. Spacing & Layout

A consistent spacing system based on an **8px grid** ensures a harmonious and balanced layout.

### Base Unit
**8px**

### Common Spacing Values

| Spacing | Value | Tailwind Class | CSS Class |
|---------|-------|----------------|-----------|
| **1** | 8px | `space-1` | `space-1` |
| **2** | 16px | `space-2` | `space-2` |
| **3** | 24px | `space-3` | `space-3` |
| **4** | 32px | `space-4` | `space-4` |
| **6** | 48px | `space-6` | `space-6` |
| **8** | 64px | `space-8` | `space-8` |

### Content Max Width
**1140px** - Page content should be centered within this maximum width on larger screens to maintain readability.

```css
max-width: 1140px;
margin-left: auto;
margin-right: auto;
```

Or use the utility class: `max-w-content`

---

## IV. Components & UI Elements

These are the reusable building blocks of the website.

### Buttons

#### Primary CTA Button

```css
background-color: #FF6B2C;
color: #FFFFFF;
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;
```

**Hover State:**
- `transform: scale(1.05)`
- Slightly brighter background

**Usage:**
```html
<button class="btn-primary">Get Started</button>
```

#### Secondary/Ghost CTA Button

```css
background-color: transparent;
color: #4A5568;
border: 2px solid #E2E8F0;
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;
```

**Hover State:**
- `background-color: #F7FAFC`

**Usage:**
```html
<button class="btn-secondary">Learn More</button>
```

### Cards

#### Default State

```css
background: #FFFFFF (or #F7FAFC);
border: 1px solid #E2E8F0;
border-radius: 12px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
```

#### Hover State

```css
transform: translateY(-5px);
box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
```

**Usage:**
```html
<div class="card-design-system">
  <!-- Card content -->
</div>
```

Or with Tailwind:
```html
<div class="bg-white border border-card-border rounded-card shadow-premium card-hover">
  <!-- Card content -->
</div>
```

### Audio Player

Custom-styled player specifications:
- **Background:** Light gray (`#F7FAFC`)
- **Border Radius:** Rounded corners
- **Play Button:** Circular
- **Progress Bar:** Thin

---

## V. Using the Design System

### In CSS

```css
/* Use design system colors */
.my-element {
  color: var(--charcoal);
  background-color: var(--light-gray);
}

/* Use design system spacing */
.my-container {
  padding: 32px; /* space-4 */
  gap: 16px; /* space-2 */
}
```

### With Tailwind Classes

```html
<!-- Colors -->
<h1 class="text-charcoal">Heading</h1>
<p class="text-dark-gray">Body text</p>
<button class="bg-primary-orange text-white">CTA</button>

<!-- Typography -->
<h1 class="text-h1">Hero Headline</h1>
<h2 class="text-h2">Section Headline</h2>
<p class="text-body">Paragraph text</p>

<!-- Spacing -->
<div class="space-4">Content with 32px margin</div>
<div class="gap-2">Flex/Grid with 16px gap</div>

<!-- Cards -->
<div class="card-design-system">Card with design system styles</div>

<!-- Buttons -->
<button class="btn-primary">Primary CTA</button>
<button class="btn-secondary">Secondary CTA</button>
```

### With Utility Classes

```html
<!-- Design System Colors -->
<div class="text-primary-orange">Orange text</div>
<div class="bg-light-gray">Light gray background</div>

<!-- Content Width -->
<div class="content-max-width">
  Centered content with 1140px max width
</div>

<!-- Tags/Lozenges -->
<span class="tag">FEATURED</span>
```

---

## VI. Accessibility Guidelines

### Color Contrast
- All text must meet **WCAG AA standards** (4.5:1 contrast ratio)
- Use `#D95821` (Primary Orange Dark) for orange text on white backgrounds
- Body text uses `#4A5568` (Dark Gray) for optimal readability

### Focus States
All interactive elements have visible focus states:
```css
*:focus-visible {
  outline: 2px solid var(--primary-orange);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Tab order follows logical flow
- Focus indicators are clearly visible

---

## VII. Animation Guidelines

### Hover Effects

**Buttons:**
```css
transform: scale(1.05);
transition: all 0.3s ease;
```

**Cards:**
```css
transform: translateY(-5px);
box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;
```

### Scroll Animations

**Fade In Up:**
```css
animation: fade-in-up 0.7s ease-out forwards;
```

**Staggered Animations:**
Use `.stagger-1`, `.stagger-2`, `.stagger-3`, `.stagger-4` classes for sequential animations.

---

## VIII. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 768px | Single column, stacked layout |
| Tablet | 768px - 1024px | Two columns, adjusted spacing |
| Desktop | > 1024px | Full layout, max-width 1140px |

---

## IX. Component Examples

### Hero Section
```html
<section class="pt-24 pb-12">
  <div class="container mx-auto px-4 max-w-content">
    <h1 class="text-h1 text-charcoal mb-6">
      Your Hero Headline
    </h1>
    <p class="text-body text-dark-gray mb-8">
      Supporting paragraph text
    </p>
    <button class="btn-primary">
      Get Started
    </button>
  </div>
</section>
```

### Card Grid
```html
<div class="grid md:grid-cols-3 gap-4">
  <div class="card-design-system p-6">
    <h3 class="text-h3 text-charcoal mb-3">Card Title</h3>
    <p class="text-body text-dark-gray">Card description</p>
  </div>
</div>
```

### CTA Section
```html
<section class="py-16 bg-light-gray">
  <div class="container mx-auto px-4 max-w-content text-center">
    <h2 class="text-h2 text-charcoal mb-4">Ready to Get Started?</h2>
    <p class="text-body text-dark-gray mb-8">Join 120+ investors today</p>
    <button class="btn-primary">Book My Free Call</button>
  </div>
</section>
```

---

## X. Design System Checklist

When creating new components, ensure:

- [ ] Colors use design system palette
- [ ] Typography follows scale (H1-H3, body, small, tags)
- [ ] Spacing uses 8px grid (8, 16, 24, 32, 48, 64px)
- [ ] Cards have proper border-radius (12px) and shadows
- [ ] Buttons have proper padding (16px 32px) and border-radius (8px)
- [ ] Hover states are implemented
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Content is centered with max-width 1140px
- [ ] Responsive design works on mobile, tablet, desktop

---

## XI. File Locations

### CSS Variables
`src/app/globals.css` - Lines 10-49

### Tailwind Configuration
`tailwind.config.js` - Complete design system integration

### Component Styles
`src/app/globals.css` - Lines 276-355

---

**Design System Version:** 1.0  
**Last Updated:** October 2024  
**Status:** ✅ Fully Implemented
