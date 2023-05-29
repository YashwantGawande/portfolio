"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ThemeProvider } from "next-themes";
import { Open_Sans, Source_Code_Pro } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const source = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source",
  weight: "400",
});

export const metadata = {
  title: "Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${open_sans.variable}  ${source.variable}`}>
      <body className="font-open_sans dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
