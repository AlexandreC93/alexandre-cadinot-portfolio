export interface ProjectSection {
    title: string;
    content: React.ReactNode;
}

export interface Project {
    id: string; // Used for slug and key
    title: string;
    tagline: string; // The "42 · Graphics" little tag
    role?: string; // Kept from carousel "Design & implementation"
    description: string;
    tech: string[];
    repo?: string;
    link?: string; // Live demo link if any
    accent?: "emerald" | "sky" | "fuchsia"; // Added for homepage styling

    // Content for the detail page
    overview?: React.ReactNode;
    challenges?: React.ReactNode; // List or text
    learned?: React.ReactNode; // List or text
    howItRuns?: React.ReactNode; // Code block or text
    visuals?: React.ReactNode; // Text describing visuals or the visuals themselves
}

export const projects: Project[] = [
    {
        id: "lead-gen-bot",
        title: "Automated Lead Gen Pipeline",
        tagline: "Automation · ROI",
        role: "Automation Architect",
        description: "End-to-end automation scraping LinkedIn, enriching data, and syncing with CRM. Saves 10h/week/employee.",
        tech: ["n8n", "Python", "AI", "CRM"],
        accent: "emerald",
        overview: (
            <>
                <p>
                    A fully automated lead generation workflow designed to replace manual prospecting.
                    It scrapes potential leads from LinkedIn, enriches their profiles using external APIs (Apollo, Clearbit),
                    uses AI to draft personalized outreach messages, and syncs high-quality leads directly into the CRM.
                </p>
                <p className="mt-3">
                    This tool eliminates hours of manual data entry and ensures the sales team only focuses on closing deals.
                </p>
            </>
        ),
        challenges: (
            <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Bypassing anti-scraping measures responsibly.</li>
                <li>Ensuring data accuracy across multiple enrichment sources.</li>
                <li>Designing a fallback mechanism when APIs are down.</li>
            </ul>
        ),
        visuals: "Placeholder for workflow diagram."
    },
    {
        id: "rag-chatbot",
        title: "Corporate RAG Assistant",
        tagline: "AI · Business",
        role: "AI Engineer",
        description: "AI Chatbot trained on internal company documentation to answer support queries instantly.",
        tech: ["OpenAI", "LangChain", "Vector DB"],
        accent: "sky",
        overview: (
            <>
                <p>
                    A Retrieval-Augmented Generation (RAG) system that connects an LLM (OpenAI GPT-4) to your
                    internal knowledge base (PDFs, Notion, Wikis). It allows employees to ask natural language questions
                    and get accurate answers with citations.
                </p>
            </>
        ),
        challenges: (
            <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Optimizing chunking strategies for better retrieval relevance.</li>
                <li>Preventing hallucinations by enforcing strict context usage.</li>
                <li>Handling access control so users only see what they are allowed to.</li>
            </ul>
        )
    },
    {
        id: "ft-transcendence",
        title: "Scalable Real-time Web App",
        tagline: "Full-stack · Architecture",
        role: "Backend & System Design",
        description: "Full-stack platform with Auth, Chat & Live Game. Proof of robust architecture handling concurrent users.",
        tech: ["NestJS", "React", "PostgreSQL"],
        repo: "https://github.com/AlexandreC93/ft-transcendence",
        accent: "fuchsia",
        overview: (
            <>
                <p>
                    A comprehensive multiplayer platform featuring real-time pong, user authentication (OAuth2 + 2FA),
                    live chat/channels, and a competitive ladder system.
                </p>
                <p className="mt-3">
                    The architecture is designed to handle multiple concurrent game sessions via WebSockets,
                    ensuring low-latency state synchronization between the server and clients.
                </p>
            </>
        ),
        challenges: (
            <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                    <span className="font-medium">Real-time consistency:</span> Synchronizing game state at 60fps across network boundaries using NestJS Gateways.
                </li>
                <li>
                    <span className="font-medium">Scalable Database Design:</span> Managing complex relationships (Friends, Blocked, Match History) in PostgreSQL.
                </li>
                <li>
                    <span className="font-medium">Security:</span> Implementing robust JWT strategies and protection against socket injection.
                </li>
            </ul>
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Mastering NestJS modules and dependency injection.</li>
                <li>Implementing the Gateway pattern for WebSockets.</li>
                <li>Dockerizing a multi-service stack (Frontend, Backend, DB, Adminer).</li>
            </ul>
        ),
        visuals: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Game Interface with live score.</li>
                <li>Chat system with direct messaging and channels.</li>
                <li>User profile with stats and match history.</li>
            </ul>
        )
    },
    {
        id: "inception",
        title: "DevOps Infrastructure",
        tagline: "DevOps · System Admin",
        role: "DevOps Engineer",
        description: "Docker-based container orchestration ensuring isolation and reproducibility.",
        tech: ["Docker", "Nginx", "System Admin"],
        repo: "https://github.com/AlexandreC93/inception",
        accent: "sky",
        overview: (
            <>
                <p>
                    A complete infrastructure setup using Docker and Docker Compose. It orchestrates multiple services
                    (Nginx, WordPress/PHP-FPM, MariaDB) in isolated containers, communicating via a dedicated internal network.
                </p>
                <p className="mt-3">
                    The focus is on system reliability, security (TLS only), and data persistence using Docker volumes.
                </p>
            </>
        ),
        challenges: (
            <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                    <span className="font-medium">Service Orchestration:</span> Wiring disparate services together without tight coupling.
                </li>
                <li>
                    <span className="font-medium">Security Hardening:</span> Configuring Nginx to serve only over HTTPS (TLS 1.2/1.3).
                </li>
                <li>
                    <span className="font-medium">Initialization Order:</span> Creating a robust startup script to ensure the DB is ready before WordPress connects.
                </li>
            </ul>
        ),
        howItRuns: (
            <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                {`$ make up
# Builds images and starts containers in detached mode
$ make logs
# Tials logs for monitoring`}
            </pre>
        )
    }
];
