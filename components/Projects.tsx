import { memo } from "react";
import { HeroParallax } from "./ui/hero-parallax";

const projects = [
  {
  thumbnail: '/assets/projects/netflix.png',
  link: 'https://netflix-clone-gamma-virid.vercel.app',
    title: 'OLX & Netflix Clones'
  },
  {
    thumbnail: '/assets/projects/trends.png',
    link: 'https://trendsonline.online/',
    title: 'Trends: E-commerce Store'
  },
  {
    thumbnail: '/assets/projects/avm.png',
    link: 'http://avm-ayurvedic.online',
    title: 'AVM Ayurvedic: Hospital Management'
  },
  {
    thumbnail: '/assets/projects/url-shortener.png',
    link: 'https://url-shortener-sooty-five.vercel.app/',
    title: 'URL Shortener'
  },
  {
    thumbnail: '/assets/projects/program-manager.png',
    link: 'https://sahityotsav-manager.onrender.com/',
    title: 'Sahithyolsav Manager'
  },
  {
    thumbnail: '/assets/projects/quiz.png',
    link: 'https://quiz-app-six-dusky.vercel.app/',
    title: 'Ace-Quiz: Quiz App'
  },
  {
    thumbnail:"/assets/projects/portfolio.png",
    link:"https://sinanptm.vercel.app",
    title:"Portfolio"
  }
]

const Projects = () => {
  return (
    <section className="relative w-full min-h-fit mx-auto sm:px-16 px-6 flex items-center">
      <HeroParallax projects={projects} />
    </section>
  );
};

export default memo(Projects);