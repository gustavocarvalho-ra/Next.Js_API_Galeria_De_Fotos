import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Galeria Online",
  description: "Galeria de fotos online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
