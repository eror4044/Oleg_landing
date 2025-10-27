'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheck, Award, Dumbbell } from 'lucide-react';

export default function SpeakerSection() {
    return (
        <section id="speaker" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Фото */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden shadow-xl"
                >
                    <Image
                        src="/images/IMG_7316.jpg"
                        alt="Олег Козлов — тренер та нутриціолог"
                        width={700}
                        height={800}
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Контент */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-graphite mb-6">
                        <span className="text-coral">Спікер навчання</span>
                    </h2>
                    <p className="text-lg text-graphite/80 leading-relaxed mb-6">
                        Я, <strong>Олег Козлов</strong>, фітнес-тренер і нутриціолог,
                        Майстер спорту України міжнародного класу з силового екстріму.
                        Понад 10 років допомагаю людям досягати легкої, здорової форми —
                        без виснажень, дієт та зривів.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 mt-8">
                        <div className="flex flex-col items-center bg-ivory p-4 rounded-2xl shadow-inner">
                            <BadgeCheck className="text-coral w-6 h-6 mb-2" />
                            <p className="text-sm font-medium text-graphite">Сертифікований нутриціолог</p>
                        </div>
                        <div className="flex flex-col items-center bg-ivory p-4 rounded-2xl shadow-inner">
                            <Award className="text-peach w-6 h-6 mb-2" />
                            <p className="text-sm font-medium text-graphite">Майстер спорту України</p>
                        </div>
                        <div className="flex flex-col items-center bg-ivory p-4 rounded-2xl shadow-inner">
                            <Dumbbell className="text-mint w-6 h-6 mb-2" />
                            <p className="text-sm font-medium text-graphite">10+ років практики</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <p className="text-base text-graphite/70 italic">
                            «Я допоможу тобі створити себе заново — без тиску, без дієт,
                            з повагою до свого тіла і жіночої природи 💫»
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
