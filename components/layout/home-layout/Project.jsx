import { Button } from "@/components/ui/button";
import Projects from "../../../src/app/api/Projects";
import Image from "next/image";

export const Project = () => {
  return (
    <section className="flex flex-col items-center mt-15 px-5">
      <div className="bg-[color:var(--bg-color)] text-[color:var(--font-color)] text-center p-1 rounded-sm">
        My Projects
      </div>

      <h1 className="text-2xl sm:text-4xl font-black mt-3">
        Check Out My Latest Projects
      </h1>

      <div className="text-center text-[color:var(--text-color)] space-y-1 text-lg mb-10">
        <p className="text-sm sm:text-2xl">
          I'm a beginner web developer who loves building things! Here are some
          of my favorite personal projects,
        </p>
        <p className="text-sm sm:text-2xl">
          showcasing what I've been learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-6xl">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >

            <h2 className="text-2xl font-bold">{project.title}</h2>

            <p className="text-[color:var(--text-color)] mt-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-[color:var(--bg-color)] text-[color:var(--font-color)] font-bold text-xs p-2 rounded-sm hover:bg-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
            
              <a
                href={project.live}
                target="_blank"
               
              >
                  <Button className="cursor-pointer">Live Demo</Button>
                
              </a>
             

              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 border rounded-lg"
              >
                GitHub
              </a>

             
             
            </div>
            {project.demoAdmin && (
            <div className="mt-4 text-sm">
           <p className="font-semibold">Admin Panel</p>
           <p>Email: {project.demoAdmin.email}</p>
          <p>Password: {project.demoAdmin.password}</p>
          </div>
)}
          </div>
        ))}
      </div>
    </section>
  );
};