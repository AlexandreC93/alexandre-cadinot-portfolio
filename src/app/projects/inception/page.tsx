import Link from "next/link";

export default function InceptionPage() {
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
                    42 · DevOps
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Inception — Dockerised infrastructure
                </h1>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                    A multi-container setup using Docker and docker-compose to run a
                    complete WordPress stack (Nginx, PHP-FPM, MariaDB) with volumes,
                    custom networking and TLS.
                </p>

                <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Docker
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        docker-compose
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Nginx
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        MariaDB
                    </span>
                </div>
                <div className="mt-6 mb-10 flex items-center">
                    <a
                        href="https://github.com/AlexandreC93/inception"
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
                    Inception is a DevOps-oriented project that asks you to containerise a
                    small infrastructure: a WordPress website behind an Nginx reverse
                    proxy, with a MariaDB database, all running inside Docker containers,
                    using Docker volumes for persistence.
                </p>
                <p>
                    The project focuses on understanding how services interact, how to
                    configure them, and how to make the setup reproducible and isolated.
                </p>
            </section>

            {/* Technical challenges */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Technical challenges
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                        <span className="font-medium">Service separation:</span> split the
                        stack into multiple containers (Nginx, PHP/WordPress, MariaDB),
                        instead of a single monolith.
                    </li>
                    <li>
                        <span className="font-medium">docker-compose orchestration:</span>{" "}
                        define services, networks and volumes to wire everything correctly.
                    </li>
                    <li>
                        <span className="font-medium">Persistent storage:</span> use Docker
                        volumes so the database and WordPress files survive container
                        recreation.
                    </li>
                    <li>
                        <span className="font-medium">Nginx configuration:</span> configure
                        reverse proxy, virtual host, SSL/TLS and routing to the PHP-FPM
                        container.
                    </li>
                    <li>
                        <span className="font-medium">Security & isolation:</span> avoid
                        running everything as root, restrict access and configure the
                        minimum required ports.
                    </li>
                </ul>
            </section>

            {/* What I learned */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    What I learned
                </h2>
                <p>
                    This project gave me a concrete, hands-on understanding of container
                    based infrastructure:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Writing Dockerfiles and composing services with docker-compose</li>
                    <li>Configuring Nginx as a reverse proxy for an application</li>
                    <li>Managing persistence with volumes</li>
                    <li>Debugging services that depend on each other</li>
                </ul>
            </section>

            {/* How it runs */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    How it runs
                </h2>
                <p>
                    Once the images are built, the infrastructure is started with a single
                    command:
                </p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                    {`$ docker-compose up -d
# Nginx, WordPress (PHP-FPM) and MariaDB containers start
# The website is then available at https://your-domain.local`}
                </pre>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    On the portfolio, I mainly show the architecture diagram, the
                    docker-compose file and screenshots of the running containers /
                    dashboard.
                </p>
            </section>
        </main>
    );
}
