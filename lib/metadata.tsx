/**
 * Metadatas
 */

import type { Metadata } from "next";

const metadataInfos: Metadata = {
  title: "Shubham Chaurasiya Portfolio | Software Developer",
  description:
    "Portfolio of Shubham Chaurasiya, a passionate Computer Science Engineering student and Web/DevOps Developer. Explore my projects, skills, and academic background.",
  keywords: [
    "Shubham Chaurasiya",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "DevOps",
    "Python",
    "TypeScript",
    "C++",
    "software engineer",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD",
  ],
  authors: [{ name: "Shubham Chaurasiya", url: "https://github.com/shubhu02511" }],
  creator: "Shubham Chaurasiya",
  publisher: "Shubham Chaurasiya",
  openGraph: {
    title: "Shubham Chaurasiya Portfolio | Software Developer",
    description:
      "Discover the portfolio of Shubham Chaurasiya: web apps with Next.js, DevOps deployments, and software engineering projects.",
    url: "https://shubhu02511.github.io",
    siteName: "Shubham Chaurasiya Portfolio",
    images: [
      {
        url: "https://shubhu02511.github.io/preview.png",
        width: 1856,
        height: 928,
        alt: "Preview of Shubham Chaurasiya's developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "favicon.png",
  },
  metadataBase: new URL("https://shubhu02511.github.io"),
};

export default metadataInfos;