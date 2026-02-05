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
        id: "rag-chatbot",
        title: "RAG chatbot for documents",
        tagline: "AI · RAG",
        role: "Design & implementation",
        description: "Assistant that answers from company docs, available on WhatsApp and a web widget. Uses vector search, summarisation and guardrails.",
        tech: ["Next.js", "n8n", "MongoDB", "OpenAI"],
        link: "#",
        repo: "#",
        accent: "sky", // Assumed default
        overview: "A RAG chatbot that allows users to query company documentation efficiently."
    },
    {
        id: "ft-transcendence",
        title: "ft_transcendence — Real-time multiplayer Pong",
        tagline: "42 · Full-stack",
        role: "Backend & real-time logic",
        description: "Pong-like game with auth, matchmaking, chat and ladder. Real-time gameplay, clean UI and a focus on reliability.",
        tech: ["Django", "PostgreSQL", "WebSockets", "Docker"],
        repo: "https://github.com/AlexandreC93/ft-transcendence",
        accent: "sky",
        overview: (
            <>
                <p>
                    ft_transcendence is a multiplayer Pong platform with user accounts,
                    matchmaking, live chat and a ranking system. It was one of the most
                    complete full-stack projects at 42, combining real-time networking,
                    REST APIs and a relational database.
                </p>
                <p className="mt-3">
                    Depending on the implementation, the stack uses PostgreSQL for persistence, a JavaScript frontend and
                    WebSockets for real-time game updates.
                </p>
            </>
        ),
        challenges: (
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
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Structuring a full-stack application from scratch</li>
                <li>Working with WebSockets beyond simple chat demos</li>
                <li>Designing database schemas for real usage (matches, scores)</li>
                <li>Collaborating on a non-trivial codebase</li>
            </ul>
        ),
        visuals: (
            <>
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
            </>
        )
    },
    {
        id: "webserv",
        title: "Webserv — HTTP/1.1 server in C++98",
        tagline: "42 · Low-level",
        role: "Networking & HTTP implementation",
        description: "HTTP/1.1 server from scratch with multiple vhosts, CGI support and chunked transfer. Benchmarked against nginx on various workloads.",
        tech: ["C++98", "Sockets", "CGI"],
        repo: "https://github.com/AlexandreC93/webserv",
        accent: "fuchsia",
        overview: (
            <>
                <p>
                    Webserv is an HTTP/1.1 server whose goal is to mimic the behaviour of
                    nginx for basic use cases: serving static files, handling different
                    virtual hosts and delegating some routes to CGI programs.
                </p>
                <p className="mt-3">
                    The server reads a configuration file (similar to nginx), opens the
                    required sockets, then enters an event loop to handle many connections
                    concurrently.
                </p>
            </>
        ),
        challenges: (
            <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                    <span className="font-medium">HTTP parsing:</span> parsing request
                    lines, headers, bodies (including chunked transfer) and building a
                    robust request object.
                </li>
                <li>
                    <span className="font-medium">Event-driven I/O:</span> using{" "}
                    <code>poll()</code> to handle multiple sockets without blocking the
                    whole server, and managing the connection state machine.
                </li>
                <li>
                    <span className="font-medium">CGI integration:</span> spawning CGI
                    processes, passing environment variables and reading their output to
                    build HTTP responses.
                </li>
                <li>
                    <span className="font-medium">Virtual hosts & routing:</span> map
                    requests to different server blocks and locations, depending on the
                    Host header and the path.
                </li>
                <li>
                    <span className="font-medium">Resource management:</span> building
                    everything without smart pointers, being careful about ownership and
                    lifetime.
                </li>
            </ul>
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Designing an event loop for network servers</li>
                <li>Implementing and debugging the HTTP protocol</li>
                <li>Integrating legacy-style CGI programs</li>
                <li>Structuring a non-trivial C++98 codebase</li>
            </ul>
        ),
        howItRuns: (
            <>
                <p>A typical usage scenario:</p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                    {`$ ./webserv config/example.conf
# In another terminal:
$ curl -v http://localhost:8080/
$ curl -v http://localhost:8080/cgi-bin/script.py`}
                </pre>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    On the portfolio, I mainly show diagrams (request flow, event loop),
                    logs and small benchmarks instead of a GUI, because this is an
                    infrastructure project.
                </p>
            </>
        )

    },
    {
        id: "minishell",
        title: "Minishell — Bash-like shell in C",
        tagline: "42 · Systems",
        description: "A simplified Bash shell implemented in C, supporting parsing, pipes, redirections, environment variables, builtins and proper signal handling.",
        tech: ["C", "Unix", "Processes & signals", "Parsing"],
        repo: "https://github.com/AlexandreC93/minishell",
        accent: "emerald",
        overview: (
            <>
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
            </>
        ),
        challenges: (
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
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Designing and debugging a recursive parser</li>
                <li>Working with processes, pipes and file descriptors</li>
                <li>Handling signals in an interactive CLI</li>
                <li>Keeping the code understandable despite timing constraints</li>
            </ul>
        ),
        howItRuns: (
            <>
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
            </>
        )
    },
    {
        id: "push-swap",
        title: "Push_swap — stack-based sorting",
        tagline: "42 · Algorithms",
        description: "A sorting program using two stacks (A and B) and a restricted set of operations. The goal is to sort a list of integers in as few moves as possible, which forces you to design and tune your own algorithm.",
        tech: ["C", "Algorithms", "Complexity", "Data structures"],
        repo: "https://github.com/AlexandreC93/push_swap",
        accent: "fuchsia",
        overview: (
            <>
                <p>
                    Push_swap takes a list of integers and outputs a sequence of
                    operations that sorts them using only two stacks and a very small set
                    of allowed moves: <code>sa</code>, <code>sb</code>, <code>ss</code>,{" "}
                    <code>pa</code>, <code>pb</code>, <code>ra</code>, <code>rb</code>,{" "}
                    <code>rr</code>, <code>rra</code>, <code>rrb</code>, <code>rrr</code>.
                </p>
                <p className="mt-3">
                    The evaluation is based on correctness (the final stack is sorted)
                    and efficiency (number of moves depending on the input size).
                </p>
            </>
        ),
        challenges: (
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
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Designing and comparing different algorithmic strategies</li>
                <li>Thinking in terms of operations cost instead of time only</li>
                <li>Implementing and testing custom data structures in C</li>
                <li>Balancing readability and optimisation</li>
            </ul>
        ),
        howItRuns: (
            <>
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
            </>
        )
    },
    {
        id: "inception",
        title: "Inception — Dockerised infrastructure",
        tagline: "42 · DevOps",
        description: "A multi-container setup using Docker and docker-compose to run a complete WordPress stack (Nginx, PHP-FPM, MariaDB) with volumes, custom networking and TLS.",
        tech: ["Docker", "docker-compose", "Nginx", "MariaDB"],
        repo: "https://github.com/AlexandreC93/inception",
        accent: "sky",
        overview: (
            <>
                <p>
                    Inception is a DevOps-oriented project that asks you to containerise a
                    small infrastructure: a WordPress website behind an Nginx reverse
                    proxy, with a MariaDB database, all running inside Docker containers,
                    using Docker volumes for persistence.
                </p>
                <p className="mt-3">
                    The project focuses on understanding how services interact, how to
                    configure them, and how to make the setup reproducible and isolated.
                </p>
            </>
        ),
        challenges: (
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
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Writing Dockerfiles and composing services with docker-compose</li>
                <li>Configuring Nginx as a reverse proxy for an application</li>
                <li>Managing persistence with volumes</li>
                <li>Debugging services that depend on each other</li>
            </ul>
        ),
        howItRuns: (
            <>
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
            </>
        )
    },
    {
        id: "cub3d",
        title: "Cub3D — raycasting 3D engine",
        tagline: "42 · Graphics",
        description: "A small 3D engine inspired by Wolfenstein 3D, using raycasting to render walls and textures from a 2D map. The project mixes maths, low-level graphics and performance constraints.",
        tech: ["C", "Raycasting", "Maths", "MiniLibX"],
        repo: "https://github.com/AlexandreC93/cub3d",
        accent: "emerald",
        overview: (
            <>
                <p>
                    Cub3D renders a pseudo-3D environment from a 2D map using a
                    raycasting algorithm. The player moves in a grid-based world and the
                    engine computes, for each vertical slice of the screen, how far the
                    next wall is and which texture to display.
                </p>
                <p className="mt-3">
                    The project is built in C with MiniLibX for window management and
                    pixel drawing.
                </p>
            </>
        ),
        challenges: (
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
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Applying trigonometry and vectors in a real project</li>
                <li>Structuring a rendering loop in C</li>
                <li>Managing resources and textures manually</li>
                <li>Debugging visual artefacts and precision issues</li>
            </ul>
        ),
        howItRuns: (
            <>
                <p>Typical usage:</p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                    {`$ ./cub3D maps/example.cub
# Use WASD / arrows to move around and explore the world`}
                </pre>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    On the portfolio, I mainly show screenshots of the rendered world and
                    diagrams of the raycasting logic, rather than the full code.
                </p>
            </>
        )
    },
    {
        id: "philosophers",
        title: "Philosophers — concurrency & threads",
        tagline: "42 · Concurrency",
        description: "Implementation of the dining philosophers problem using threads and mutexes. The goal is to avoid deadlocks and starvation while respecting strict timing rules.",
        tech: ["C", "Threads", "Mutexes", "Concurrency"],
        repo: "https://github.com/AlexandreC93/philosophers",
        accent: "fuchsia",
        overview: (
            <>
                <p>
                    The dining philosophers problem is a classic concurrency scenario:
                    several philosophers sit around a table with forks between them and
                    alternate between thinking, eating and sleeping. Each needs two forks
                    to eat, which introduces contention and the risk of deadlocks.
                </p>
                <p className="mt-3">
                    The project asks you to simulate this with C threads and mutexes,
                    respecting precise timings and avoiding undefined behaviours.
                </p>
            </>
        ),
        challenges: (
            <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                    <span className="font-medium">Thread management:</span> create and
                    join a thread per philosopher, each with its own loop and state.
                </li>
                <li>
                    <span className="font-medium">Mutexes & forks:</span> use mutexes
                    to represent forks and avoid inconsistent access.
                </li>
                <li>
                    <span className="font-medium">Deadlock avoidance:</span> design an
                    ordering or strategy so that philosophers don&apos;t lock each
                    other forever.
                </li>
                <li>
                    <span className="font-medium">Starvation & monitoring:</span> track
                    when each philosopher last ate to detect if one is starving.
                </li>
                <li>
                    <span className="font-medium">Timing accuracy:</span> implement
                    sleeping and timing logic precisely enough to pass strict tests.
                </li>
            </ul>
        ),
        learned: (
            <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Working with threads and shared resources</li>
                <li>Reasoning about deadlocks and race conditions</li>
                <li>Building a simple monitoring system</li>
                <li>Keeping the code understandable despite timing constraints</li>
            </ul>
        ),
        howItRuns: (
            <>
                <p>
                    Typical usage: parameters control the number of philosophers and
                    timings.
                </p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs text-slate-100">
                    {`$ ./philo 5 800 200 200
# 5 philosophers, time to die 800ms, time to eat 200ms, time to sleep 200ms`}
                </pre>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    On the portfolio, I show timeline diagrams and logs of philosopher
                    states to illustrate how the program behaves over time.
                </p>
            </>
        )
    },
    {
        id: "ai-creative",
        title: " AI MOVIE | AI imagery & video experiments [BUILDING]",
        tagline: "AI · Creative",
        role: "Exploration · Prototyping",
        description: "Experiments around AI-assisted visuals and video for storytelling and fashion, focusing on reliable pipelines rather than just prompt spam.",
        tech: ["Stable Diffusion", "Video tools", "Prompting"],
        link: "#",
        accent: "fuchsia",
        overview: "Explorations into the latest AI video generation tools."
    }
];
