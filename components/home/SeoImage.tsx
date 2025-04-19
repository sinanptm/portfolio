import Image from "next/image"
import { memo } from "react";

const SeoImage = ()=> {
  return (
    <div className="sr-only" aria-hidden="true">
      <Image
        src="/assets/profile-image.jpg"
        alt="Muhammed sinan - Mern stack developer"
        width={1200}
        height={630}
        priority
        quality={100}
      />
    </div>
  )
}


export default memo(SeoImage)