import { motion as Motion } from 'framer-motion'
import weddingMusic from '../assets/Music/wedding-music.mp3'
import { LUXURY_EASE, subtleButtonMotion } from './animationVariants'
import Navbar from './Navbar'
import Events from '../sections/Events'
import Footer from '../sections/Footer'
import Gallery from '../sections/Gallery'
import Hero from '../sections/Hero'
import Location from '../sections/Location'

const pageTransition = {
  duration: 0.82,
  ease: LUXURY_EASE,
}

const FAB_BASE =
  'fixed z-[70] inline-flex min-h-12 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold shadow-[0_8px_18px_rgba(33,8,8,0.24)] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2'

function BackgroundAudio({ audioRef }) {
  return (
    <audio
      ref={audioRef}
      src={weddingMusic}
      loop
      playsInline
      preload="auto"
    />
  )
}

function MusicToggle({ isPlaying, onToggle }) {
  return (
    <Motion.button
      type="button"
      onClick={onToggle}
      className={`${FAB_BASE} bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 border border-[#e6c46f]/75 bg-[#f7e9cb] text-[#4b1515] sm:left-6`}
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      whileTap={subtleButtonMotion.whileTap}
      transition={subtleButtonMotion.transition}
      // style={{ willChange: 'transform, opacity' }}
      style={{
        transform:'translateZ(0)',
        willChange:'transform'
      }}
    >
      {isPlaying ? 'Pause Music' : 'Play Music'}
    </Motion.button>
  )
}

function ScrollToTopButton() {
  const handleScrollTop = () => {
    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    if (isCoarsePointer) {
      forceTop()
      window.setTimeout(forceTop, 120)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <Motion.button
      type="button"
      onClick={handleScrollTop}
      className={`${FAB_BASE} bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 min-w-12 border border-[#f1d996]/45 bg-[#5a1818] text-[#f8de94] sm:right-6`}
      aria-label="Scroll to top"
      whileTap={subtleButtonMotion.whileTap}
      transition={subtleButtonMotion.transition}
      // style={{ willChange: 'transform, opacity' }}
      style={{
        transform: 'translateZ(0)',
        willChange:'transform'
      }}
    >
      Top
    </Motion.button>
  )
}

export default function HomePage({
  audioRef,
  isPlayingMusic,
  onToggleMusic,
  showTopButton,
  isVisible,
}) {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={pageTransition}
      className="w-full min-h-[100dvh] bg-[#fdf6ea] text-zinc-800"
      style={{ willChange: 'opacity', pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <BackgroundAudio audioRef={audioRef} />

      <Navbar />

      <main>
        <Hero />
        <Events />
        <Gallery />
        <Location />
      </main>

      <Footer />

      <MusicToggle isPlaying={isPlayingMusic} onToggle={onToggleMusic} />

      {showTopButton && <ScrollToTopButton />}
    </Motion.div>
  )
}
