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
    "I have over one years experience working with Javascript. While at school I also got experience creating projects by making an app on my integrated development environment. At my position I developed apps to help others work more efficiently with their computer.",
  resume: "/Resume-Afif-Hibatullah.pdf",
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
    stack: ["JavaScript", "Material UI", "React", "CodeIgniter4", "PWA"],
    sourceCode: "#",
    livePreview: "https://erp-test.nezucode.com/",
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
  email: "afifhibatullah59@gmail.com",
};

export { header, about, projects, skills, contact };
