/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { variantsMap, EASE } from "./motionVariants";

/** Reveals children on scroll; retriggers when leaving/entering the viewport */
export function Reveal({ variant = "fadeUp", delay = 0, duration = 0.6, className = "", children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, margin: "-10% 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variantsMap[variant]}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Section wrapper that staggers its direct children (use with <Reveal/>) */
export function MSection({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: false }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </motion.section>
  );
}
