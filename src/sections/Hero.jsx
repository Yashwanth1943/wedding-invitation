import Countdown from '../components/Countdown'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#52192d] via-[#7a2341] to-[#3f1525] px-4 pb-16 pt-28 text-white sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,219,170,0.25),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,182,193,0.2),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="fade-in glass-card rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-100">
          Save The Date
        </p>

        <h1 className="fade-in mt-5 font-playfair-sc text-4xl leading-tight text-[#fff5e9] sm:text-5xl md:text-6xl">
          Madhavi Latha <br /> <span className="px-1 text-amber-200">&amp;</span> <br /> Ram Kiran
        </h1>

        <p className="fade-in mt-4 max-w-xl text-sm font-playfair uppercase tracking-wide text-amber-100/95 sm:text-base md:text-lg">
          Thursday, April 02, 2026 | 09:18 AM onwards
        </p>

        <p className="fade-in mt-3 max-w-md text-sm text-rose-100/95 sm:text-base">
          Two hearts, one forever. Your presence will make our celebration complete.
        </p>

        <Countdown targetDate="2026-04-02T09:18:00+05:30" />
      </div>
    </section>
  )
}

export default Hero
