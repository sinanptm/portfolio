import Image from "next/image";
import CardSpotlight from "./ui/card-spotlight";
import { technologies } from "@/constants";
import { memo, useMemo } from "react";


const Stack = () => {
  const MemoizedTechnologies = useMemo(() => {
    return technologies.map((tech, i) => (
      <CardSpotlight key={i} className="p-4 flex flex-col items-center justify-center">
        <div className="mb-2 sm:mb-3">
          <Image
            alt={tech.name}
            src={tech.url}
            width={48}
            height={48}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>
        <h3 className="text-sm sm:text-base md:text-lg font-medium text-center">{tech.name}</h3>
      </CardSpotlight>
    ));
  }, []);

  return (
    <section id="stack" className="relative w-full min-h-fit mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">My Tech Stack</h2>
        <p className="text-lg sm:text-xl text-center text-gray-300 mb-8 sm:mb-12">
          These are the primary technologies I work with to build robust and scalable applications.
        </p>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8  gap-4 sm:gap-6 lg:gap-8">
          {MemoizedTechnologies}
        </div>
      </div>
    </section>
  );
};

export default memo(Stack);