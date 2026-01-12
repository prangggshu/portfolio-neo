"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  // Split by newlines first, then by spaces
  const lines = words.split("\n");
  let wordsArray: (string | React.ReactElement)[] = [];
  
  lines.forEach((line, lineIndex) => {
    const lineWords = line.split(" ");
    wordsArray.push(...lineWords);
    // Add line break after each line except the last
    if (lineIndex < lines.length - 1) {
      wordsArray.push(<br key={`break-${lineIndex}`} />);
    }
  });
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (typeof word === "string") {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-white opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          }
          return word;
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
