import Link from "next/link";
import "@/styles/globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Poems by kAvI",
  description: "A poetry app with AI inspiration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans text-gray-900 min-h-screen flex flex-col">
        <header className="bg-white shadow-md p-4">
          <Navbar />
        </header>

        <main className="flex-grow container mx-auto p-4">{children}</main>

        <footer className="footer">
          &copy; 2025 Poems by kAvI
        </footer>
      </body>
    </html>
  );
}
