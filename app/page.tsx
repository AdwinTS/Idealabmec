"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import RotatingIdeaIcon from "./components/RotatingIdeaIcon"
import Link from "next/link"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b14] to-[#2d1a29] text-white">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <RotatingIdeaIcon />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400"
          >
            Idealab MEC
          </motion.h2>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 py-16"
        >
          <nav className="flex justify-between items-center mb-16">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              Idealab MEC
            </h1>
            <div className="space-x-4">
              <Link href="#about" className="hover:text-pink-500 transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-pink-500 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-pink-500 transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          <main>
            <section className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Welcome to Idealab MEC</h2>
              <p className="text-xl text-gray-300 mb-8">Innovate. Create. Elevate.</p>
              <Link
                href="#contact"
                className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold py-2 px-6 rounded-full hover:from-pink-600 hover:to-cyan-500 transition-all duration-300"
              >
                Get Started
              </Link>
            </section>

            <section id="about" className="mb-16">
              <h3 className="text-3xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
                Idealab MEC is a cutting-edge innovation hub dedicated to fostering creativity and technological
                advancement. We bring together brilliant minds to solve complex problems and shape the future.
              </p>
            </section>

            <section id="projects" className="mb-16">
              <h3 className="text-3xl font-bold mb-4">Our Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-2">Project {i}</h4>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact">
              <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 bg-gray-800 rounded" />
                <input type="email" placeholder="Email" className="w-full p-2 bg-gray-800 rounded" />
                <textarea placeholder="Message" rows={4} className="w-full p-2 bg-gray-800 rounded"></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold py-2 px-6 rounded-full hover:from-pink-600 hover:to-cyan-500 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </section>
          </main>
        </motion.div>
      )}
    </div>
  )
}
