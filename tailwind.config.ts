import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#244855", // główny kolor
        accent: "#356E79",  // akcentowy kolor
        brown: "#874F41",   // brązowy
        turqoise: "#90AEAD", // pastelowy turkus
        cream: "#FBE9D0",   // kremowy/beżowy
      },
    },
  },
  plugins: [],
} satisfies Config;
