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
        gray50: "rgba(245,246,247,1)",
        amber: "#FEA310",
        tertiary800: "#2F1566",
        tertiary50: "#F1EBFF",
        customPurple: "rgba(212, 206, 232, 0.44)",
        customGreen: "rgba(65, 108, 82, 1)",
        customLightPurple: "rgba(233, 233, 255, 0.38)",
        manatee: "#838E9E",
        tertiary400: "#915DFF",
        lavenderGray: "#F3F3F6",
        softedWhite: "rgba(255, 255, 255, 0.24)",
        customGray: "rgba(185, 185, 185, 0.19)",
        gray700: "#42526B",
        lightMist: "#E6E8EC",
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "rgba(254, 237, 250, 1)",
        tertiary900: "rgba(23, 10, 51, 1)",
        footerLink: "rgba(244, 241, 253, 1)",
        packagesBackground: "rgba(242, 244, 250, 1)",
        card: {
          background: "rgba(255, 255, 255, 1)",
          textColor: " rgba(255, 255, 255, 1)",
          textColor1: " rgba(66, 82, 107, 1)",
          cardLineBackground: "rgba(230, 232, 236, 1)",
        },
      },
      backdropBlur: {
        custom: "14.8px",
      },

      boxShadow: {
        custom: "0px 4px 4px 0px rgba(201, 201, 201, 0.25)",
        "header-shadow": "0px 12px 24px -4px #919EAB29",
        "custom-combined":
          "-20px 20px 40px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)",
        "custom-combined-2":
          "-20px 20px 40px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)",
        blog: "0px 12px 24px -4px rgba(145, 158, 171, 0.16)",
        sectionPackages: " 0px 12px 24px -4px rgba(145, 158, 171, 0.16)",
      },
      fontFamily: {
        Inter: "var(--font-inter)", //inter fontun static olaraq font-inter olaraq cagiriyoruz
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
