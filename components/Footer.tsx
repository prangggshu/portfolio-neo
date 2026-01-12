export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-zinc-400 mb-4">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
