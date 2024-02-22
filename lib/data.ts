import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogapp from "@/public/blogapp.png";
import courseapp from "@/public/courseapp.png";
import meetingcalendly from "@/public/meetingcalendly.png";

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
    title: "Bachelor of Technology (B.Tech), Information Technology",
    location:
      "University Institute of Engineering & Technology, CSJM University Kanpur",
    description:
      "I learned about data structures, algorithms, operating systems, computer networks, databases, web development, machine learning, and more. I also did a project on machine learning and web development.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2020 - May 2024",
  },
  {
    title: "Front-End Developer Intern",
    location: "Ezage.in",
    description:
      "I worked as a front-end developer for 3 months as an intern. I also upskilled to the full stack and worked with backend also during internship.",
    icon: React.createElement(CgWorkAlt),
    date: "11 Aug - 10 Nov 2023",
  },
  {
    title: "MERN Developer Intern",
    location: "Compact Gyan",
    description:
      "I worked on creating courses apis and integration with the frontend.",
    icon: React.createElement(FaReact),
    date: "20 May - 20 July 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Full stack course selling platform",
    description:
      "I build this course selling platform. It has features like user authentication, course creation, course buying, and user dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express", "Redux"],
    imageUrl: courseapp,
    liveUrl: "https://courseapp-loopcoding.onrender.com/",
  },
  {
    title: "Meeting Calendly for remote developers",
    description:
      "Schedule meetings with clients and developers. It has features like user authentication, meeting scheduling, and user dashboard.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "gmail api",
      "google calendar api",
    ],
    imageUrl: meetingcalendly,
    liveUrl: "https://rmtdev.vercel.app/",
  },
  {
    title: "Blog app ",
    description:
      "I build the blog app. It has features like user authentication, blog creation, blog reading and profile creation.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express", "Redux"],
    imageUrl: blogapp,
    liveUrl: "https://just-share-app.onrender.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "SQL",
  "Machine Learning",
  "Framer Motion",
] as const;
