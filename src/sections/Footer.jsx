import { motion as Motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="bg-[#3b0f0f] px-4 py-10 text-center text-[#f4d88c] sm:px-6">
      <Motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="font-playfair text-xl text-[#f4d88c]"
      >
        Thank you for being part of our special day.
      </Motion.p>
    </footer>
  )
}

export default Footer

