"use client";

import { cn } from "../../lib/utils";
import { ContainerTextFlip } from "./ui/container-text-flip";

import { About } from "./About";

export default function Header() {
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-black overflow-hidden flex items-center justify-center">
      {/* 1) Grid & dot background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* 2) Radial fade mask */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* 3) Hero content */}
      <div className="relative z-10 w-full max-w-7xl p-4 text-center">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8">
          <img
            src="/img-of-me.png"
            alt="Kenny Kehinde Adenuga"
            className="w-36 h-36 rounded-full object-cover"
          />

          <div className="flex flex-col items-center space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                KEHINDE (KENNY) ADENUGA
              </h1>


            <ContainerTextFlip
              words={[
                "Computer Science student",
                "Software Engineer",
                "Web Developer",
                "App Developer",
                "Data Analyst",
              ]}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300"
            />

          </div>
        </div>

        {/* 4) About section below hero */}
        <div className="mt-16">
          <About />
        </div>
      </div>
    </section>
  );
}
