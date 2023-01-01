const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "#",
  title: "Afif",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Afif Hibatullah",
  role: "Full Stack Engineer",
  description:
    "Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/afif-hibatullah",
    github: "https://github.com/afifhibatullahh",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Enterprise Resource Planning",
    description:
      "Enterprise resource planning (ERP) is a platform companies use to manage and integrate the essential parts of their businesses. My team and I created features in the form of buying and selling, multi-company, licensing, accounting, products, stock, and so on",
    stack: ["JavaScript", "Material UI", "React", "CodeIgniter4"],
    sourceCode: "#",
    livePreview: "#",
  },
  {
    name: "Laundry App",
    description:
      "I build a mobile application that can provide a laundry business to provide services online to customers.",
    stack: ["React Native", "JavaScript", "Laravel", "Google Maps API"],
    sourceCode: "#",
    livePreview: "#",
  },
  {
    name: "Content Management System",
    description:
      "I've made cms websites several times using laravel or codeigniter",
    stack: ["Laravel", "CodeIgniter", "Bootstrap"],
    sourceCode: "#",
    livePreview: "#",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Native",
  "Redux",
  "Flutter",
  "Material UI",
  "Bootstrap",
  "Git",
  "PHP",
  "Node JS",
  "Figma",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "afifhibatullah59@gmail.com",
};

export { header, about, projects, skills, contact };
