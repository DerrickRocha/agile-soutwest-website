import type { Metadata } from "next";
import Layout from "@/app/components/layout";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Agile Southwest repair page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header>
        Header
      </header>
      <Layout>
          {children}
      </Layout>
      <footer>
          Footer
      </footer>
      </body>
    </html>
  );
}