import TypewriterEffect from "@/components/ui/typewriter-effect"
import { TYPEWRITER_WORDS } from "@/constants"
import About from "@/components/home/About"
import Name from "@/components/home/Name"
import SeoImage from "@/components/home/SeoImage"
import { memo } from "react"

const HomePage = () => {
  return (
    <main className="flex flex-col pt-12">
      <SeoImage />

      <section className="w-full mx-auto sm:px-16 px-6 pb-10">
        <div className="pb-7 mx-auto flex flex-row items-start gap-5">
          <div>
            <header>
              <Name />
            </header>
            <article>
              <TypewriterEffect words={TYPEWRITER_WORDS} />
            </article>
          </div>
        </div>
      </section>

      <About />
    </main>
  )
}

export default memo(HomePage)
