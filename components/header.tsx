// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { useTheme } from "next-themes"
// import { Moon, Sun } from "lucide-react"

// export function Header() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => setMounted(true), [])

//   if (!mounted) return null

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 max-w-screen-2xl items-center">
//         <div className="mr-4 hidden md:flex">
//           <Link className="mr-6 flex items-center space-x-2" href="/">
//             <span className="hidden font-bold sm:inline-block">Abhijeet Panigrahi</span>
//           </Link>
//           <nav className="flex items-center space-x-6 text-sm font-medium">
//             <Link href="/about">About</Link>
//             <Link href="/projects">Projects</Link>
//             <Link href="/education">Education</Link>
//             <Link href="/contact">Contact</Link>
//           </nav>
//         </div>
//         <button
//           className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         >
//           <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </button>
//       </div>
//     </header>
//   )
// }
//----------------------------------------------------------------
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* Grid Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:25px_25px] md:bg-[size:50px_50px]" />

        {/* Larger Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:75px_75px] md:bg-[size:130px_130px]" />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-gradient-conic from-transparent via-slate-300/10 dark:via-slate-700/10 to-transparent animate-slow-spin"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise"></div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="flex w-full justify-between items-center px-4">
            {/* Left section */}
            <div className="flex items-center space-x-4">
              <span className="font-mono text-3xl font-bold">AP</span>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-mono">
              <Link href="/about">ABOUT</Link>
              <Link href="/projects">PROJECTS</Link>
              <Link href="/">
                <span className="font-bold text-lg">ABHIJEET</span>
              </Link>
              <Link href="/education">EDUCATION</Link>
              <Link href="/contact">CONTACT</Link>
            </nav>

            {/* Right section with mobile menu button */}
            <div className="flex items-center space-x-4">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </button>

              {/* Mobile Menu Button - Visible only on mobile */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40">
            <nav className="flex flex-col space-y-4 p-4 bg-background/95 backdrop-blur">
              <Link href="/" className="font-bold text-lg">
                ABHIJEET
              </Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/projects">PROJECTS</Link>
              <Link href="/education">EDUCATION</Link>
              <Link href="/contact">CONTACT</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export function Header() {
//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-4 z-20"
//           >
//             <div className="space-y-2">
//               <h2 className="text-2xl md:text-3xl font-mono">
//                 <span className="text-white">I AM</span>{" "}
//                 <span className="text-gray-500">DARK MODE</span>
//               </h2>
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                 DEVELOPER
//               </h1>
//               <h3 className="text-2xl md:text-3xl font-light mt-2">TO HIRE</h3>
//             </div>

//             <div className="pt-8">
//               <p className="text-gray-400 uppercase tracking-wider text-sm font-mono">
//                 WEB AND SOFTWARE DEVELOPMENT
//                 <br />
//                 <span className="text-gray-600">COMPUTER SCIENCE STUDENT</span>
//               </p>
//             </div>
//           </motion.div>

//           {/* Image Container */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
//           >
//             <div className="relative h-full w-full">
//               {/* Gradient overlays for image blending */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
//               <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>

//               <Image
//                 src="/profile.jpg" // Make sure to add your image in public folder
//                 alt="Profile"
//                 fill
//                 priority
//                 className="object-cover object-center grayscale contrast-125 brightness-110"
//                 style={{
//                   maskImage: "linear-gradient(to right, transparent, black)",
//                   WebkitMaskImage:
//                     "linear-gradient(to right, transparent, black)",
//                 }}
//               />
//             </div>
//           </motion.div>

//           {/* Mobile Image (shown only on smaller screens) */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="relative h-[400px] lg:hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
//             <Image
//               src="/profile.jpg"
//               alt="Profile"
//               fill
//               priority
//               className="object-cover object-center grayscale contrast-125 brightness-110"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* Grain Effect Overlay */}
//       <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//             width: "100%",
//             height: "100%",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }
