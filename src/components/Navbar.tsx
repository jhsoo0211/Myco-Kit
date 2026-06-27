import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const NAV_ITEMS = {
  about: [
    { to: '/story', title: '브랜드 스토리', desc: 'MyCo-Kit이 탄생하기까지의 여정' },
    { to: '/mission', title: '미션 및 비전', desc: '균사체를 통한 자원 순환 교육' },
    { to: '/partnership', title: '파트너십', desc: '함께 만드는 친환경 교육 파트너' },
  ],
  product: [
    { to: '/kit', title: '균사체 키트 소개', desc: 'MyCo-Kit 구성품 및 라인업 안내' },
    { to: '/technology', title: '핵심 원리', desc: '균사체 배양과 자원 순환 원리' },
    { to: '/impact', title: '환경 임팩트', desc: '키트 사용이 만드는 환경적 수치 변화' },
    { to: '/cases', title: '활용 사례', desc: '실제 교육 현장에서의 사용 후기' },
  ],
  experience: [
    { to: '/experience', title: '체험 프로그램', desc: '학교, 청소년 센터 맞춤형 프로그램' },
    { to: '/cad', title: 'CAD 설계도 다운로드', desc: '오픈소스 균사체 몰드 설계 도면' },
  ],
  funding: [
    { to: '/funding', title: '와디즈 펀딩', desc: '크라우드 펀딩으로 리워드와 함께 후원' },
    { to: '/donation', title: '직접 후원 계좌', desc: '계좌이체로 직접 후원하기' },
  ],
};

