import Image from "next/image"
import CardSpotlight from "./ui/card-spotlight"

const technologies = [
  { name: "ReactJS", src: "/assets/tech/react.svg" },
  { name: "NodeJS", src: "/assets/tech/nodejs.svg" },
  { name: "ExpressJS", src: "/assets/tech/express.svg" },
  { name: "MongoDB", src: "/assets/tech/mongodb.svg" },
  { name: "NextJS", src: "/assets/tech/nextjs.svg" },
  { name: "NestJS", src: "/assets/tech/nestjs.svg" },
]

const Stack = () => {
  return (
    <section id="stack" className="relative w-full min-h-screen mx-auto sm:px-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">My Tech Stack</h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          These are the primary technologies I work with to build robust and scalable applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <CardSpotlight key={tech.name} className="h-64 flex flex-col items-center justify-center">
              <div className="text-white mb-4">
                <Image
                  alt={tech.name}
                  src={tech.src}
                  className="w-12 h-12"
                  width={12}
                  height={12}
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">{tech.name}</h3>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack