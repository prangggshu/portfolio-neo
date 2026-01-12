"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { useEffect, useState } from "react";

interface TerminalLoaderProps {
  onComplete?: () => void;
}

export function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide loader after animations complete (~10 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Terminal className="bg-neutral-900 border-neutral-800">
        <TypingAnimation className="text-white">
          &gt; boot portfolio
        </TypingAnimation>

        <AnimatedSpan className="text-green-500">
          ✔ Environment stable.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">✔ Tools aligned.</AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Design system online.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Codebase initialized.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">✔ Systems ready.</AnimatedSpan>

        <AnimatedSpan className="text-blue-500">
          ℹ Mode: production
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground">
          No errors. No excuses.
        </TypingAnimation>
        <TypingAnimation className="text-muted-foreground">
          Built with discipline.
        </TypingAnimation>
        <TypingAnimation className="text-muted-foreground">
          Scroll to continue.
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
