"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
  tech: string[];
  role: string;
  href?: string;
  repo?: string;
  accent: "emerald" | "sky" | "fuchsia";
};

const PROJECTS: Project[] = [

  {
    id: "ft-transcendence",
    title: "ft_transcendence — real-time game",
    tag: "42 · Full-stack",
    description:
      "Online Pong with auth, matchmaking, chat and ranking. Real-time gameplay, clean API and a focus on reliability.",
    tech: ["Fullstack", "PostgreSQL", "WebSockets", "Docker"],
    role: "Backend · Real-time",
    href: "/projects/ft-transcendence",
    accent: "sky",
  },
  {
    id: "webserv",
    title: "Webserv — HTTP server in C++98",
    tag: "42 · Low-level",
    description:
      "Complete HTTP/1.1 server from scratch with vhosts, CGI, chunked transfer and static files. Benchmarked against nginx on basic workloads.",
    tech: ["C++98", "Sockets", "CGI"],
    role: "Networking · HTTP",
    href: "/projects/webserv",
    accent: "fuchsia",
  },
  {
    id: "minishell",
    title: "Minishell — Bash-like shell in C",
    tag: "42 · Systems",
    description:
      "A small shell that supports parsing, pipes, redirections, environment variables, builtins and signal handling, inspired by Bash.",
    tech: ["C", "Unix", "Processes", "Signals"],
    role: "Systems · CLI tools",
    href: "/projects/minishell",
    accent: "emerald",
  },
  {
    id: "push-swap",
    title: "Push_swap — stack-based sorting",
    tag: "42 · Algorithms",
    description:
      "Sorting integers using two stacks and a limited set of operations, with a strong focus on algorithm design and optimisation.",
    tech: ["C", "Algorithms", "Complexity"],
    role: "Algorithms · Optimisation",
    href: "/projects/push-swap",
    accent: "fuchsia",
  },
  {
    id: "inception",
    title: "Inception — Dockerised infrastructure",
    tag: "42 · DevOps",
    description:
      "Multi-container Docker setup with Nginx, WordPress, MariaDB, TLS and volumes. Focus on reproducible, isolated infrastructure.",
    tech: ["Docker", "docker-compose", "Nginx", "MariaDB"],
    role: "DevOps · Infra",
    href: "/projects/inception",
    accent: "sky",
  },
  {
    id: "cub3d",
    title: "Cub3D — raycasting 3D engine",
    tag: "42 · Graphics",
    description:
      "A small 3D engine inspired by Wolfenstein 3D, using raycasting to render a world from a 2D map in real time.",
    tech: ["C", "Raycasting", "Maths", "MiniLibX"],
    role: "Graphics · Engine",
    href: "/projects/cub3d",
    accent: "emerald",
  },
  {
    id: "philosophers",
    title: "Philosophers — concurrency & threads",
    tag: "42 · Concurrency",
    description:
      "Dining philosophers problem implemented with threads and mutexes, focusing on deadlocks, starvation and timing.",
    tech: ["C", "Threads", "Mutexes", "Concurrency"],
    role: "Concurrency · Systems",
    href: "/projects/philosophers",
    accent: "fuchsia",
  },

  {
    id: "ai-creative",
    title: " AI MOVIE | AI imagery & video experiments [BUILDING]",
    tag: "AI · Creative",
    description:
      "Experiments around AI-assisted visuals and video for storytelling and fashion, focusing on reliable pipelines rather than just prompt spam.",
    tech: ["Stable Diffusion", "Video tools", "Prompting"],
    role: "Exploration · Prototyping",
    href: "#",
    accent: "fuchsia",
  },
];


