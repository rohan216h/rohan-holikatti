import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Holikatti | Quantitative Research & Full-Stack Developer",
  description:
    "Portfolio of Rohan Holikatti — Quantitative research, algorithmic trading backtesting engines, and full-stack data dashboards. B.Tech Chemical Engineering @ IIT Hyderabad.",
  keywords: [
    "Rohan Holikatti",
    "Quantitative Finance",
    "Quantitative Research",
    "Machine Learning",
    "Algorithmic Trading",
    "IIT Hyderabad",
    "Next.js",
    "TypeScript",
    "Python",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Rohan Holikatti", url: "https://github.com/rohan216h" }],
  creator: "Rohan Holikatti",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Rohan Holikatti | Quantitative Research & Full-Stack Developer",
    description:
      "Quantitative research systems, algorithmic trading models, and production web applications by Rohan Holikatti (IIT Hyderabad).",
    url: "https://rohan-holikatti.vercel.app",
    siteName: "Rohan Holikatti Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#080a0f" />
      </head>
      <body className="bg-[#080a0f] text-[#f3f4f6] min-h-screen flex flex-col antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}

