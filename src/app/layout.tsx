import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的博客",
  description: "记录生活与技术",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen bg-white dark:bg-gray-900">
        <header className="border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              我的博客
            </a>
            <div className="space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                首页
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                关于
              </a>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            © 2026 我的博客. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
