"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiDribbble,
  SiBehance,
  SiFacebook,
  SiGoogleads,
  SiMailchimp,
  SiHubspot,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiGoogletagmanager,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import ShineBorder from "./ui/ShineBorder";
import "./Skills.css";

// Each icon carries its real brand color, applied at all times (not just on
// hover) via the --icon-color custom property.
const categories = [
  {
    title: "Software Development",
    subtitle: "to build robust, scalable apps",
    icons: [
      { Icon: TbBrandVscode, label: "VS Code", color: "#007ACC" },
      { Icon: SiGit, label: "Git", color: "#F05033" },
      { Icon: SiGithub, label: "GitHub", color: "#181717" },
      { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
      { Icon: SiExpress, label: "Express", color: "#2D3748" },
      { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
    ],
  },
  {
    title: "Website Development",
    subtitle: "to design and ship fast websites",
    icons: [
      { Icon: SiReact, label: "React", color: "#61DAFB" },
      { Icon: SiNextdotjs, label: "Next.js", color: "#111111" },
      { Icon: SiJavascript, label: "JavaScript", color: "#F0B90B" },
      { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
      { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
      { Icon: SiCss, label: "CSS3", color: "#1572B6" },
      { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
    ],
  },
  {
    title: "Graphic Designing",
    subtitle: "to craft visuals and brand identity",
    icons: [
      { Icon: SiFigma, label: "Figma", color: "#A259FF" },
      { Icon: DiPhotoshop, label: "Photoshop", color: "#31A8FF" },
      { Icon: DiIllustrator, label: "Illustrator", color: "#FF9A00" },
      { Icon: SiDribbble, label: "Dribbble", color: "#EA4C89" },
      { Icon: SiBehance, label: "Behance", color: "#1769FF" },
    ],
  },
  {
    title: "Digital Marketing",
    subtitle: "to plan campaigns and grow reach",
    icons: [
      { Icon: SiFacebook, label: "Meta / Facebook", color: "#1877F2" },
      { Icon: SiGoogleads, label: "Google Ads", color: "#4285F4" },
      { Icon: SiMailchimp, label: "Mailchimp", color: "#241C15" },
      { Icon: SiHubspot, label: "HubSpot", color: "#FF7A59" },
    ],
  },
  {
    title: "SEO",
    subtitle: "to research, rank, and measure",
    icons: [
      { Icon: SiGoogleanalytics, label: "Google Analytics", color: "#EA4335" },
      { Icon: SiGooglesearchconsole, label: "Search Console", color: "#FBBC05" },
      { Icon: SiSemrush, label: "SEMrush", color: "#FF642D" },
      { Icon: SiGoogletagmanager, label: "Tag Manager", color: "#34A853" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-heading-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="skills-heading-line" />
        <h2 className="skills-heading-title">Tools</h2>
        <span className="skills-heading-line" />
      </motion.div>
      <motion.p
        className="skills-heading-subtitle"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I use to design, build, and grow.
      </motion.p>

      <motion.div
        className="skills-card-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <ShineBorder
          className="skills-card-shine"
          borderWidth={2}
          duration={7}
          radius={32}
          gradient="from-fuchsia-500 via-blue-500 to-teal-400"
        >
          <div className="skills-card">
            {categories.map((cat) => (
              <div className="skills-row" key={cat.title}>
                <div className="skills-row-text">
                  <h3>{cat.title}</h3>
                  <p>{cat.subtitle}</p>
                </div>
                <div className="skills-row-divider" aria-hidden="true" />
                <div className="skills-row-icons">
                  {cat.icons.map(({ Icon, label, color }) => (
                    <Icon
                      key={label}
                      className="skills-row-icon"
                      style={{ "--icon-color": color }}
                      role="img"
                      aria-label={label}
                      title={label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ShineBorder>
      </motion.div>
    </section>
  );
}
