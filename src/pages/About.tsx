import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';
import { Link } from 'react-router-dom';
import { MEDIA } from '../config/media';

const SUB_PAGES = [
  {
    to: '/story',
    label: '브랜드 스토리',
    title: '버려진 배지산에서 시작된 이야기',
    desc: '버섯 농가 현장 조사에서 시작해 균사체 교육 키트를 완성하기까지, MyCo-Kit 개발 비하인드를 담았습니다.',
    bg: 'from-sprout-moss/20 to-sprout-moss/40',
    img: MEDIA.images.mycelium,
  },
  {
    to: '/mission',
    label: '미션 및 비전',
    title: '균사체처럼, 연결하고 성장합니다',
    desc: 'MyCo-Kit이 추구하는 4가지 핵심 가치와 2028년까지의 비전 로드맵을 소개합니다.',
    bg: 'from-forest-soil/20 to-forest-soil/40',
    img: MEDIA.images.education,
  },
  {
    to: '/partnership',
    label: '파트너십',
    title: '함께 만드는 지속 가능한 교육',
    desc: '장흥군 버섯산업연구원, 건국대 3D프린팅센터 등 현재 협력 중인 파트너와 새로운 파트너십 기회를 확인하세요.',
    bg: 'from-tactile-curiosity/20 to-tactile-curiosity/40',
    img: MEDIA.images.kit,
  },
];

export default function About() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* 헤더 */}
      <section className="py-24 px-4 bg-spore-cream text-center">
        <div className="max-w-3xl mx-auto">
          <TextReveal text="미래를 위한 작은 포자" className="text-4xl md:text-6xl font-extrabold text-forest-soil mb-6" />
          <SectionReveal delay={0.3}>
            <p className="text-lg md:text-xl text-substrate-brown font-medium max-w-2xl mx-auto">
              MyCo-Kit 팀은 버섯 폐배지의 잠재력에 주목하여<br />환경 문제를 교육적 가치로 전환합니다.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 한 줄 소개 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden aspect-video">
                <img src={MEDIA.images.heroBg} alt="MyCo-Kit" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-black text-forest-soil mb-5 leading-tight">
                  버려지던 자원이<br />아이들의 손끝에서<br />새로 태어납니다
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  MyCo-Kit은 버섯을 수확하고 남은 폐배지(연간 70~90만 톤)를 활용한 친환경 STEAM 교육 키트입니다. 균사체를 직접 배양하며 생명의 순환을 배우고, 자신이 만든 소재가 다시 자연으로 돌아가는 과정을 체험합니다.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  2026년 1월 버섯 농가 현장 조사에서 시작해, 같은 해 6월 STEAM 교육용 키트 프로토타입을 완성했습니다.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 서브페이지 링크 카드 */}
      <section className="py-20 px-4 bg-spore-cream-light">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-forest-soil">더 자세히 알아보기</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SUB_PAGES.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  className="group rounded-3xl overflow-hidden border border-neutral-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={page.img} alt={page.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-b ${page.bg}`} />
                    <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-forest-soil">
                      {page.label}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-forest-soil mb-2 group-hover:text-sprout-moss transition-colors">{page.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{page.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-sprout-moss text-sm font-bold">
                      자세히 보기
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 간략 타임라인 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl font-black text-forest-soil mb-12 text-center">우리의 여정</h2>
            <div className="flex flex-col gap-8">
              {[
                { date: '2026.01', title: '버섯 농가 현장 조사', desc: '연간 90만 톤 발생하는 버섯 폐배지 문제를 목격하고 자원화 방안 모색 시작.' },
                { date: '2026.03', title: '균사체 바이오소재 연구', desc: '버섯 배지 분쇄 및 균사체 접종으로 친환경 포장재 대체 소재 개발 성공.' },
                { date: '2026.06', title: '교육 키트 프로토타입 완성', desc: '아이들이 안전하게 체험할 수 있는 STEAM 교육용 올인원 키트 완성.' },
              ].map((item) => (
                <div key={item.date} className="flex gap-6 items-start">
                  <div className="w-24 shrink-0 font-black text-sprout-moss">{item.date}</div>
                  <div className="flex-1 border-l-2 border-neutral-100 pl-6">
                    <h3 className="font-bold text-forest-soil mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/story" className="inline-flex items-center gap-2 text-sprout-moss font-bold hover:underline">
                전체 스토리 읽기 →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
