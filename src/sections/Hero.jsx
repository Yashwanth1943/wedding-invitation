import { motion as Motion } from 'framer-motion'
import {
  heroTextContainer,
  heroTextItem,
  sectionReveal,
  VIEWPORT_ONCE,
} from '../components/animationVariants'
import Countdown from '../components/Countdown'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <Motion.section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-white sm:px-6"
      style={{
        background: [
          'radial-gradient(circle at 52% 28%, rgba(211,154,66,0.14) 0%, rgba(211,154,66,0) 56%)',
          'radial-gradient(circle at 88% 16%, rgba(149,32,32,0.26) 0%, rgba(149,32,32,0) 52%)',
          'linear-gradient(180deg, #2b0b0b 0%, #411111 20%, #5a1818 42%, #6b1d1d 58%, #471313 80%, #2f0c0c 100%)',
        ].join(','),
      }}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,219,170,0.25),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,182,193,0.2),transparent_55%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise-texture" />

      <Motion.div
        className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        variants={heroTextContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        <Motion.p
          variants={heroTextItem}
          className="glass-card rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f4d88c]"
        >
          Save The Date
        </Motion.p>

        <Motion.h1
          variants={heroTextItem}
          className="mt-5 font-playfair text-4xl leading-tight text-[#fff3d8] sm:text-5xl md:text-6xl"
        >
          Madhavi Latha <br /> <span className="px-1 text-[#d4af37]">&amp;</span> <br /> Ram Kiran
        </Motion.h1>

        <Motion.p
          variants={heroTextItem}
          className="mt-4 max-w-xl text-sm font-playfair uppercase tracking-wide text-[#f4d88c]/95 sm:text-base md:text-lg"
        >
          Thursday, April 02, 2026 | 09:18 AM onwards
        </Motion.p>

        <Motion.p
          variants={heroTextItem}
          className="mt-3 max-w-md text-sm text-[#f8e6bf]/95 sm:text-base"
        >
          Two hearts, one forever. Your presence will make our celebration complete.
        </Motion.p>

        <Countdown targetDate="2026-04-02T09:18:00+05:30" />
      </Motion.div>
    </Motion.section>
  )
}

export default Hero


