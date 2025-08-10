import React, { useEffect, useRef } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiPython,
  SiCss3,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiReact,
} from "react-icons/si";


export default function InfiniteCarousel({
  icons = [
    SiHtml5,
    SiJavascript,
    SiGithub,
    SiNodedotjs,
    SiExpress,
    SiPostman,
    SiPython,
    SiCss3,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiReact,
  ],
  diameter = 80,
  gap = 24,
  speed = 1.2,
  className = "",
}) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    let pos = 0;
    const baseCount = icons.length;

    const animate = () => {
      if (!pausedRef.current && trackRef.current) {
        pos -= speed;
        const resetAfter = (diameter + gap) * baseCount; 
        if (baseCount > 0 && -pos >= resetAfter) pos = 0;
        trackRef.current.style.transform = `translateX(${pos}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [icons, diameter, gap, speed]);


  const loop = [...icons, ...icons];

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      <div
        ref={trackRef}
        className="flex items-center will-change-transform py-3"
        style={{ gap: `${gap}px`, paddingLeft: `${gap}px` }}
      >
        {loop.map((Icon, idx) => (
          <div
            key={idx}
            className="flex-none grid place-items-center rounded-full bg-black text-white shadow-sm"
            style={{ width: `${diameter}px`, height: `${diameter}px` }}
            aria-hidden={idx >= icons.length} // hide duplicated set from SRs
          >
            {/* icons inherit color via currentColor (text-white) */}
            <Icon className="w-1/2 h-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
