/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aman Kumar Yadav",
  title: "Hi all, I'm Aman",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 skilled in building scalable web applications with React.js / Node.js / Express.js / MongoDB and experienced with real-time systems, payment integrations, and AI-powered features."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mT5G5Gl0t7zdTsgEYlk1D-o53MzW8Y9F/view?usp=sharing", // TODO: Add your resume link here
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aky2004",
  linkedin: "https://www.linkedin.com/in/aky04",
  gmail: "akyadav113114@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  instagram: "https://www.instagram.com/",
  leetcode: "https://leetcode.com/u/aky2004/",
  // Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO BUILDS SCALABLE & PERFORMANT WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build highly interactive and responsive Front end / User Interfaces using React.js"
    ),
    emoji("⚡ Develop robust RESTful APIs and backend services with Node.js & Express.js"),
    emoji(
      "⚡ Design and optimize MongoDB & SQL databases for high-performance applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "devicon-redux-original"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "devicon-express-original"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "devicon-postman-plain"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "devicon-mongodb-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/lpuLogo.png"),
      subHeader: "B.Tech – Computer Science and Engineering",
      duration: "August 2023 - Present",
      desc: "CGPA: 8.85",
      descBullets: [
        "Phagwara, Punjab"
      ]
    },
    {
      schoolName: "Army Public School",
      logo: require("./assets/images/apsLogo.png"),
      subHeader: "Intermediate (Class XII)",
      duration: "April 2022 – March 2023",
      desc: "Percentage: 87.6%",
      descBullets: ["Gwalior, M.P."]
    },
    {
      schoolName: "Army Public School",
      logo: require("./assets/images/apsLogo.png"),
      subHeader: "Matriculation (Class X)",
      duration: "April 2020 – March 2021",
      desc: "Percentage: 88.4%",
      descBullets: ["Gwalior, M.P."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React.js, HTML, CSS)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (Node.js, Express.js, Java)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases (MongoDB, MySQL, PostgreSQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "API Development & Integration",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & Tools (Git, Docker, Postman)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section — Using for Training / Experience

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Job Simulation",
      company: "Forage",
      companylogo: require("./assets/images/forageLogo.png"),
      date: "Nov 2025 – Apr 2026",
      desc: "Simulated a real-world enterprise fintech backend (Midas Core) using Java & Spring Boot.",
      descBullets: [
        "Integrated 3 external systems — Kafka, H2/JPA & a REST Incentive API — across 5 progressive tasks",
        "Engineered a Kafka listener to consume, validate & persist transactions via Spring Data JPA",
        "Built a production-style REST controller with JSON serialized responses and fallback logic"
      ]
    },
    {
      role: "Full-Stack Development",
      company: "CipherSchools",
      companylogo: require("./assets/images/cipherSchoolsLogo.png"),
      date: "Jun 2025 – Jul 2025",
      desc: "Mastered the Software Development Lifecycle by architecting 'ChronoNotes', a production-ready Notes App.",
      descBullets: [
        "Engineered optimized MongoDB schemas with Text Indexing and Debouncing strategies",
        "Integrated stateless JWT + Bcrypt authentication for data privacy",
        "Developed a high-performance, mobile-first UI with React.js using Code Splitting and Memoization"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on — Using for Projects section

const bigProjects = {
  title: "Projects",
  subtitle: "FULL-STACK APPLICATIONS I'VE BUILT FROM SCRATCH",
  projects: [
    {
      image: require("./assets/images/taskflowLogo.png"),
      projectName: "TaskFlow – Enterprise-Grade Task Management",
      projectDesc: "Architected a scalable SaaS-style project management system with 4-level RBAC (Admin, Manager, Member, Guest), handling multi-workspace architecture and securing endpoints with JWT & OAuth. Designed 12+ MongoDB collections with compound indexing and built advanced task views (Kanban, Gantt, Timeline) backed by optimized aggregation pipelines, reducing query execution time by ~40% and improving workflow tracking efficiency by 45%. Built a real-time collaboration engine using Socket.io, enabling instant task updates, presence indicators, and threaded discussions across 50+ concurrent users with sync latency under 200ms.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "Cloudinary"],
      highlights: [
        {stat: "~40%", label: "Faster Query Execution"},
        {stat: "50+", label: "Concurrent Users via Socket.io"},
        {stat: "12+", label: "MongoDB Collections"}
      ],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aky2004"
        }
      ]
    },
    {
      image: require("./assets/images/edvoraLogo.png"),
      projectName: "Edvora – Full-Stack EdTech Learning Platform",
      projectDesc: "Built a full-stack EdTech platform supporting end-to-end course lifecycle (creation, enrolment, ratings) with role-based access for Students/Instructors, integrating Razorpay payment gateway with webhook verification ensuring 100% transactional integrity across 500+ orders. Developed an AI Virtual Teacher module that generates topic-based automated teaching videos and transcripts, effectively reducing manual content creation effort by ~60%. Optimized frontend performance using Redux state management and lazy loading, improving page responsiveness by ~45% and reducing average course fetch time by ~35% via optimized MongoDB indexing.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Razorpay", "Cloudinary"],
      highlights: [
        {stat: "500+", label: "Orders with 100% Integrity"},
        {stat: "~60%", label: "Reduced Content Creation Effort"},
        {stat: "~45%", label: "Improved Page Responsiveness"}
      ],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aky2004"
        }
      ]
    },
    {
      image: require("./assets/images/chronoNotesLogo.png"),
      projectName: "ChronoNotes – Intelligent Note-Taking Web App",
      projectDesc: "Developed a modern, privacy-focused note-taking application designed for speed and simplicity. Implemented a robust rich-text editor supporting markdown, code blocks, and real-time syncing. Engineered a tag-based categorization system and powerful search functionality, allowing users to find notes instantly. Built with a responsive, offline-first approach using local storage and service workers.",
      techStack: ["React.js", "Firebase", "Redux", "Material UI", "Draft.js"],
      highlights: [
        {stat: "<100ms", label: "Search Latency"},
        {stat: "Offline", label: "First Architecture"},
        {stat: "Rich Text", label: "Formatting Engine"}
      ],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aky2004"
        }
      ]
    },
    {
      image: require("./assets/images/devConnectLogo.png"),
      projectName: "DevConnect – Social Network for Developers",
      projectDesc: "Created a niche social networking platform tailored specifically for software developers. Features include code snippet sharing with syntax highlighting, GitHub repository integration for profile building, and a curated trending topics feed. Implemented real-time notifications and messaging using WebSockets. Scaled the backend to handle a simulated user base of 10,000+ with efficient database query optimization.",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Socket.io"],
      highlights: [
        {stat: "10k+", label: "Simulated User Load"},
        {stat: "Real-time", label: "Feed & Messaging"},
        {stat: "GitHub", label: "Seamless Integration"}
      ],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aky2004"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications "),
  subtitle:
    "Professional certifications that validate my technical expertise",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle:
        "Completed AWS Cloud Practitioner Essentials certification from Amazon Web Services (Apr 2026).",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "OCI DevOps Professional",
      subtitle:
        "Earned Oracle Cloud Infrastructure DevOps Professional certification (Sep 2025).",
      image: require("./assets/images/oracleLogo.png"),
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Full-Stack Development Using MERN",
      subtitle:
        "Completed Full-Stack Development Using MERN certification from CipherSchools (Jul 2025).",
      image: require("./assets/images/cipherSchoolsLogo.png"),
      imageAlt: "CipherSchools Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};




const contactInfo = {
  title: emoji("Contact Me "),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7223912342",
  email_address: "akyadav113114@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable
};
