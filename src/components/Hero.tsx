interface HeroProps {
  onBookingClick: () => void;
  onReferencesClick?: () => void;
}

export default function Hero({ onBookingClick, onReferencesClick }: HeroProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}herosecst.jpg`}
          alt="Beauty by Mel Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg font-serif">
              Beauty by Mel
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-2 drop-shadow-lg font-serif">Melissa Krebs</p>
            <p className="text-lg md:text-xl text-white tracking-wider drop-shadow-lg">
              Lashes &bull; Brows &bull; Skin &bull; Academy
            </p>
            <p className="text-sm md:text-base text-white opacity-90 mt-4 tracking-widest drop-shadow-lg">
              EST. 2022
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBookingClick}
              className="bg-beige hover:bg-beige-dark text-salon-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg"
              aria-label="Jetzt einen Termin buchen"
              data-testid="button-book-now"
            >
              Jetzt buchen
            </button>
            {onReferencesClick && (
              <button
                onClick={onReferencesClick}
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg"
                aria-label="Referenzen und Arbeiten ansehen"
                data-testid="button-references"
              >
                Referenzen ansehen
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
