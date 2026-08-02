import { useEffect, useState } from "react";

const INTERVAL_MS = 5000;

export function HeroCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width={1600}
          height={1008}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/55 to-background" />
    </div>
  );
}
