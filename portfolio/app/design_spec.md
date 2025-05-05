# Portfolio Website Design Specification

## 1. Overview

This document outlines the design for a personal portfolio website for MrGolddev. The design aims to merge the content structure from `golddev.space` with the clean, modern layout inspired by `cortex.rest`. The visual theme will be dark, glossy, and macOS-inspired, utilizing rich dark green and blue accent colors as requested.

## 2. Structure & Layout

- **Type:** Single-page application.
- **Layout:** Centered content column with generous padding on sides. Max-width container for readability.
- **Inspiration:** `cortex.rest` for overall structure, card usage, and section flow.
- **Responsiveness:** Must be fully responsive for desktop, tablet, and mobile devices.

### Sections:

1.  **Header:**
    *   Content: Logo/Name ("MrGolddev"), Navigation Links (About, Experience, Photography), GitHub Icon Link.
    *   Style: Fixed or sticky header. Dark, potentially semi-transparent background with blur effect (macOS style). Accent color highlights for active/hovered links.
2.  **Hero Section:**
    *   Content: "Hey, I'm MrGolddev", tagline ("Designer and Developer..."), social media icons (GitHub, YouTube, Twitter, etc. from `golddev.space`).
    *   Style: Large heading, prominent placement. Contained within a rounded card element.
3.  **About Me Section:**
    *   Content: Overall description text. Skills subsection with Frontend and Backend skills listed as tags/badges.
    *   Style: Text block within a card. Skills tags styled similar to `cortex.rest` (rounded rectangles with icons).
4.  **Experience Section:**
    *   Content: Cards detailing roles (Founder @ Solarise, Co-Founder @ Voxium). Include title, company/project, dates, description, links ("Visit Website", "View More").
    *   Style: Grid layout (2 columns on desktop, 1 on mobile). Cards styled like `cortex.rest` project cards (icon/logo space, text content, tags/links).
5.  **Photography Section:**
    *   Content: Section title ("Photography" or "Artwork"). Placeholder for 3 images.
    *   Style: Grid layout (3 columns on desktop). Images styled as Polaroid frames (white border, slightly larger bottom border, subtle drop shadow, slight random rotation).
6.  **Footer:**
    *   Content: Copyright notice ("© 2025 MrGolddev. All rights reserved."), GitHub link/icon, "Made with Next.js & Tailwind CSS".
    *   Style: Minimal, dark background, centered or left-aligned text.

## 3. Theme & Visuals

- **Overall Feel:** Dark, clean, modern, professional, with macOS-inspired glossy/translucent elements.
- **Background:** Very dark grey/off-black base (e.g., `#18181B`). Optional: A subtle, dark blue/green abstract or topographic vector pattern overlayed with low opacity.
- **Color Palette:**
    *   Base: Dark Grey/Black (e.g., `#18181B`)
    *   Card/Surface Background: Slightly lighter dark grey (e.g., `#27272A`)
    *   Primary Text: Off-white/Light Grey (e.g., `#E4E4E7`)
    *   Heading Text: White (e.g., `#FFFFFF`)
    *   Accent 1 (Green): Vibrant Dark Green (e.g., `#34D399` or `#1DB954`)
    *   Accent 2 (Blue): Rich Blue (e.g., `#0A84FF` or `#3B82F6`)
- **Gloss/Translucency (macOS Inspired):**
    *   Apply `backdrop-filter: blur()` and reduced opacity to header/card backgrounds for a frosted glass effect where appropriate.
    *   Use subtle linear gradients on card surfaces (e.g., very light transparent overlay fading from top) to suggest glossiness.
    *   Use accent colors for highlights and borders on interactive elements.
- **Typography:**
    *   Font: `Inter` (sans-serif). Available via Google Fonts or npm.
    *   Hierarchy: Use different font weights (e.g., Regular 400, Medium 500, Semibold 600, Bold 700) and sizes for headings, subheadings, body text, and captions.
- **Icons:** Use `lucide-react` icon library for consistency and clean style.
- **Cards:** Rounded corners (e.g., `8px` or `12px`). Subtle border (1px) using a slightly lighter shade or an accent color on hover/focus.
- **Polaroids:** White background (`#FFFFFF`), padding around image, larger bottom padding, subtle `box-shadow`, slight `transform: rotate()`. 

## 4. Interactivity & Features

- **Background Music:**
    *   Track: "I'm God" by Clams Casino.
    *   Controls: User-initiated play/pause button required. Place discreetly (e.g., corner of the hero section or footer).
- **GitHub Link:** Prominent icon link in the header and text/icon link in the footer.
- **Dynamic Content:** Design should accommodate content fetched dynamically (details TBD based on `golddev.space` analysis - likely manual replication needed).

## 5. References

- Content Source: `golddev.space` (See `golddev_analysis.md`)
- Layout/Design Inspiration: `cortex.rest` (See `cortex_analysis.md`)
- Theme: macOS design language (dark mode, translucency, accent colors).
