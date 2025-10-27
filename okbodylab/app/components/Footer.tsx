'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-graphite text-white py-14 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
                {/* Лого */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
                        <Image
                            src="/images/logo-fitintensive.png"
                            alt="Fit Intensive Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <h3 className="font-semibold text-xl">Fit Intensive</h3>
                    </div>
                    <p className="text-sm text-white/70">
                        © {new Date().getFullYear()} Fit Intensive by Олег Козлов.
                        <br />
                        Усі права захищено.
                    </p>
                </motion.div>

                {/* Контакти */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h4 className="font-semibold mb-3">Контакти</h4>
                    <p className="text-white/70 text-sm">
                        Email: fitintensive@gmail.com
                        <br />
                        Телеграм: <span className="text-peach">@fit_intensive</span>
                    </p>
                </motion.div>

                {/* Соцмережі */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center md:justify-end gap-4"
                >
                    <a
                        href="https://t.me/fit_intensive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                    >
                        <Send className="w-5 h-5 text-peach" />
                    </a>
                    <a
                        href="https://instagram.com/fit.intensive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                    >
                        <Instagram className="w-5 h-5 text-peach" />
                    </a>
                </motion.div>
            </div>
        </footer>
    );
}
