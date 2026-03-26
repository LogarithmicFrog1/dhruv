import Link from "next/link";

const navLinks = [
  { href: "/archive", label: "Archive" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
];

export function Header() {
  return (
    <header className="mx-auto max-w-2xl px-6 pb-10 pt-14 text-center sm:pt-20">
      <Link
        href="/"
        className="text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:text-accent"
      >
        Dhruv Vaze
      </Link>
      <p className="mt-2 font-serif text-sm italic text-ink-secondary">
        technology, ambition, taste, and things that stick
      </p>
      <nav className="mt-6 flex items-center justify-center gap-1 text-xs uppercase tracking-widest text-ink-secondary">
        {navLinks.map((link, i) => (
          <span key={link.href} className="flex items-center gap-1">
            {i > 0 && <span className="px-1.5 text-rule">·</span>}
            <Link
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          </span>
        ))}
      </nav>
    </header>
  );
}
