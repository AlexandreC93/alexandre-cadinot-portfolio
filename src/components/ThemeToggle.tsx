"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark"); // default state (peu importe, on sync au mount)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme") as Theme | null;

    // 👉 si rien en storage, on part sur dark
    const initial: Theme =
      stored === "light" || stored === "dark" ? stored : "dark";

    setTheme(initial);
    root.classList.toggle("dark", initial === "dark");
    localStorage.setItem("theme", initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900"
    >
      <span className="text-lg">{isDark ? "🌙" : "☀️"}</span>
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
