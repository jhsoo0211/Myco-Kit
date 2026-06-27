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
    { to: '/about#mission', title: '미션 및 비전', desc: '균사체를 통한 자원 순환 교육' },
    { to: '/about#partnership', title: '파트너십', desc: '함께 만드는 친환경 교육 파트너' },
    { to: '/story', title: '개발 비하인드', desc: 'MyCo-Kit이 탄생하기까지의 여정' },
  ],
  product: [
    { to: '/kit', title: '균사체 키트 소개', desc: 'MyCo-Kit 구성품 및 라인업 안내' },
    { to: '/technology', title: '핵심 원리', desc: '균사체 배양과 자원 순환 원리' },
    { to: '/impact', title: '환경 임팩트', desc: '키트 사용이 만드는 환경적 수치 변화' },
    { to: '/cases', title: '활용 사례', desc: '실제 교육 현장에서의 사용 후기' },
  ],
  experience: [
    { to: '/experience', title: '체험 프로그램', desc: '학교, 청소년 센터 파일럿 테스트 안내' },
    { to: '/experience#cad', title: 'CAD 설계도 다운로드', desc: '오픈소스 균사체 몰드 설계 도면' },
    { to: '/experience#video', title: '교육 영상', desc: '선생님과 학생들을 위한 시청각 자료' },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [location]);

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2 relative z-10 group shrink-0">
            <img
              src={`/logos/마이코키트_combination_mark_${scrolled ? 'black' : 'white'}.png`}
              alt="MyCo-Kit Logo"
              className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
            <NavigationMenu>
              <NavigationMenuList>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={isActive('/about') || isActive('/story') ? 'text-sprout-moss' : ''}
                  >
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sprout-moss/50 to-sprout-moss p-6 no-underline outline-none focus:shadow-md"
                            to="/about"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-forest-soil">우리의 이야기</div>
                            <p className="text-sm leading-tight text-forest-soil/80 font-medium">
                              버려지던 버섯 배지에서 발견한 새로운 교육의 가능성.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {NAV_ITEMS.about.map((item) => (
                        <ListItem key={item.to} to={item.to} title={item.title}>{item.desc}</ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={['/kit', '/technology', '/impact', '/cases'].includes(location.pathname) ? 'text-sprout-moss' : ''}
                  >
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {NAV_ITEMS.product.map((item) => (
                        <ListItem key={item.to} to={item.to} title={item.title}>{item.desc}</ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={isActive('/experience') ? 'text-sprout-moss' : ''}
                  >
                    Experience
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {NAV_ITEMS.experience.map((item) => (
                        <ListItem key={item.to} to={item.to} title={item.title}>{item.desc}</ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={navigationMenuTriggerStyle() + (isActive('/contact') ? ' text-sprout-moss' : '')}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* 데스크탑 우측 CTA */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <Link
              to="/contact"
              className={`px-5 py-2 rounded-full text-sm font-bold transition-colors duration-200 ${
                scrolled
                  ? 'bg-sprout-moss text-white hover:bg-forest-soil'
                  : 'bg-white/20 text-white border border-white/40 hover:bg-white/30'
              }`}
            >
              도입 문의
            </Link>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="lg:hidden relative z-10 p-2 rounded-lg transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={scrolled ? '#2D3A26' : 'white'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* 배경 블러 */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* 슬라이드 패널 */}
          <div className="absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col">
            {/* 패널 헤더 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <img src="/logos/마이코키트_combination_mark_black.png" alt="MyCo-Kit" className="h-8" />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                aria-label="메뉴 닫기"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* 메뉴 항목 */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {/* About */}
              <MobileSection
                label="About"
                open={mobileSection === 'about'}
                onToggle={() => setMobileSection(mobileSection === 'about' ? null : 'about')}
              >
                <Link to="/about" className="mobile-link">우리의 이야기</Link>
                {NAV_ITEMS.about.map((item) => (
                  <Link key={item.to} to={item.to} className="mobile-link">{item.title}</Link>
                ))}
              </MobileSection>

              {/* Product */}
              <MobileSection
                label="Product"
                open={mobileSection === 'product'}
                onToggle={() => setMobileSection(mobileSection === 'product' ? null : 'product')}
              >
                {NAV_ITEMS.product.map((item) => (
                  <Link key={item.to} to={item.to} className="mobile-link">{item.title}</Link>
                ))}
              </MobileSection>

              {/* Experience */}
              <MobileSection
                label="Experience"
                open={mobileSection === 'experience'}
                onToggle={() => setMobileSection(mobileSection === 'experience' ? null : 'experience')}
              >
                {NAV_ITEMS.experience.map((item) => (
                  <Link key={item.to} to={item.to} className="mobile-link">{item.title}</Link>
                ))}
              </MobileSection>

              {/* Contact */}
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive('/contact')
                    ? 'bg-sprout-moss/10 text-sprout-moss'
                    : 'text-forest-soil hover:bg-neutral-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* 모바일 CTA */}
            <div className="px-6 py-6 border-t border-neutral-100">
              <Link
                to="/contact"
                className="block w-full text-center py-3.5 bg-sprout-moss text-white font-bold rounded-full hover:bg-forest-soil transition-colors"
              >
                도입 문의하기
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mobile-link {
          display: block;
          padding: 0.5rem 1rem;
          margin-bottom: 0.125rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #4B5563;
          transition: background-color 0.15s, color 0.15s;
        }
        .mobile-link:hover {
          background-color: #F4F1EA;
          color: #7C9A5E;
        }
      `}</style>
    </>
  );
}

function MobileSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-forest-soil hover:bg-neutral-50 transition-colors"
      >
        {label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="ml-2 mt-1 mb-2 pl-3 border-l-2 border-sprout-moss/30 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}

function ListItem({ className, title, children, to }: { className?: string; title: string; children: React.ReactNode; to: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-spore-cream-light hover:text-sprout-moss focus:bg-spore-cream-light focus:text-sprout-moss ${className ?? ''}`}
        >
          <div className="text-sm font-medium leading-none text-forest-soil">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-neutral-500 mt-1">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
