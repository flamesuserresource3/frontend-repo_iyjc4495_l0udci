import { ExternalLink, Globe, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Portfolio',
    description: 'A fast, elegant portfolio with smooth scroll and tasteful micro-interactions.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'E‑commerce Starter',
    description: 'Headless storefront with modern UI patterns and responsive design.',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Reusable components with accessibility and theming baked in.',
    tech: ['Radix', 'Tailwind', 'Storybook'],
    link: '#',
  },
];

function ProjectCard({ title, description, tech, link }) {
  return (
    <a
      href={link}
      className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 p-6 backdrop-blur transition-transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70 bg-gradient-to-tr from-indigo-500/30 via-sky-500/30 to-teal-400/30" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
        </div>
        <div className="shrink-0 rounded-md border border-black/10 dark:border-white/10 p-2 text-zinc-700 dark:text-zinc-200">
          <Globe size={16} />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tech.map((t) => (
          <span key={t} className="inline-flex items-center gap-1 rounded-md border border-black/10 dark:border-white/10 px-2 py-1 text-xs text-zinc-600 dark:text-zinc-300">
            <Code2 size={12} /> {t}
          </span>
        ))}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white">
        View project <ExternalLink size={16} className="opacity-70" />
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Selected work</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 max-w-xl">
              A curated collection of recent projects that blend aesthetics, performance, and accessibility.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5">
            Get in touch <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
