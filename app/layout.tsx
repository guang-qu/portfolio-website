import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Guang's Portfolio ",
  description: "Guang portfolio website built with TypeScript and Nextjs software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} antialiased bg-[#0d0d1f]`}
    >
      <body className="min-h-full flex flex-col">
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
