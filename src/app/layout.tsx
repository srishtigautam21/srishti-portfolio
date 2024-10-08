import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import ChildLayout from "./newpage/layout";
// import NewPage from "./newpage/page";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srishti Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      {/* {inter.className} */}
      {/* bg-black/[0.96] */}
      <body className='dark:bg-navy relative'>
        <Navbar />
        {children}
        {/* the page file is the children */}
      </body>
    </html>
  );
}
