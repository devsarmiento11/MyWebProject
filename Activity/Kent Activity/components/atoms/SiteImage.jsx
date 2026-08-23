export default function SiteImage({ src, alt, priority = false, sizes }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const withBasePath = (path) =>
    path.startsWith('/') ? `${basePath}${path}` : path;

  const variant = (width) =>
    src.endsWith('.webp') ? src.replace('.webp', `-${width}.webp`) : src;

  const originalSrc = withBasePath(src);

  return (
    <img
      className="site-image"
      src={originalSrc}
      srcSet={`${withBasePath(variant(640))} 640w, ${withBasePath(variant(960))} 960w, ${withBasePath(variant(1280))} 1280w, ${originalSrc} 1600w`}
      sizes={sizes || '(min-width: 880px) 33vw, (min-width: 640px) 50vw, 100vw'}
      alt={alt}
      width="1600"
      height="1000"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
