import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import profileImg from '../assets/kamlesh.jpg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between w-full z-10">

                {/* Text Content */}
                <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-bold tracking-wide uppercase mb-2"
                    >
                        Welcome to my world
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-outfit mb-4"
                    >
                        Hi, I'm <span className="text-gradient">Kamlesh Choudhary</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-6 min-h-[60px]"
                    >
                        a <span className="text-secondary">
                            <Typewriter
                                words={['Data Scientist.', 'Web Developer.', 'Tech Enthusiast.']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0"
                    >
                        First-year Data Science student passionate about turning data into insights and building futuristic web experiences.
                        Strong fundamentals in Python, Data Analysis, and Modern Web Tech.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
                    >
                        <Link to="projects" smooth={true} duration={500}>
                            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300">
                                View Projects
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <button className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300">
                                Contact Me
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-70 blur-md"></div>
                        <div className="absolute inset-2 bg-slate-50 dark:bg-slate-900 rounded-full z-10 overflow-hidden border-4 border-white dark:border-slate-800">
                            <img
                                src={profileImg}
                                alt="Kamlesh Choudhary"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 -right-4 glass-card p-3 rounded-xl z-20 hidden md:block"
                        >
                            <span className="text-2xl">🐍</span>
                            <span className="font-bold ml-2 text-sm">Python</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -left-4 glass-card p-3 rounded-xl z-20 hidden md:block"
                        >
                            <span className="text-2xl">⚛️</span>
                            <span className="font-bold ml-2 text-sm">React</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
