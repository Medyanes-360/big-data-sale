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
        tertiary: {
          50: "#F1EBFF",
          400: "#915DFF",
          500: "#7534FF",
          800: "#2F1566",
          900: "#170A33",
        },
        gray: {
          19: "rgba(185, 185, 185, 0.19)",
          50: "#F5F6F7",
          60: "#838E9E",
          600: "#6A778B",
          700: "#42526B",
        },
        white: {
          24: "rgba(255, 255, 255, 0.24)",
          900: "rgba(255, 255, 255, 1)",
        },
        amber: {
          900: "#FEA310",
        },
        purple: {
          38: "#E9E9FF61",
          44: "#D4CEE870",
        },
        tertiary500: "#7534FF",
        tertiary900: "#170A33",
        softBreeze: "#F2F4FA",
        gray50: "rgba(245,246,247,1)",
        gray600: "#6A778B",
        gray700: "#42526B",
        gray600: "#E0E5FF1F",
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
        lightMist: "#E6E8EC",
        light200: "#FEEDFA",
        background: "var(--background)",
        deepAbyss: "#061C3D",
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
      backgroundImage: {
        "text-gradient":
          "linear-gradient(179.17deg, rgba(145, 93, 255, 0.07) -92.76%, rgba(87, 56, 153, 0.07) 99.29%)",
      },
      backdropBlur: {
        custom: "14.8px",
      },
      dropShadow: {
        "custom-combined-1":
          "0px 0px 2px rgba(145, 158, 171, 0.24) -20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
        "custom-combined": "0px 2.59345px 2.59345px rgba(201, 201, 201, 0.25)",
        "custom-hamburger":
          "0px 0px 2px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
        "custom-combined-2":
          "0px 20.5451px 41.0901px rgba(142, 155, 174, 0.2), inset 0px 4.10901px 10.2725px 1.02725px rgba(65, 69, 93, 0.1)",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          backgroundImage:
            "linear-gradient(179.17deg, rgba(145, 93, 255, 0.07) -92.76%, rgba(87, 56, 153, 0.07) 99.29%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          "text-fill-color": "transparent",
        },
      });
    },
  ],
};
