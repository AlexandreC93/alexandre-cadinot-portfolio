"use client";

const techs = [
    "Next.js",
    "React",
    "Node.js",
    "Docker",
    "Python",
    "C Language",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "n8n",
];

export default function TechMarquee() {
    return (
        <div className="w-full overflow-hidden border-y border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex w-max animate-scroll items-center gap-16 px-8">
                {[...techs, ...techs].map((tech, i) => (
                    <span
                        key={i}
                        className="whitespace-nowrap text-xl font-bold uppercase tracking-widest text-slate-300 transition-colors hover:text-slate-500 dark:text-slate-600 dark:hover:text-slate-400"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
