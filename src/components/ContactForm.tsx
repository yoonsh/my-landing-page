'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-charcoal text-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal-light/30 skew-x-12 translate-x-32" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            상위 1%를 향한 <span className="italic text-gold font-light">비밀스러운 초대</span>
          </h2>
          <p className="text-white/50 font-light leading-relaxed">
            THE PRESTIGE는 최상의 퀄리티 유지를 위해 100% 사전 예약제 및 소수 정예로 운영됩니다. <br className="hidden md:block"/>
            정보를 남겨주시면, VVIP 전담 매니저가 연락드려 프라이빗 상담 일정을 조율해 드립니다.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-8 bg-charcoal-light/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs tracking-[0.1em] text-white/50 uppercase">Student Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 pb-2 pt-2 text-white focus:outline-none focus:border-gold transition-colors font-light" 
                placeholder="학생 이름을 입력하세요"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.1em] text-white/50 uppercase">Contact Number</label>
              <input 
                type="tel" 
                className="w-full bg-transparent border-b border-white/20 pb-2 pt-2 text-white focus:outline-none focus:border-gold transition-colors font-light" 
                placeholder="연락처를 입력하세요"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs tracking-[0.1em] text-white/50 uppercase">Current Grade</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 pb-2 pt-2 text-white focus:outline-none focus:border-gold transition-colors font-light" 
                placeholder="현재 학년을 입력하세요 (예: 고1)"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.1em] text-white/50 uppercase">Target University</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 pb-2 pt-2 text-white focus:outline-none focus:border-gold transition-colors font-light" 
                placeholder="목표 대학 및 학과"
              />
            </div>
          </div>

          <div className="pt-8 text-center">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-charcoal font-bold tracking-[0.1em] px-12 py-7 rounded-none transition-all">
              VVIP 프라이빗 상담 예약하기
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
