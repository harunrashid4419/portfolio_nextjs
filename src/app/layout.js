import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/SharedPage/Navbar/Navbar";
import Footer from "@/components/SharedPage/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md. Harun Or Rashid",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
