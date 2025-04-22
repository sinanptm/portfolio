import Image from "next/image";
import { memo } from "react";

const SeoImage = () => {
  return (
    <div className="relative w-full h-48 md:h-64 mb-8 rounded-lg overflow-hidden">
      <Image
        src="/assets/profile-image.jpg"
        alt="Muhammed sinan - MERN stack developer"
        width={1200}
        height={630}
        priority
        quality={80}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

export default memo(SeoImage);