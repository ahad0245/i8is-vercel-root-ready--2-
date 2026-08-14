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
  title: "i8is — Digital Transformation & AI",
  description: "i8is helps governments and enterprises transform with AI, secure software, cloud, data and workforce solutions across Saudi Arabia, Canada and the United States.",
  keywords: ["enterprise AI consulting", "digital transformation Saudi Arabia", "custom software development", "cybersecurity solutions", "cloud automation", "i8is"],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"i8is Inc.",url:"https://i8is.com",email:"contact@i8is.com",telephone:"+1-647-930-0988",areaServed:["Saudi Arabia","Canada","United States"],knowsAbout:["Artificial intelligence","Custom software development","Cybersecurity","Data analytics","Cloud infrastructure","FinTech","Digital transformation"]})}} />
        {children}
      </body>
    </html>
  );
}
