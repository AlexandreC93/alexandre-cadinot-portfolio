"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

// Logic for infinite loop navigation
export default function ProjectCarousel() {
    const [index, setIndex] = useState(0);
    const active = projects[index];

    function goTo(i: number) {
        if (i < 0) i = projects.length - 1;
        if (i >= projects.length) i = 0;
        setIndex(i);
    }

    // Prepare duplicated list for "infinite scroll" visual if needed in future, 
    // but here we stick to the navigation list as before.
    // Ensure unique keys if we were duplicating.

    return (
        <section id="projects" className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-0">
            <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                        Projects & demos
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        A few things I’ve built recently. Click through to explore.
                    </p>
                </div>
                <div className="flex gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{index + 1}</span>
                    <span>/</span>
                    <span>{projects.length}</span>
                </div>
            </header>

            <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-stretch">
                {/* Main Card */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex h-full flex-col justify-between p-5"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                    {active.tagline}
                                </div>
                                {active.role && (
                                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                        {active.role}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                                    <Link href={`/projects/${active.id}`} className="hover:underline decoration-slate-400 underline-offset-4">
                                        {active.title}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    {active.description}
                                </p>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                                {active.tech.map((t) => (
                                    <span
                                        key={`${active.id}-${t}`}
                                        className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3 text-sm">
                                <Link
                                    href={`/projects/${active.id}`}
                                    className="rounded-full bg-slate-900 px-4 py-2 text-slate-50 hover:bg-black dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
                                >
                                    View details
                                </Link>
                                {active.link && (
                                    <a
                                        href={active.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 hover:border-slate-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-400"
                                    >
                                        Live demo
                                    </a>
                                )}
                                {active.repo && (
                                    <a
                                        href={active.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 hover:border-slate-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-400"
                                    >
                                        View code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation / List */}
                <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white/70 p-4 text-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
                    <div className="mb-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Browse
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => goTo(index - 1)}
                            className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-400"
                        >
                            ← Prev
                        </button>
                        <button
                            type="button"
                            onClick={() => goTo(index + 1)}
                            className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-400"
                        >
                            Next →
                        </button>
                    </div>

                    <div className="mt-3 flex flex-col gap-2 overflow-y-auto max-h-[400px]">
                        {projects.map((p, i) => (
                            <button
                                key={p.id}
                                type="button"
                                onClick={() => goTo(i)}
                                className={`flex items-center justify-between rounded-2xl border px-3 py-2 text-left text-xs transition
                  ${i === index
                                        ? "border-slate-900 bg-slate-900 text-slate-50 dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                                        : "border-slate-200 bg-white/60 text-slate-600 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-500"
                                    }`}
                            >
                                <span className="truncate">{p.title}</span>
                                <span className="ml-2 shrink-0 text-[10px] opacity-80">
                                    {p.tagline}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
