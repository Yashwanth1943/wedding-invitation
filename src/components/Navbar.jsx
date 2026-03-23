import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'

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
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[#d4af37]/40 bg-[rgba(59,15,15,0.9)]'
          : 'border-b border-transparent bg-[rgba(59,15,15,0.35)]'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="font-playfair text-lg font-semibold tracking-wide text-[#f3d37b]">
          M&R Wedding
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[#d4af37]/40 bg-white/10 text-[#f3d37b] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-sm font-semibold">{isOpen ? 'Close' : 'Menu'}</span>
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-medium text-[#f3d37b]/90">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#d4af37]/35 bg-[rgba(59,15,15,0.95)] px-4 pb-4 pt-2 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block min-h-11 rounded-xl border border-[#d4af37]/30 bg-white/10 px-4 py-3 text-base font-medium text-[#f3d37b]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

