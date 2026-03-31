"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Home, User, Moon, Sun, ExternalLink } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
            <BookOpen size={18} />
          </span>
          <span className="text-xl font-bold gradient-text">
            Jie Zhu&apos;s Blog
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors"
          >
            <Home size={18} />
            <span className="hidden sm:inline">首页</span>
          </Link>
          
          <Link 
            href="/about" 
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-colors"
          >
            <User size={18} />
            <span className="hidden sm:inline">关于</span>
          </Link>

          {/* Portfolio Link */}
          <a 
            href="https://jiezhu-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 dark:text-slate-400 dark:hover:text-purple-400 dark:hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={18} />
            <span className="hidden sm:inline">主页</span>
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-slate-600 hover:text-amber-600 hover:bg-amber-50 dark:text-slate-400 dark:hover:text-amber-400 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
