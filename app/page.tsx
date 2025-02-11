"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4 font-mono"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Abhijeet Panigrahi
      </motion.h1>
      <motion.div
        className="text-2xl mb-8 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <TypeAnimation
          sequence={["Computer Science Student", 1000, "Front-end Developer", 1000, "UI/UX Enthusiast", 1000]}
          wrapper="span"
          speed={50}
          repeat={Number.POSITIVE_INFINITY}
        />
      </motion.div>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          href="https://github.com/abhijeetpanigrahii"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://linkedin.com/in/abhijeetpanigrahii"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          href="https://twitter.com/abhijeetpanigrahii"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Twitter size={24} />
        </Link>
      </motion.div>
    </div>
  )
}

