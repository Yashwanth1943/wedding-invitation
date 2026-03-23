import { motion as Motion } from 'framer-motion'

const revealEase = [0.22, 1, 0.36, 1]
const floatEase = [0.33, 1, 0.68, 1]

function GaneshLogo() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Motion.svg
        width="132"
        height="132"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-5 drop-shadow-[0_0_24px_rgba(212,175,55,0.42)] sm:h-[150px] sm:w-[150px]"
        initial={{ opacity: 0, scale: 0.8, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 1.0, ease: revealEase },
          scale: { duration: 1.0, ease: revealEase },
          y: { duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: floatEase },
        }}
      >
        <path
          d="M100 30
             C130 30, 150 60, 130 80
             C110 100, 110 120, 120 140
             C130 160, 100 170, 80 150
             C60 130, 70 100, 90 80
             C110 60, 90 40, 100 30"
          stroke="#d4af37"
          strokeWidth="4.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M100 90
             C90 110, 110 120, 100 140
             C90 160, 120 160, 110 140"
          stroke="#d4af37"
          strokeWidth="4.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text
          x="100"
          y="105"
          textAnchor="middle"
          fill="#d4af37"
          fontSize="22"
          fontFamily="Playfair Display, serif"
        >
          ॐ
        </text>
      </Motion.svg>

      <Motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.35, ease: revealEase }}
        className="font-cinzel text-2xl tracking-[0.08em] text-[#d4af37] sm:text-3xl"
        style={{ textShadow: '0 0 16px rgba(212, 175, 55, 0.45)' }}
      >
        Om Shree Ganeshaya Namaha
      </Motion.h1>
    </div>
  )
}

export default GaneshLogo
