import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

const Experience = () => {
    const timeline = [
        {
            id: 1,
            role: "Bachelor of Science (Data Science)",
            org: "Shree L. R. Tiwari Degree College",
            date: "2025 - 2028 (Expected)",
            details: "Pursuing in-depth knowledge of Data Science, Machine Learning, and Big Data Analytics. Building a strong foundation in statistics and programming.",
            type: "education",
            icon: <FaGraduationCap />
        },
        {
            id: 2,
            role: "Hackathon Participant",
            org: "Edept",
            date: "2024",
            details: "Participated in a college-level hackathon, collaborating with a team to solve real-world problems. Received a certificate of participation.",
            type: "achievement",
            icon: <FaTrophy />
        },
        {
            id: 3,
            role: "Higher Secondary (Science)",
            org: "Shree L.R. Tiwari Junior College of Science",
            date: "2022 - 2024",
            details: "Completed Junior College with a focus on Science and Mathematics.",
            type: "education",
            icon: <FaGraduationCap />
        },
        {
            id: 4,
            role: "Secondary School",
            org: "Vedant International High School",
            date: "Till 2022",
            details: "Completed secondary education with strong academic performance.",
            type: "education",
            icon: <FaGraduationCap />
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-outfit mb-4">Education & <span className="text-gradient">Experience</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center relative`}
                            >
                                {/* Checkpoint */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white dark:bg-slate-900 border-4 border-primary rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center text-primary text-xs">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                </div>

                                {/* Content */}
                                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} w-full`}>
                                    <div className={`glass-card p-6 rounded-xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative group overflow-hidden`}>
                                        {/* Hover Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className={`flex items-center space-x-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <span className="text-2xl text-secondary">{item.icon}</span>
                                            <h3 className="text-xl font-bold">{item.role}</h3>
                                        </div>
                                        <p className="text-primary font-semibold mb-2">{item.org}</p>
                                        <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-500 mb-4 border border-slate-200 dark:border-slate-700">
                                            {item.date}
                                        </span>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
