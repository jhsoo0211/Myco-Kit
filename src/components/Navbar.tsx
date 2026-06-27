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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-neutral-200 shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 relative z-10 group">
          <img 
            src={`/logos/마이코키트_combination_mark_${scrolled ? 'black' : 'white'}.png`} 
            alt="MyCo-Kit Logo" 
            className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105 filter drop-shadow-sm" 
          />
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
          <NavigationMenu>
            <NavigationMenuList>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sprout-moss/50 to-sprout-moss p-6 no-underline outline-none focus:shadow-md"
                          to="/about"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-forest-soil">
                            우리의 이야기
                          </div>
                          <p className="text-sm leading-tight text-forest-soil/80 font-medium">
                            버려지던 버섯 배지에서 발견한 새로운 교육의 가능성. MyCo-Kit이 꿈꾸는 미래를 소개합니다.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/about#mission" title="미션 및 비전">
                      균사체를 통한 자원 순환 교육
                    </ListItem>
                    <ListItem to="/about#team" title="파트너십">
                      함께 만드는 친환경 교육 파트너
                    </ListItem>
                    <ListItem to="/story" title="개발 비하인드">
                      MyCo-Kit이 탄생하기까지의 여정
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem title="균사체 키트 소개" to="/kit">
                      MyCo-Kit 구성품 및 라인업 안내
                    </ListItem>
                    <ListItem title="핵심 원리 (Technology)" to="/technology">
                      균사체 배양과 자원 순환 원리
                    </ListItem>
                    <ListItem title="환경 임팩트" to="/impact">
                      키트 사용이 만드는 구체적인 환경적 수치 변화
                    </ListItem>
                    <ListItem title="활용 사례" to="/cases">
                      실제 교육 현장에서의 사용 후기
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Experience</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem title="체험 프로그램" to="/experience">
                      학교, 청소년 센터 파일럿 테스트 안내
                    </ListItem>
                    <ListItem title="CAD 설계도 다운로드" to="/experience#cad">
                      오픈소스 기반 균사체 몰드 설계 도면
                    </ListItem>
                    <ListItem title="교육 영상" to="/experience#video">
                      선생님과 학생들을 위한 시청각 자료
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button (Simplified for demo) */}
        <button className="lg:hidden text-forest-soil p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}

// Utility component for dropdown items
function ListItem({ className, title, children, to, ...props }: any) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-spore-cream-light hover:text-sprout-moss focus:bg-spore-cream-light focus:text-sprout-moss ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-forest-soil group-hover:text-sprout-moss">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-neutral-500 mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
