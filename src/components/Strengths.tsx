'use client';
import { motion } from 'framer-motion';

const strengths = [
  { num: '01', title: '초개인화 커리큘럼', desc: '학생의 뇌파 반응과 학습 패턴까지 분석하는 초정밀 진단을 기반으로 세상에 단 하나뿐인 완벽한 학습 경로를 설계합니다.' },
  { num: '02', title: '1:1 VVIP 밀착 동행', desc: '업계 상위 0.1% 출신의 전담 마스터가 배정되어, 단순한 수업을 넘어선 24시간 생활 및 멘탈 관리까지 책임집니다.' },
  { num: '03', title: '무결점 성과 달성', desc: '내신 최상위권 유지와 수능 만점을 동시에 타격하는 압도적인 자체 제작 시크릿 교재를 활용합니다.' },
  { num: '04', title: '투명한 하이엔드 리포트', desc: '매 수업 후 학부모님께만 프라이빗하게 전송되는 딥러닝 기반 성취도 분석 리포트로 모든 과정을 투명하게 공개합니다.' },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-32 px-6 lg:px-8 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <p className="text-gold text-sm tracking-[0.2em] mb-4">OUR PHILOSOPHY</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            비교를 불허하는 <br/>
            <span className="text-gold italic font-light tracking-normal">절대적 격차</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {strengths.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -left-4 top-0 w-px h-0 bg-gold group-hover:h-full transition-all duration-700 ease-out" />
              <div className="pl-6 border-l border-white/10">
                <div className="text-gold font-serif text-2xl mb-4 italic">{item.num}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
