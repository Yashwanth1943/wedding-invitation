import { motion as Motion } from 'framer-motion'

const iconClassName = 'mt-0.5 h-4 w-4 flex-none text-[#d4af37]'

const Icon = ({ type }) => {
  if (type === 'date') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    )
  }

  if (type === 'time') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

const Row = ({ type, label, value }) => (
  <p className="flex items-start gap-2">
    <Icon type={type} />
      <span>
      <span className="font-semibold text-[#6b1d1d]">{label}:</span> {value}
    </span>
  </p>
)

function EventCard({ title, date, time, venue, index }) {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-3xl border border-[#e5cc9a] bg-[#fff8ea] p-5 shadow-[0_12px_28px_rgba(59,15,15,0.12)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_18px_35px_rgba(59,15,15,0.18)] sm:p-6"
    >
      <h3 className="font-playfair text-2xl text-[#6b1d1d]">{title}</h3>
      <div className="mt-4 space-y-2 text-sm text-zinc-700 sm:text-base">
        <Row type="date" label="Date" value={date} />
        <Row type="time" label="Time" value={time} />
        <Row type="venue" label="Venue" value={venue} />
      </div>
    </Motion.article>
  )
}

export default EventCard

