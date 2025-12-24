import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: "Python", level: 65, category: "Data/Programming" },
        { name: "HTML/CSS", level: 85, category: "Web Dev" },
        { name: "JavaScript", level: 75, category: "Web Dev" },
        { name: "React", level: 60, category: "Web Dev" },
        { name: "Pandas/NumPy", level: 60, category: "Data/Programming" },
        { name: "Excel", level: 80, category: "Data Analysis" },
        { name: "SQL", level: 30, category: "Database" },
        { name: "Git/GitHub", level: 70, category: "Tools" },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-fast"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-fast"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-outfit mb-4">My <span className="text-gradient">Skills</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A blend of technical prowess in Data Science and creative capabilities in Web Development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Skill Bars */}
                    <div className="space-y-6">
                        {skills.slice(0, 4).map((skill, index) => (
                            <SkillBar key={index} skill={skill} index={index} />
                        ))}
                    </div>
                    <div className="space-y-6">
                        {skills.slice(4, 8).map((skill, index) => (
                            <SkillBar key={index} skill={skill} index={index + 4} />
                        ))}
                    </div>
                </div>

                {/* Future Goals Tag Cloud */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-xl font-bold mb-6">Future Learning Goals</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Machine Learning", "Advanced SQL", "Power BI", "Next.js", "AI Integration"].map((goal, i) => (
                            <span key={i} className="px-5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-medium hover:border-secondary hover:text-secondary transition-colors cursor-default">
                                {goal}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SkillBar = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="flex justify-between mb-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
            <span className="text-xs text-slate-500">{skill.category}</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
            <motion.div
                className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
        </div>
    </motion.div>
);

export default Skills;
