import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "../lib/providers";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zybra NextJS",
  description:
    "User Management Table for Zybra Assessment NextJS by Dhananajay Pawar (Frontend Dev).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${geistSans.variable}`}>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
}