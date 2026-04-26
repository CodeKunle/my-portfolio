import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Database, Globe } from "lucide-react";

import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      
      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Front-End Developer <br />
            <span className="text-indigo-400">Web3 Builder</span>
          </h1>

          <p className="text-slate-300 text-lg mb-8">
            I build clean, performant web applications with React and modern
            JavaScript, with a growing focus on Ethereum and Solidity.
          </p>

          <div className="flex gap-4">
            <button className="rounded-2xl px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition"
            onClick={() => window.open("https://github.com/CodeKunle?tab=repositories", "_blank")}>
              View Projects
            </button>
            <button className="rounded-2xl px-6 py-3 border border-slate-700 hover:border-indigo-400 transition"
            onClick={() => window.location.href = "#contact"}>
              Contact Me
            </button>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">Skills & Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SkillCard icon={<Code />} title="Frontend" items={["JavaScript", "React", "CSS", "Tailwind"]} />
          <SkillCard icon={<Database />} title="Data & Backend" items={["SQL", "Python", "Nodejs", "Express", "Neon Database", "Excel"]} />
          <SkillCard icon={<Globe />} title="Blockchain" items={["Solidity", "Ethereum", "Remix"]} />
        </div>
      </section>

      {/* PROJECTS */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Movie App"
            description="Users can search for their favourite movies."
            tech="React, JavaScript"
            repoLink="https://github.com/CodeKunle/movieNet"
            liveLink="https://CodeKunle.github.io/movieNet/"
          />
          <ProjectCard
            title="RandomPicSit"
            description="Randomly generate pictures for the users"
            tech="HTML, JavaScript, CSS"
            repoLink="https://github.com/CodeKunle/randomPicsSite"
          />
        </div>
      </section>

      {/*CONTACT ME SECTION */}

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p>Email: kunle.salis@gmail.com</p>
      </section>


      {/* FOOTER */}

      <footer className="border-t border-slate-800 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 flex justify-between items-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Salisu Waheed</p>
          <div className="flex gap-6">
            <Github />
            <Linkedin />
            <Mail />
          </div>
        </div>
      </footer>

    </div>
  );
}


