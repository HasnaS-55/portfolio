/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "./ScrollMotion";
import { FiArrowUpRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  SiReact, SiJavascript, SiTailwindcss, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql,
} from "react-icons/si";

/* -------- demo data (now with images[] and description) -------- */
const demoProjects = [
  {
    id: "Doc-Appointement",
    title: "Booking with doctors",
    href: "https://github.com/HasnaS-55/Doctor_Booking_PERN",
    images: [
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 11.34.51.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 11.35.08.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 11.37.26.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 12.50.14.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 12.49.59.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 12.46.41.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 12.50.40.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 12.50.55.png",
      "/src/assets/projects-images/project1/Screenshot 2025-08-19 at 12.51.14.png"
    ],
    description:
      "A minimal full-stack app where patients search & book doctors, and doctors manage profiles, availability, and appointments. Built with React + Vite + Redux, Express, and PostgreSQL (Neon). Tailwind UI with an animated pill-navigation and responsive hero.",
    tech: [SiReact, SiTailwindcss, SiExpress, SiPostgresql, SiJavascript, SiNodedotjs],
  },
];

/* -------- UI bits -------- */
const TechPill = ({ tech = [] }) => (
  <div className="w-full absolute top-3 left-3 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur">
    {tech.map((Icon, i) => (
      <Icon key={i} className="h-6 w-6 text-[#141414]" aria-hidden />
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

/* -------- Modal with carousel -------- */
function ProjectModal({ project, onClose }) {
  const images = project?.images?.length ? project.images : [project?.img].filter(Boolean);
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % images.length);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm grid place-items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="proj-title"
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 id="proj-title" className="text-xl md:text-2xl font-semibold text-zinc-900">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100">
            <img
              key={i}
              src={images[i]}
              alt={`${project.title} ${i + 1}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-white/90 hover:bg-white shadow-md size-10"
                aria-label="Previous image"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-white/90 hover:bg-white shadow-md size-10"
                aria-label="Next image"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === idx ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <p className="text-zinc-700 leading-relaxed">{project.description}</p>
          <div className="flex items-center gap-2">
            {project.tech?.map((Icon, k) => (
              <span key={k} className="inline-flex size-9 items-center justify-center rounded-full bg-zinc-100">
                <Icon className="w-5 h-5 text-zinc-800" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------- Card -------- */
const ProjectCard = ({ project, onOpen }) => (
  <div className="group cursor-pointer" onClick={() => onOpen(project)}>
    <Reveal className="rounded-[18px]">
      <div className="relative overflow-hidden rounded-[16px] aspect-[16/10]">
        <img
          src={project.images?.[0] || project.img}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
        <TechPill tech={project.tech} />
      </div>
    </Reveal>

    <div className="mt-4 flex items-center gap-3">
      {/* stop propagation so arrow still opens external link */}
      <div onClick={(e) => e.stopPropagation()}>
        <ArrowLink href={project.href} />
      </div>
      <h3 className="text-2xl font-medium leading-tight text-[#141414]">
        {project.title}
      </h3>
    </div>
  </div>
);

/* -------- Grid + modal state -------- */
export default function ProjectsGrid({ items = demoProjects, className = "" }) {
  const [open, setOpen] = useState(null); // holds the selected project object or null
  const openModal = (p) => setOpen(p);
  const closeModal = () => setOpen(null);

  return (
    <>
      <section className={`w-[95%] pb-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-2 ${className}`}>
        {items.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={openModal} />
        ))}
      </section>

      {open && <ProjectModal project={open} onClose={closeModal} />}
    </>
  );
}
