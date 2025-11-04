import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-10rem] -translate-x-1/2 blur-3xl" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-indigo-400 via-sky-400 to-teal-300 opacity-30" style={{ clipPath: 'polygon(74% 44%, 100% 61%, 97% 26%, 85% 0, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 44% 54%, 54% 45%)' }} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300 backdrop-blur">
              Available for freelance work
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Building delightful web experiences
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-xl">
              I craft fast, accessible websites and apps with a focus on clean design, performance, and thoughtful micro‑interactions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:opacity-95 active:opacity-90"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 p-2 backdrop-blur">
              <div className="rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 p-[1px]">
                <div className="rounded-[10px] bg-white dark:bg-zinc-950 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-black/5 dark:border-white/10 shadow-sm"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                    Minimal, tactile UI components with elegant motion and depth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
