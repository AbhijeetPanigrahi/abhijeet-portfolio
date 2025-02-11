"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Code, Book, Briefcase, Github, Mail } from "lucide-react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiOpenjdk as SiJava,
  SiCplusplus,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const techStack = [
  {
    icon: <SiJavascript className="w-5 h-5" />,
    label: "JavaScript",
    color: "text-yellow-500",
  },
  {
    icon: <SiTypescript className="w-5 h-5" />,
    label: "TypeScript",
    color: "text-blue-500",
  },
  {
    icon: <SiHtml5 className="w-5 h-5" />,
    label: "HTML",
    color: "text-orange-500",
  },
  {
    icon: <SiCss3 className="w-5 h-5" />,
    label: "CSS",
    color: "text-blue-400",
  },
  {
    icon: <SiNextdotjs className="w-5 h-5" />,
    label: "Next.js",
    color: "text-gray-900 dark:text-white",
  },
  {
    icon: <SiReact className="w-5 h-5" />,
    label: "React",
    color: "text-cyan-500",
  },
  {
    icon: <SiPython className="w-5 h-5" />,
    label: "Python",
    color: "text-yellow-600",
  },
  {
    icon: <SiMysql className="w-5 h-5" />,
    label: "SQL",
    color: "text-blue-600",
  },
  {
    icon: <SiJava className="w-5 h-5" />,
    label: "Java",
    color: "text-red-500",
  },
  {
    icon: <SiCplusplus className="w-5 h-5" />,
    label: "C++",
    color: "text-blue-700",
  },
  {
    icon: <SiTailwindcss className="w-5 h-5" />,
    label: "Tailwind",
    color: "text-cyan-400",
  },
  {
    icon: <SiGit className="w-5 h-5" />,
    label: "Git",
    color: "text-orange-600",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] dark:bg-[#000510] p-4 md:p-8 text-[#334155] dark:text-white font-mono">
      <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr_300px] gap-4 md:gap-6">
        {/* Left Panel - Updated with Tech Stack */}
        <div className="space-y-4">
          {/* Navigation Icons */}
          <div className="bg-[#e2e8f0]/50 dark:bg-black/20 backdrop-blur-sm border border-[#cbd5e1] dark:border-gray-800 rounded-lg p-4">
            <h2 className="text-sm font-semibold mb-4">NAVIGATION</h2>
            <div className="grid grid-cols-3 gap-3">
              <Link
                href="/about"
                className="flex flex-col items-center group p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <FileText className="w-5 h-5 mb-1 group-hover:text-blue-500 transition-colors" />
                <span className="text-xs">About</span>
              </Link>
              <Link
                href="/projects"
                className="flex flex-col items-center group p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <Code className="w-5 h-5 mb-1 group-hover:text-purple-500 transition-colors" />
                <span className="text-xs">Projects</span>
              </Link>
              <Link
                href="/education"
                className="flex flex-col items-center group p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <Book className="w-5 h-5 mb-1 group-hover:text-green-500 transition-colors" />
                <span className="text-xs">Education</span>
              </Link>
            </div>
          </div>
          {/* Tech Stack Section */}
          <div className="bg-[#e2e8f0]/50 dark:bg-black/20 backdrop-blur-sm border border-[#cbd5e1] dark:border-gray-800 rounded-lg p-4">
            <h2 className="text-sm font-semibold mb-4">TECH STACK</h2>
            <div className="grid grid-cols-3 gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors group"
                >
                  <div
                    className={`${tech.color} group-hover:scale-110 transition-transform`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-xs mt-1">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Links */}
          <div className="bg-[#e2e8f0]/50 dark:bg-black/20 backdrop-blur-sm border border-[#cbd5e1] dark:border-gray-800 rounded-lg p-4">
            <h2 className="text-sm font-semibold mb-4">CONNECT</h2>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/abhijeetpanigrahii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <Github className="w-5 h-5 mb-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                <span className="text-xs">GitHub</span>
              </a>
              <Link
                href="/contact"
                className="flex flex-col items-center group p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <Mail className="w-5 h-5 mb-1 group-hover:text-red-500 transition-colors" />
                <span className="text-xs">Email</span>
              </Link>
              <Link
                href="/experience"
                className="flex flex-col items-center group p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
              >
                <Briefcase className="w-5 h-5 mb-1 group-hover:text-orange-500 transition-colors" />
                <span className="text-xs">Work</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Center Panel - Main Content */}
        <div className="space-y-4 order-first lg:order-none">
          {/* Profile Window */}
          <div className="bg-[#e2e8f0]/50 dark:bg-black/20 backdrop-blur-sm border border-[#cbd5e1] dark:border-gray-800 rounded-lg">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#cbd5e1] dark:border-gray-800">
              <span className="text-sm">PROFILE.md</span>
              <button className="text-[#64748b] hover:text-[#334155] dark:text-gray-500 dark:hover:text-white">
                ×
              </button>
            </div>
            <div className="p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  Abhijeet Panigrahi
                </h1>
                <h2 className="text-lg md:text-xl text-[#64748b] dark:text-gray-400 mb-6">
                  Computer Science Student
                </h2>
                <p className="text-sm text-emerald-600 dark:text-green-500">
                  Passionate about front-end development and UI/UX design
                </p>
              </motion.div>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="bg-[#e2e8f0]/50 dark:bg-black/20 backdrop-blur-sm border border-[#cbd5e1] dark:border-gray-800 rounded-lg">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#cbd5e1] dark:border-gray-800">
              <span className="text-sm">TERMINAL</span>
              <button className="text-[#64748b] hover:text-[#334155] dark:text-gray-500 dark:hover:text-white">
                ×
              </button>
            </div>
            <div className="p-4">
              <div className="font-mono text-xs md:text-sm">
                <p className="text-emerald-600 dark:text-green-500">
                  $ cat skills.txt
                </p>
                <p className="text-[#64748b] dark:text-gray-400">
                  React • Next.js • TypeScript • TailwindCSS • Redux
                </p>
                <p className="text-emerald-600 dark:text-green-500">
                  $ cat education.txt
                </p>
                <p className="text-[#64748b] dark:text-gray-400">
                  B.Tech at SOA University (2022–2026)
                </p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </div>

          {/* Projects Window */}
          <div className="bg-[#e2e8f0]/50 dark:bg-black/20 backdrop-blur-sm border border-[#cbd5e1] dark:border-gray-800 rounded-lg">
            {/* ... Projects content remains the same ... */}
          </div>
        </div>

        {/* Right Panel - Status */}
        <div className="bg-[#e2e8f0]/50 dark:bg-black/20 backdrop-blur-sm border border-[#cbd5e1] dark:border-gray-800 rounded-lg">
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#cbd5e1] dark:border-gray-800">
            <span className="text-sm">STATUS</span>
            <button className="text-[#64748b] hover:text-[#334155] dark:text-gray-500 dark:hover:text-white">
              ×
            </button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 dark:bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for Opportunities</span>
              </div>
              <div className="text-xs md:text-sm text-[#64748b] dark:text-gray-400">
                <p>Current: Computer Science Student</p>
                <p>Location: India</p>
                <p>Experience: Intern @ TRL Krosaki</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
