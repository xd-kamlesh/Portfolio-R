import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-10 pb-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold font-outfit text-gradient mb-2">Kamlesh.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xs">
                            Aspiring Data Scientist and Web Developer building futuristic digital experiences.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/xd-kamlesh" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kamlesh-choudhary-33ab48339" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/ch_kamlesh_388?igsh=bzBwMngwbnd0d3R6" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/share/1CbFKPcpaD/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="mailto:kamleshchoudhary4846@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Kamlesh Choudhary. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <p>Designed & Built with ❤️ by Kamlesh</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
