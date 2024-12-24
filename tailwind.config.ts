import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bannier': "url('/assets/images/jeunesse_mai.jpg')",
      },
      colors: {
        jeunesse: {
          DEFAULT: "#0a0908",
          white: "#f1f1f1",
          navbar: "#f8f9fa"
        },
        brand: {
          DEFAULT: "#b7161c",
          "100": "#EA6365",
          "200": "#665687", 
          "300": "#6B4D57",
          "400": "#054A91",
          "500": "#264027",
          "600": "#C4B7CB ",
          "700": "#6F8AB7",
          "800": "#513C2C",
          "900": "#E5DADA"
        },
        theatre: {
          DEFAULT: "#b7161c",
          "100": "#604032",
          "200": "#604031",
          "300": "#111827"
        },
        red: "#FF7474",
        error: "#b80000",
        success: {
          DEFAULT: "#00C48C",
          "100": "#00b800",
          "200": "#B2F5EA",
        },
        green: "#3DD9B3",
        blue: "#56B8FF",
        pink: "#EEA8FD",
        orange: "#F9AB72",
        light: {
          "100": "#333F4E",
          "200": "#A3B2C7",
          "300": "#F2F5F9",
          "400": "#F2F4F8"
        },
        dark: {
          "100": "#04050C",
          "200": "#131524"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"]
      },
      boxShadow: {
        "drop-1": "0px 10px 30px 0px rgba(66, 71, 97, 0.1)",
        "drop-2": "0 8px 30px 0 rgba(65, 89, 214, 0.3)",
        "drop-3": "0 8px 30px 0 rgba(65, 89, 214, 0.1)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1"
          },
          "20%,50%": {
            opacity: "0"
          }
        }
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;
