import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skills = {
    tech: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "Codeigniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
      { name: "VueJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "AlpineJS", icon: "https://raw.githubusercontent.com/alpinejs/alpine/master/packages/alpinejs/logo.svg" },
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    tools: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    ],
  };

  // combine all skills
  const allSkills = [...skills.tech, ...skills.tools];

  let data = [];
  if (activeTab === "tech") data = skills.tech;
  else if (activeTab === "tools") data = skills.tools;
  else data = allSkills;

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-[#BF092F] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-left border-l-4 border-white pl-3">
          Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-start gap-4 mb-10 flex-wrap">
          {["all", "tech", "tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-md font-medium capitalize transition-all ${
                activeTab === tab
                  ? "bg-[#BF092F] text-white border-white"
                  : "bg-transparent border border-[#BF092F] text-white hover:bg-[#BF092F] hover:text-white"
              }`}
            >
              {tab === "all" ? "All" : tab === "tech" ? "Tech Stack" : "Tools"}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-white bg-[#111] border border-[#BF092F] rounded-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <img src={item.icon} alt={item.name} className="w-10 h-10 mb-2" />
              <span className="font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
