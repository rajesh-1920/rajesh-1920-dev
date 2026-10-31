export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-hobby-x86-64-kernel",
    title: "Building a Hobby x86-64 Kernel from Scratch",
    excerpt:
      "How I wrote a 64-bit operating system kernel that boots via the Limine bootloader, with serial logging, a framebuffer console, and an interactive shell — all in C and NASM.",
    date: "2026-09-15",
    readTime: "8 min read",
    category: "Systems",
    cover: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    content: `
<p>Most developers never think about what happens between pressing the power button and seeing a shell prompt. I wanted to understand it, so I built NovaOS — a hobby x86-64 operating system kernel.</p>

<h2>Why build a kernel?</h2>
<p>Operating systems feel like magic until you peel back the layers. By writing a kernel from scratch, I learned how bootloaders switch the CPU into long mode, how paging works, and how hardware interrupts are handled.</p>

<h2>The stack</h2>
<ul>
  <li><strong>Language:</strong> C (kernel) + NASM (assembly entry point)</li>
  <li><strong>Bootloader:</strong> Limine</li>
  <li><strong>Emulator:</strong> QEMU</li>
  <li><strong>Build:</strong> GNU Make</li>
</ul>

<h2>Key milestones</h2>
<ul>
  <li>Booting directly into 64-bit long mode</li>
  <li>Serial port logging for early debugging</li>
  <li>Framebuffer text console for output</li>
  <li>An interactive shell with basic commands</li>
</ul>

<p>The full source is <a href="https://github.com/rajesh-1920/novaos" target="_blank" rel="noopener noreferrer">on GitHub</a>.</p>
`,
  },
  {
    slug: "icpc-regionalist-journey",
    title: "Two-Time ICPC Regionalist: Lessons from the Contest Floor",
    excerpt:
      "Reflections on competing in the ICPC Asia West / Dhaka Regional in 2024 and 2025 — what worked, what didn't, and how competitive programming shaped my engineering mindset.",
    date: "2026-07-20",
    readTime: "6 min read",
    category: "Competitive Programming",
    cover: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    content: `
<p>Competitive programming is often dismissed as "just solving puzzles," but the discipline it builds — pressure management, algorithmic thinking, and clean implementation under time constraints — transfers directly to software engineering.</p>

<h2>2024: First Regional</h2>
<p>My first ICPC Regional was a humbling experience. Our team solved two problems and finished mid-table. I learned that strategy matters as much as raw coding speed — knowing which problems to attempt, and which to skip.</p>

<h2>2025: Second Regional</h2>
<p>Returning a year later, we placed stronger. The difference wasn't just more problems solved — it was better communication, clearer role division, and staying calm when a solution didn't pass pretests.</p>

<h2>What CP taught me about engineering</h2>
<ul>
  <li><strong>Edge cases:</strong> CP trains you to think about every possible input, which makes you write more robust production code.</li>
  <li><strong>Time complexity:</strong> You instinctively analyze whether a solution will scale before writing it.</li>
  <li><strong>Debugging speed:</strong> When you have 15 minutes to fix a wrong answer, you learn to debug efficiently.</li>
</ul>

<p>I've solved 2,000+ problems across Codeforces, CodeChef, and LeetCode. Every one of them made me a better engineer.</p>
`,
  },
  {
    slug: "full-stack-document-management",
    title: "Architecting PaperHub: A Role-Based Document Platform",
    excerpt:
      "Design decisions behind PaperHub — a full-stack document-management app with role-based dashboards, file-review workflows, and payment integration, containerized with Docker.",
    date: "2026-05-10",
    readTime: "7 min read",
    category: "Web Development",
    cover: "https://images.unsplash.com/photo-1460925895917-afbe65ae8364?w=800&q=80",
    content: `
<p>PaperHub started as a university project to digitize document review workflows. It grew into a full-stack platform with three distinct user roles: regular users, officers, and administrators.</p>

<h2>Architecture</h2>
<ul>
  <li><strong>Backend:</strong> Node.js + Express REST API</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>Frontend:</strong> Tailwind CSS (vanilla JS)</li>
  <li><strong>Deployment:</strong> Docker + GitHub Actions CI</li>
</ul>

<h2>Role-based access control</h2>
<p>Each role sees a different dashboard. Users upload documents and track review status. Officers approve or reject submissions. Admins manage users, roles, and system configuration.</p>

<h2>Workflow</h2>
<ol>
  <li>User uploads a document</li>
  <li>Officer receives a notification and reviews it</li>
  <li>Approved documents trigger a payment workflow</li>
  <li>Admin audits the full trail</li>
</ol>

<p>View the source: <a href="https://github.com/rajesh-1920/paperhub" target="_blank" rel="noopener noreferrer">github.com/rajesh-1920/paperhub</a></p>
`,
  },
];
