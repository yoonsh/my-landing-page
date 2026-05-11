'use client';
import { motion } from 'framer-motion';

const programs = [
  { category: 'PRIMARY', title: '영재원 입시 / 조기 유학 대비반', desc: '상위 1% 영재반 진학 및 조기 유학을 위한 원어민 수준의 몰입형 프라이빗 코스.' },
  { category: 'MIDDLE', title: '특목고 / 자사고 최상위반', desc: '압도적인 내신 1등급 유지 및 고교 진학 전 수능 영어 조기 만점 달성.' },
  { category: 'HIGH', title: '의치한 / SKY 최상위반', desc: '단 한 문제의 실수도 용납하지 않는 극강의 난이도 훈련과 시크릿 모의고사.' },
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 px-6 lg:px-8 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-charcoal/50 text-sm tracking-[0.2em] mb-4">EXCLUSIVE PROGRAMS</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
            소수를 위한 <span className="italic font-light">특권</span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="grid md:grid-cols-4 items-center gap-6 py-10 border-b border-charcoal/10 group-hover:border-gold transition-colors duration-500">
                <div className="text-xs tracking-[0.2em] font-medium text-charcoal/40 group-hover:text-gold transition-colors">
                  {program.category}
                </div>
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-bold font-serif group-hover:text-gold transition-colors duration-500">
                    {program.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    {program.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
