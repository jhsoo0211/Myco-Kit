import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { label: '브랜드 스토리', to: '/story' },
  { label: '미션 & 비전', to: '/mission' },
  { label: '체험 프로그램', to: '/experience' },
  { label: '펀딩 참여', to: '/funding' },
  { label: '문의하기', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-forest-soil text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* 상단: 로고 + 링크 + 소셜 */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between">
          {/* 로고 & 소개 */}
          <div className="shrink-0">
            <img
              src="/logos/마이코키트_combination_mark_white.png"
              alt="MyCo-Kit"
              className="h-9 md:h-10 mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              버섯 폐배지로 만드는<br />친환경 STEAM 교육 키트
            </p>
          </div>

          {/* 페이지 링크 */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 items-start content-start">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 연락처 & 소셜 */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Contact</p>
              <a
                href="mailto:myco-kit@googlegroups.com"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                myco-kit@googlegroups.com
              </a>
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Follow</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="인스타그램"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                  </svg>
                </a>
                {/* 블로그: 추가 예정 */}
                <a
                  href="https://blog.naver.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="네이버 블로그"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 + 저작권 */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">© 2026 MyCo-Kit. All Rights Reserved.</p>
          <p className="text-white/20 text-xs">Made with 🍄 in Korea</p>
        </div>
      </div>
    </footer>
  );
}
