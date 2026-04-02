import Link from "next/link";

const navLinks = [
  { href: "/", label: "Selected" },
  { href: "/archive", label: "Archive" },
  { href: "/work", label: "Work" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
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
      {/* Single-line nav: wrapping caused each row to re-center and feel like a layout shift */}
      <nav className="mt-6 flex justify-center">
        <div className="inline-flex max-w-full flex-nowrap items-center overflow-x-auto whitespace-nowrap text-sm text-ink-secondary [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link, i) => (
            <span key={link.href} className="inline-flex shrink-0 items-center">
              {i > 0 && (
                <span className="px-2 text-rule select-none" aria-hidden>
                  ·
                </span>
              )}
              <Link
                href={link.href}
                className="shrink-0 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}
