const data = {
  header: {
    img: "./src/assets/Image/mkc.png",
    name: "Mohammed Kawuser",
    sections: [
      {
        text: "About",
        url: "#about",
      },
      {
        text: "Skills",
        url: "#skill",
      },
      {
        text: "Experience",
        url: "#experience",
      },
      {
        text: "Projects",
        url: "#projects",
      },

      {
        text: "Contact",
        url: "#contact",
      },
    ],
  },
  about: {
    greet: "Hi I'm",
    fname: "Mohammed",
    lname: "Kawuser",

    description: [
      "Frontend engineer with hands-on experience building responsive web applications using React, Vue, and modern JavaScript. I primarily work with React, Zustand, TanStack Query, and Tailwind CSS to build maintainable UI systems and data-driven interfaces.",
      "Experienced in integrating REST APIs, managing client-side and server state, and implementing reliable user flows such as cart, checkout, and order management in production applications.",
      "Focused on clean component architecture, responsive design, and predictable state management to build frontend systems that are scalable, maintainable, and easy to reason about.",
    ],
    aboutImg: "./src/assets/Image/mkf.png",
    socialDetails: [
      {
        product: "github",
        link: "https://github.com/mohammedkausar",
      },
      {
        product: "linkedin",
        link: "https://www.linkedin.com/in/mohammed-kawuser/",
      },
      {
        product: "email",
        link: `mailto:mohammedkawuser20@gmail.com`,
      },
    ],
  },
  skill: {
    title: "Skills",
    intro:
      "These are some of the technologies I use while building modern web applications and user interfaces. They help create responsive, maintainable, and scalable frontend systems. Each tool contributes to how features move from development into a reliable user experience in production.",
    others: "Other skills",
    devops: ["aws", "linux", "git", "docker", "python", "psql"],
    fe: ["html", "tailwind", "js", "react", "vue", "nuxt"],
    concepts: [
      {
        title: "",
        items: [
          {
            label: "State Management",
            value: "Zustand, Tanstack Query, Pinia",
          },
        ],
      },
    ],
  },

  projects: [
    {
      title: "SkyCast – Cloud-Native DevOps Data Pipeline",
      type: "Personal",
      shortDescription:
        "Event-driven, cloud-native pipeline focusing on automation, reliability, and infrastructure on AWS.",
      bullets: [
        "Designed and deployed a serverless pipeline using AWS Lambda, EventBridge, and S3 with least-privilege IAM roles",
        "Provisioned and managed PostgreSQL RDS with automated data loads and environment isolation",
        "Implemented CI/CD with GitHub Actions for automated deployment and configuration updates",
      ],
      tech: [
        "AWS",
        "Lambda",
        "EventBridge",
        "S3",
        "RDS",
        "IAM",
        "GitHub Actions",
        "Python",
        "pandas",
        "psycopg",
      ],
      links: [
        {
          label: "Source",
          url: "https://github.com/mohammedkausar/SkyCast",
          icon: "git",
        },
      ],
    },
    {
      title: "GatewayStack – Containerized API Gateway with CI/CD",
      type: "Personal",
      shortDescription:
        "Docker-based microservice deployment setup with an API gateway, automated builds, and CI/CD using GitHub Actions.",
      bullets: [
        "Designed a containerized microservice setup using Docker to run multiple backend services behind a centralized gateway",
        "Configured an API gateway layer to route requests between services and provide a unified entry point",
        "Implemented CI/CD pipelines with GitHub Actions to automatically build and deploy services on code updates",
        "Automated container builds and service startup using Docker Compose for consistent local and server environments",
        "Structured the repository to support scalable service addition and independent service deployment",
      ],
      tech: [
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "API Gateway",
        "Microservices",
        "Linux",
        "Git",
      ],
      links: [
        {
          label: "Source",
          url: "https://github.com/mohammedkausar/GatewayStack",
          icon: "git",
        },
      ],
    },
  ],
  experience: [
    {
      company: "ZakApps",
      role: "Frontend Developer",
      location: "Chennai, India",
      duration: "Jan 2022 – Jul 2025",
      points: [
        {
          title: "Smyths Toys – E-commerce Platform ",
          list: [
            "Built modular and reusable components using Vue.js and Nuxt.js to support scalable storefront features across multiple pages.",
            "Owned end-to-end implementation of order management, returns, and pre-order payment flows, handling API integration, state synchronization, and edge cases like failed payments and partial order updates.",
            "Designed and managed global state using Pinia, ensuring consistent cart behavior across SSR and client-side hydration without data mismatch issues.",
            "Worked with Nuxt SSR and hydration, resolving state inconsistencies between server-rendered and client-rendered UI to prevent cart and session issues.",
            "Optimized API interactions by reducing redundant requests and handling async flows efficiently, improving overall application responsiveness.",
            "Implemented resilient error handling for critical flows (checkout, payments, returns), ensuring graceful UI fallback and uninterrupted user experience.",
            "Developed responsive, mobile-first UI for product, cart, and checkout pages, ensuring consistent experience across devices.",
            "Integrated multiple backend services (cart, order, returns, payments), coordinating data flow across systems for seamless user transactions.",
            "Implemented cookie and session management for authentication and user tracking, ensuring compliance with consent requirements.",
          ],
          tech: ["HTML", "Tailwind CSS", "Vue.js", "Nuxt.js", "Pinia", "SSR"],
        },
        {
          title: "Smyths Analytics Dashboard",
          list: [
            "Designed and built a role-based internal dashboard to provide real-time data visualization and reporting for e-commerce operations",
            "Built a modern, responsive interface using shadcn/ui and Tailwind CSS. Created a library of reusable UI components to ensure the dashboard remains consistent and easy to scale",
            "Used Zustand for global state management, handling user sessions and application-wide UI states with minimal code and high performance",
            " Integrated REST APIs by combining Axios for data requests with TanStack Query to handle the frontend data flow, including automatic loading and error states",
            " Developed frontend logic to show or hide specific navigation links and data views based on user permissions (e.g., Store Manager vs. General Staff)",
          ],
          tech: ["HTML", "Tailwind CSS", "React", "Zustand", "Tanstack"],
        },
      ],
    },
  ],

  contact: {
    title: "Contact Me",
    description: "Feel free to reach out for work or collaboration.",
    fields: [
      {
        name: "name",
        label: "Name",
        placeholder: "Your name",
        type: "text",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "your@email.com",
        type: "email",
      },
      {
        name: "whatsapp",
        label: "WhatsApp Number",
        placeholder: "+91 98765 43210",
        type: "tel",
        hint: "Include country code (e.g. +91, +1)",
      },
      {
        name: "message",
        label: "Message",
        placeholder: "Your message",
        type: "textarea",
      },
    ],
    submitText: "Send message",
  },

  footer: {
    text: "Designed and developed by",
    author: "Mohammed Kawuser",
    copyrightSymbol: "©",
  },
};

export default data;
