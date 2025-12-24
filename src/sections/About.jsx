import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaDatabase, FaChartBar } from 'react-icons/fa';

const About = () => {
    const cards = [
        {
            icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
            title: "Web Development",
            description: "Building responsive, modern websites using HTML, CSS, JavaScript, and React. Passionate about UI/UX design."
        },
        {
            icon: <FaDatabase className="text-4xl text-secondary mb-4" />,
            title: "Data Fundamentals",
            description: "Solid grasp of Python, Pandas, and NumPy for data manipulation. Learning SQL for robust database management."
        },
        {
            icon: <FaChartBar className="text-4xl text-tertiary mb-4" />,
            title: "Problem Solving",
            description: "Analytical mindset developed through coding challenges and real-world exposure in retail operations."
        }
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-outfit mb-4">About <span className="text-gradient">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                            Aspiring Data Scientist & Web Developer
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            I am a first-year Data Science student at Shree L. R. Tiwari Degree College, Mumbai.
                            My journey involves a blend of creative web development and analytical data science.
                            I have practical experience with Python, Data Analysis libraries, and modern frontend technologies.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Beyond code, I've gained real-world insight by managing operations at my father's hardware retail shop,
                            which taught me responsibility, decision-making, and the value of efficiency.
                        </p>
                        <a href="#contact" className="text-primary font-bold hover:underline decoration-secondary underline-offset-4">
                            Let's work together →
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <div className="glass-card p-6 rounded-xl hover:shadow-primary/20 transition-all duration-300">
                            <h4 className="font-bold text-lg mb-2">My Goal</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Seeking internships and project opportunities in Data Analysis or Web Development to apply my skills in real-world scenarios.
                            </p>
                        </div>
                        <div className="glass-card p-6 rounded-xl hover:shadow-secondary/20 transition-all duration-300">
                            <h4 className="font-bold text-lg mb-2">Education</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                B.Sc. Data Science (2025-2028)
                                <br />
                                <span className="text-xs opacity-75">Shree L. R. Tiwari Degree College</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex justify-center">{card.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
