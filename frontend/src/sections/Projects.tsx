import { useTheme } from "@/context/theme-context";
import { Link, Github } from "lucide-react";
import React from "react";

const icons: any = {
  git: <Github className="size-4" color="black" />,
  link: <Link className="size-4" color="black" />,
};

const Projects = ({ project }: any) => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className=" py-10  border-y-2 bg-black">
      {/* app-container applies only on large screens */}
      <div className="px-4 app-container">
        <h2 className="mb-8 text-3xl underline underline-offset-8 font-semibold text-center text-white">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 justify-center">
          {project?.map((p: any, index: number) => (
            <div
              key={index}
              className={`flex h-full flex-col rounded-xl border border-neutral-200 p-6 shadow-2xl lg:hover:transform lg:hover:translate-y-4 lg:hover:duration-100 ${
                isDark
                  ? "bg-linear-to-tr from-gray-800 to-slate-700"
                  : "bg-background"
              }`}
            >
              {/* Header */}
              <div className="mb-3 flex flex-col gap-2">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <span className="text-sm uppercase tracking-wide text-neutral-500">
                  {p.type}
                </span>
              </div>

              {/* Description */}
              <p className="mb-4 ">{p.shortDescription}</p>

              {/* Bullets */}
              <ul className="mb-4 list-disc space-y-1 pl-4 text-sm ">
                {p.bullets?.map((b: string, i: number) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tech?.map((t: string, i: number) => (
                  <span
                    key={i}
                    className={`rounded-md border border-neutral-300 px-1 py-1 text-xs`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {p.links?.length > 0 && (
                <div className="mt-auto flex gap-2 border-2 w-fit px-2 py-1 rounded-lg bg-gray-200 text-sm cursor-pointer">
                  {p.links.map((l: any, i: number) => (
                    <div className="flex gap-2 items-center" key={i}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" font-medium text-neutral-500 hover:text-black"
                      >
                        {l.label}
                      </a>
                      {icons?.[l.icon]}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
