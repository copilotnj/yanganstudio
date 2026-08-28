import { imageUrl } from '../lib/site';

type AssetImageProps = {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export function AssetImage({ name, alt, className, eager = false }: AssetImageProps) {
  return (
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
