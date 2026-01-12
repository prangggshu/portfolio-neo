"use client";

import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  Code,
  Code2,
  Database,
  GitBranch,
  Github,
  FileCode,
  Leaf,
  Zap,
  Server,
  Layers,
  Settings,
  Brain,
  Network,
  Coffee,
  Hammer,
  Globe,
  Package,
  Shield,
  Cloud,
} from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
  "C++": <Code className="h-4 w-4" />,
  Python: <Code2 className="h-4 w-4" />,
  JavaScript: <FileCode className="h-4 w-4" />,
  TypeScript: <Zap className="h-4 w-4" />,
  Java: <Coffee className="h-4 w-4" />,
  SQL: <Database className="h-4 w-4" />,
  React: <Zap className="h-4 w-4" />,
  "Next.js": <Globe className="h-4 w-4" />,
  "Node.js": <Server className="h-4 w-4" />,
  "HTML/CSS": <FileCode className="h-4 w-4" />,
  "Tailwind CSS": <Leaf className="h-4 w-4" />,
  "Express.js": <Package className="h-4 w-4" />,
  Git: <GitBranch className="h-4 w-4" />,
  GitHub: <Github className="h-4 w-4" />,
  "VS Code": <FileCode className="h-4 w-4" />,
  MongoDB: <Leaf className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,
  Firebase: <Cloud className="h-4 w-4" />,
  "Data Structures": <Layers className="h-4 w-4" />,
  Algorithms: <Brain className="h-4 w-4" />,
  OOP: <Shield className="h-4 w-4" />,
  DBMS: <Database className="h-4 w-4" />,
  "Operating Systems": <Settings className="h-4 w-4" />,
  "Computer Networks": <Network className="h-4 w-4" />,
};

export default function Skills() {
  const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C/C++", "Java", "SQL"],
  },
  {
    title: "Web Development",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & APIs",
    skills: [
      "MongoDB",
      "MySQL",
      "Supabase",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vite",
      "Vercel",
    ],
  },
  {
    title: "Computer Science Foundations",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Engineering Skills",
    skills: [
      "Full-Stack Development",
      "Responsive Design",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
];


  return (
    <section id="skills" className="py-20 px-4 bg-black relative overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-30"
        )}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8"> 
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className=" rounded-2xl p-6 shadow-lg border border-zinc-800"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <HoverBorderGradient
                    key={skillIndex}
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white flex items-center space-x-2 px-4 py-2 text-sm"
                  >
                    {skillIcons[skill]}
                    <span>{skill}</span>
                  </HoverBorderGradient>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
