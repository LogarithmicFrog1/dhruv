import Link from "next/link";

const navLinks = [
  { href: "/", label: "Selected" },
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
        className="text-sm font-medium text-ink transition-colors hover:text-accent"
      >
        Dhruv Vaze
      </Link>
      <p className="mt-2 text-sm text-ink-secondary">
        love things deeply, let go freely.
      </p>
      <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-sm text-ink-secondary">
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
