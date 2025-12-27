import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const icons: any = {
  x: (
    <svg
      role="img"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  github: (
    <svg
      role="img"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  linkedin: (
    <svg
      role="img"
      x="0px"
      y="0px"
      width="16"
      height="16"
      viewBox="0 0 50 50"
      fill="currentColor"
    >
      <title>Linkedin</title>
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
    </svg>
  ),
  email: (
    <Mail className="size-4">
      <title>Mail</title>
    </Mail>
  ),
};

const About = ({ about }: any) => {
  return (
    <div className="bg-black   text-white ">
      <section
        id="about"
        className="flex flex-col lg:mx-auto lg:max-w-390 lg:px-8 relative lg:p-16 "
      >
        <div className="flex flex-col gap-2 text-center p-5 pb-0 lg:hidden">
          <span>{about.greet}</span>
          <div className="flex flex-col gap-4 font-extrabold mb-5 text-3xl sm:text-5xl">
            <span className="">{about.fname}</span>
            <span className="">{about.lname}</span>
          </div>
        </div>
        <div className="flex flex-col-reverse ">
          <div className="relative bg-linear-to-tl from-purple-900 to-violet-800 border-purple-700 shadow-2xl lg:w-[60%] xl:w-[70%] p-4 sm:p-8 lg:rounded-2xl lg:hover:-translate-y-8 lg:transition-all lg:duration-300">
            <Badge
              className="lg:absolute mx-auto mb-2 block wrap-anywhere lg:left-[70%] lg:py-1 lg:px-2 bottom-[95%] lg:bottom-[85%] animate-caret-blink bg-red-700!"
              variant="destructive"
            >
              {about.current}
            </Badge>
            <div className="hidden lg:flex flex-col gap-2">
              <span>{about.greet}</span>
              <div className="flex flex-col gap-4 font-extrabold mb-5  sm:text-5xl">
                <span className="">{about.fname}</span>
                <span className="">{about.lname}</span>
              </div>
            </div>
            <div className="text-center lg:text-justify font-medium flex flex-col gap-2 lg:gap-1 ">
              {about?.description?.map((abds: string) => (
                <span key={abds}>{abds}</span>
              ))}
              <div className="mt-2 flex gap-2 justify-center lg:justify-start">
                {about?.socialDetails?.map((social: any) => (
                  <a
                    key={social.product}
                    rel="noopener noreferrer"
                    href={social.link}
                    title={`Visit my ${social.product} profile`}
                    target="_blank"
                    aria-label={`${social.product} profile`}
                    className="inline-block  p-2 border rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {icons?.[social.product]}
                    <span className="sr-only">{social.product}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:left-[63%] xl:left-[70%]  lg:bottom-[15%] lg:hover:-translate-y-8 lg:transition-all lg:duration-300 ">
            <img
              className="object-cover lg:size-96"
              src="mkf.png"
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
