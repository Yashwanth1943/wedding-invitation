import { motion as Motion } from 'framer-motion'
import EventCard from '../components/EventCard'
import {
  staggerContainer,
  staggerItem,
  VIEWPORT_ONCE,
} from '../components/animationVariants'

const events = [
  {
    title: 'Wedding',
    date: 'April 02, 2026',
    time: '9:18 AM',
    venue: 'Kapu Convention Hall, Kothapeta',
  },
]

function Events() {
  return (
    <section
      id="events"
      className="scroll-mt-24 bg-[#f9efdf] px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Motion.div
          variants={staggerItem}
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6b1d1d]">Celebrations</p>
          <h2 className="mt-3 font-playfair text-3xl text-[#3b0f0f] sm:text-4xl">Wedding Events</h2>
        </Motion.div>

        <Motion.div
          className="mt-10 flex w-full justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              title={event.title}
              date={event.date}
              time={event.time}
              venue={event.venue}
              index={index}
            />
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default Events


