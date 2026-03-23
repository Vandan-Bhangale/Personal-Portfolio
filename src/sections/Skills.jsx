import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt, FaGithub } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "REST API", icon: "🔗" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-10 animate-fade-in animation-delay-100 text-secondary-foreground">
        Technologies that
        <span className="font-serif italic font-normal text-white">
          {" "}
          power my work.
        </span>
      </h2>

      <div className="space-y-10">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass 
                  transition-all duration-300 cursor-default
                  hover:bg-primary hover:text-primary-foreground
                  hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}