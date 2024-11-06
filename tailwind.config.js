/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./globalElements/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary500: "rgba(117, 52, 255, 1)",
        tertiary800: "#2F1566",
        tertiary50: "#F1EBFF",
        manatee: "#838E9E",
        tertiary400: "#915DFF",
        lavenderGray: "#F3F3F6",
        softedWhite: "rgba(255, 255, 255, 0.24)",
        gray700: "#42526B",
        lightMist: "#E6E8EC",
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "rgba(254, 237, 250, 1)",
        tertiary900: "rgba(23, 10, 51, 1)",
        footerLink: "rgba(244, 241, 253, 1)",
      },
      fontFamily: {
        Inter: "var(--font-inter)", //inter fontun static olaraq font-inter olaraq cagiriyoruz
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
