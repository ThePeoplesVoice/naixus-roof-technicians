import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  pictureClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
};

function webpSrc(src: string) {
  return src.replace(/\.jpe?g$/i, ".webp");
}

export function Photo({
  src,
  alt,
  className,
  pictureClassName,
  priority = false,
  width,
  height,
  sizes,
}: PhotoProps) {
  const webp = webpSrc(src);
  const hasWebp = webp !== src;

  return (
    <picture className={pictureClassName}>
      {hasWebp ? <source type="image/webp" srcSet={webp} sizes={sizes} /> : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn(className)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
      />
    </picture>
  );
}
