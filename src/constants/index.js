import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring front-end web developer with a passion for creating engaging and dynamic web experiences. I have honed my skills in HTML, CSS, and JavaScript, and expanded my expertise to include Angular and React. My journey also includes working with Node.js and MongoDB, giving me a well-rounded understanding of both front-end and back-end development. I am enthusiastic about taking on new projects and challenges that focus on front-end development to further enhance my skills and contribute to innovative solutions.`;

export const ABOUT_TEXT = `As an aspiring front-end web developer, I specialize in crafting engaging and dynamic user interfaces. I am proficient in HTML, CSS, and JavaScript, with expertise in frameworks like Angular and React, which I prefer for its flexibility and efficiency. My full-stack skills extend to Node.js and MongoDB. Besides web development, I am passionate about web design and video editing, utilizing Adobe After Effects to bring creative visions to life. Eager to push the boundaries of front-end development, I continuously explore new projects and innovative ideas.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Exercise Lab",
    image: project1,
    description:
      "Discover Exercise Lab, the premier React Fitness App featuring over a thousand exercises, detailed info, and YouTube integration. Browse categories, view examples, and find related videos effortlessly!",
    technologies: ["HTML", "CSS", "React Js", "Material UI", "Rapid API"],
    link: "https://exerciselab.netlify.app/",
  },
  {
    title: "Weather Flex",
    image: project2,
    description:
      "Weather Flex app built with React.js, uses an API to fetch and display real-time weather data for any city. It provides a dynamic user interface to view current weather conditions, including temperature, humidity, and visibility.",
    technologies: ["HTML", "CSS", "React Js", "API"],
    link: "https://weather-flex-abhi.netlify.app/",
  },
  {
    title: "To Do App",
    image: project3,
    description:
      "The to-do app, built with React, ensures tasks persist across browser refreshes using local storage. Users can add, check off completed tasks, and track their progress seamlessly.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://todo-app-by-abhi.netlify.app/",
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Varanasi, Uttar Pradesh, IN ",
  phoneNo: "+91 9569790726",
  email: "abhishekay2003@gmail.com",
};
