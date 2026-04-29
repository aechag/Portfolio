import { ITestimonial } from "@/types";
import {
  Code,
  Database,
  Brain,
  Server,
  Cpu,
  GitBranch,
  BarChart,
  Globe,
  Layers,
  Users
} from "lucide-react";

export const testimonialsData: ITestimonial[] = [
    {
        image: "https://avatars.githubusercontent.com/u/126103961?s=200&v=4",
        name: "Next.js",
        handle: "Frontend Framework",
        date: "Modern Stack",
        quote: "Building fast, SEO-optimized and scalable web applications.",
    },
    {
        image: "https://michaelwashburnjr.com/hubfs/Imported_Blog_Media/react-icon_svg_.png",
        name: "React.js",
        handle: "Frontend Library",
        date: "UI Development",
        quote: "Creating dynamic and interactive user interfaces.",
    },
    {
        image: "https://plugins.jetbrains.com/files/6098/990836/icon/default.png",
        name: "Node.js",
        handle: "Backend Development",
        date: "API & Services",
        quote: "Developing scalable server-side applications.",
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/05/29/11/14/artificial-intelligence-8025738_1280.png",
        name: "Artificial Intelligence",
        handle: "AI & Automation",
        date: "Smart Systems",
        quote: "Designing intelligent systems using machine learning.",
    },
    {
        image: "https://img.freepik.com/free-vector/database-floating-squares_78370-6689.jpg?semt=ais_hybrid&w=740&q=80",
        name: "SQL & NoSQL",
        handle: "Database Systems",
        date: "Data Management",
        quote: "Designing scalable and efficient databases.",
    },
    {
        image: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        name: "Git",
        handle: "Version Control",
        date: "Collaboration",
        quote: "Managing code and workflows efficiently.",
    },
];