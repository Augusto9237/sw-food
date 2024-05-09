import Image, { ImageProps } from "next/image";

export default function PromoBanner(props: ImageProps) {
  return (
    <Image
      height={0}
      width={0}
      sizes="100vw"
      quality={100}
      className="h-auto w-full object-contain"
      {...props}
    />
  );
}
