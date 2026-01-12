import { DottedSurface } from "@/components/ui/dotted-surface";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <DottedSurface />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Get In Touch</h2>
        <div className=" rounded-2xl p-8 shadow-lg  ">
          <p className="text-lg text-zinc-300 mb-8 text-center">
            I'm currently looking for internship opportunities and always open to discussing
            new projects or ideas. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8 justify-items-center md:justify-items-start">
            <a
              href="mailto:your.email@example.com"
              className="w-full flex items-center gap-4 p-4  rounded-lg hover:bg-neutral-900 transition-colors border border-neutral-600"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white">
                <IconMail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-zinc-200">Email</p>
                <p className="text-sm text-zinc-400">prangshumondal45@gmail.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/prangggshu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-900 transition-colors border border-neutral-600"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white">
                <IconBrandLinkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-zinc-200">LinkedIn</p>
                <p className="text-sm text-zinc-400">/in/prangggshu</p>
              </div>
            </a>
            <a
              href="https://github.com/prangggshu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:col-span-2 md:max-w-sm md:mx-auto flex items-center gap-4 p-4  rounded-lg hover:bg-neutral-900 transition-colors border border-neutral-600"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white">
                <IconBrandGithub className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-zinc-200">GitHub</p>
                <p className="text-sm text-zinc-400">@prangggshu</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
