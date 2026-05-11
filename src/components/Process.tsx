'use client';
import { motion } from 'framer-motion';

const steps = [
  { title: '프라이빗 컨설팅', desc: '대표 원장과의 1:1 심층 상담 및 다면 평가' },
  { title: '극비 로드맵 설계', desc: '학생 고유의 뇌 구조에 맞춘 1년 단위 마스터플랜 수립' },
  { title: '밀착 동행 및 훈련', desc: '전담 마스터의 24/7 케어 및 하드트레이닝' },
  { title: '무결점 피드백', desc: '데이터 기반 성과 입증 및 학부모 프라이빗 브리핑' }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 lg:px-8 bg-charcoal text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <p className="text-gold text-sm tracking-[0.2em] mb-4">THE SYSTEM</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              오차 없는 <span className="italic font-light text-gold">성공 방정식</span>
            </h2>
          </div>
          <p className="text-white/50 font-light max-w-sm text-right">
            단 하나의 오차도 허용하지 않는 THE PRESTIGE만의 완벽한 4단계 시스템.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-px bg-white/10" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative pt-8 md:pt-0"
            >
              <div className="w-8 h-8 rounded-full bg-charcoal border border-gold flex items-center justify-center mb-8 relative z-10 mx-auto md:mx-0">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-gold font-serif text-3xl italic mb-4">0{index + 1}</div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
