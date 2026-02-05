"use client";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Alexandre has a rare ability to solve complex low-level problems while keeping the big picture in mind. A reliable engineer.",
            author: "Former Peer",
            role: "42 Paris",
        },
        {
            quote: "His understanding of automation saved us hours of manual work. Highly recommended for process optimization.",
            author: "SaaS Project Lead",
            role: "Client",
        },
        {
            quote: "An excellent instructor who makes cybersecurity concepts accessible and practical.",
            author: "Bootcamp Student",
            role: "Training",
        },
    ];

    return (
        <section className="bg-white py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                        Trusted by Peers & Clients
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Real feedback from people I&apos;ve worked with.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50"
                        >
                            <blockquote className="text-slate-700 dark:text-slate-300 italic">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-lg">
                                    👤
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                                        {t.author}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-500">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
