import type { Metadata } from "next";
import Layout from "@/app/components/layout";

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
      <Layout>
          {children}
      </Layout>

      </body>
    </html>
  );
}