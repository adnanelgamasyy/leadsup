# Color Reference - The Leads Up Design

Based on the provided design mockup, here are the exact colors and how to use them:

## Primary Colors

### Orange (Primary CTA)
- **Hex:** `#FF6B2C`
- **Usage:** Buttons, CTAs, highlights, icons
- **Tailwind:** `bg-primary-orange` or `text-primary-orange`
- **CSS Variable:** `var(--primary-orange)`

### Orange Dark (Text on White)
- **Hex:** `#D95821`
- **Usage:** Orange text on white backgrounds (accessibility)
- **Tailwind:** `text-primary-orange-dark`
- **CSS Variable:** `var(--primary-orange-dark)`

## Background Colors

### White
- **Hex:** `#FFFFFF`
- **Usage:** Main backgrounds, cards
- **Tailwind:** `bg-white`

### Light Gray
- **Hex:** `#F7FAFC`
- **Usage:** Alternate section backgrounds, card backgrounds
- **Tailwind:** `bg-light-gray`

### Light Peach ✨ NEW
- **Hex:** `#FFF5F0`
- **Usage:** Warm section backgrounds (hero, CTA sections)
- **Tailwind:** `bg-light-peach`
- **CSS Variable:** `var(--light-peach)`

### Lighter Peach ✨ NEW
- **Hex:** `#FFF9F5`
- **Usage:** Very subtle warm backgrounds
- **Tailwind:** `bg-lighter-peach`
- **CSS Variable:** `var(--lighter-peach)`

### Orange Light ✨ NEW
- **Hex:** `#FFE5D9`
- **Usage:** Light orange backgrounds for cards/sections
- **Tailwind:** `bg-primary-orange-light`
- **CSS Variable:** `var(--primary-orange-light)`

## Text Colors

### Charcoal (Headings)
- **Hex:** `#1A202C`
- **Usage:** All major headlines, bold text
- **Tailwind:** `text-charcoal`
- **CSS Variable:** `var(--charcoal)`

### Dark Gray (Body Text)
- **Hex:** `#4A5568`
- **Usage:** Paragraphs, standard body copy
- **Tailwind:** `text-dark-gray`
- **CSS Variable:** `var(--dark-gray)`

## Accent Colors

### Success Green
- **Hex:** `#48BB78`
- **Usage:** Success states, positive metrics
- **Tailwind:** `text-success-green` or `bg-success-green`

### Data Blue
- **Hex:** `#4299E1`
- **Usage:** Data visualization, info states
- **Tailwind:** `text-data-blue` or `bg-data-blue`

### Warning Yellow
- **Hex:** `#ECC94B`
- **Usage:** Warning states, highlights
- **Tailwind:** `text-warning-yellow` or `bg-warning-yellow`

## Border Colors

### Card Border
- **Hex:** `#E2E8F0`
- **Usage:** Card borders, dividers
- **Tailwind:** `border-card-border`

---

## Usage Examples

### Hero Section with Peach Background
```html
<section class="bg-light-peach py-24">
  <h1 class="text-charcoal">Your Headline</h1>
  <p class="text-dark-gray">Body text</p>
  <button class="bg-primary-orange text-white">CTA Button</button>
</section>
```

### Card with Light Orange Background
```html
<div class="bg-primary-orange-light rounded-card p-6">
  <h3 class="text-charcoal">Card Title</h3>
  <p class="text-dark-gray">Card description</p>
</div>
```

### Section with Lighter Peach Background
```html
<section class="bg-lighter-peach py-16">
  <!-- Content -->
</section>
```

### Orange Text on White (Accessible)
```html
<p class="text-primary-orange-dark">
  This orange text has proper contrast on white backgrounds
</p>
```

---

## Color Combinations

### High Contrast (Best for Readability)
- **Background:** White (`#FFFFFF`)
- **Heading:** Charcoal (`#1A202C`)
- **Body:** Dark Gray (`#4A5568`)
- **CTA:** Primary Orange (`#FF6B2C`)

### Warm & Inviting
- **Background:** Light Peach (`#FFF5F0`)
- **Heading:** Charcoal (`#1A202C`)
- **Body:** Dark Gray (`#4A5568`)
- **CTA:** Primary Orange (`#FF6B2C`)

### Subtle Warmth
- **Background:** Lighter Peach (`#FFF9F5`)
- **Heading:** Charcoal (`#1A202C`)
- **Body:** Dark Gray (`#4A5568`)
- **Accent:** Primary Orange (`#FF6B2C`)

### Orange Accent Cards
- **Background:** Orange Light (`#FFE5D9`)
- **Heading:** Charcoal (`#1A202C`)
- **Body:** Dark Gray (`#4A5568`)
- **Icon/Number:** Primary Orange (`#FF6B2C`)

---

## Quick Tips

1. **Use peach backgrounds** for hero sections and important CTAs to create warmth
2. **Alternate backgrounds** between white and light peach for visual interest
3. **Orange is for action** - use it sparingly for CTAs and important elements
4. **Dark text on light backgrounds** - always use Charcoal or Dark Gray for readability
5. **Light orange backgrounds** work great for cards with statistics or features

---

**Updated:** October 14, 2025  
**Status:** ✅ All colors available in Tailwind and CSS
