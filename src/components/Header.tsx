'use client';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-md border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Crown className={`transition-colors duration-300 ${isScrolled ? 'text-gold' : 'text-gold'}`} size={28} strokeWidth={1.5} />
          <span className={`text-xl md:text-2xl font-serif tracking-[0.2em] font-bold transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-charcoal'}`}>
            THE PRESTIGE
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {['PHILOSOPHY', 'PROGRAMS', 'SYSTEM', 'REVIEWS'].map((item, idx) => {
            const ids = ['strengths', 'programs', 'process', 'testimonials'];
            return (
              <button 
                key={item}
                onClick={() => scrollToSection(ids[idx])} 
                className={`text-xs tracking-[0.15em] font-medium transition-colors hover:text-gold ${isScrolled ? 'text-white/70' : 'text-charcoal/70'}`}
              >
                {item}
              </button>
            )
          })}
        </nav>

        {/* CTA */}
        <div>
          <Button 
            onClick={() => scrollToSection('contact')}
            className={`rounded-none px-8 py-6 text-xs tracking-[0.1em] font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-gold hover:bg-gold-light text-charcoal' 
                : 'bg-charcoal hover:bg-charcoal-light text-white'
            }`}
          >
            VVIP 상담 예약
          </Button>
        </div>
      </div>
    </header>
  );
}
