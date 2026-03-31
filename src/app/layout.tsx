import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Jie Zhu's Blog",
  description: "Sharing insights on AI, Machine Learning, and Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 dark:border-slate-700 mt-auto">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-slate-600 dark:text-slate-400 text-sm">
            <p>© 2026 Jie Zhu&apos;s Blog. All rights reserved.</p>
            <p className="mt-2">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
