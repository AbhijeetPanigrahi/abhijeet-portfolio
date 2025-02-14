"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "ReBlogs",
    description:
      "A modern blog platform built with React, Redux, and TailwindCSS, powered by Appwrite backend.",
    github: "https://github.com/AbhijeetPanigrahi/ReBlogs_MegaProject",
    live: "https://reblogs-megaproject.vercel.app/",
    tech: ["React", "Redux", "TailwindCSS", "Appwrite"],
  },
  {
    title: "Alumni Network Association",
    description:
      "An alumni engagement platform developed using React and Next.js for seamless networking.",
    github: "https://github.com/abhijeetpanigrahii/alumni-network",
    live: "https://alumni-network.vercel.app",
    tech: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A headphone e-commerce site built with Next.js, Sanity for content management, and Stripe for payments.",
    github: "https://github.com/abhijeetpanigrahii/ecommerce-headphones",
    live: "https://ecommerce-headphones.vercel.app",
    tech: ["Next.js", "Sanity", "Stripe", "TailwindCSS"],
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 font-mono text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
