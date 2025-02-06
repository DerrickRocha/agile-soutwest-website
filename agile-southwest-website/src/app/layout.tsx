import type {Metadata} from "next";
import "./globals.css";
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
        <Layout>
            {children}
        </Layout>
        </html>
    );
}