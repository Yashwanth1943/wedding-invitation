import { motion as Motion } from 'framer-motion'
import GaneshLogo from './GaneshLogo'

const CINEMATIC_EASE = [0.22, 1, 0.36, 1]

const screenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.82, ease: CINEMATIC_EASE } },
  exit: { opacity: 0, transition: { duration: 0.78, ease: CINEMATIC_EASE } },
}

function AmbientLight() {
  return (
    <Motion.div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at center, rgba(212,175,55,0.18), transparent 60%)
        `,
        willChange: 'opacity',
      }}
      animate={{ opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function Vignette() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background: 'radial-gradient(circle, transparent 34%, rgba(0,0,0,0.38) 100%)',
      }}
    />
  )
}

function LogoGlow() {
  return (
    <Motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-6 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(212,175,55,0.24), transparent 70%)',
        willChange: 'opacity',
      }}
      animate={{ opacity: [0.42, 0.62, 0.42] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function IntroScreen() {
  return (
    <Motion.section
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] flex min-h-[100dvh] items-center justify-center px-6"
      style={{
        background: [
          'radial-gradient(circle at 50% 34%, rgba(197,129,46,0.16) 0%, rgba(197,129,46,0) 58%)',
          'radial-gradient(circle at 14% 14%, rgba(130,28,28,0.28) 0%, rgba(130,28,28,0) 55%)',
          'linear-gradient(150deg, #2a0b0b 0%, #3c1010 22%, #5a1818 45%, #6b1d1d 60%, #4a1414 80%, #2f0c0c 100%)',
        ].join(','),
        willChange: 'opacity',
      }}
    >
      <AmbientLight />
      <Vignette />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise-texture" />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center text-center">
        <LogoGlow />
        <GaneshLogo />
      </div>
    </Motion.section>
  )
}
