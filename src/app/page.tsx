"use client";

import ProjectCarousel from "@/components/ProjectCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* GLOBAL BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-[100px] dark:from-violet-500/10 dark:via-fuchsia-500/10 dark:to-cyan-400/10" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
            I Automate Your Business Processes & <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
              Build Custom Tools.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Freelance Fullstack Developer & AI Automation Expert. <br />
            I turn repetitive tasks into autonomous systems and build high-performance web apps that save you time and money.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:scale-105 active:scale-95 dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/20 dark:hover:bg-white"
            >
              Book a Free Audit
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-transparent px-8 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              View Case Studies
            </a>
          </div>
        </div>

        {/* Hero Visual/Abstract */}
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto aspect-square max-w-[400px] lg:max-w-none">
            <div className="absolute inset-0 animate-[blob_7s_infinite] rounded-full bg-gradient-to-tr from-violet-400/30 to-fuchsia-400/30 blur-2xl dark:from-violet-500/20 dark:to-fuchsia-500/20" />
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white/50 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/50">
              <div className="text-center">
                <span className="text-5xl mb-4 block">🤖</span>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Workflow Automation</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Connecting your apps so you don&apos;t have to.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-center">
                  <div className="font-bold text-fuchsia-600 dark:text-fuchsia-400">10h+</div>
                  <div className="text-xs text-slate-500">Saved / week</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-center">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">ROI</div>
                  <div className="text-xs text-slate-500">Driven approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="bg-slate-50/50 py-24 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              How I Can Help You
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              I combine technical expertise with business understanding to deliver tools that actually work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                ⚙️
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Automation & AI
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Workflows with n8n, Python scripts, Chatbots, and process optimization to save you time. Stop doing repetitive data entry.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
                💻
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Web Development
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                High-performance websites, SaaS platforms, and internal dashboards using Next.js and React. Clean code, fast loading.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                🎓
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Training & Consulting
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Technical training (C, Cybersecurity) and architectural audits for your teams. I share my knowledge from 42 Paris and real-world projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center sm:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">Real Impact</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Case Studies & ROI
            </h2>
          </div>

          <ProjectCarousel />
        </div>
      </section>

      {/* 4. ABOUT & AUTHORITY */}
      <section className="bg-slate-900 py-24 text-slate-300">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white">Why Work With Me?</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed">
            I&apos;m <strong>Alexandre Cadinot</strong>, a Freelance Developer and Trainer trained at <strong>42 Paris</strong>.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            With a deep background in C, Cybersecurity, and Systems Programming, I understand how computers work from the ground up.
            Now, I apply that rigor to building reliable automations and web applications for businesses.
            I don&apos;t just write code; I build systems that solve business problems.
          </p>
          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">42</div>
              <div className="text-sm text-slate-500">Paris Alumnus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Fullstack</div>
              <div className="text-sm text-slate-500">Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Training</div>
              <div className="text-sm text-slate-500">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <footer id="contact" className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Ready to automate your workflow?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Let&apos;s discuss how we can save you time and improve your processes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:alexandrecadinot93@gmail.com"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-semibold text-white transition hover:bg-violet-700 sm:w-auto"
            >
              Email Me &rarr;
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-cadinot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
            >
              LinkedIn Profile
            </a>
          </div>

          <p className="mt-16 text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Alexandre Cadinot. details matter.
          </p>
        </div>
      </footer>
    </main>
  );
}
