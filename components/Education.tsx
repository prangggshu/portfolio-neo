"use client";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function Education() {
  const slugs = [
    "typescript",
    "javascript",
    "python",
    "cplusplus",
    "java",
    "react",
    "nextdotjs",
    "nodedotjs",
    "express",
    "html5",
    "css3",
    "tailwindcss",
    "mongodb",
    "mysql",
    "supabase",
    "postgresql",
    "firebase",
    "git",
    "github",
    "visualstudiocode",
    "vercel",
    "vite",
    "postman",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/white`
  );
  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      {/* Shooting stars background */}
      <div className="absolute inset-0 pointer-events-none">
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Education
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg">
            <IconCloud images={images} />
          </div>
          <div className="space-y-6">
            <div className=" rounded-2xl p-8 shadow-lg border border-zinc-800">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-lg text-white font-medium">
                    Computer Science and Engineering
                  </p>
                </div>
                <span className="px-4 py-2 text-white rounded-full font-medium border border-blue-900">
                  2023 - 2027
                </span>
              </div>
              <p className="text-zinc-300 mb-2">Kalinga Institute of Industrial Technology</p>
              <p className="text-zinc-300">
                Current CGPA: 9.12/10
              </p>
            </div>

            <div className=" rounded-2xl p-8 shadow-lg border border-zinc-800">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Senior Secondary (XII)
                  </h3>
                  <p className="text-lg text-white font-medium">
                    PCM (Physics, Chemistry, Mathematics)
                  </p>
                </div>
                <span className="px-4 py-2  text-white rounded-full font-medium border border-blue-900">
                  2023
                </span>
              </div>
              <p className="text-zinc-300 mb-2">D.A.V. Public School, Raniganj</p>
              <p className="text-zinc-300">Percentage: 86% </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
