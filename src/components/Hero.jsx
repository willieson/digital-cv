export default function Hero() {
  return (
    <section className="bg-blue-800 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Michael Willieson
        </h1>
        <p className="text-lg md:text-xl font-light mb-6">IT - Web Developer</p>
        <p className="text-lg md:text-xl font-light">
          <a
            href="mailto:michaelwillieson@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition"
          >
            📧 michaelwillieson@gmail.com
          </a>
        </p>
        <p className="text-lg md:text-xl font-light">📍 Tangerang, Banten</p>
        <p className="text-lg md:text-xl font-light mb-4">🗓️ 06 Januari 1999</p>

        <div className="space-x-4">
          <a
            href="https://wa.me/6282213801666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
