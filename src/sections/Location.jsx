import { motion as Motion } from 'framer-motion'
import {
  staggerItem,
  subtleButtonMotion,
  VIEWPORT_ONCE,
} from '../components/animationVariants'

function Location() {
  const mapLink = 'https://share.google/pFlUXTo84ydH4zQEV'
  const embedQuery = 'Kapu Convention Hall, Kothapeta, Amalapuram Road, Andhra Pradesh'

  return (
    <section
      id="location"
      className="scroll-mt-24 bg-gradient-to-b from-[#f7ebd8] to-[#f3e0c3] px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Motion.div
          variants={staggerItem}
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b1d1d]">Venue</p>
          <h2 className="mt-3 font-playfair text-3xl text-[#3b0f0f] sm:text-4xl">Join Us At</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Kapu Convention Hall, Kothapeta, Amalapuram Road
          </p>
          <Motion.a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#6b1d1d] px-5 text-sm font-semibold text-[#f6d78f]"
            whileTap={subtleButtonMotion.whileTap}
            transition={subtleButtonMotion.transition}
          >
            Open in Google Maps
          </Motion.a>
        </Motion.div>

        <Motion.div
          variants={staggerItem}
          custom={1}
          className="mt-8 overflow-hidden rounded-3xl border border-[#e1c691] bg-[#fff8ea] shadow-[0_8px_18px_rgba(59,15,15,0.1)]"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <div className="h-72 w-full sm:h-80 md:h-[26rem]">
            <iframe
              title="Wedding venue map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(embedQuery)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Location


