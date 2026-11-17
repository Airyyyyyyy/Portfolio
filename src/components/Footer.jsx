import { profile, socials } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6">
      <div className="flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#top"
          className="group flex h-12 items-center gap-2.5 self-start rounded-full border border-line px-5 text-base font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent sm:self-auto"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
          Back to top
        </a>
      </div>
    </footer>
  )
}
