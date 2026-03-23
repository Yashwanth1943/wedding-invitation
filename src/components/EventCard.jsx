function EventCard({ title, date, time, venue }) {
  return (
    <article className="fade-in rounded-3xl border border-[#ecd8bd] bg-[#fffaf3] p-5 shadow-[0_12px_28px_rgba(111,54,76,0.12)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_18px_35px_rgba(111,54,76,0.18)] sm:p-6">
      <h3 className="font-playfair-sc text-2xl text-[#6e1f35]">{title}</h3>
      <div className="mt-4 space-y-2 text-sm text-zinc-700 sm:text-base">
        <p>
          <span className="font-semibold text-[#8f2946]">Date:</span> {date}
        </p>
        <p>
          <span className="font-semibold text-[#8f2946]">Time:</span> {time}
        </p>
        <p>
          <span className="font-semibold text-[#8f2946]">Venue:</span> {venue}
        </p>
      </div>
    </article>
  )
}

export default EventCard
