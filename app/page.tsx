import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Portfolio() {
  return (
    <div className="h-[300vh] remove-scrollbar overflow-hidden">
      <Scene />
    </div>
  );
}