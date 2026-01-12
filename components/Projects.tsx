"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FlipWords } from "@/components/ui/flip-words";
import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";

export default function Projects() {
  const words = ["clean", "focused", "modern", "reliable"];
  const projects = [
    {
      quote:
        "Full-stack e-commerce platform with user and seller dashboards, JWT authentication, Stripe payments, dynamic product browsing, real-time cart updates, and search/filter functionality using React, Node.js, MongoDB, and Express.",
      name: "GreenCart",
      designation: "React • Node.js • MongoDB • Express • JWT • Stripe",
      src: "/greencart.png",
      deployed: "https://greencart-olive-kappa.vercel.app/",
      code: "https://github.com/prangggshu/GreenCart-Public",
    },
    {
      quote:
        "Student-led startup platform connecting societies, courses, and faculties at KIIT University with responsive UI, Supabase backend integration, real-time updates, and Git/GitHub version control across a 6-member web development team.",
      name: "KIIT Saathi",
      designation: "React • TypeScript • Supabase • Git • GitHub",
      src: "/kiitsaathi.png",
      deployed: "https://kiitsaathi.in",
    },
    {
      quote:
        "Spotify-inspired music player built with vanilla HTML, CSS, and JavaScript featuring play/pause, track navigation, volume control, seek bar, keyboard shortcuts, dynamic album metadata loading, and animated mobile sidebars.",
      name: "Spotify Web Player Clone",
      designation: "HTML • CSS • JavaScript • Vanilla",
      src: "/spotify.png",
      deployed: "https://misfit-spotify.netlify.app/",
      code: "https://github.com/prangggshu/spotify-clone",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 w-full h-full">
        <EtheralShadow
          color="rgba(255, 255, 255, 0.3)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8 relative z-10">
        <h2 className="text-4xl font-bold text-white text-center">
          Featured Projects
        </h2>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.2fr_2.8fr] items-start">
          <div className="mt-56 w-full max-w-3xl text-3xl md:text-4xl font-normal leading-tight text-white">
            Build
            <FlipWords words={words} /> <br />
            websites 
          </div>
          <div className="proj ml-19 mr-0">
            <AnimatedTestimonials testimonials={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
