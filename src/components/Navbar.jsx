import { useState } from 'react';
import { Menu, X, Rocket, User, FolderGit2, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home', icon: Rocket },
    { href: '#projects', label: 'Projects', icon: FolderGit2 },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-zinc-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 text-white shadow-md">
              <User size={18} />
            </span>
            <span className="tracking-tight">Yoichi</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="group inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">
                <Icon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                {label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-2">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 rounded-md px-3 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
