import type { Metadata } from "next";
import "@/app/globals.css";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Agile Southwest Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
          {children}
      <Footer/>
      </body>
    </html>
  );
}