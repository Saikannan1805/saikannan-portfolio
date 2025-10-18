import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react"; // ✅ Added for visitor tracking

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Saikannan Sathish - AI/ML Engineer & Software Developer",
  description:
    "Graduate student passionate about building intelligent, efficient systems using AI, ML, and modern software technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          forcedTheme="dark"
        >
          {children}
          <Analytics /> {/* ✅ Tracking visitor metrics */}
        </ThemeProvider>
      </body>
    </html>
  );
}
