// import { frontendTechnologies, backendAndDevOpsTechnologies, toolsAndMiscellaneous } from "@/constants";
import { memo } from "react";
// import { AnimatedTooltip } from "./ui/animated-tooltip";

const Tech = () => {
  return (
    <section className='relative w-full min-h-fit mx-auto sm:px-16 px-6 mt-3'>
      <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">Front End</h2>
      {/* <AnimatedTooltip items={frontendTechnologies} /> */}
      <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">Backend End</h2>
      {/* <AnimatedTooltip items={backendAndDevOpsTechnologies} /> */}
      <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">Other Tools</h2>
      {/* <AnimatedTooltip items={toolsAndMiscellaneous} /> */}
    </section>
  );
};

export default memo(Tech);