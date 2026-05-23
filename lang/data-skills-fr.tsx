/**
 * Contient toutes les informations relatives aux compétences.
 */

import dockerImg from "../public/img/skills/docker.svg";
import gitImg from "../public/img/skills/git.svg";
import cppImg from "../public/img/skills/cpp.svg";
import cImg from "../public/img/skills/c.svg";
import reactImg from "../public/img/skills/react.svg";
import nodeImg from "../public/img/skills/node.svg";
import typescriptImg from "../public/img/skills/typescript.svg";
import pythonImg from "../public/img/skills/python.svg";

// New custom icons
import htmlImg from "../public/img/skills/html.svg";
import cssImg from "../public/img/skills/css.svg";
import javascriptImg from "../public/img/skills/javascript.svg";
import mongodbImg from "../public/img/skills/mongodb.svg";
import mysqlImg from "../public/img/skills/mysql.svg";
import awsImg from "../public/img/skills/aws.svg";
import kubernetesImg from "../public/img/skills/kubernetes.svg";
import jenkinsImg from "../public/img/skills/jenkins.svg";
import linuxImg from "../public/img/skills/linux.svg";

const skills = [
  {
    id: 1,
    title: "Programmation",
    subSkills: [
      {
        name: "C",
        image: cImg,
      },
      {
        name: "C++",
        image: cppImg,
      },
      {
        name: "Python",
        image: pythonImg,
      },
    ],
  },
  {
    id: 2,
    title: "Dév Frontend",
    subSkills: [
      {
        name: "HTML5",
        image: htmlImg,
      },
      {
        name: "CSS3",
        image: cssImg,
      },
      {
        name: "JavaScript",
        image: javascriptImg,
      },
    ],
  },
  {
    id: 3,
    title: "Bases de données",
    subSkills: [
      {
        name: "MySQL",
        image: mysqlImg,
      },
      {
        name: "MongoDB",
        image: mongodbImg,
      },
    ],
  },
  {
    id: 4,
    title: "Dév Backend",
    subSkills: [
      {
        name: "TypeScript",
        image: typescriptImg,
      },
      {
        name: "React & Next.js",
        image: reactImg,
      },
      {
        name: "Node.js",
        image: nodeImg,
      },
    ],
  },
  {
    id: 5,
    title: "DevOps & Cloud",
    subSkills: [
      {
        name: "Linux",
        image: linuxImg,
      },
      {
        name: "Docker",
        image: dockerImg,
      },
      {
        name: "Kubernetes",
        image: kubernetesImg,
      },
    ],
  },
  {
    id: 6,
    title: "Outils & Systèmes",
    subSkills: [
      {
        name: "Git & GitHub",
        image: gitImg,
      },
      {
        name: "Jenkins",
        image: jenkinsImg,
      },
      {
        name: "AWS Cloud",
        image: awsImg,
      },
    ],
  },
];

export default skills;

