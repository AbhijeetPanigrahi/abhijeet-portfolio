"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 font-mono text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <div className="max-w-md mx-auto w-full px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="backdrop-blur-lg bg-background/30 w-full">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                Get in touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full min-h-[120px]"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center space-x-6 sm:space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="https://github.com/AbhijeetPanigrahi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors p-2"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://leetcode.com/abhijeetpanigrahi912"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors p-2"
          >
            <MessageSquare size={24} />
          </Link>
          <Link
            href="mailto:abhijeetpanigrahi912@gmail.com"
            className="hover:text-primary transition-colors p-2"
          >
            <Mail size={24} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
