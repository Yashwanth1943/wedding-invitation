import { motion as Motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// ─── Variants ─────────────────────────

const drawOuter = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut' },
  },
}

const drawInner = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.1, delay: 0.2, ease: 'easeInOut' },
  },
}

const omAnim = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.35, ease: EASE },
  },
}

// ─── Component ─────────────────────────

export default function GaneshLogo() {
  return (
    <div className="flex flex-col items-center justify-center text-center">

      {/* Logo Container */}
      <Motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ willChange: 'opacity, transform' }}
        className="relative flex items-center justify-center"
      >

        {/* ✨ Smooth Glow (Fixes top/bottom line issue) */}
        <Motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
    background: `
      radial-gradient(circle at center, rgba(212,175,55,0.25), transparent 60%)
    `,
  }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* 🕉️ SVG */}
        <Motion.svg
          width="140"
          height="160"
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4 sm:h-[170px] sm:w-[150px]"
          style={{ willChange: 'transform' }}
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >

          {/* 🔥 Gold Gradient */}
          <defs>
            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f6d365" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b8962e" />
            </linearGradient>
          </defs>

          {/* Outer Shape */}
          <Motion.path
            d="M100 35
               C130 35, 150 65, 130 95
               C110 120, 120 150, 135 175
               C150 195, 110 205, 85 175
               C60 145, 70 110, 95 85
               C120 60, 90 45, 100 35"
            stroke="url(#gold)"
            strokeWidth="4.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawOuter}
            initial="hidden"
            animate="visible"
          />

          {/* Inner Trunk */}
          <Motion.path
            d="M110 95
               C90 125, 120 140, 100 165
               C82 185, 128 185, 110 155"
            stroke="url(#gold)"
            strokeWidth="4.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawInner}
            initial="hidden"
            animate="visible"
          />

          {/* 🕉️ OM Symbol (Correct Forehead Position) */}
          <Motion.text
            x="118"
            y="80"
            textAnchor="middle"
            fill="#f6d365"
            fontSize="22"
            fontFamily="Noto Sans Devanagari, serif"
            variants={omAnim}
            initial="hidden"
            animate="visible"
            style={{
              textShadow: '0 0 8px rgba(212,175,55,0.7)',
            }}
          >
            ॐ
          </Motion.text>

        </Motion.svg>
      </Motion.div>

      {/* Heading */}
      <Motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className="font-cinzel text-2xl tracking-[0.08em] text-[#d4af37] sm:text-3xl"
        style={{
          textShadow: '0 0 16px rgba(212,175,55,0.45)',
          willChange: 'opacity, transform',
        }}
      >
        Om Shree Ganeshaya Namaha
      </Motion.h1>

    </div>
  )
}