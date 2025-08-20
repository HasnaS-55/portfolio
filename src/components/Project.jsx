import ProjectsGrid from "./Projets-gris";

export default function Projets() {
  return (
    <section className=" flex flex-col w-full items-center pt-10">
      <div className="flex flex-col w-[95%] justify-start gap-3 pb-10">
        <div className="w-[5%] h-1.5 bg-[#141414] "></div>
        <div className="flex flex-col w-[95%] justify-start gap-5">
          <h2 className="text-3xl">Project</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <ProjectsGrid />
      </div>
    </section>
  );
}
