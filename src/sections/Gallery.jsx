import img1 from '../assets/Images/img1.jpeg'
import img2 from '../assets/Images/img2.jpeg'
import img3 from '../assets/Images/img3.jpeg'
import img4 from '../assets/Images/img4.jpeg'

const galleryImages = [img1, img2, img3, img4]

function Gallery() {
  return (
    <section id="gallery" className="bg-[#fffdf8] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="fade-in text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8f2946]">Memories</p>
          <h2 className="mt-3 font-playfair-sc text-3xl text-[#6e1f35] sm:text-4xl">Our Story In Frames</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="fade-in group overflow-hidden rounded-2xl border border-[#f0d9c6] bg-[#fff8ef] shadow-[0_8px_22px_rgba(111,54,76,0.12)]"
            >
              <img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                loading="lazy"
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-48"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
