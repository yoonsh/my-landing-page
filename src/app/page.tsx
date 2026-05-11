'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Strengths from '@/components/Strengths';
import Programs from '@/components/Programs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Minimalist Background */}
        <div className="absolute inset-0 bg-ivory z-0" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-charcoal transform origin-left skew-x-[-10deg] translate-x-32 z-0 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center pt-12 lg:pt-0">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-block border border-charcoal/20 px-4 py-1.5 mb-8">
              <span className="text-xs tracking-[0.2em] font-medium text-charcoal">EXECUTIVE PRIVATE CLASS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-8 leading-[1.1] tracking-tight">
              타협하지 않는 <br/>
              <span className="text-gold italic font-light tracking-normal">최상위권</span>의 선택
            </h1>
            
            <p className="text-lg text-charcoal/70 mb-12 leading-relaxed font-light">
              평범한 방식으로는 도달할 수 없는 최상위 1%의 영역. <br className="hidden md:block"/>
              오직 소수를 위한 극비리 맞춤형 커리큘럼과 압도적인 관리로 <br className="hidden md:block"/>
              당신의 자녀를 완벽한 성공으로 이끕니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-charcoal hover:bg-charcoal-light text-white rounded-none px-10 py-7 text-sm tracking-[0.1em] transition-all group"
              >
                VVIP 입학 상담 신청
                <ChevronRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative h-[600px] w-full hidden lg:flex justify-end items-center"
          >
            {/* Minimalist Graphic Element representing "Premium" */}
            <div className="relative w-[400px] h-[500px]">
              {/* Gold Frame */}
              <div className="absolute inset-0 border-[1px] border-gold/40 translate-x-6 translate-y-6" />
              {/* Dark Panel */}
              <div className="absolute inset-0 bg-charcoal shadow-2xl p-10 flex flex-col justify-between">
                <div className="w-12 h-0.5 bg-gold mb-8" />
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-gold text-xs tracking-[0.2em]">01. DIAGNOSIS</p>
                    <p className="text-white/80 font-serif text-lg">초정밀 다면 진단</p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="space-y-2">
                    <p className="text-gold text-xs tracking-[0.2em]">02. STRATEGY</p>
                    <p className="text-white/80 font-serif text-lg">1:1 극비 로드맵</p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="space-y-2">
                    <p className="text-gold text-xs tracking-[0.2em]">03. EXECUTION</p>
                    <p className="text-white/80 font-serif text-lg">밀착 동행 및 성과 증명</p>
                  </div>
                </div>
                <div className="flex justify-end mt-12">
                  <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Strengths />
      <Programs />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
