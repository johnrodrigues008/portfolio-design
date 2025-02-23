import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Design",
  description:
    "Bem-vindo ao meu portfólio de design, onde a criatividade se transforma em experiências visuais impactantes. Aqui, cada projeto reflete uma abordagem única que combina estética e funcionalidade, explorando soluções inovadoras em branding, ilustração e design visual. Descubra como transformar ideias em obras que comunicam e inspiram.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
