"use client";

export default function FAQ() {
    const faqs = [
        {
            question: "I have a repetitive task but I'm not sure if it can be automated.",
            answer: "Almost any digital task involving data entry, emails, or connecting apps can be automated. Book a call, and I'll tell you feasibility in 5 minutes.",
        },
        {
            question: "Do you work on a fixed price or hourly rate?",
            answer: "For well-defined projects (like a landing page or specific bot), I prefer fixed prices. For ongoing support or complex consulting, I work on a daily/hourly rate.",
        },
        {
            question: "I am non-technical, how do we communicate?",
            answer: "I speak plain English/French, not just code. I focus on your business goals and results, handling all the technical complexity for you.",
        },
    ];

    return (
        <section className="bg-slate-50/50 py-24 dark:bg-slate-900/30">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-slate-900 dark:text-slate-100">
                                <span>{faq.question}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="border-t border-slate-100 px-6 pb-6 pt-0 text-slate-600 dark:border-slate-800 dark:text-slate-400">
                                <p className="mt-4 leading-relaxed">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm text-slate-500">
                    Still have questions? <a href="mailto:alexandrecadinot93@gmail.com" className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-300">Shoot me an email.</a>
                </div>
            </div>
        </section>
    );
}
