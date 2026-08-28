import { imageUrl } from '../lib/site';

type AssetImageProps = {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export function AssetImage({ name, alt, className, eager = false }: AssetImageProps) {
  return (
    // Images resolve to R2 through the Worker, or to copied static files on GitHub Pages.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={imageUrl(name)}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
