'use client';

import { motion } from 'framer-motion';

const results = [
  { icon: '💖', text: 'Схуднення без шкоди для здоров’я' },
  { icon: '📏', text: 'Зменшення в об’ємах і підтягнуте тіло' },
  { icon: '🌸', text: 'Менше целюліту й кращий тонус шкіри' },
  { icon: '⚡', text: 'Більше енергії, сили та мотивації' },
  { icon: '🍎', text: 'Нові харчові звички без зривів' },
  { icon: '🧘‍♀️', text: 'Краще травлення та комфорт у тілі' },
  { icon: '💫', text: 'Підвищення самооцінки й упевненість' },
];

export default function AfterCourseSection() {
  return (
    <section
      id="after"
      className="relative overflow-hidden text-light py-24 sm:py-28"
    >
      {/* === Фон === */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.96)_0%,rgba(14,14,14,0.9)_55%,rgba(251,174,88,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40vh]
          [background:radial-gradient(120%_100%_at_50%_100%,rgba(231,104,31,0.18)_0%,rgba(251,174,88,0.12)_40%,transparent_80%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* === Заголовок === */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 text-[rgba(251,174,88,1)] drop-shadow-[0_0_15px_rgba(251,174,88,0.3)]"
        >
          Які результати <span className="text-[rgba(231,104,31,1)]">ти отримаєш</span> після курсу?
        </motion.h2>

        {/* === Список результатів === */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 bg-[rgba(28,28,28,0.85)] p-5 rounded-2xl border border-[rgba(251,174,88,0.15)] shadow-[0_0_25px_rgba(251,174,88,0.05)] hover:shadow-[0_0_30px_rgba(251,174,88,0.15)] transition-all duration-300 backdrop-blur-sm"
            >
              {/* Icon bubble */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(251,174,88,0.25)] to-[rgba(231,104,31,0.2)] text-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="drop-shadow-[0_0_10px_rgba(251,174,88,0.4)]">{r.icon}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[rgba(251,174,88,0.3)] to-transparent opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
              </div>

              <p className="text-lg sm:text-xl text-[#FFD9B5]/90 leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* === Статистика === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block rounded-3xl px-12 py-8 bg-[rgba(28,28,28,0.8)] border border-[rgba(251,174,88,0.2)] shadow-[0_0_35px_rgba(251,174,88,0.15)] backdrop-blur-md mb-14"
        >
          <p className="text-4xl font-bold text-[rgba(251,174,88,1)] drop-shadow-[0_0_10px_rgba(251,174,88,0.5)]">
            95%
          </p>
          <p className="text-[#FFD9B5]/80 text-sm">
            учасниць утримують результат навіть після завершення курсу
          </p>
        </motion.div>

        {/* === Описова частина === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-[#FFD9B5]/85 text-lg leading-relaxed"
        >
          <p>
            Ти станеш спокійнішою, стійкішою до стресів, дисциплінованішою,
            впевненою у собі. Нарешті зможеш обирати одяг, який тобі подобається —
            а не той, що приховує недоліки.
            <br />
            <span className="font-semibold text-[rgba(251,174,88,1)]">
              Твоє нове тіло — це не мрія, а результат рішучості 💫
            </span>
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />
    </section>
  );
}
