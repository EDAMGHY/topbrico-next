import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme";
import { ReactNode } from "react";
import { config } from "@/lib/project.config";
import { Toaster, ToasterCN } from "@/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${config.name} App`,
  description: `A description of the ${config.name} App`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <ToasterCN />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
