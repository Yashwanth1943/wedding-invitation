import { useEffect, useState } from 'react'

const initialTimer = { days: '00', hours: '00', minutes: '00', seconds: '00' }

const padValue = (value) => String(value).padStart(2, '0')

const calculateTimeLeft = (targetDate) => {
  const now = new Date()
  const difference = new Date(targetDate).getTime() - now.getTime()

  if (difference <= 0) {
    return initialTimer
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return {
    days: padValue(days),
    hours: padValue(hours),
    minutes: padValue(minutes),
    seconds: padValue(seconds),
  }
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="fade-in mt-8 grid w-full max-w-xs grid-cols-2 gap-3 sm:max-w-lg sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="glass-card rounded-2xl px-3 py-4 text-center"
        >
          <p className="font-playfair-sc text-2xl font-semibold text-amber-50 sm:text-3xl">{item.value}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100/90">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Countdown
