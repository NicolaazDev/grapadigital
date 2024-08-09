import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Sidebar from "@/components/sidebar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-[auto_1fr] h-screen grid-rows-[100vh] overflow-hidden">
          <Sidebar />
          <div className="w-full h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
