import Link from "next/link";

export default function FtTranscendencePage() {
    return (
        <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-10 text-sm text-slate-700 dark:text-slate-200">
            <Link
                href="/#projects"
                className="mb-6 inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
                <span className="text-lg">←</span>
                <span>Back to projects</span>
            </Link>

            <header className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    42 · Full-stack
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    ft_transcendence — Real-time multiplayer Pong
                </h1>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                    A full-stack real-time Pong game with authentication, matchmaking,
                    chat, ranking and persistent match history.
                </p>

                <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Full-stack
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        PostgreSQL
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        WebSockets
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Docker
                    </span>
                </div>
                <div className="mt-6 mb-10 flex items-center">
                    <a
                        href="https://github.com/AlexandreC93/ft-transcendence" // change ici
                        target="_blank"
                        className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-400/10 px-5 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-slate-400 hover:bg-gradient-to-r dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5 opacity-80 group-hover:opacity-100 transition"
                        >
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.33-1.3-1.68-1.3-1.68-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.74 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.17 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.65 1.65.25 2.87.12 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.68 5.41-5.24 5.69.42.36.8 1.09.8 2.21v3.28c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>
                        <span className="font-medium">View project on GitHub</span>
                    </a>
                </div>

            </header>

            {/* Overview */}
            <section className="mt-10 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Overview
                </h2>
                <p>
                    ft_transcendence is a multiplayer Pong platform with user accounts,
                    matchmaking, live chat and a ranking system. It was one of the most
                    complete full-stack projects at 42, combining real-time networking,
                    REST APIs and a relational database.
                </p>
                <p>
                    Depending on the implementation, the stack uses PostgreSQL for persistence, a JavaScript frontend and
                    WebSockets for real-time game updates.
                </p>
            </section>

            {/* Technical challenges */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Technical challenges
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                        <span className="font-medium">Real-time synchronisation:</span> keep
                        the game state consistent between players using WebSockets, while
                        handling latency and desyncs.
                    </li>
                    <li>
                        <span className="font-medium">Matchmaking logic:</span> queue
                        players, create matches, handle reconnects and clean terminations.
                    </li>
                    <li>
                        <span className="font-medium">Authentication and profiles:</span>{" "}
                        store user accounts, avatars, history and rankings securely.
                    </li>
                    <li>
                        <span className="font-medium">REST API design:</span> expose clean
                        endpoints for the frontend (profiles, matches, leaderboards, friends,
                        etc.).
                    </li>
                    <li>
                        <span className="font-medium">Containerised stack:</span> run the
                        whole app (backend, DB, frontend) in Docker for reproducible
                        environments.
                    </li>
                </ul>
            </section>

            {/* What I learned */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    What I learned
                </h2>
                <p>
                    This project helped me connect backend, real-time communication and
                    a concrete user-facing product:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Structuring a full-stack application from scratch</li>
                    <li>Working with WebSockets beyond simple chat demos</li>
                    <li>Designing database schemas for real usage (matches, scores)</li>
                    <li>Collaborating on a non-trivial codebase</li>
                </ul>
            </section>

            {/* Visuals */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Visuals & demo material
                </h2>
                <p>
                    On the portfolio, I plan to show simple screenshots and diagrams
                    rather than aiming for perfect design:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Screenshot of the game in action</li>
                    <li>Lobby / matchmaking screen</li>
                    <li>Chat interface between players</li>
                    <li>Diagram showing the WebSocket flow between client and server</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    The focus here is on real-time logic and system design, not on pixel-perfect
                    UI.
                </p>
            </section>
        </main>
    );
}
