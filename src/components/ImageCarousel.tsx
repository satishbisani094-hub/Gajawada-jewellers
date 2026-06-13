import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  className?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageCarousel({ images, className = '', showDots = true, autoPlay = false, autoPlayInterval = 4000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), autoPlayInterval);
    return () => clearInterval(t);
  }, [autoPlay, autoPlayInterval, images.length]);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i: number) => setIndex(i % images.length);

  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full rounded overflow-hidden bg-neutral-900 flex items-center justify-center">
        <img src={images[index]} alt={`slide-${index}`} className="w-full h-full object-cover" />
      </div>

      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            ‹
          </button>

          <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            ›
          </button>

          {showDots && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to slide ${i+1}`} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
