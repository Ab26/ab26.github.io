import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Bhandari - Computer Science Ph.D. Candidate",
  description: "Academic portfolio of Abhishek Bhandari, Ph.D. candidate at IIT Jodhpur, specializing in Natural Language Processing and Computer Vision.",
  keywords: "Abhishek Bhandari, Computer Science, PhD, IIT Jodhpur, Natural Language Processing, Computer Vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
