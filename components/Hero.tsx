"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { TerminalLoader } from "@/components/ui/terminal-loader";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = `"Veni, Vidi, Vici"\nI came. I saw. I conquered.`;
  const [showEncryptedText, setShowEncryptedText] = useState(false);
  const [showTextGenerate, setShowTextGenerate] = useState(false);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Only start text animation after loader completes
    if (!loaderComplete) return;
    
    // Show encrypted text immediately
    setShowEncryptedText(true);
    
    // Then show text generate effect after encrypted text completes (~1.8 seconds)
    const timer = setTimeout(() => {
      setShowTextGenerate(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, [loaderComplete]);
  return (
    <>
      <TerminalLoader onComplete={() => setLoaderComplete(true)} />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 py-20 bg-black relative overflow-hidden"
      >
      <StripedPattern className="opacity-10 text-white" />
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
          {/* Text Content - Left Half */}
          <div className="flex flex-col justify-center">
            {/* Encrypted Text */}
            <div className="mb-8">
              <p className="text-left text-2xl">
                {showEncryptedText && (
                  <EncryptedText
                    text="Welcome to the Matrix, Neo."
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-white"
                    revealDelayMs={50}
                  />
                )}
              </p>
            </div>
            
            {/* Text Generate Effect */}
            <div
              className="pl-36 text-lg text-white transition-opacity duration-500"
              suppressHydrationWarning
            >
              {showTextGenerate ? (
                <TextGenerateEffect words={words} className="!text-white" />
              ) : (
                <div className="h-12"></div>
              )}
            </div>
          </div>

          {/* Pixelated Canvas - Right Half */}
          <div className="mb-15 ml-60 flex items-center justify-center">
            <PixelatedCanvas
              src="/dp23.png"
              width={400}
              height={500}
              cellSize={3}
              dotScale={0.9}
              shape="square"
              backgroundColor="#000000"
              dropoutStrength={0.4}
              interactive
              distortionStrength={3}
              distortionRadius={80}
              distortionMode="swirl"
              followSpeed={0.2}
              jitterStrength={4}
              jitterSpeed={4}
              sampleAverage
              tintColor="#FFFFFF"
              tintStrength={0.2}
              className="rounded-xl border border-neutral-800 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