function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Ref pour savoir si l'utilisateur est en train d'interagir
  const userInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const dragDeltaRef = useRef(0);



  const notifyInteraction = () => {
    userInteractingRef.current = true;
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    // On remet l'auto-scroll après 1.5s sans interaction
    interactionTimeoutRef.current = setTimeout(() => {
      userInteractingRef.current = false;
    }, 1500);
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    // On signale juste l'interaction (pour couper l'auto-scroll),
    // mais on ne touche pas au scroll et on ne fait pas preventDefault.
    notifyInteraction();
  };


  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = scrollRef.current;
    if (!el) return;

    notifyInteraction();
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = el.scrollLeft;
    dragDeltaRef.current = 0; // on reset le delta
  };


  const endDrag = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDraggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;

    notifyInteraction();
    const dx = e.clientX - dragStartXRef.current;
    dragDeltaRef.current = Math.abs(dx); // on garde combien on a vraiment bougé
    el.scrollLeft = dragStartScrollLeftRef.current - dx;
  };

  const handleCardClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // si on a dragué de plus de 5px, on considère que c'était un drag, pas un vrai clic
    if (dragDeltaRef.current > 5) {
      e.preventDefault();
    }
  };

  const handleMouseEnterContainer = () => {
    // dès qu'on survole, on stop l'auto-scroll
    userInteractingRef.current = true;
  };

  const handleMouseLeaveContainer = () => {
    // quand on sort, on remet l'auto-scroll
    userInteractingRef.current = false;
    endDrag();
  };


  // Auto-scroll horizontal doux
  useEffect(() => {
    let frameId: number;
    let direction: 1 | -1 = 1;

    const step = () => {
      const el = scrollRef.current;
      if (el) {
        const maxScroll = el.scrollWidth - el.clientWidth;

        if (!userInteractingRef.current && maxScroll > 0) {
          if (el.scrollLeft >= maxScroll - 1) {
            direction = -1;
          } else if (el.scrollLeft <= 1) {
            direction = 1;
          }

          // Petit déplacement pour un scroll fluide
          el.scrollLeft += direction * 0.6;
        }
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen px-4">
      {/* FOND GLOBAL : clair en light, gradient en dark */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
        {/* blobs seulement en dark */}
        <div className="absolute -top-40 left-1/2 hidden h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/40 via-fuchsia-400/30 to-cyan-300/40 blur-3xl dark:block" />
        <div className="absolute bottom-[-120px] right-[-60px] hidden h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/30 via-sky-400/25 to-fuchsia-400/25 blur-3xl dark:block" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">
        {/* HERO */}
        <section className="grid w-full grid-cols-1 items-center gap-12 py-16 md:grid-cols-2">
          {/* Colonne gauche : texte */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300/80">
              Digital Systems Architect
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
              I create
              <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-cyan-200">
                colorful, precise
              </span>
              experiences with code &amp; AI.
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300/90">
              I’m{" "}
              <span className="font-medium text-slate-900 dark:text-slate-50">
                Alexandre CADINOT
              </span>
              , a digital systems architect trained at 42 Paris (C/C++, low-level
              and systems). I like mixing that foundation with AI and automation
              to build small, sharp, modern tools.
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-300/90">
              <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 dark:border-slate-700/70 dark:bg-slate-900/70">
                Konexio · Full-stack MERN
              </span>
              <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 dark:border-slate-700/70 dark:bg-slate-900/70">
                42 Paris · C / C++
              </span>
              <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 dark:border-slate-700/70 dark:bg-slate-900/70">
                Backend · RAG · n8n · MongoDB
              </span>
            </div>

            {/* Scroll hint */}
            <div className="pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300/80 dark:hover:text-slate-50"
              >
                <span>Scroll to see projects</span>
                <span className="h-6 w-[1px] bg-slate-400 dark:bg-slate-500" />
                <span className="animate-bounce text-lg">↓</span>
              </a>
            </div>
          </div>

          {/* Colonne droite : blob animé + carte stack */}
          <div className="relative flex h-[320px] items-center justify-center md:h-[400px]">
            {/* blob seulement en dark */}
            <div className="absolute inset-0 hidden items-center justify-center dark:flex">
              <div className="h-64 w-64 animate-[blob_9s_ease-in-out_infinite] rounded-[40%] bg-gradient-to-br from-fuchsia-400 via-violet-400 to-cyan-300 opacity-40 blur-2xl" />
            </div>

            <div className="relative flex h-48 w-48 items-center justify-center rounded-3xl border border-slate-300 bg-white text-sm text-slate-700 shadow-[0_0_40px_rgba(148,163,184,0.4)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-[0_0_40px_rgba(15,23,42,0.7)]">
              <div className="space-y-2 text-center text-xs">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400">
                  Focus
                </p>
                <p className="font-medium text-slate-800 dark:text-slate-100">
                  Backend · AI · Automation
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  I like when things just work.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION PROJECTS — HORIZONTAL GALLERY */}
      <section
        id="projects"
        className="mx-auto mt-8 w-full max-w-6xl border-t border-slate-200 pt-16 dark:border-slate-800/80"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
              Projects & demos
            </h2>
            <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
              A curated selection of my projects.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
            {/* <span className="hidden sm:inline">Auto-scrolling gallery</span>
            <span className="h-[1px] w-10 bg-slate-300 dark:bg-slate-600" />
            <span className="text-base">↔</span> */}
          </div>
        </div>

        <RevealOnScroll>
          {/* SCROLL HORIZONTAL AUTO + SANS BARRE VISIBILE */}
          <div
            ref={scrollRef}
            className="no-scrollbar overflow-x-auto overflow-y-visible pb-10 pt-4 cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseUp={endDrag}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveContainer}
            onMouseEnter={handleMouseEnterContainer}
            onTouchStart={notifyInteraction}
            onTouchMove={notifyInteraction}
            onTouchEnd={notifyInteraction}
          >



            <div className="flex gap-8 px-4 py-4 sm:px-6">
              {[...PROJECTS, ...PROJECTS].map((project, idx) => {
                const accentBg =
                  project.accent === "emerald"
                    ? "from-emerald-400/60 via-emerald-500/30 to-cyan-300/40"
                    : project.accent === "sky"
                      ? "from-sky-400/60 via-cyan-400/30 to-violet-300/40"
                      : "from-fuchsia-400/70 via-violet-400/40 to-sky-300/40";

                const accentTag =
                  project.accent === "emerald"
                    ? "bg-emerald-500/10 text-emerald-700 border-emerald-400/60 dark:bg-emerald-500/20 dark:text-emerald-200"
                    : project.accent === "sky"
                      ? "bg-sky-500/10 text-sky-700 border-sky-400/60 dark:bg-sky-500/20 dark:text-sky-200"
                      : "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-400/60 dark:bg-fuchsia-500/20 dark:text-fuchsia-200";

                return (
                  <a
                    key={project.id + "-" + idx}
                    href={project.href ?? project.repo ?? "#"}
                    className="group relative snap-start"
                    onClick={handleCardClick}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                  >
                    {/* Halo gradient */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${accentBg} opacity-30 blur-xl transition group-hover:opacity-70 dark:opacity-60`}
                    />

                    {/* CARD */}
                    <div className="relative flex h-full min-w-[300px] max-w-xs transform-gpu flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 text-left shadow-[0_18px_40px_rgba(148,163,184,0.35)] backdrop-blur-xl transition group-hover:scale-[1.04] group-hover:border-slate-400/80 dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-[0_18px_40px_rgba(0,0,0,0.7)] sm:min-w-[360px] sm:max-w-sm select-none">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${accentTag}`}
                          >
                            {project.tag}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">
                            {project.role}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                          {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-200/80">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 dark:border-slate-700/80 dark:bg-slate-900/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span className="inline-flex items-center gap-1">
                            <span className="block h-1 w-1 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                            <span>Open project</span>
                          </span>
                          <span className="text-sm transition group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

          </div>
        </RevealOnScroll>
      </section>

      {/* SECTION : CE QUE JE RECHERCHE */}
      <section
        id="now"
        className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-slate-200 bg-white/80 px-5 py-8 text-sm leading-relaxed text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          What I&apos;m looking for
        </h2>

        <p className="mt-3 max-w-2xl">
          I&apos;m looking for opportunities where I can mix software development,
          automation and modern tooling — and work with people who care about clean
          engineering, maintainability and real product impact.
        </p>

        <div className="mt-4 grid gap-4 text-xs sm:grid-cols-3 sm:text-sm">
          {/* Roles */}
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100">
              Roles
            </h3>
            <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
              <li>· Backend / systems developer</li>
              <li>· Automation / internal tools developer</li>
              <li>· Full-stack developer (React + TypeScript)</li>
            </ul>
          </div>

          {/* Tech I enjoy */}
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100">
              Tech I enjoy
            </h3>
            <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
              <li>· TypeScript, JavaScript, C / C++</li>
              <li>· React, Next.js, REST APIs, WebSockets</li>
              <li>· RAG, n8n, Docker, MongoDB, PostgreSQL</li>
            </ul>
          </div>

          {/* Environment */}
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100">
              Environment
            </h3>
            <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
              <li>· Teams that give clear, honest feedback</li>
              <li>· Balance between autonomy and guidance</li>
              <li>· Paris area or remote-friendly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto mt-16 w-full max-w-6xl border-t border-slate-200 pt-10 text-sm leading-relaxed text-slate-700 dark:border-slate-800/80 dark:text-slate-200"
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          About
        </h2>

        <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
          I started with a full-stack MERN training at Konexio, then moved to 42 Paris
          where I spent years learning low-level programming, systems, networking and
          building real projects like Webserv, ft_transcendence, Minishell or Cub3D.
          This gave me a strong foundation in C, C++, Linux and how things actually
          work under the hood.
        </p>

        <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
          Today, I like working across different layers: backend, automation,
          integrations, React/Next.js, containers, and internal tools that make teams
          faster. I enjoy mixing practical engineering with modern workflows like
          n8n, APIs, Docker, and occasionally RAG assistants when it makes sense for
          the product.
        </p>

        <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
          I&apos;m not locked into a single stack — I&apos;m comfortable adapting,
          learning quickly, and building whatever solves the problem. The variety of
          experiences from Konexio, 42 and personal projects made me a flexible
          developer who can jump between systems, backend, front-end and automation.
        </p>
      </section>


      {/* CONTACT + CV */}
      <section
        id="contact"
        className="mx-auto mb-16 mt-10 w-full max-w-6xl border-t border-slate-200 pt-8 text-sm text-slate-700 dark:border-slate-800/80 dark:text-slate-300"
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Contact & CV
        </h2>
        <p className="mt-2">
          You can reach me by email:{" "}
          <a
            href="mailto:alexandrecadinot93@gmail.com"
            className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900 dark:decoration-slate-500 dark:hover:text-slate-100"
          >
            alexandrecadinot93@gmail.com
          </a>
          . I’m also on{" "}
          <a
            href="https://github.com/AlexandreC93"
            target="_blank"
            className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900 dark:decoration-slate-500 dark:hover:text-slate-100"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/alexandre-cadinot"
            target="_blank"
            className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900 dark:decoration-slate-500 dark:hover:text-slate-100"
          >
            LinkedIn
          </a>
          .
        </p>

        <div className="mt-4">
          <a
            href="https://www.canva.com/design/DAGp9xslbdM/zBDFg-K3LveLKzqwCaqCbg/view?utm_content=DAGp9xslbdM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4c808dda2d"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-900/80"
          >
            <span>📄 View my CV</span>
          </a>
        </div>
      </section>

      {/* ANIM BLOB */}
      {/* <style jsx global>{`
        @keyframes blob {
          0% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
          }
          33% {
            border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
          }
          66% {
            border-radius: 45% 55% 65% 35% / 55% 45% 35% 65%;
          }
          100% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
          }
        }
      `}</style> */}
    </main>
  );
}

