import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agile Southwest",
  description: "Agile Southwest is a company that does, computer maintenance, soldering, and website design and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
