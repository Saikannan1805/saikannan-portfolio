import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

// Loading Inter font and mapping it to a CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Defining global site metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "Saikannan Sathish",
  description:
    "Computer Science graduate student at Binghamton University specializing in AI, Machine Learning, and software development for intelligent, data-driven systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Linking favicon and manifest files for consistent branding */}
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>

      {/* Applying global font, theme, and analytics */}
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          forcedTheme="dark"
        >
          {children}
          {/* Tracking website visits via Vercel Analytics */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
