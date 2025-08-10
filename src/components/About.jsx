import InfiniteCarousel from './Scroll-icons'
import { Reveal } from "./ScrollMotion";
export default function About() {
  return (
    <section className=" flex flex-col w-full items-center pt-10">
      <Reveal className="flex flex-col w-[95%] justify-start gap-3 pb-5">
        <div className="w-[5%] h-1.5 bg-[#141414] "></div>
        <div className="flex flex-col w-[95%] justify-start gap-5">
          <h2 className="text-3xl">About Me</h2>
          <p className="text-md text-[#757575]">
            I’m Hasna, a full-stack developer with a front-end heartbeat. I
            craft fast, accessible interfaces with HTML, CSS, and JavaScript,
            then power them with the MERN stack or Python (Flask) + PostgreSQL.
            I also build dynamic, high-performing WordPress sites. Curious and
            hands-on, I turn ideas into polished, usable products that balance
            design, performance, and scalability.
          </p>
        </div>
      </Reveal>
      <Reveal className="flex flex-col w-full bg-white justify-center items-center gap-5 pt-5 pb-5">
        <div className="flex w-[95%] justify-between">
          <h4 className="text-2xl">Skills that fuel my passion</h4>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_17_517)">
              <path
                d="M23.0001 14.7896V0H17.6164V13.8004L3.82159 0.00578548L0.0149303 3.81245L13.8187 17.6164H0V23.0001H14.7896L23.0001 14.7896Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_517">
                <rect width="23" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        
        <InfiniteCarousel />
        
      </Reveal>
    </section>
  );
}
