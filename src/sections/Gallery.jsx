import { motion as Motion } from 'framer-motion'
import {
  galleryCard,
  LUXURY_EASE,
  staggerContainer,
  staggerItem,
  VIEWPORT_ONCE,
} from '../components/animationVariants'
import img1 from '../assets/Images/img1.jpeg'
import img2 from '../assets/Images/img2.jpeg'
import img3 from '../assets/Images/img3.jpeg'
import img4 from '../assets/Images/img4.jpeg'

const galleryImages = [img1, img2, img3, img4]

function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-[#fdf6ea] px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Motion.div
          variants={staggerItem}
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b1d1d]">Memories</p>
          <h2 className="mt-3 font-playfair text-3xl text-[#3b0f0f] sm:text-4xl">Our Story In Frames</h2>
        </Motion.div>

        <Motion.div
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {galleryImages.map((image, index) => (
            <Motion.div
              key={`${index}-${image}`}
              variants={galleryCard}
              custom={index}
              whileTap={{ scale: 0.95, transition: { duration: 0.6, ease: LUXURY_EASE } }}
              className="overflow-hidden rounded-2xl border border-[#e4ca99] bg-[#fff7e6] shadow-[0_6px_16px_rgba(59,15,15,0.09)]"
            >
              <img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-36 w-full object-cover sm:h-48"
              />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default Gallery



