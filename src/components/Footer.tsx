import { Crown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-[#0a0a0a] text-white/40 border-t border-white/5 flex flex-col items-center justify-center text-center">
      <Crown className="text-gold/50 mb-6" size={24} />
      <p className="font-serif tracking-[0.2em] text-white/60 mb-2">THE PRESTIGE</p>
      <p className="text-xs tracking-widest font-light mb-8">EXECUTIVE PRIVATE EDUCATION</p>
      
      <div className="text-xs font-light space-y-2 max-w-lg mx-auto leading-relaxed">
        <p>서울특별시 강남구 프레스티지로 1번길 1, VVIP 타워 10F</p>
        <p>T. 02-000-0000 | E. vvip@theprestige.com</p>
        <p>100% 사전 예약제 운영 | 상위 1% 프라이빗 컨설팅</p>
      </div>
      
      <div className="mt-16 text-[10px] tracking-[0.1em]">
        © 2026 THE PRESTIGE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
