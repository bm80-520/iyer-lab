'use client';

import { ArrowIcon } from './arrow-icon';
import { useRef, useState } from 'react';
import { withBasePath } from '@/lib/site';
import { SiteImage, type ImageData } from './site-image';

type GalleryImage = ImageData & { full?: string };

// One gallery handles the repeated image strips and their lightbox. Scrolling
// and sizing remain native browser/CSS behavior; no theme initialization needed.
export function Gallery({
  images,
  hideOnMobile = false,
}: {
  images: GalleryImage[];
  hideOnMobile?: boolean;
}) {
  const strip = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const move = (direction: number) =>
    strip.current?.scrollBy({
      left: direction * strip.current.clientWidth * 0.15,
      behavior: 'smooth',
    });
  return (
    <div className={`gallery${hideOnMobile ? ' gallery-desktop' : ''}`}>
      <div className="gallery-strip" ref={strip}>
        {images.map((image, index) => (
          <a
            className="gallery-item"
            key={`${image.src}-${index}`}
            href={withBasePath(image.full || image.src)}
            onClick={(event) => {
              event.preventDefault();
              setActive(index);
              dialog.current?.showModal();
            }}
          >
            <SiteImage image={image} eager />
          </a>
        ))}
      </div>
      <button className="image-control previous" aria-label="Previous" onClick={() => move(-1)}>
        <ArrowIcon direction="previous" />
      </button>
      <button className="image-control next" aria-label="Next" onClick={() => move(1)}>
        <ArrowIcon direction="next" />
      </button>
      <dialog
        className="lightbox"
        ref={dialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') setActive((active + 1) % images.length);
          if (event.key === 'ArrowLeft') setActive((active + images.length - 1) % images.length);
        }}
      >
        <button
          className="lightbox-close"
          aria-label="Close"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <img
          src={withBasePath(images[active].full || images[active].src)}
          alt={images[active].alt}
        />
        <button
          className="image-control previous"
          aria-label="Previous"
          onClick={() => setActive((active + images.length - 1) % images.length)}
        >
          <ArrowIcon direction="previous" />
        </button>
        <button
          className="image-control next"
          aria-label="Next"
          onClick={() => setActive((active + 1) % images.length)}
        >
          <ArrowIcon direction="next" />
        </button>
      </dialog>
    </div>
  );
}
