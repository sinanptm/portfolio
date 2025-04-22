// components/home/SeoImage.jsx
import Image from "next/image";
import { memo } from "react";

const SeoImage = () => {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        width: "1px",
        height: "1px",
        position: "absolute",
        left: "-9999px",
      }}
    >
      <Image
        src="/assets/profile-image.jpg"
        alt="Muhammed sinan - MERN stack developer"
        width={1200}
        height={630}
        priority
        quality={80}
      />
    </div>
  );
};

export default memo(SeoImage);