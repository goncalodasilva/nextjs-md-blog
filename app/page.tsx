"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Linkedin, FileText } from "lucide-react"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Blog",
    description: "My articles.",
    imageUrl: "/BlogImg.jpeg",
    url: `/blog`
  },
  {
    id: 2,
    title: "Plot Twist",
    description: "Murder mystery game.",
    imageUrl: "/PlotTwist.png",
    url: "https://www.plottwist-ai.com/"
  },
  {
    id: 3,
    title: "Chat App",
    description: "Clone of a chat app like WhatsApp. I did this project to learn React and make a full-stack application from scratch.",
    imageUrl: "/chatapp.png",
    url: "https://whatsapp-clone-v2-omega.vercel.app/login"
  }
]

const copies = {
  welcome: "Welcome to my personal website. I'm passionate about creating beautiful and functional web experiences.",
  invitation: "Feel free to reach out if you'd like to collaborate on a project or just want to connect.",
  name: "Gonçalo Silva"
}
export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null)

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      {/* First Section - Hero with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
        <video
        src={'https://firebasestorage.googleapis.com/v0/b/gonsilva-6e9c4.appspot.com/o/gonsilva%2Fdigital-wave-bk-hd.mov?alt=media&token=689e0ed1-c1d5-4297-a897-b6f039cd4fee'} 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 object-cover w-full h-full'
      />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-title">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">{copies.name}</h1>
          <p className="mb-8 max-w-2xl px-4 text-xl md:text-2xl">
            {copies.welcome}
          </p>

          <button
            onClick={scrollToPortfolio}
            className="mt-8 animate-bounce rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Scroll to portfolio"
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>

      {/* Second Section - Portfolio */}
      <section ref={portfolioRef} className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">My Portfolio</h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
              <Link href={project.url} key={project.id}>
              <div
                key={project.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section - Contact */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-gray-300">
            {copies.invitation}
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/gon%C3%A7alo-silva-798514152/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-600 px-6 py-3 text-white transition-colors hover:bg-gray-700"
            >
              <FileText className="h-5 w-5" />
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
