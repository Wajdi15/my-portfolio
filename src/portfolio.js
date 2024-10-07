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
  nickname: "Wajdi",
  full_name: "Wajdi Mnasri",
  subTitle: " Software Engineer🔥. Always learning.",
  resumeLink: "cv.pdf",
  mail: "mailto:wajdimn77@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/Wajdi15",
  gmail: "wajdimn77@gmail.com",
  linkedin: "http://linkedin.com/in/wajdi-mnasri-0534511b3",
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
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in data analysis and manipulation using Python and Pandas",
        "⚡ Building machine learning models for predictive analytics",
        "⚡ Image processing and computer vision using OpenCV",
        "⚡ Data visualization with Matplotlib",
        "⚡ Working with databases and managing large datasets",
        "⚡ Implementing data pipelines and automating workflows"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            "color": "#3776AB"
          }
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            "color": "#150458"
          }
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            "color": "#FF6F00"
          }
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            "color": "#5C3EE8"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            "color": "#439743"
          }
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            "color": "#E94E32"
          }
        }
      ]
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
      title: " ISITCOM ,Sousse Tunisia",
      subtitle: "ISITCOM",
      logo_path: "isitcom.png",
      alt_name: "ISITCOM",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Engineering Degree in Teleinformatics.",
        // "⚡ I have studied subjects like Angular, DBMS, Node.js, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
    },
    
    {
      title: "ISET ,Sidi Bouzid Tunisia",
      subtitle: "ISET SBZ",
      logo_path: "ISET.jpg",
      alt_name: "ISET",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ License in Web Development and Multimedia.",
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
          title: "Data Scientist",
          company: "Womia",
          logo_path: "valora.jpg",
          duration: "Jul 2024 - Present",
          location: "Office",
          description: `
            Built ArtFun Plus Report, a desktop app integrating with the ARTFUN+
            application to retrieve CSV files containing heart IRM (Magnetic Resonance
            Imaging) data.
            Cleaned and processed data to improve precision, quality, and final output.
            Designed a custom database schema for optimal data retrieval.
            Generated a comprehensive folder with detailed reports on all studies as the
            final output.
          `,
  
          color: "#c3f584",
        },
        {
          title: "Full Stack Developer",
          company: "SMART WMN",
          logo_path: "valora.jpg",
          duration: "Aug 2022 - Present",
          location: "Office",
          description: `
            Contributed as a front-end developer on XQual, a test management web
            application, at SMARTWM.Developed features using jQuery widgets and built a Node.js proxy to facilitate local test environment usage.
          `,
  
          color: "#c3f584",
        },
        {
          title: "Full Stack Developer",
          company: "Smart Team Group",
          logo_path: "valora.jpg",
          duration: "Fev 2022 - Jul 2022",
          location: "Remote",
          description: `
            Created an intelligent interactive component for data imports, addressing
            challenges during the initial import phase in business support software
            solutions.
            Integrated heterogeneous data from other software or Excel files into the
            new solution, handling both syntactic (encoding, postcode format, address,
            telephone number format) and semantic issues (deduplication, spelling
            errors, matching with reference data).
            Implemented syntax checking and managed the import workflow.
            Created user interaction using a JS spreadsheet (Treegrid) as the interface.
          `,
  
          color: "#0071C5",
        },
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
  
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "My Projects",
  description:
    "My experience is in building full-stack web applications using the MERN stack and developing mobile apps with React Native. I have also worked with technologies like Python for data analysis and machine learning. Below are some of my key projects:",
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
      id: "6",
      name: "Real Estate Marketplace Web App",
      description: "Modern Real Estate Marketplace with react MERN",
      languages: [
        {
          name: "Node",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "React",
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
    {
      id: "8",
      name: "Zaiemer View",
      description:
        "The aim of the project is to develop a model for predicting the risk of zaiemer disease.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "5",
      name: "Football analysis App",
      description: "A simple Chat application.",
      languages: [
        {
          name: "python",
          iconifyClass: "logos-python",
        },
        {
          name: "opencv",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "1",
      name: "Motv",
      description:
        "This Mobile App is for finding and tracking movies & series on Android and IOS.",
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
      id: "4",
      name: "personal-portfolio",
      description: "My Web Site :)",
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
      id: "0",
      name: "Burger Builder",
      description:
        "A Web App that helps clients to build their own burger in resto.",
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
      id: "7",
      name: "A management application food store resources",
      description: "",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
  ],
}

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
