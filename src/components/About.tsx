import React from "react";
import { GraduationCap, Award, BookOpen, Code2, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal, education, skills, relevantCourses } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Short Bio Block */}
        <div className="glass-panel rounded-xl p-6 sm:p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500/80" />
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
            I am an undergraduate student in <span className="text-white font-medium">Chemical Engineering at IIT Hyderabad</span> with a core focus on <span className="text-emerald-400 font-medium">quantitative finance, statistical modeling, and full-stack software systems</span>.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            My experience spans analyzing multi-million high-frequency tick and bar datasets, constructing vectorised mean-reversion backtesting engines, deriving short-rate OIS yield paths, designing linear programming portfolio optimizers, and engineering resilient production web applications deployed on Vercel and Railway.
          </p>
        </div>

        {/* Key Skills Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <span>Key Skills & Technical Stack</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="glass-panel glass-panel-hover rounded-xl p-5"
              >
                <div className="text-sm font-semibold text-gray-200 mb-3 font-mono border-b border-white/[0.06] pb-2">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Coursework Grid */}
        <div id="education" className="scroll-mt-24">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span>Education & Academic Background</span>
          </h3>

          <div className="space-y-4 mb-8">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {item.degree}
                    </h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                      {item.grade}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">
                    {item.institution}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gray-400 mt-1">
                      {item.description}
                    </div>
                  )}
                </div>
                <div className="text-xs font-mono text-gray-400 sm:text-right shrink-0">
                  {item.period}
                </div>
              </div>
            ))}
          </div>

          {/* Relevant Courses Pillbox */}
          <div className="glass-panel rounded-xl p-5">
            <div className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Relevant Coursework & Credentials</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {relevantCourses.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 text-xs rounded-md bg-emerald-500/[0.06] text-emerald-300 border border-emerald-500/20 font-mono"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

