'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheck, Award, Dumbbell } from 'lucide-react';

export default function SpeakerSection() {
  return (
    <section
      id="speaker"
      className="relative overflow-hidden text-light py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Плавний фон без затемнення зверху */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.95)_0%,rgba(14,14,14,0.9)_70%,rgba(251,174,88,0.08)_100%)]" />

        {/* Підсвітка знизу */}
        <div className="absolute inset-x-0 bottom-0 h-[50vh]
          [background:radial-gradient(120%_100%_at_50%_100%,rgba(231,104,31,0.18)_0%,rgba(251,174,88,0.12)_40%,transparent_80%)]" />

        {/* М’який перехід до наступної секції */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0E0E] to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(251,174,88,0.25)] ring-1 ring-[rgba(251,174,88,0.15)]"
        >
          <Image
            src="/images/oleg-coach-black.jpg"
            alt="Олег Козлов — тренер та нутриціолог OK BODY LAB"
            width={700}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.7))] p-6">
            <p className="text-lg font-semibold text-[rgba(251,174,88,1)]">
              Олег Козлов
            </p>
            <p className="text-sm opacity-80">
              Майстер спорту міжнародного класу
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-[rgba(251,174,88,1)]">Спікер навчання</span>
          </h2>

          <p className="text-lg text-[#FFD9B5]/90 leading-relaxed mb-6">
            Я, <strong className="text-[rgba(251,174,88,1)]">Олег Козлов</strong>,
            фітнес-тренер і нутриціолог, Майстер спорту міжнародного класу
            з силового екстріму. Понад 10 років допомагаю людям досягати легкої,
            здорової форми — без виснажень, дієт та зривів.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: <BadgeCheck className="text-[rgba(251,174,88,1)] w-6 h-6 mb-2" />,
                text: 'Сертифікований нутриціолог',
              },
              {
                icon: <Award className="text-[rgba(231,104,31,1)] w-6 h-6 mb-2" />,
                text: 'Майстер спорту міжнародного класу',
              },
              {
                icon: <Dumbbell className="text-[rgba(251,174,88,1)] w-6 h-6 mb-2" />,
                text: '10+ років практики',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-[rgba(20,20,20,0.8)] p-5 rounded-2xl border border-[rgba(251,174,88,0.15)] shadow-[0_0_25px_rgba(251,174,88,0.08)] backdrop-blur-sm hover:shadow-[0_0_30px_rgba(251,174,88,0.15)] transition-all"
              >
                {item.icon}
                <p className="text-sm font-medium text-[#FFD9B5]/90">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-base text-[#FFD9B5]/70 italic">
              «Я допоможу тобі створити себе заново — без тиску, без дієт,
              з повагою до свого тіла і жіночої природи 💫»
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
