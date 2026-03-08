import { useTheme } from "@/context/theme-context";

const Experience = ({ data }: any) => {
  const { isDark } = useTheme();
  return (
    <section id="experience" className="py-10 bg-black">
      <div className="px-4 app-container">
        <h2 className="mb-10 text-3xl underline underline-offset-4 text-white font-semibold">
          Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.25 top-0 h-full w-0.5 bg-neutral-300" />

          <div className="space-y-12 text-white">
            {data?.map((item: any, index: number) => (
              <div key={index} className="relative flex gap-8">
                {/* Dot */}
                <div
                  className={`relative z-10  h-3 w-3  rounded-full shrink-0 bg-neutral-300`}
                />

                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium">
                    {item.company} — {item.role}
                  </h3>

                  <p className="text-sm ">
                    {item.location} · {item.duration}
                  </p>

                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm">
                    {item?.points?.map((p: any, i: any) => (
                      <li key={i} className="list-none">
                        <h3 className="font-bold underline">{p?.title}</h3>

                        <ul className="list-disc pl-4">
                          {p?.list?.map((l: any, k: any) => (
                            <li key={k}>{l}</li>
                          ))}
                        </ul>

                        <div className="my-3 flex flex-wrap gap-2">
                          {p?.tech?.map((t: any, j: any) => (
                            <span
                              key={j}
                              className="rounded-md border border-neutral-200 px-2 py-0.5 text-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`relative z-10  h-3 w-3 rounded-full bg-neutral-300  `}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
