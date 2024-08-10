"use client";

import type { Metadata } from "next";

import "@/styles/globals.css";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Grapa Digital",
//   description: "Grapa Digital marketing agencia",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-[auto_1fr] max-h-screen h-full grid-rows-[100vh] overflow-hidden">
          <Sidebar />
          <div
            className={`w-full ${
              pathname === "/login" ? "!w-screen" : ""
            } h-screen`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
