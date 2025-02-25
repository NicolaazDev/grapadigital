import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        sm: { min: "310px", max: "467px" },
        md: { min: "468px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1439px" },
        xl2: { min: "1440px", max: "1599px" },
        laptop: { min: "1600px", max: "1920px" },
      },
      gridTemplateAreas: {
        "mainform-layout": [
          "impressoes impressoes alcance curtidas",
          "salvos compartilhamento compartilhamento comentarios",
        ],
        "mainform-layoutmobile": [
          "impressoes impressoes",
          "alcance alcance",
          "curtidas curtidas",
          "salvos salvos",
          "compartilhamento compartilhamento",
          "comentarios comentarios",
        ],
        "storiesform-layout": [
          "stories-length stories-length alcance impressoes",
          "replies taps-back compartilhamento sticker-touches",
        ],
      },
      gridArea: {
        impressoes: "impressoes",
        alcance: "alcance",
        curtidas: "curtidas",
        compartilhamento: "compartilhamento",
        salvos: "salvos",
        comentarios: "comentarios",
        taps_back: "taps-back",
        sticker_touches: "sticker-touches",
        replies: "replies",
        stories_length: "stories-length",
      },
      fontFamily: {
        poppins: ["Poppins"],
        poppins_thin: ["Poppins Thin"],
        poppins_extralight: ["Poppins ExtraLight"],
        poppins_light: ["Poppins Light"],
        poppins_black: ["Poppins Black"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
} satisfies Config;

export default config;

// impressoes(número), alcance( número), curtidas(número), comentarios( número), salvos(número), compartilhamento (número)
