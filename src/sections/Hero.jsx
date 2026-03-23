import { motion as Motion } from 'framer-motion'
import {
  heroTextContainer,
  heroTextItem,
} from '../components/animationVariants'
import Countdown from '../components/Countdown'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh)] scroll-mt-24 items-center justify-center overflow-hidden px-4 py-10 text-white sm:px-6"
      style={{
        backgroundImage: [
          'radial-gradient(circle at 50% 44%, rgba(136, 20, 23, 0.3) 0%, rgba(136, 20, 23, 0) 54%)',
          'linear-gradient(165deg, #220205 0%, #3d0609 28%, #5f0a0f 52%, #49060a 74%, #2a0306 100%)',
        ].join(','),
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundAttachment: 'scroll, scroll',
      }}
    >
      <Motion.div
        className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center"
        variants={heroTextContainer}
        initial="hidden"
        animate="visible"
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
    </section>
  )
}

export default Hero


