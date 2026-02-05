import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        notFound();
    }

    // Guard clause for projects that are in the list but don't have a detail page yet (e.g. rag-chatbot)
    // Although our data file has some content for rag-chatbot, if we want to enforce full content we could check for 'overview'
    // For now we'll render what we have.

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
                    {project.tagline}
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    {project.title}
                </h1>
                <p className="max-w-xl text-slate-600 dark:text-slate-300">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-[11px]">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-slate-700 dark:bg-slate-900/80"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {(project.repo || project.link) && (
                    <div className="mt-6 mb-10 flex items-center gap-4">
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
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
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
                            >
                                <span className="font-medium">View live demo</span>
                            </a>
                        )}
                    </div>
                )}
            </header>

            {/* Overview */}
            {project.overview && (
                <section className="mt-10 space-y-3">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                        Overview
                    </h2>
                    {project.overview}
                </section>
            )}

            {/* Technical challenges */}
            {project.challenges && (
                <section className="mt-8 space-y-3">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                        Technical challenges
                    </h2>
                    {project.challenges}
                </section>
            )}

            {/* What I learned */}
            {project.learned && (
                <section className="mt-8 space-y-3">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                        What I learned
                    </h2>
                    {project.learned}
                </section>
            )}

            {/* Visuals */}
            {project.visuals && (
                <section className="mt-8 space-y-3">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                        Visuals & demo material
                    </h2>
                    {project.visuals}
                </section>
            )}

            {/* How it runs */}
            {project.howItRuns && (
                <section className="mt-8 space-y-3">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                        How it runs
                    </h2>
                    {project.howItRuns}
                </section>
            )}
        </main>
    );
}
