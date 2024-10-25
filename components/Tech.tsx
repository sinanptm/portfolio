import { technologies } from "@/constants";
import Image from "next/image";
import { memo } from "react";

const Tech = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto sm:px-16 px-6 mt-3'>
      <div className="flex flex-row">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={index}>
            <Image
              alt={tech.name}
              src={tech.url}
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Tech);