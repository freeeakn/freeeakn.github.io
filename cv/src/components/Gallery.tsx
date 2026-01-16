import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Лендинг RuComp',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/45/a8cb0fba607fbca5379afbc1c50fbbf56a98e07a-1687965703.webp'
  },
  {
    title: 'Лендинг RuComp',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/73/1609e7a47af0bb0c33113e7bc50e488f331ee59e-1687965705.webp'
  },
  {
    title: 'Социальная сеть',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/41/c67de7905c6ab5c5562a00f1f7df2561ce7cbcb9-1687965489.webp'
  },
  {
    title: 'Социальная сеть',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/74/cc85f4961dd868dcf9a9f8d03c51eb4b733718e1-1687965488.webp'
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden group">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full flex flex-col items-center justify-center relative">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover md:object-contain max-h-[800px]"
            />
            <div className="absolute bottom-10 bg-black/60 text-white px-4 py-2 rounded backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={(e) => { e.preventDefault(); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all opacity-100 md:opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={(e) => { e.preventDefault(); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all opacity-100 md:opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next Slide"
      >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
