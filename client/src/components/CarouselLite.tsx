
import React, { useEffect, useState } from "react";

type Props = {
  images: string[];
  interval?: number;
  height?: string;
  radius?: string;
};

export default function CarouselLite({ images = [], interval = 5000, height = "420px", radius = "14px" }: Props) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => setI((p) => (p + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);
  if (!images.length) return null;
  return (
    <div className="relative overflow-hidden" style={{ height, borderRadius: radius }} aria-label="Vehicle photos">
      {images.map((src, idx) => (
        <img key={src} src={src} alt={"Used cars Uganda — vehicle"} loading="lazy"
          className={"absolute inset-0 w-full h-full object-cover transition-opacity duration-700 " + (i===idx? "opacity-100":"opacity-0")} />
      ))}
    </div>
  );
}
