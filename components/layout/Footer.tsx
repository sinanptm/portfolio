import Link from "next/link"
import { socialMediaLinks, profile, navLinks } from "@/constants"
import Image from "next/image"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t animate-fade-in">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="md:flex md:justify-between md:items-start">
          <div className="space-y-4 md:space-y-6 animate-slide-up">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80 transition-opacity duration-300"
            >
              {profile.name}
            </Link>
            <p className="text-muted-foreground text-base max-w-md">
              Self-taught MERN stack developer passionate about building scalable, efficient applications.
            </p>
            <div className="flex space-x-4">
              {socialMediaLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-110"
                  aria-label={`Visit ${link.title}`}
                >
                  <span className="sr-only">{link.title}</span>
                  <Image
                    src={link.icon || "/placeholder.svg"}
                    alt={`${link.title} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
          <nav className="mt-8 md:mt-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.href} className="animate-slide-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="animate-slide-up" style={{ animationDelay: `${0.3 + navLinks.length * 0.1}s` }}>
                <Link
                  href={"/resume"}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

