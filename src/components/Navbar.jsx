import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { LUXURY_EASE } from './animationVariants'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-[#d4af37]/20 
      bg-[rgba(24,6,6,0.7)] backdrop-blur-md"
      style={{ willChange: 'transform' }}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Logo */}
        <a
          href="#home"
          className="font-playfair text-[1.35rem] font-semibold tracking-wide text-[#f3d37b] leading-none sm:text-[1.45rem]"
        >
          M&R Wedding
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[#d4af37]/40 bg-[#6b1d1d]/55 text-[#f3d37b] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-sm font-semibold">
            {isOpen ? 'Close' : 'Menu'}
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[1.02rem] font-medium text-[#f3d37b]/95 transition hover:text-[#ffe6a3]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: LUXURY_EASE }}
            className="border-t border-[#d4af37]/30 bg-[rgba(42,8,8,0.95)] px-4 pb-4 pt-2 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block min-h-11 rounded-xl border border-[#d4af37]/35 bg-[#6b1d1d]/45 px-4 py-3 text-base font-medium text-[#f3d37b]"
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