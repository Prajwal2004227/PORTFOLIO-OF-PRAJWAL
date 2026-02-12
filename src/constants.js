// ==========================================
// 1. SKILLS SECTION LOGOS
// ==========================================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// ==========================================
// 2. EXPERIENCE SECTION LOGOS
// ==========================================
import webverseLogo from './assets/company_logo/leepra.jpg';
import agcLogo from './assets/company_logo/Shadow Fox.jpg';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// ==========================================
// 3. EDUCATION SECTION LOGOS
// ==========================================
import glaLogo from './assets/education_logo/NHCE.jpg';
import bsaLogo from './assets/education_logo/CPC.jpg';
import vpsLogo from './assets/education_logo/SREMHS.jpeg';

// ==========================================
// 4. PROJECT SECTION LOGOS
// ==========================================
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';

// ==========================================
// DATA EXPORTS
// ==========================================

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "QUALITY ANALYST",
    company: "Leepra Technologies Pvt Ltd",
    date: "March 2023 - June 2023",
    desc: "At Leepra, I worked on a Quality Assurance system that automated the inspection of electronic boards (PCBs). We moved beyond simple manual checks by implementing an AI Computer Vision pipeline that could detect minute errors—like scratches, component mismatches, or structural damage—in real-time. We also integrated an LLM layer to convert raw detection data into actionable, human-readable audit reports.",
    skills: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "LLMs",
      "SQL",
      "StreamLit",
      "Matplotlib",
      "Pandas",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Shadow Fox",
    date: "February 2024 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "New Horizon College of Engineering, Bengaluru",
    date: "November 2023 - June 2026",
    grade: "8.77 CGPA",
    desc: "I am completing my Bachelor of Engineering (BE) in Computer Science and Engineering from NHCE, Bengaluru. I have gained a strong foundation in programming, software development, and core CS principles like DSA, DBMS, and Web Development.",
    degree: "Bachelor of Engineering - BE (Computer Science)",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "CPC College, Mysore",
    date: "September 2020 - June 2023",
    grade: "8.8 CGPA",
    desc: "I completed my Diploma in Electrical and Electronics Engineering from C.P.C College, Mysore. My studies focused on computing technology and practical hardware-software integration.",
    degree: "Diploma in Electrical and Electronics Engineering",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Shree Ramakunjeshwara English Medium High School, Manglore",
    date: "Apr 2017 - March 2020",
    grade: "91.04%",
    desc: "I completed my class 10 education from Shree Ramakunjeshwara English Medium High School, Manglore, under the STATE board, where I studied Science and Mathematics with Computer Science.",
    degree: "STATE Board(X) - Science and Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description: "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data including profile stats and contributions.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Prajwal2004227",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description: "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. Features detailed results and profile statistics.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prajwal2004227",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description: "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prajwal2004227",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description: "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features for developers.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/Prajwal2004227",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description: "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks with simple notifications.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/Prajwal2004227",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description: "The official website for Webverse Digital, a creative digital marketing agency. Features visually appealing animations and a clean design.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/Prajwal2004227",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Automated Pronunciation System",
    description: "PronouncePro AI is a browser-based, multilingual platform utilizing the Google Gemini API to provide real-time, phoneme-level error detection.",
    image: cmLogo,
    tags: ["React JS", "TypeScript.js", "Tailwind CSS", "Firebase", "API"],
    github: "https://github.com/Prajwal2004227",
    webapp: "https://pronounce-pro-ai-automatic-pronunci.vercel.app/",
  },
  {
    id: 7,
    title: "Image Search App",
    description: "A React.js-based image search application that allows users to search and download high-quality images using external APIs.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description: "An efficient background removal app built with React.js and API integration. Users can upload any image and download a transparent version.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];