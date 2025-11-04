import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-16 border-t border-black/5 dark:border-white/10">
      <div className="absolute inset-x-0 -top-20 -z-10 h-20 bg-gradient-to-b from-transparent to-indigo-500/10 dark:to-indigo-400/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Let’s build something great</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 max-w-sm">
              Available for freelance and collaboration. I’d love to hear about your ideas.
            </p>
          </div>
          <div className="lg:col-span-2">
            <form className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 px-3 py-2 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 px-3 py-2 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
              <textarea
                placeholder="Tell me about your project"
                rows={4}
                className="sm:col-span-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 px-3 py-2 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
              <div className="sm:col-span-2">
                <button type="button" className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:opacity-95 active:opacity-90">
                  Send message
                  <Mail size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Yoichi. All rights reserved.</p>
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
              <Linkedin size={16} />
            </a>
            <a href="mailto:hello@example.com" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
