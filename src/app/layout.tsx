import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans_Mono as FontMono, Noto_Sans as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontMono = FontMono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Promptificient",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontMono.variable
      )}>{children}</body>
    </html>
  );
}
