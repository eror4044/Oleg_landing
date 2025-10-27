'use client';

import { motion } from 'framer-motion';

const results = [
    '💖 Схуднення без шкоди для здоров’я',
    '📏 Зменшення в об’ємах і підтягнуте тіло',
    '🌸 Менше целюліту й кращий тонус шкіри',
    '⚡ Більше енергії, сили та мотивації',
    '🍎 Нові харчові звички без зривів',
    '🧘‍♀️ Краще травлення та комфорт у тілі',
    '💫 Підвищення самооцінки й упевненість',
];

export default function AfterCourseSection() {
    return (
        <section id='after' className="bg-rose/20 py-24 text-center">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-graphite mb-10"
                >
                    Які результати <span className="text-coral">ти отримаєш</span> після курсу?
                </motion.h2>

                <div className="max-w-3xl mx-auto text-left space-y-3 mb-14">
                    {results.map((r, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="text-lg text-graphite/80"
                        >
                            {r}
                        </motion.p>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white inline-block rounded-3xl px-10 py-6 shadow-lg border border-peach/30"
                >
                    <p className="text-2xl font-bold text-coral">95%</p>
                    <p className="text-graphite/80 text-sm">
                        учасниць утримують результат і після курсу
                    </p>
                </motion.div>

                <div className="mt-16 max-w-2xl mx-auto text-graphite/80 text-lg leading-relaxed">
                    <p>
                        Ти станеш стійкішою до стресів, дисциплінованішою, впевненою у собі.
                        Нарешті зможеш обирати одяг, який тобі подобається,
                        а не той, що приховує недоліки.
                        <br />
                        <span className="font-semibold text-graphite">
                            Твоє нове тіло — це не мрія, а результат рішучості 💫
                        </span>
                    </p>
                </div>

                <div className="mt-10">
                    <button className="btn-cta px-12 py-4 text-lg font-semibold shadow-cta">
                        Приєднатись до інтенсиву
                    </button>
                </div>
            </div>
        </section>
    );
}
