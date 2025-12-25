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
        text: "Projects",
        url: "#projects",
      },
      {
        text: "Experience",
        url: "#experience", // optional
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
    current: "Currently practicing DevOps & Cloud Engineering",
    description: [
      "DevOps-focused engineer with hands-on practice in cloud setup, Linux systems, and CI/CD pipelines. I work primarily with Linux, AWS, and automated deployment workflows to build simple, maintainable infrastructure.",

      "I also bring prior frontend experience, which helps me understand how applications are built before they are deployed and operated in production.",

      "I prefer keeping systems simple and clear, and I focus on building setups that are easy to understand and maintain.",
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
      "These are some of the skills I use while working with application setups and infrastructure in real environments. They help keep systems reliable and deployments consistent. Each skill contributes to how applications move from development to a live setup. Together, they help turn working code into systems that run smoothly and are easy to maintain.",
    others: "Other skills",
    devops: ["aws", "linux", "git", "docker", "python", "psql"],
    fe: ["html", "tailwind", "js", "react"],
    concepts: [
      {
        title: "Tools and Concepts",
        items: [
          { label: "CI/CD", value: "GitHub Actions" },
          { label: "Monitoring", value: "Cloudwatch" },
          { label: "AWS services", value: "IAM, EC2, S3" },
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
      title: "Smyths Toys – E-commerce Platform",
      type: "Work",
      shortDescription:
        "Production e-commerce frontend for a high-traffic retail platform.",
      bullets: [
        "Integrated REST APIs for Order management, cart, and pre-order payment flows",
        "Implemented payment UI with proper state management and error handling",
        "Improved frontend reliability by handling API failures and edge cases",
      ],
      tech: ["HTML", "Tailwind CSS", "Vue.js", "Nuxt.js", "Pinia"],
      links: [
        {
          label: "Live",
          url: "https://www.smythstoys.com",
          icon: "link",
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
        "Developed and maintained customer-facing features for a high-traffic e-commerce website used across multiple regions",
        "Worked closely with production release cycles and observed system reliability considerations while contributing to a live e-commerce platform",
        "Integrated backend REST APIs to power order management, and pre-order payment workflows",
        "Worked on the orders and payment UI, handling edge cases such as API failures, invalid responses",
        "Implemented proper loading states, error messages, and fallback UI to ensure consistent user experience under real-world traffic conditions",
        "Collaborated with backend engineers, QA, and product teams to deliver features aligned with business and release requirements",
        "Worked in a sprint-based Agile environment, contributing to planning, reviews, and timely delivery of features",
      ],
      tech: ["HTML", "Tailwind CSS", "Vue.js", "Nuxt.js", "Pinia"],
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
