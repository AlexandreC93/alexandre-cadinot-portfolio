"use client";

import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];


export default function Nav() {
  return (
    <header className="sticky top-4 z-30 flex justify-center px-4">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-black/40">
        {/* LEFT: LOGO / NAME */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 text-xs font-semibold text-white shadow-md dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-300">
            AC
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-50">
              Alexandre CADINOT
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              Digital Systems Architect
            </span>
          </div>
        </div>

        {/* CENTER: LINKS */}
        <nav className="hidden items-center gap-4 text-xs sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative inline-flex items-center text-xs font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* RIGHT: TOGGLE + MOBILE LINKS */}
        <div className="flex items-center gap-3">
          {/* Mobile links condensés */}
          <nav className="flex items-center gap-2 text-[11px] sm:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 px-2 py-1 text-[11px] text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
