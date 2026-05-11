import type { Metadata } from 'next';
import { Noto_Serif_KR, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const notoSerifKr = Noto_Serif_KR({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '900'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'THE PRESTIGE - 상위 1%를 위한 하이엔드 프라이빗 영어',
  description: '타협하지 않는 최상위권의 선택. 압도적인 결과로 증명하는 1:1 맞춤형 프리미엄 영어 교육 시스템입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSerifKr.variable} font-sans text-charcoal bg-ivory antialiased selection:bg-gold selection:text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
