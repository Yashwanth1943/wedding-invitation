import { motion as Motion } from 'framer-motion'
import Countdown from '../components/Countdown'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#6b1d1d] via-[#4b1414] to-[#3b0f0f] px-4 pb-16 pt-28 text-white sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,219,170,0.25),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,182,193,0.2),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <Motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f4d88c]"
        >
          Save The Date
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-5 font-playfair text-4xl leading-tight text-[#fff3d8] sm:text-5xl md:text-6xl"
        >
          Madhavi Latha <br /> <span className="px-1 text-[#d4af37]">&amp;</span> <br /> Ram Kiran
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mt-4 max-w-xl text-sm font-playfair uppercase tracking-wide text-[#f4d88c]/95 sm:text-base md:text-lg"
        >
          Thursday, April 02, 2026 | 09:18 AM onwards
        </Motion.p>

        <Motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="mt-3 max-w-md text-sm text-[#f8e6bf]/95 sm:text-base"
        >
          Two hearts, one forever. Your presence will make our celebration complete.
        </Motion.p>

        <Countdown targetDate="2026-04-02T09:18:00+05:30" />
      </div>
    </section>
  )
}

export default Hero

