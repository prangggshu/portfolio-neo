"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
        "A modern, animated developer portfolio built to showcase projects, skills, and identity with a strong focus on design, performance, and interaction.",
      name: "Portfolio Neo",
      designation: "Next.js • TypeScript • Tailwind CSS • Framer Motion",
      src: "/neo.png", // replace with your actual screenshot
      deployed: "https://prangshu.netlify.app/", // update if different
      code: "https://github.com/prangggshu/portfolio-neo",
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
    {
      quote:
        "An AI-powered application for processing meeting transcripts, generating customizable summaries, and sharing them securely via email.",
      name: "AI Meeting Notes Summarizer",
      designation: "HTML • CSS • JavaScript • Node.js • Express • AI APIs",
      src: "/meeting.png",
      code: "https://github.com/prangggshu/AI-Meeting-Summarizer",
    },
    {
      quote:
        "A sleek, responsive, and interactive personal portfolio website built with pure HTML, CSS, and JavaScript to showcase skills, projects, and contact details.",
      name: "Devfolio",
      designation: "HTML • CSS • JavaScript • Responsive Design",
      src: "/devfolio.png", // replace with actual image path
      deployed: "https://prangggshu.github.io/Devfolio/",
      code: "https://github.com/prangggshu/Devfolio",
    },
    {
      quote:
        "A machine learning project that predicts the likelihood of diabetes using real health-related data and a K-Nearest Neighbors model, with data preprocessing, feature scaling, and evaluation metrics included.",
      name: "Diabetes Prediction",
      designation: "Python • Machine Learning • KNN • Data Preprocessing",
      src: "/diabetes.png", // replace with actual screenshot path
      code: "https://github.com/prangggshu/Diabetes-Prediction",
    },
    {
      quote:
        "A minimalist and responsive Todo application built with React and Tailwind CSS, focused on simplicity and daily task management with persistence in local storage.",
      name: "Todong",
      designation: "React • Tailwind CSS • LocalStorage API",
      src: "/todong.png",
      deployed: "https://misfit-todong.netlify.app/",
      code: "https://github.com/prangggshu/todong",
    },
    {
      quote:
        "A Flask-based fitness recommendation system that calculates BMI and suggests personalized workouts and diet plans based on user input.",
      name: "Flask Workout Recommendation",
      designation: "Python • Flask • HTML • CSS • JavaScript",
      src: "/flask.jpeg", // replace with an actual screenshot
      code: "https://github.com/prangggshu/flask-workout-recommendation",
    },
    {
      quote:
        "A simple Node.js file organizer script that automatically sorts files in a directory into extension-based folders to help declutter and manage data.",
      name: "File Organizer",
      designation: "Node.js • JavaScript • File System Automation",
      src: "/file.png", // replace with an actual screenshot
      code: "https://github.com/prangggshu/File-Organizer",
    },
  ];

  return (
    <section
      id="projects"
      className="py-8 md:py-16 lg:py-20 px-4 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <BackgroundBeams />
      </div>
      <div className="max-w-6xl mx-auto space-y-3 md:space-y-6 lg:space-y-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 md:mb-0">
          Featured Projects
        </h2>
        <div className="grid gap-4 md:gap-8 lg:gap-12 lg:grid-cols-[1.2fr_2.8fr] items-start">
          <div className="mt-4 md:mt-12 lg:mt-56 w-full max-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-white">
            Build
            <FlipWords words={words} /> <br />
            websites 
          </div>
          <div className="proj ml-0 md:ml-19 mr-0">
            <AnimatedTestimonials testimonials={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
