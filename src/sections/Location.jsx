import { motion as Motion } from 'framer-motion'

function Location() {
  const mapLink = 'https://share.google/pFlUXTo84ydH4zQEV'
  const embedQuery = 'Kapu Convention Hall, Kothapeta, Amalapuram Road, Andhra Pradesh'

  return (
    <section id="location" className="bg-gradient-to-b from-[#fff5f8] to-[#fff2e8] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8f2946]">Venue</p>
          <h2 className="mt-3 font-playfair text-3xl text-[#6e1f35] sm:text-4xl">Join Us At</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Kapu Convention Hall, Kothapeta, Amalapuram Road
          </p>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#8f2946] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#6e1f35]"
          >
            Open in Google Maps
          </a>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 overflow-hidden rounded-3xl border border-[#f1d5c1] bg-white shadow-[0_12px_28px_rgba(111,54,76,0.14)]"
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

