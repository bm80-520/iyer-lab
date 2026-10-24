import { withBasePath } from '@/lib/site';

export type ImageData = { src: string; alt: string; width?: number; height?: number };

export function SiteImage({
  image,
  className,
  eager = false,
}: {
  image: ImageData;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={withBasePath(image.src)}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
