import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HomePage from './components/HomePage'
import IntroScreen from './components/IntroScreen'

const INTRO_DURATION_MS = 3000
const SCROLL_TOP_THRESHOLD = 180
const MUSIC_VOLUME = 0.3
const AUTOPLAY_UNLOCK_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'scroll']

function useIntroTimer() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), INTRO_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  return showIntro
}

function useScrollTopButton() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > SCROLL_TOP_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return showTopButton
}

function useBackgroundAudio() {
  const audioRef = useRef(null)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = MUSIC_VOLUME

    const tryAutoplay = async () => {
      try {
        await audio.play()
        setIsPlayingMusic(true)
      } catch {
        setIsPlayingMusic(false)
      }
    }

    const startOnInteraction = () => {
      if (!audioRef.current?.paused) return
      audioRef.current.play()
        .then(() => setIsPlayingMusic(true))
        .catch(() => {})
    }

    void tryAutoplay()

    AUTOPLAY_UNLOCK_EVENTS.forEach((event) => {
      window.addEventListener(event, startOnInteraction, { passive: true })
    })

    return () => {
      AUTOPLAY_UNLOCK_EVENTS.forEach((event) => {
        window.removeEventListener(event, startOnInteraction)
      })
    }
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlayingMusic) {
      audio.pause()
      setIsPlayingMusic(false)
      return
    }

    try {
      await audio.play()
      setIsPlayingMusic(true)
    } catch (error) {
      setIsPlayingMusic(false)
      console.error('Unable to play music. User interaction may be required.', error)
    }
  }

  return { audioRef, isPlayingMusic, toggleMusic }
}

export default function App() {
  const showIntro = useIntroTimer()
  const showTopButton = useScrollTopButton()
  const { audioRef, isPlayingMusic, toggleMusic } = useBackgroundAudio()

  return (
    <>
      <HomePage
        audioRef={audioRef}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={toggleMusic}
        showTopButton={showTopButton}
        isVisible={!showIntro}
      />

      <AnimatePresence mode="sync">
        {showIntro && <IntroScreen key="intro-screen" />}
      </AnimatePresence>
    </>
  )
}
