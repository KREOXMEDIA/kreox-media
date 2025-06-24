// Kreox Media Website (React + Tailwind)

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import Logo from "/public/kreox-media-logo.jpg";

export default function KreoxMedia() {
  return (
    <div className="font-sans text-gray-100 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 text-center">
        <div className="flex justify-center mb-6">
          <Image src={Logo} alt="Kreox Media Logo" width={120} height={120} className="rounded-full" />
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Kreox Media</h1>
        <p className="text-xl max-w-xl mx-auto mb-6 text-gray-300">
          Helping startups and businessmen grow online through content, branding & strategy.
        </p>
        <Button className="text-lg px-6 py-3 bg-white text-black rounded-2xl shadow-xl hover:scale-105 transition">
          Let’s Grow Together 🚀
        </Button>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-white">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Kreox Media is a remote-first creative agency passionate about turning ideas into impact. We empower small startups and business owners to unlock their online potential with powerful content, smart strategy, and consistent growth. With a dedicated team working from everywhere, we keep things flexible, fast, and client-focused.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Video Editing",
              desc: "Professional, fast-turnaround edits for reels, YouTube & ads."
            },
            {
              title: "Social Media Growth",
              desc: "Grow your brand on Instagram, LinkedIn, and YouTube."
            },
            {
              title: "Branding",
              desc: "From logo to identity – we help you build a strong brand image."
            },
            {
              title: "Content Strategy",
              desc: "We create content that converts – tailored for your audience."
            }
          ].map((service, i) => (
            <Card key={i} className="p-6 rounded-2xl shadow-lg bg-black border border-gray-700">
              <CardContent>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-base text-gray-400">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Startup Boost",
              desc: "Helped a new food startup gain 5k+ followers with engaging reels."
            },
            {
              name: "Fitness Coach",
              desc: "Personal branding + YouTube strategy that tripled leads."
            },
            {
              name: "Local Fashion Brand",
              desc: "Full rebranding with viral reels that reached 50K+ views."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 shadow-xl rounded-xl border border-gray-700 hover:scale-105 transition"
            >
              <div className="h-40 bg-gray-700 rounded mb-4 flex items-center justify-center text-gray-400">
                Preview
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{item.name}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#0a0a0a] text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-lg mb-4 text-gray-300">
          Got a project in mind? We'd love to hear from you.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span>contact@kreoxmedia.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span>+91 9876543210</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 Kreox Media. All rights reserved.
      </footer>
    </div>
  );
}
