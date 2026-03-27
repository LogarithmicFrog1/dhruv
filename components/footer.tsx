import { ThemeToggle } from "@/components/theme-toggle";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-2xl px-6 pb-12 pt-20">
        <div className="border-t border-rule pt-6">
          <div className="flex flex-col items-center gap-3 text-sm text-ink-secondary sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2">
            <a
              href="https://x.com/dhruv_vaze"
              target="_blank"
              rel="noopener noreferrer me"
              className="shrink-0 whitespace-nowrap transition-colors hover:text-ink"
              aria-label="@dhruv_vaze on X"
            >
              X · @dhruv_vaze
            </a>
            <span
              className="hidden shrink-0 text-rule select-none sm:inline"
              aria-hidden
            >
              ·
            </span>
            <div className="flex shrink-0 items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
