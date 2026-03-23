import { motion as Motion } from 'framer-motion'
import { inViewReveal } from '../components/animationVariants'

function Footer() {
  return (
    <footer
      className="bg-[#3b0f0f] px-4 py-10 text-center text-[#f4d88c] sm:px-6"
    >
      <Motion.p
        initial={inViewReveal.initial}
        whileInView={inViewReveal.whileInView}
        transition={inViewReveal.transition}
        viewport={inViewReveal.viewport}
        className="font-playfair text-xl text-[#f4d88c]"
      >
        Thank you for being part of our special day.
      </Motion.p>
    </footer>
  )
}

export default Footer

