import { motion as Motion } from 'framer-motion'
import { sectionReveal, VIEWPORT_ONCE } from '../components/animationVariants'

function Footer() {
  return (
    <Motion.footer
      className="bg-[#3b0f0f] px-4 py-10 text-center text-[#f4d88c] sm:px-6"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      <Motion.p
        className="font-playfair text-xl text-[#f4d88c]"
      >
        Thank you for being part of our special day.
      </Motion.p>
    </Motion.footer>
  )
}

export default Footer

