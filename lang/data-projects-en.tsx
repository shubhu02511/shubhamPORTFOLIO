/**
 * Contient toutes les informations relatives au projets.
 */

import womenSafetyImg from "../public/img/projects/women_safety_portal.png";
import webCheckerImg from "../public/img/projects/web_accessibility_analyzer.png";
import chatBoxImg from "../public/img/projects/scalable_chat_box.png";
import neuroshellImg from "../public/img/projects/neuroshell_terminal.png";
import fingerFiascoImg from "../public/img/projects/finger_fiasco.png";

const projects = [
  {
    id: 1,
    title: "Women Safety Portal (ONETAP)",
    description:
      "SOS emergency portal with one-tap alerts, live location tracking, and auto-SMS/email notifications. Live Demo: https://onetapapp.netlify.app/",
    image_path: womenSafetyImg,
    link: "https://github.com/shubhu02511",
    color: "#b91c1c", // Red Safety
  },
  {
    id: 2,
    title: "Accessibility Analyzer (WebChecker)",
    description:
      "A web auditing tool that scans websites for SEO/accessibility issues and provides quick-fix guides.",
    image_path: webCheckerImg,
    link: "https://github.com/shubhu02511",
    color: "#0f766e", // Teal Auditor
  },
  {
    id: 3,
    title: "Scalable Chat Box",
    description:
      "A real-time multi-server chat system synchronized using Redis Pub/Sub and Socket.io.",
    image_path: chatBoxImg,
    link: "https://github.com/shubhu02511",
    color: "#6d28d9", // Purple Chat
  },
  {
    id: 4,
    title: "NeuroShell",
    description:
      "A Windows-native C++ AI terminal combining command shell execution with LLM agent task planning.",
    image_path: neuroshellImg,
    link: "https://github.com/shubhu02511/neuroshell1",
    color: "#0ea5e9", // Cyber Blue
  },
  {
    id: 5,
    title: "Finger Fiasco",
    description:
      "A fast-paced minimalist web typing game featuring live WPM, accuracy tracking, and local high scores. Live Demo: https://fingerfeso.netlify.app/",
    image_path: fingerFiascoImg,
    link: "https://github.com/shubhu02511/finger_fiasco",
    color: "#d97706", // Amber Orange Game
  },
];

export default projects;
