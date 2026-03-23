import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-rose-200/60 bg-[rgba(40,17,28,0.82)] backdrop-blur-xl'
          : 'border-b border-transparent bg-[rgba(40,17,28,0.28)] backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="font-playfair-sc text-lg font-semibold tracking-wide text-amber-100 transition hover:text-amber-200"
        >
          M&R Wedding
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-amber-200/35 bg-white/10 text-amber-100 md:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-sm font-semibold">{isOpen ? 'Close' : 'Menu'}</span>
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-amber-50/90 transition hover:text-amber-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-amber-200/30 bg-[rgba(43,16,29,0.93)] px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block min-h-11 rounded-xl border border-amber-200/20 bg-white/10 px-4 py-3 text-base font-medium text-amber-50 transition hover:bg-white/15"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
