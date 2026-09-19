import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IconUp — From Digital Artist to Real Brand",
  description:
    "IconUp entwickelt digitale Artists zu realen Marken — mit Strategie, Identität, Creative Direction und langfristigem Brand Development.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
