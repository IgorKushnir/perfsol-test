import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const RatioNextImage = ({ src, alt, width, height }: Props) => {
  const [size, setRatio] = useState({ width, height });
  return (
    <Image
      src={src}
      alt={alt}
      width={size.width}
      height={size.height}
      onLoadingComplete={({ naturalWidth, naturalHeight }) => {
        setRatio({ width: naturalWidth, height: naturalHeight });
      }}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
        paddingTop: 24,
        paddingBottom: 24,
      }}
    />
  );
};
