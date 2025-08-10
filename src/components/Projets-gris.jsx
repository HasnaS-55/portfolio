
import React from "react";
import { Reveal } from "./ScrollMotion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";


const demoProjects = [
  {
    id: "learnlogicify-landing",
    title: "Learnlogicify Landing Page",
    href: "https://example.com/learnlogicify",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
    tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
  },
  {
    id: "files-app",
    title: "TerraVault – Files App",
    href: "https://example.com/terravault",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    tech: [SiReact, SiTailwindcss, SiNodedotjs],
  },
  {
    id: "api-service",
    title: "User Service (API)",
    href: "https://example.com/user-service",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    tech: [SiNodedotjs, SiExpress, SiPostgresql],
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    href: "https://example.com/blog",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    tech: [SiReact, SiTailwindcss, SiMongodb],
  },
];


const TechPill = ({ tech = [] }) => (
  <div className="w-full absolute top-3 left-3 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur">
    {tech.map((Icon, i) => (
      <Icon key={i} className="h-6 w-6 #141414" aria-hidden />
    ))}
  </div>
);

const ArrowLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-grid size-9 place-items-center rounded-full border border-zinc-300 text-zinc-900 transition hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400"
    aria-label="Open project"
    title="Open project"
  >
    <FiArrowUpRight className="h-5 w-5" />
  </a>
);

const ProjectCard = ({ project }) => (
  <div className="group">
    <Reveal className="rounded-[18px]">
      <div className="relative overflow-hidden rounded-[16px] aspect-[16/10]">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
        <TechPill tech={project.tech} />
      </div>
    </Reveal>

    <div className="mt-4 flex items-center gap-3">
      <ArrowLink href={project.href} />
      <h3 className="text-2xl font-medium leading-tight #141414">
        {project.title}
      </h3>
    </div>
  </div>
);

/* ---------- grid ---------- */
export default function ProjectsGrid({ items = demoProjects, className = "" }) {
  return (
    <section className={`w-[95%] pb-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-2 ${className}`}>
      {items.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}
