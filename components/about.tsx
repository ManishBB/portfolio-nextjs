"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I had graduating with a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>, During graduation, I had worked on{" "}
        <span className="font-medium">full-stack web development & app developement</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        real world problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, React Native, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading novels and writing fiction and poetry. I also enjoy{" "}
        <span className="font-medium">Storytelling & Public Speaking</span>.
      </p>
      <p>
        I am currently
        learning about{" "}
        <span className="font-medium">Design Patterns & Performance Improvements</span>.
      </p>
    </motion.section>
  );
}
