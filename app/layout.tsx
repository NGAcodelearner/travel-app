import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel App UI/UX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
