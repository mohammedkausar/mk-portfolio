import { useTheme } from "@/context/theme-context";
import React from "react";

const Experience = ({ data }: any) => {
  const { isDark } = useTheme();
  return (
    <section id="experience" className="py-10 ">
      <div className="px-4 app-container">
        <h2 className="mb-10 text-3xl underline underline-offset-4 font-semibold">
          Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.25 top-0 h-full w-0.5 bg-neutral-300" />

          <div className="space-y-12">
            {data.map((item: any, index: number) => (
              <div key={index} className="relative flex gap-8">
                {/* Dot */}
                <div
                  className={`relative z-10  h-3 w-3 rounded-full  ${
                    isDark ? "bg-neutral-300" : "bg-neutral-900"
                  }`}
                />

                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium">
                    {item.company} — {item.role}
                  </h3>

                  <p className="text-sm ">
                    {item.location} · {item.duration}
                  </p>

                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm ">
                    {item.points.map((p: string, i: number) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-md border border-neutral-200 px-2 py-0.5 text-xs "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`relative z-10  h-3 w-3 rounded-full  ${
              isDark ? "bg-neutral-300" : "bg-neutral-900"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
