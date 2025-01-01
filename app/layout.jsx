import "./globals.css";
import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  variable: "--font-inter",
});
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300"], // Kullandığınız ağırlıkları belirtin
  variable: "--font-lexend",
});

export const metadata = {
  title: "Medyanes360",
  description: "Data Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable}  ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
