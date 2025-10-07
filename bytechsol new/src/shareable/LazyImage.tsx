import React, { useEffect, useRef, useState, memo } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  rootMargin?: string;
};

const LazyImageComponent: React.FC<Props> = ({
  src,
  alt,
  rootMargin = "200px",
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!imgRef.current) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <img
      ref={imgRef}
      src={inView ? src : undefined}
      data-src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};

export const LazyImage = memo(LazyImageComponent);
