import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IconUp — From Digital Artist to Real Brand",
  description:
    "IconUp transforms digital artists into real brands through identity, strategy, creative direction and long-term development.",
  metadataBase: new URL("https://iconup.agency"),
  openGraph: {
    title: "IconUp — From Digital Artist to Real Brand",
    description:
      "Digital attention is only the beginning. We build real artist brands.",
    url: "https://iconup.agency",
    siteName: "IconUp",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
