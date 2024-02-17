import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "To training skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
