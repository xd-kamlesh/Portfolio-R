import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-outfit mb-4">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Open for internships and project collaborations. Let's create something amazing together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                            <div className="p-4 bg-primary/10 rounded-full text-primary text-2xl">
                                <FaPaperPlane />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Email</h4>
                                <a href="mailto:kamleshchoudhary4846@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                                    kamleshchoudhary4846@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                            <div className="p-4 bg-secondary/10 rounded-full text-secondary text-2xl">
                                <FaPhone />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Phone</h4>
                                <p className="text-slate-600 dark:text-slate-400">
                                    +91 7300148138
                                </p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                            <div className="p-4 bg-tertiary/10 rounded-full text-tertiary text-2xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Location</h4>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Mumbai, Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="glass-card p-8 rounded-2xl space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                ></textarea>
                            </div>
                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
