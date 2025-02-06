import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}