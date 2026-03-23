import { motion as Motion } from 'framer-motion'
import GaneshLogo from './GaneshLogo'

const cinematicEase = [0.22, 1, 0.36, 1]

function IntroScreen() {
  return (
    <Motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
      transition={{ duration: 1.05, ease: cinematicEase }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[linear-gradient(135deg,#6b1d1d,#3b0f0f)] px-6"
    >
      <Motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.18),transparent_42%),radial-gradient(circle_at_82%_76%,rgba(212,175,55,0.12),transparent_40%)]"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.22, 0.38, 0.22], scale: [1, 1.04, 1] }}
        transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_34%,rgba(0,0,0,0.38)_100%)]" />

      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center text-center">
        <Motion.div
          aria-hidden="true"
          className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_68%)] blur-xl"
          animate={{ opacity: [0.42, 0.65, 0.42], scale: [0.96, 1.06, 0.96] }}
          transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
        <GaneshLogo />
      </div>
    </Motion.section>
  )
}

export default IntroScreen
