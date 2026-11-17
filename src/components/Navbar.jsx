import { useEffect, useState } from 'react'
import useTheme from '../hooks/useTheme'
import useActiveSection from '../hooks/useActiveSection'
import { profile } from '../data/portfolio'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const ids = links.map((l) => l.id)

function ThemeIcon({ dark }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      {/* Sun */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className={`absolute inset-0 transition-all duration-500 ease-out-soft ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {/* Moon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute inset-0 transition-all duration-500 ease-out-soft ${dark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
    </span>
  )
}

export default function Navbar() {
  const [theme, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-paper/85' : 'border-transparent bg-paper/0'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold tracking-tight text-paper"
          >
            {profile.name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 2)}
          </span>
          {profile.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`group relative block px-3 py-2 transition-colors ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`}
                  >
                    {l.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-500 ease-out-soft ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-line'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="ml-1 rounded-full p-2.5 text-muted transition-colors hover:bg-line/60 hover:text-ink"
          >
            <ThemeIcon dark={theme === 'dark'} />
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative h-10 w-10 rounded-full text-ink transition-colors hover:bg-line/60 md:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-current transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[4px]'}`}
            />
            <span
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-current transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[4px]'}`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-400 ease-out-soft md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <ul className="overflow-hidden px-4 sm:px-6">
          {links.map((l, i) => (
            <li
              key={l.id}
              className={`border-t border-line transition-all duration-500 ease-out-soft ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            >
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 text-2xl tracking-tight ${active === l.id ? 'font-semibold' : 'font-light'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
