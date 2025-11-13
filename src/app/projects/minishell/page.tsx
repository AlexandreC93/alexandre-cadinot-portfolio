import Link from "next/link";

export default function MinishellPage() {
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
                    42 · Systems
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Minishell — Bash-like shell in C
                </h1>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                    A simplified Bash shell implemented in C, supporting parsing, pipes,
                    redirections, environment variables, builtins and proper signal
                    handling.
                </p>

                <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        C
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Unix
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Processes &amp; signals
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Parsing
                    </span>
                </div>
                <div className="mt-6 mb-10 flex items-center">
                    <a
                        href="https://github.com/AlexandreC93/minishell" // change ici
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
                    The goal of Minishell is to re-implement a small part of Bash: take
                    user input, parse it, build a command structure and execute it with
                    proper process management and signal handling. The shell supports:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Pipelines: <code>cmd1 | cmd2 | cmd3</code></li>
                    <li>Redirections: <code>&gt;, &gt;&gt;, &lt;</code></li>
                    <li>Environment variables: <code>$HOME</code>, <code>$PATH</code>, …</li>
                    <li>Builtins: <code>cd</code>, <code>echo</code>, <code>export</code>, etc.</li>
                    <li>Exit status like a real shell</li>
                </ul>
            </section>

            {/* Technical challenges */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Technical challenges
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                        <span className="font-medium">Tokenizer & parser:</span> split user
                        input into tokens (words, operators, quotes) and build a structured
                        command tree (AST).
                    </li>
                    <li>
                        <span className="font-medium">Pipelines & redirections:</span> manage pipes
                        with <code>pipe()</code>, <code>dup2()</code> and file descriptors
                        to connect processes between each other.
                    </li>
                    <li>
                        <span className="font-medium">Execution engine:</span> use{" "}
                        <code>fork()</code> and <code>execve()</code> to launch external
                        programs, while handling the builtins directly in the shell process.
                    </li>
                    <li>
                        <span className="font-medium">Signal handling:</span> handle{" "}
                        <code>Ctrl+C</code> and <code>Ctrl+D</code> correctly in an
                        interactive program, without exiting brutally or leaving zombies.
                    </li>
                    <li>
                        <span className="font-medium">Memory management:</span> guarantee no
                        leaks across repeated commands using Valgrind and sanitizers.
                    </li>
                </ul>
            </section>

            {/* What I learned */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    What I learned
                </h2>
                <p>
                    Minishell gave me a concrete understanding of how a shell works
                    internally and forced me to be strict about memory and error
                    handling:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Designing and debugging a recursive parser</li>
                    <li>Working with processes, pipes and file descriptors</li>
                    <li>Handling signals in an interactive CLI</li>
                    <li>Keeping a C codebase readable and modular under constraints</li>
                </ul>
            </section>

            {/* How it runs */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    How it runs
                </h2>
                <p>On a Unix-like system, the typical usage is:</p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                    {`$ ./minishell
minishell$ echo "hello" | tr a-z A-Z
HELLO
minishell$ ls | grep .c | wc -l
42`}
                </pre>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    On the portfolio, I mainly show diagrams, code snippets and terminal
                    captures, because this is a low-level / CLI project.
                </p>
            </section>
        </main>
    );
}
