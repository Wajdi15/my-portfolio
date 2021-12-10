/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Wajdi Mnasri",
  logo_name: "XVII",
  nickname: "wajdi",
  full_name: "Wajdi Mnasri",
  subTitle: "Web and Mobile Developer 🔥. Always learning.",
  resumeLink: "cv.pdf",
  mail: "mailto:wajdimn77@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Wajdi15",
  gmail: "wajdimn77@gmail.com",
  linkedin: "http://linkedin.com/in/wajdi-mnasri-0534511b3",
  twitter: "https://twitter.com/wajdimnasri17",
  instagram: "https://www.instagram.com/wajdimn_17/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#02569B",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: ["⚡ Experience hosting and managing websites"],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institut supérieur des études technologique",
      subtitle: "ISET SBZ",
      logo_path: "ISET.jpg",
      alt_name: "ISET",
      duration: "2019 - 2022",
      descriptions: [
        "⚡I'm currently pursuing my Licence in Information Technology.",
        "⚡ I have studied subjects like Angular, DBMS, Node.js, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
    },
    {
      title: "Baccalaureate",
      subtitle: "BAC",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2019",
      descriptions: [
        "⚡ I have studied technical Baccalaureate in the high school of Bir Elhfey",
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work And Internship",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Mobile Developer",
          company: "RIATICA",
          logo_path: "valora.jpg",
          duration: "Jun 2020 - Aug 2021",
          location: "Office",
          description: `
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used React Native.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to build Mobile App with React Native, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "wajdi.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Burger Builder",
      description:
        "A Web App that helps clients to build there own burger in resto.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Motv",
      description:
        "This Mobile App is for find and tracking movies & series on Android and IOS.",
      languages: [
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Expo",
          iconifyClass: "logos-expo",
        },
        {
          name: "ReactNative",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "Telegram Bot",

      description:
        "This is Telegram Bot. This will get the RSI of crypto from Trading View.",
      languages: [
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Puppeteer",
          iconifyClass: "logos-puppeteer",
        },
      ],
    },
    {
      id: "3",
      name: "To Do List",

      description:
        "Organize, plan, and collaborate on tasks and projects with To Do List app.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "express",
          iconifyClass: "logos-express",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      description: "My Web Site :) ",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "Chat Application",
      description: "A simple Chat application.",
      languages: [
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "express",
          iconifyClass: "logos-express",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
