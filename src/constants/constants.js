import { RiNodejsLine, RiHtml5Line, RiCss3Line, RiNextjsLine, RiReactjsLine, RiTailwindCssLine, RiBootstrapLine, RiGithubLine } from "react-icons/ri"
import { TbBrandPython, TbBrandAdobeXd, TbBrandFigma, TbSquareLetterM, TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb"
import { SiRedux, SiScikitlearn, SiJupyter, SiCssmodules, SiExpress } from "react-icons/si"
import { IoColorPaletteOutline, IoLogoSass } from "react-icons/io5"
import { GiNeedleJaws } from "react-icons/gi"
import { Code, Box, Palette, Wrench, Cloud, Server, TestTube } from "lucide-react"

export const STACK = [
  {
    tech: "Languages",
    logo: Code,
    glow: "99,102,241",
    accent: "from-indigo-500 to-violet-500",
    dot: "#818cf8",
    items: [
      { id: "js",  name: "Javascript", logo: RiNodejsLine,   desc: "Primary language for all front-end logic, async operations, and DOM manipulation.", level: 95 },
      { id: "py",  name: "Python",     logo: TbBrandPython,  desc: "Used for machine learning pipelines, data analysis, and scripting.", level: 80 },
      { id: "html",name: "HTML",       logo: RiHtml5Line,    desc: "Semantic, accessible markup following WCAG and modern HTML5 standards.", level: 98 },
      { id: "css", name: "CSS",        logo: RiCss3Line,     desc: "Custom styling with modern CSS including grid, custom properties, and animations.", level: 92 },
    ],
  },
  {
    tech: "Frameworks",
    logo: Box,
    glow: "6,182,212",
    accent: "from-cyan-500 to-sky-400",
    dot: "#38bdf8",
    items: [
      { id: "react",    name: "React JS",          logo: RiReactjsLine,        desc: "Core framework for building component-driven, declarative UIs at scale.", level: 94 },
      { id: "next",     name: "Next JS",            logo: RiNextjsLine,         desc: "Full-stack React framework with SSR, SSG, API routes, and edge rendering.", level: 88 },
      { id: "framer",   name: "Framer Motion",      logo: TbBrandFramerMotion,  desc: "Production-grade animation library for physics-based and scroll-driven motion.", level: 85 },
      { id: "redux",    name: "Redux",              logo: SiRedux,              desc: "Predictable state container for managing complex application data flows.", level: 78 },
      { id: "sklearn",  name: "Scikit-learn",       logo: SiScikitlearn,        desc: "ML library used for classification, regression, and clustering in Python.", level: 72 },
      { id: "jupyter",  name: "Jupyter Notebook",   logo: SiJupyter,            desc: "Interactive environment for data exploration and ML model prototyping.", level: 75 },
    ],
  },
  {
    tech: "Styling",
    logo: Palette,
    glow: "236,72,153",
    accent: "from-pink-500 to-rose-400",
    dot: "#f472b6",
    items: [
      { id: "tw",   name: "Tailwind CSS",  logo: RiTailwindCssLine, desc: "Utility-first CSS framework. Primary styling tool for all recent projects.", level: 96 },
      { id: "bs",   name: "Bootstrap",    logo: RiBootstrapLine,   desc: "Component library used for rapid prototyping and grid-based layouts.", level: 85 },
      { id: "sass", name: "SASS",         logo: IoLogoSass,        desc: "CSS pre-processor for variables, nesting, and reusable style modules.", level: 82 },
      { id: "csm",  name: "CSS Modules",  logo: SiCssmodules,      desc: "Scoped styling solution for React components with zero class collisions.", level: 88 },
      { id: "mui",  name: "Material UI",  logo: TbSquareLetterM,   desc: "Google's design system for building accessible, consistent React UIs.", level: 76 },
    ],
  },
  {
    tech: "Tools",
    logo: Wrench,
    glow: "99,102,241",
    accent: "from-indigo-400 to-blue-500",
    dot: "#818cf8",
    items: [
      { id: "gh",    name: "GitHub",    logo: RiGithubLine,    desc: "Version control and collaboration. Used for CI/CD, PRs, and open source.", level: 92 },
      { id: "vsc",   name: "VS Code",   logo: TbBrandVscode,   desc: "Primary IDE with custom extensions for formatting, linting, and debugging.", level: 97 },
      { id: "figma", name: "Figma",     logo: TbBrandFigma,    desc: "Design and prototyping tool. Used for component design and design handoff.", level: 80 },
      { id: "xd",    name: "Adobe XD",  logo: TbBrandAdobeXd,  desc: "Legacy design tool used for wireframing and UX flows in earlier projects.", level: 70 },
    ],
  },
  {
    tech: "Backend",
    logo: Server,
    glow: "234,179,8",
    accent: "from-yellow-500 to-amber-400",
    dot: "#facc15",
    items: [
      { id: "node",   name: "Node JS",    logo: RiNodejsLine, desc: "Server-side JS runtime for building fast, scalable network applications.", level: 78 },
      { id: "express",name: "Express JS", logo: SiExpress,    desc: "Minimal Node.js framework for REST API development and middleware routing.", level: 75 },
      { id: "rest",   name: "REST API",   logo: Cloud,         desc: "RESTful API design and consumption — fetch, axios, auth headers, and CRUD.", level: 85 },
    ],
  },
  {
    tech: "Testing",
    logo: TestTube,
    glow: "251,146,60",
    accent: "from-orange-400 to-amber-500",
    dot: "#fb923c",
    items: [
      { id: "wcag", name: "WCAG Contrast", logo: IoColorPaletteOutline, desc: "Accessibility contrast testing to ensure WCAG AA/AAA compliance across all UIs.", level: 88 },
      { id: "jaws", name: "JAWS",          logo: GiNeedleJaws,           desc: "Screen reader used to test keyboard navigation and ARIA landmark support.", level: 72 },
    ],
  },
]