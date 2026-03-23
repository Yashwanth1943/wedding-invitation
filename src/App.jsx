import { useEffect, useRef, useState } from 'react'
import weddingMusic from './assets/Music/wedding-music.mp3'
import Navbar from './components/Navbar'
import Events from './sections/Events'
import Footer from './sections/Footer'
import Gallery from './sections/Gallery'
import Hero from './sections/Hero'
import Location from './sections/Location'

function App() {
  const [showTopButton, setShowTopButton] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 320)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    audio.volume = 0.3

    const tryAutoplay = async () => {
      try {
        await audio.play()
        setIsPlayingMusic(true)
      } catch {
        setIsPlayingMusic(false)
      }
    }

    const startOnInteraction = () => {
      if (!audioRef.current || !audioRef.current.paused) {
        return
      }

      audioRef.current.play()
        .then(() => setIsPlayingMusic(true))
        .catch(() => {})
    }

    void tryAutoplay()
    window.addEventListener('pointerdown', startOnInteraction)
    window.addEventListener('keydown', startOnInteraction)
    window.addEventListener('touchstart', startOnInteraction)
    window.addEventListener('scroll', startOnInteraction)

    return () => {
      window.removeEventListener('pointerdown', startOnInteraction)
      window.removeEventListener('keydown', startOnInteraction)
      window.removeEventListener('touchstart', startOnInteraction)
      window.removeEventListener('scroll', startOnInteraction)
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) {
      return
    }

    if (isPlayingMusic) {
      audioRef.current.pause()
      setIsPlayingMusic(false)
      return
    }

    try {
      await audioRef.current.play()
      setIsPlayingMusic(true)
    } catch (error) {
      setIsPlayingMusic(false)
      console.error('Unable to play music. User interaction may be required.', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#fffaf6] text-zinc-800">
      <audio
        ref={audioRef}
        src={weddingMusic}
        loop
        autoPlay
        playsInline
        preload="auto"
      />

      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <Events />
        <Gallery />
        <Location />
      </main>

      <Footer />

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-5 left-4 z-40 min-h-11 rounded-full border border-[#e7d2b8] bg-[#fff5e8]/95 px-4 py-3 text-sm font-semibold text-[#7d2a42] shadow-[0_10px_25px_rgba(111,54,76,0.2)] transition hover:bg-[#ffeed9] focus:outline-none focus:ring-2 focus:ring-[#8f2946] focus:ring-offset-2 sm:bottom-6 sm:left-6"
        aria-label={isPlayingMusic ? 'Pause background music' : 'Play background music'}
      >
        {isPlayingMusic ? 'Pause Music' : 'Play Music'}
      </button>

      {showTopButton && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-4 z-40 min-h-11 rounded-full bg-[#8f2946] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(111,54,76,0.25)] transition hover:bg-[#6e1f35] focus:outline-none focus:ring-2 focus:ring-[#8f2946] focus:ring-offset-2 sm:bottom-6 sm:right-6"
          aria-label="Scroll to top"
        >
          Top
        </button>
      )}
    </div>
  )
}

export default App
