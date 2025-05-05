import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        // Custom colors based on design_spec.md
        'base': 'hsl(var(--base))', // #18181B
        'surface': 'hsl(var(--surface))', // #27272A
        'primary-text': 'hsl(var(--primary-text))', // #E4E4E7
        'heading-text': 'hsl(var(--heading-text))', // #FFFFFF
        'accent-green': 'hsl(var(--accent-green))', // #34D399
        'accent-blue': 'hsl(var(--accent-blue))', // #0A84FF

        // Default shadcn/ui colors (adjust if needed, map to custom vars)
        background: 'hsl(var(--background))', // Use 'base' or 'surface'
        foreground: 'hsl(var(--foreground))', // Use 'primary-text'
        card: {
          DEFAULT: 'hsl(var(--card))', // Use 'surface'
          foreground: 'hsl(var(--card-foreground))', // Use 'primary-text'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))', // Use 'surface'
          foreground: 'hsl(var(--popover-foreground))', // Use 'primary-text'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Use 'accent-blue' or 'accent-green'
          foreground: 'hsl(var(--primary-foreground))', // Use 'heading-text' or dark text
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Adjust as needed
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Use 'accent-blue' or 'accent-green'
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))', // Slightly lighter than surface
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))', // Use accent color
      },
      borderRadius: {
        lg: 'var(--radius)', // e.g., 0.75rem (12px)
        md: 'calc(var(--radius) - 4px)', // e.g., 0.5rem (8px)
        sm: 'calc(var(--radius) - 8px)', // e.g., 0.25rem (4px)
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

