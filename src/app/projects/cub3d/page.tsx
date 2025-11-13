import Link from "next/link";

export default function Cub3DPage() {
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
                    42 · Graphics
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Cub3D — raycasting 3D engine
                </h1>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                    A small 3D engine inspired by Wolfenstein 3D, using raycasting to
                    render walls and textures from a 2D map. The project mixes maths,
                    low-level graphics and performance constraints.
                </p>

                <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        C
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Raycasting
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        Maths
                    </span>
                    <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80">
                        MiniLibX
                    </span>
                </div>
                <div className="mt-6 mb-10 flex items-center">
                    <a
                        href="https://github.com/AlexandreC93/cub3d"
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
                    Cub3D renders a pseudo-3D environment from a 2D map using a
                    raycasting algorithm. The player moves in a grid-based world and the
                    engine computes, for each vertical slice of the screen, how far the
                    next wall is and which texture to display.
                </p>
                <p>
                    The project is built in C with MiniLibX for window management and
                    pixel drawing.
                </p>
            </section>

            {/* Technical challenges */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Technical challenges
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                        <span className="font-medium">Raycasting maths:</span> compute ray
                        directions, step through the grid and detect wall intersections
                        efficiently.
                    </li>
                    <li>
                        <span className="font-medium">Projection & perspective:</span>{" "}
                        convert distances to on-screen wall heights to simulate depth.
                    </li>
                    <li>
                        <span className="font-medium">Texture mapping:</span> sample the
                        correct part of a texture depending on the hit position on the wall.
                    </li>
                    <li>
                        <span className="font-medium">Input & movement:</span> handle
                        keyboard input to move and rotate smoothly without glitches.
                    </li>
                    <li>
                        <span className="font-medium">Performance:</span> keep the frame
                        rate acceptable despite doing a lot of maths every frame.
                    </li>
                </ul>
            </section>

            {/* What I learned */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    What I learned
                </h2>
                <p>
                    Cub3D gave me a concrete taste of how early 3D engines work under the
                    hood:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Applying trigonometry and vectors in a real project</li>
                    <li>Structuring a rendering loop in C</li>
                    <li>Managing resources and textures manually</li>
                    <li>Debugging visual artefacts and precision issues</li>
                </ul>
            </section>

            {/* How it runs */}
            <section className="mt-8 space-y-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    How it runs
                </h2>
                <p>Typical usage:</p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                    {`$ ./cub3D maps/example.cub
# Use WASD / arrows to move around and explore the world`}
                </pre>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    On the portfolio, I mainly show screenshots of the rendered world and
                    diagrams of the raycasting logic, rather than the full code.
                </p>
            </section>
        </main>
    );
}
