'use client';

import { ArrowIcon } from './arrow-icon';
import { useEffect, useState } from 'react';
import { SiteImage, type ImageData } from './site-image';

export function Slideshow({ images }: { images: ImageData[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % images.length), 4000);
    return () => window.clearInterval(timer);
  }, [images.length]);
  const move = (direction: number) =>
    setActive((active + direction + images.length) % images.length);
  return (
    <section className="slideshow" aria-roledescription="carousel">
      {images.map((image, index) => (
        <div
          className={`slideshow-slide${active === index ? ' is-active' : ''}`}
          key={image.src}
          aria-hidden={active !== index}
        >
          <SiteImage image={image} eager />
        </div>
      ))}
      <button className="image-control previous" aria-label="Previous" onClick={() => move(-1)}>
        <ArrowIcon direction="previous" />
      </button>
      <button className="image-control next" aria-label="Next" onClick={() => move(1)}>
        <ArrowIcon direction="next" />
      </button>
      <div className="slideshow-dots">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={active === index ? 'is-active' : ''}
            aria-label={`${index + 1}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