const ABOUT_PATHS = ['/about', '/story', '/mission', '/partnership'];
const PRODUCT_PATHS = ['/kit', '/technology', '/impact', '/cases'];
const EXPERIENCE_PATHS = ['/experience', '/cad'];
const FUNDING_PATHS = ['/funding', '/donation'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    // 홈이 아닌 페이지는 항상 solid 상태로
    if (!isHome) setScrolled(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    // 페이지 전환 시 홈이면 리셋, 아니면 scrolled 유지
    if (!isHome) {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 20);
    }
  }, [location, isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (paths: string[]) => paths.includes(location.pathname);

  // 홈에서 스크롤 전: 완전히 숨김 / 그 외: 항상 표시
  const navVisible = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white border-b border-neutral-100 shadow-sm py-3 ${
          navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          {/* 로고 — 항상 black 버전 (배경이 항상 흰색) */}
          <Link to="/" className="flex items-center gap-2 relative z-10 group shrink-0">
            <img
              src="/logos/마이코키트_combination_mark_black.png"
              alt="MyCo-Kit Logo"
              className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
            <NavigationMenu>
              <NavigationMenuList>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive(ABOUT_PATHS) ? 'text-sprout-moss font-bold' : ''}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-sprout-moss/40 to-sprout-moss/80 p-6 no-underline outline-none hover:opacity-90 transition-opacity"
                            to="/about"
                          >
                            <div className="mb-2 mt-4 text-lg font-bold text-forest-soil">우리의 이야기</div>
                            <p className="text-sm leading-tight text-forest-soil/80">
                              버려지던 버섯 배지에서 발견한 새로운 교육의 가능성.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {NAV_ITEMS.about.map((item) => (
                        <ListItem key={item.to} to={item.to} title={item.title} active={location.pathname === item.to}>
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive(PRODUCT_PATHS) ? 'text-sprout-moss font-bold' : ''}>
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {NAV_ITEMS.product.map((item) => (
                        <ListItem key={item.to} to={item.to} title={item.title} active={location.pathname === item.to}>
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive(EXPERIENCE_PATHS) ? 'text-sprout-moss font-bold' : ''}>
                    Experience
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {NAV_ITEMS.experience.map((item) => (
                        <ListItem key={item.to} to={item.to} title={item.title} active={location.pathname === item.to}>
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive(FUNDING_PATHS) ? 'text-sprout-moss font-bold' : ''}>
                    Funding
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[380px] gap-3 p-4">
                      {NAV_ITEMS.funding.map((item) => (
                        <ListItem key={item.to} to={item.to} title={item.title} active={location.pathname === item.to}>
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={navigationMenuTriggerStyle() + (location.pathname === '/contact' ? ' text-sprout-moss font-bold' : '')}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* 데스크탑 우측 CTA */}
          <div className="hidden lg:flex items-center gap-3 relative z-10 shrink-0">
            <Link
              to="/funding"
              className="px-4 py-2 rounded-full text-sm font-bold text-sprout-moss border-2 border-sprout-moss hover:bg-sprout-moss hover:text-white transition-colors duration-200"
            >
              펀딩 참여
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full text-sm font-bold bg-forest-soil text-white hover:bg-forest-soil/80 transition-colors duration-200"
            >
              도입 문의
            </Link>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#463A39" strokeWidth="2" strokeLinecap="round">
              <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
              <img src="/logos/마이코키트_combination_mark_black.png" alt="MyCo-Kit" className="h-8" />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
              <MobileSection label="About" open={mobileSection === 'about'} onToggle={() => setMobileSection(mobileSection === 'about' ? null : 'about')}>
                <Link to="/about" className="mobile-link">우리의 이야기</Link>
                {NAV_ITEMS.about.map((item) => <Link key={item.to} to={item.to} className="mobile-link">{item.title}</Link>)}
              </MobileSection>
              <MobileSection label="Product" open={mobileSection === 'product'} onToggle={() => setMobileSection(mobileSection === 'product' ? null : 'product')}>
                {NAV_ITEMS.product.map((item) => <Link key={item.to} to={item.to} className="mobile-link">{item.title}</Link>)}
              </MobileSection>
              <MobileSection label="Experience" open={mobileSection === 'experience'} onToggle={() => setMobileSection(mobileSection === 'experience' ? null : 'experience')}>
                {NAV_ITEMS.experience.map((item) => <Link key={item.to} to={item.to} className="mobile-link">{item.title}</Link>)}
              </MobileSection>
              <MobileSection label="Funding" open={mobileSection === 'funding'} onToggle={() => setMobileSection(mobileSection === 'funding' ? null : 'funding')}>
                {NAV_ITEMS.funding.map((item) => <Link key={item.to} to={item.to} className="mobile-link">{item.title}</Link>)}
              </MobileSection>
              <Link to="/contact" className="block px-4 py-3 rounded-xl font-bold text-forest-soil hover:bg-neutral-50">Contact</Link>
            </nav>

            <div className="px-5 py-5 border-t border-neutral-100 space-y-2">
              <div className="flex gap-2">
                <Link to="/funding" className="flex-1 text-center py-3 rounded-full border-2 border-sprout-moss text-sprout-moss font-bold hover:bg-sprout-moss hover:text-white transition-colors text-sm">와디즈 펀딩</Link>
                <Link to="/donation" className="flex-1 text-center py-3 rounded-full border-2 border-neutral-300 text-neutral-600 font-bold hover:bg-neutral-100 transition-colors text-sm">직접 후원</Link>
              </div>
              <Link to="/contact" className="block w-full text-center py-3 bg-forest-soil text-white font-bold rounded-full hover:bg-forest-soil/80 transition-colors">도입 문의하기</Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mobile-link { display:block; padding:0.5rem 0.75rem; border-radius:0.5rem; font-size:0.875rem; color:#6B7280; }
        .mobile-link:hover { background:#FFF8E1; color:#463A39; }
      `}</style>
    </>
  );
}

function MobileSection({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div>
      <button onClick={onToggle} className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-forest-soil hover:bg-neutral-50 transition-colors">
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className="ml-2 pl-3 border-l-2 border-sprout-moss/40 space-y-0.5 mb-1">{children}</div>}
    </div>
  );
}

function ListItem({ title, children, to, active, className }: { title: string; children: React.ReactNode; to: string; active?: boolean; className?: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={`block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-spore-cream-light focus:bg-spore-cream-light ${active ? 'bg-spore-cream-light' : ''} ${className ?? ''}`}
        >
          <div className={`text-sm font-semibold leading-none ${active ? 'text-sprout-moss' : 'text-forest-soil'}`}>{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-neutral-400 mt-1">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
