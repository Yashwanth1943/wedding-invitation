import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HomePage from './components/HomePage'
import IntroScreen from './components/IntroScreen'

const INTRO_DURATION_MS = 3000
const SCROLL_TOP_SHOW_THRESHOLD_DESKTOP = 240
const SCROLL_TOP_SHOW_THRESHOLD_MOBILE = 360
const SCROLL_TOP_HIDE_GAP = 120
const MUSIC_VOLUME = 0.3

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
  const frameRef = useRef(0)
  const lastVisibleRef = useRef(false)
  const showThresholdRef = useRef(SCROLL_TOP_SHOW_THRESHOLD_DESKTOP)

  useEffect(() => {
    const getFallbackThreshold = () => {
      const isMobile = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
      return isMobile ? SCROLL_TOP_SHOW_THRESHOLD_MOBILE : SCROLL_TOP_SHOW_THRESHOLD_DESKTOP
    }

    const getHeroEndThreshold = () => {
      const heroSection = document.getElementById('home')
      if (!heroSection) return getFallbackThreshold()

      const rect = heroSection.getBoundingClientRect()
      const heroTop = window.scrollY + rect.top
      const heroBottom = heroTop + rect.height
      return Math.max(getFallbackThreshold(), heroBottom - 32)
    }

    const syncThreshold = () => {
      showThresholdRef.current = getHeroEndThreshold()
    }

    const evaluateVisibility = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const showThreshold = showThresholdRef.current
      const hideThreshold = Math.max(0, showThreshold - SCROLL_TOP_HIDE_GAP)

      const nextVisible = lastVisibleRef.current
        ? scrollY > hideThreshold
        : scrollY > showThreshold

      if (lastVisibleRef.current !== nextVisible) {
        lastVisibleRef.current = nextVisible
        setShowTopButton(nextVisible)
      }
    }

    const onScroll = () => {
      if (frameRef.current) return
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = 0
        evaluateVisibility()
      })
    }

    const onResize = () => {
      syncThreshold()
      evaluateVisibility()
    }

    syncThreshold()
    evaluateVisibility()
    window.setTimeout(onResize, 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
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

    const handlePlay = () => setIsPlayingMusic(true)
    const handlePause = () => setIsPlayingMusic(false)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    setIsPlayingMusic(!audio.paused)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
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

  useEffect(() => {
    // Lock both root and body only during intro; clear styles afterwards.
    if (showIntro) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      return () => {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
    }

    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [showIntro])

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
