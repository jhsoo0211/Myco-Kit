import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';
import { Link } from 'react-router-dom';

export default function Experience() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-spore-cream py-20">
        <div className="container mx-auto px-6 text-center">
          <TextReveal text="Experience" className="text-4xl md:text-6xl font-black text-forest-soil mb-6" />
          <p className="text-xl text-forest-soil/80 max-w-2xl mx-auto">
            직접 만져보고 설계하며 체험하는 균사체 자원 순환
          </p>
        </div>
      </section>

      {/* 교육 영상 섹션 */}
      <section className="py-24 bg-white" id="video">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forest-soil mb-4">교육 영상</h2>
              <p className="text-neutral-600">아이들의 눈높이에 맞춘 쉽고 재미있는 균사체 이야기</p>
            </div>
            
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video relative group">
              <video 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                controls 
                poster="https://images.unsplash.com/photo-1518133504351-40e8bf3a948e?q=80&w=1500&auto=format&fit=crop"
              >
                <source src="https://cdn.pixabay.com/video/2021/08/04/83870-584742749_large.mp4" type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                <div className="w-20 h-20 bg-sprout-moss/90 rounded-full flex items-center justify-center pl-1 shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CAD 설계도 다운로드 섹션 */}
      <section className="py-24 bg-spore-cream-light" id="cad">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              <div className="w-full md:w-1/2">
                <div className="aspect-square bg-white rounded-3xl p-8 shadow-sm flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-50 opacity-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                    alt="CAD 도면" 
                    className="relative z-10 w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-forest-soil mb-6">오픈소스 3D 몰드 설계도</h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  MyCo-Kit은 교육 현장에서 누구나 쉽게 3D 프린터로 균사체 몰드를 제작할 수 있도록 표준 CAD 설계 도면을 오픈소스로 제공합니다.
                  나만의 형태를 설계하고 배양하는 융합형(STEAM) 교육을 실현해보세요.
                </p>
                <button className="flex items-center gap-3 px-8 py-4 bg-sprout-moss text-white font-bold rounded-full hover:bg-forest-soil transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  표준 도면 다운로드 (STL/STEP)
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 체험 프로그램 안내 섹션 */}
      <section className="py-24 bg-white" id="programs">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forest-soil mb-4">체험 프로그램 안내</h2>
              <p className="text-neutral-600">학교, 기관, 그리고 가정에서 활용 가능한 맞춤형 프로그램</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-neutral-100 rounded-3xl bg-spore-cream-light/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-xl font-bold text-forest-soil mb-2">B2G / 방과후학교</h3>
                <p className="text-sprout-moss font-semibold mb-4">정규 교과 연계 프로그램</p>
                <ul className="text-neutral-600 space-y-2 text-sm leading-relaxed">
                  <li>• 초등 5학년 ~ 중학교 과학 연계</li>
                  <li>• 나라장터 및 S2B를 통한 간편한 납품</li>
                  <li>• 교사용 지도서 및 교육 PPT 제공</li>
                  <li>• 결과 레포트를 통한 교육 성과 확인</li>
                </ul>
              </div>

              <div className="p-8 border border-sprout-moss/30 rounded-3xl bg-sprout-moss/5 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-sprout-moss text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BEST</div>
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-forest-soil mb-2">기관 / 과학캠프</h3>
                <p className="text-sprout-moss font-semibold mb-4">1회성 단기 특강 및 체험</p>
                <ul className="text-neutral-600 space-y-2 text-sm leading-relaxed">
                  <li>• 청소년 수련관, 과학관, 환경센터 대상</li>
                  <li>• 전문 강사 파견형 특강 가능</li>
                  <li>• 3D 프린팅 몰드 제작 등 메이커스 융합 과정</li>
                </ul>
              </div>

              <div className="p-8 border border-neutral-100 rounded-3xl bg-spore-cream-light/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-forest-soil mb-2">B2C / 홈스쿨링</h3>
                <p className="text-sprout-moss font-semibold mb-4">가정용 DIY 키트</p>
                <ul className="text-neutral-600 space-y-2 text-sm leading-relaxed">
                  <li>• 스마트스토어 및 크라우드펀딩 채널 구매</li>
                  <li>• 집에서 부모님과 함께하는 안전한 관찰 실험</li>
                  <li>• 재사용 가능한 몰드 및 리필용 균사체 블록</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-neutral-600 mb-6">프로그램 도입을 원하시거나 자세한 커리큘럼이 궁금하신가요?</p>
              <Link to="/contact" className="inline-block px-8 py-4 bg-forest-soil text-white font-bold rounded-full hover:bg-forest-soil/90 transition-colors">
                도입 문의 및 제안서 다운로드
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
