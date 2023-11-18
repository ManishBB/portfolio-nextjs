import React from "react";
import { FaReact } from "react-icons/fa";
import { DiAndroid, DiNodejsSmall } from "react-icons/di";
import megablog from "@/public/megablog.png";
import threads from "@/public/threads.png";
import todo from "@/public/todo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Intern Lead - OYTIE",
    location: "Pune, IN",
    description:
      "Lead the backend project of hospital management and delegated tasks with backend routes and data management.",
    icon: React.createElement(DiNodejsSmall),
    date: "May, 2022 - July, 2022",
  },
  {
    title: "React Developer Intern - Y&G  ",
    location: "Pune, IN",
    description:
      "I worked as a react developer intern. Created CRM Frontend from scratch and managed Django API calls",
    icon: React.createElement(FaReact),
    date: "Aug, 2021 - Nov, 2021",
  },
  {
    title: "Android Developer Intern - WKTechSys",
    location: "Dhule, IN",
    description: 
      "Worked on Android UI, Jetpack, Firebase and other android related technologies.",
    icon: React.createElement(DiAndroid),
    date: "May, 2019 - July, 2019",
  },
] as const;

export const projectsData = [
  {
    title: "TechBlog",
    description:
      "A ReactJS Blogging App with production grade code",
    tags: ["React", "Appwrite", "Redux", "Tailwind"],
    imageUrl: megablog,
  },
  {
    title: "Threads",
    description:
      "A NextJS full-stack App of Threads clone created with maximum functionalities of social media app and improving.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Clerk"],
    imageUrl: threads,
  },
  {
    title: "HealthOK",
    description:
      "A web app made for the regulation on provate healthcare system in terms of pricing regulations and patient convinience",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Django", "Machine Learning"],
    imageUrl: todo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "MongoDB",
  "Redux",
  "MySQL",
  "Docker",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "React Native",
  "Python",
  "Java",
  "Android",
] as const;
