"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timeline = [
  {
    title: "B.Tech in Computer Science",
    institution: "SOA University",
    period: "2022 - 2026",
    description:
      "Pursuing a Bachelor's degree in Computer Science with a focus on software engineering and web technologies.",
  },
  {
    title: "Internship",
    institution: "TRL Krosaki",
    period: "June 2024 - July 2024",
    description:
      "Gained hands-on experience in front-end development and worked on real-world projects using React and Next.js.",
  },
];

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 font-mono text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & Experience
      </motion.h1>
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 px-4 sm:px-6">
        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="w-full"
          >
            <Card className="backdrop-blur-lg bg-background/30">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-base md:text-lg">
                  {item.institution}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {item.period}
                </p>
                <p className="mt-2 text-sm md:text-base">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
