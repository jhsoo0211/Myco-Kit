export default function Footer() {
  return (
    <footer className="w-full bg-forest-soil px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logos/마이코키트_combination_mark_white.png" alt="MyCo-Kit" className="h-8 md:h-10" />
        </div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="인스타그램">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
            </svg>
          </a>
          <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="네이버 블로그">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-white/10">
        <p className="text-white/40 text-xs text-center">
          © 2026 MyCo-Kit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
