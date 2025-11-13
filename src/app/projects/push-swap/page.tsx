import Link from "next/link";

export default function PushSwapPage() {
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
                    42 · Algorithms
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Push_swap — stack-based sorting
                </h1>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                    A sorting program using two stacks (A and B) and a restricted set of
                    operations. The goal is to sort a list of integers in as few moves as
                    possible, which forces you to design and tune your own algorithm.
                </p>

                <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        C
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Algorithms
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Complexity
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Data structures
                    </span>
                </div>
                <div className="mt-6 mb-10 flex items-center">
                    <a
                        href="https://github.com/AlexandreC93/push_swap" // change ici
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
                    Push_swap takes a list of integers and outputs a sequence of
                    operations that sorts them using only two stacks and a very small set
                    of allowed moves: <code>sa</code>, <code>sb</code>, <code>ss</code>,{" "}
                    <code>pa</code>, <code>pb</code>, <code>ra</code>, <code>rb</code>,{" "}
                    <code>rr</code>, <code>rra</code>, <code>rrb</code>, <code>rrr</code>.
                </p>
                <p>
                    The evaluation is based on correctness (the final stack is sorted)
                    and efficiency (number of moves depending on the input size).
                </p>
            </section>

            {/* Technical challenges */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Technical challenges
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                        <span className="font-medium">Algorithm design:</span> find a
                        strategy that remains efficient for different input sizes (e.g.
                        small N vs large N) while staying within the allowed operations.
                    </li>
                    <li>
                        <span className="font-medium">Data structures:</span> implement the
                        stacks with a structure that makes rotations, pushes and swaps
                        simple and efficient.
                    </li>
                    <li>
                        <span className="font-medium">Complexity & optimisation:</span>{" "}
                        analyse the number of moves and tune the algorithm to stay under
                        the thresholds required by the project.
                    </li>
                    <li>
                        <span className="font-medium">Edge cases:</span> handle duplicates,
                        already sorted inputs, reverse-sorted inputs and small corner cases
                        without exploding the number of moves.
                    </li>
                    <li>
                        <span className="font-medium">Clean C code:</span> keep the
                        implementation understandable even though the algorithm can get a
                        bit tricky.
                    </li>
                </ul>
            </section>

            {/* What I learned */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    What I learned
                </h2>
                <p>
                    Push_swap is a good bridge between theoretical algorithms and real C
                    code under constraints:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Designing and comparing different algorithmic strategies</li>
                    <li>Thinking in terms of operations cost instead of time only</li>
                    <li>Implementing and testing custom data structures in C</li>
                    <li>Balancing readability and optimisation</li>
                </ul>
            </section>

            {/* How it runs */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    How it runs
                </h2>
                <p>
                    Typical usage: the program reads numbers and prints the operations on
                    stdout.
                </p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                    {`$ ./push_swap 3 2 5 1 4
pb
pb
sa
pa
pa
ra
ra
# ...
$ ./push_swap 3 2 5 1 4 | ./checker 3 2 5 1 4
OK`}
                </pre>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    On the portfolio, I mainly show the algorithm idea, small complexity
                    notes and visualisations of the stacks, rather than the raw code.
                </p>
            </section>
        </main>
    );
}
