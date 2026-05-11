'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { 
    name: 'S대 의예과 합격생 학부모', 
    text: '수많은 대형 학원들의 VIP반을 거쳤지만, THE PRESTIGE의 관리력은 차원이 다릅니다. 아이의 멘탈부터 수면 패턴까지 관리해주는 곳은 이곳이 유일합니다. 완벽한 결과로 증명해주셨습니다.',
  },
  { 
    name: '민사고 진학 예정생', 
    text: '단순히 영어를 가르치는 것이 아니라, 저만의 사고의 틀을 깨고 논리력을 극한으로 끌어올려 주셨습니다. 원장님의 로드맵을 믿고 따랐더니 어느새 최상위권에 도달해 있었습니다.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 lg:px-8 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-charcoal/50 text-sm tracking-[0.2em] mb-4">VVIP REVIEWS</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
            결과로 증명하는 <span className="italic font-light">품격</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative"
            >
              <Quote className="text-gold/20 w-16 h-16 mb-6" />
              <p className="text-lg md:text-xl leading-loose font-light text-charcoal/80 mb-8 font-serif">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gold" />
                <p className="font-bold tracking-widest text-sm">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
