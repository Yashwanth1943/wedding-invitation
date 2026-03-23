import { motion as Motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="bg-[#3f1525] px-4 py-10 text-center text-amber-100 sm:px-6">
      <Motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45 }}
        className="font-playfair text-xl text-[#ffe7bf]"
      >
        Thank you for being part of our special day.
      </Motion.p>
    </footer>
  )
}

export default Footer

