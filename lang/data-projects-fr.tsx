/**
 * Contient toutes les informations relatives aux projets.
 */

import womenSafetyImg from "../public/img/projects/women_safety_portal.png";
import webCheckerImg from "../public/img/projects/web_accessibility_analyzer.png";
import chatBoxImg from "../public/img/projects/scalable_chat_box.png";
import neuroshellImg from "../public/img/projects/neuroshell_terminal.png";
import fingerFiascoImg from "../public/img/projects/finger_fiasco.png";

const projects = [
  {
    id: 1,
    title: "Portail de sécurité pour les femmes (ONETAP)",
    description:
      "Portail de sécurité SOS avec alertes en un clic, suivi de localisation en temps réel et notifications automatiques. Démo live : https://onetapapp.netlify.app/",
    image_path: womenSafetyImg,
    link: "https://github.com/shubhu02511",
    color: "#b91c1c", // Rouge Securité
  },
  {
    id: 2,
    title: "Analyseur d'accessibilité (WebChecker)",
    description:
      "Un outil d'audit web qui analyse les sites pour les problèmes de SEO/accessibilité et fournit des guides de correction rapide.",
    image_path: webCheckerImg,
    link: "https://github.com/shubhu02511",
    color: "#0f766e", // Vert Auditeur
  },
  {
    id: 3,
    title: "Boîte de discussion évolutive (Scalable Chat Box)",
    description:
      "Un système de chat en temps réel multi-serveurs synchronisé avec Redis Pub/Sub et Socket.io.",
    image_path: chatBoxImg,
    link: "https://github.com/shubhu02511",
    color: "#6d28d9", // Violet Chat
  },
  {
    id: 4,
    title: "NeuroShell",
    description:
      "Un terminal d'IA C++ natif Windows combinant l'exécution du shell avec la planification de tâches par agent LLM.",
    image_path: neuroshellImg,
    link: "https://github.com/shubhu02511/neuroshell1",
    color: "#0ea5e9", // Bleu Cyber
  },
  {
    id: 5,
    title: "Finger Fiasco",
    description:
      "Un jeu de dactylo web minimaliste et rapide avec WPM en direct, précision et scores locaux. Démo live : https://fingerfeso.netlify.app/",
    image_path: fingerFiascoImg,
    link: "https://github.com/shubhu02511/finger_fiasco",
    color: "#d97706", // Orange Jeu
  },
];

export default projects;

