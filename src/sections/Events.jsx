import EventCard from '../components/EventCard'

const events = [
  {
    title: 'Wedding',
    date: 'April 02, 2026',
    time: '09:18 AM',
    venue: 'Kapu Convention Hall, Kothapeta',
  },
]

function Events() {
  return (
    <section id="events" className="bg-[#fff6f1] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="fade-in text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8f2946]">Celebrations</p>
          <h2 className="mt-3 font-playfair-sc text-3xl text-[#6e1f35] sm:text-4xl">Wedding Events</h2>
        </div>

        <div className="mt-10 w-full flex justify-center">
          {events.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              date={event.date}
              time={event.time}
              venue={event.venue}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
