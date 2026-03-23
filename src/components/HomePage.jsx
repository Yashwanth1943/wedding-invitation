import { motion as Motion } from 'framer-motion'
import weddingMusic from '../assets/Music/wedding-music.mp3'
import Navbar from './Navbar'
import Events from '../sections/Events'
import Footer from '../sections/Footer'
import Gallery from '../sections/Gallery'
import Hero from '../sections/Hero'
import Location from '../sections/Location'

const CINEMATIC_EASE = [0.22, 1, 0.36, 1]

const pageTransition = {
  duration: 0.78,
  ease: CINEMATIC_EASE,
}

const FAB_BASE =
  'fixed z-[70] inline-flex min-h-12 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold shadow-[0_12px_26px_rgba(33,8,8,0.35)] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2'

function BackgroundAudio({ audioRef }) {
  return (
    <audio
      ref={audioRef}
      src={weddingMusic}
      loop
      autoPlay
      playsInline
      preload="auto"
    />
  )
}

function MusicToggle({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`${FAB_BASE} bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 border border-[#e6c46f]/75 bg-[#f7e9cb] text-[#4b1515] sm:left-6`}
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
    >
      {isPlaying ? 'Pause Music' : 'Play Music'}
    </button>
  )
}

function ScrollToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`${FAB_BASE} bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 min-w-12 border border-[#f1d996]/45 bg-[#5a1818] text-[#f8de94] sm:right-6`}
      aria-label="Scroll to top"
    >
      Top
    </button>
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
      className="min-h-[100dvh] bg-[#fdf6ea] text-zinc-800"
      style={{ willChange: 'opacity', pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <BackgroundAudio audioRef={audioRef} />

      <Navbar />

      <main className="overflow-x-hidden">
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
