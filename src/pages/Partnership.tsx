import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';
import { Link } from 'react-router-dom';

const PARTNERS = [
  {
    name: '장흥군 버섯산업연구원',
    role: '기술 자문 및 생장 연구',
    tag: '기술',
    desc: '균사체 배양 최적 조건 및 폐배지 처리 기술에 대한 전문 자문을 제공합니다.',
  },
  {
    name: '국립원예특작과학원',
    role: '기술특허 협업 (협의중)',
    tag: '연구',
    desc: '균사체 소재의 산업적 활용을 위한 특허 기술 공동 연구를 진행합니다.',
  },
  {
    name: '건국대 3D프린팅센터',
    role: '몰드 도면 설계 및 시제품 제작',
    tag: '제조',
    desc: '교육용 균사체 성형 몰드 CAD 설계 및 3D 프린팅 시제품 생산을 담당합니다.',
  },
  {
    name: '농부의순정',
    role: '폐배지 원재료 수급',
    tag: '원재료',
    desc: '품질이 검증된 버섯 폐배지를 안정적으로 공급하는 파트너 농가입니다.',
  },
  {
    name: 'FSC 패키지 제조사',
    role: '친환경 포장재 연계',
    tag: '패키징',
    desc: '국제 산림 인증(FSC) 기반의 친환경 패키지 제작을 담당합니다.',
  },
  {
    name: '건국대 창업지원단',
    role: '인프라 및 R&D 지원',
    tag: '인프라',
    desc: '연구 공간, 실험 장비, 창업 멘토링 등 전반적인 R&D 인프라를 지원합니다.',
  },
];

const TAG_COLORS: Record<string, string> = {
  '기술': 'bg-blue-50 text-blue-600',
  '연구': 'bg-purple-50 text-purple-600',
  '제조': 'bg-orange-50 text-orange-600',
  '원재료': 'bg-green-50 text-green-700',
  '패키징': 'bg-teal-50 text-teal-600',
  '인프라': 'bg-neutral-100 text-neutral-600',
};

const PARTNER_TYPES = [
  {
    icon: '🏫',
    title: '교육 기관 파트너',
    desc: '학교, 청소년 센터, 과학관 등 교육 현장에서 MyCo-Kit을 활용하고 싶은 기관과 함께합니다.',
    items: ['방과후 프로그램 공급', '커리큘럼 공동 개발', '교사 교육 지원'],
  },
  {
    icon: '🏢',
    title: '기업 CSR 파트너',
    desc: '친환경·교육 분야 ESG 활동을 원하는 기업과의 파트너십을 환영합니다.',
    items: ['사내 교육 프로그램', '지역 사회 환경 교육', '브랜드 공동 캠페인'],
  },
  {
    icon: '🔬',
    title: '연구·기술 파트너',
    desc: '균사체 소재 연구, 교육 콘텐츠 개발 분야의 전문 기관과의 협력을 모색합니다.',
    items: ['균사체 배양 기술 연구', '교육 효과 연구', '특허 공동 출원'],
  },
];

export default function Partnership() {
  return (
    <div className="flex flex-col w-full">
      {/* 헤더 */}
      <section className="py-24 px-4 bg-spore-cream-light text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sprout-moss font-bold uppercase tracking-widest text-sm mb-4">Partnership</p>
          <TextReveal text="함께 만드는 지속 가능한 교육" className="text-4xl md:text-5xl font-black text-forest-soil mb-6" />
          <SectionReveal delay={0.3}>
            <p className="text-lg text-substrate-brown leading-relaxed">
              MyCo-Kit은 다양한 파트너와 함께 지속 가능한 교육 생태계를 만들어 갑니다.<br />
              균사체처럼, 우리는 연결될수록 더 강해집니다.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 현재 파트너 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Current Partners</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">현재 협력 파트너</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PARTNERS.map((p) => (
                <div key={p.name} className="bg-spore-cream-light rounded-2xl p-6 border border-neutral-100 hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base font-bold text-forest-soil leading-tight">{p.name}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ml-2 ${TAG_COLORS[p.tag]}`}>{p.tag}</span>
                  </div>
                  <p className="text-sm font-semibold text-sprout-moss mb-3">{p.role}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 파트너십 유형 */}
      <section className="py-20 px-4 bg-forest-soil">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">How We Partner</span>
              <h2 className="text-3xl font-black text-white mt-3">파트너십 유형</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PARTNER_TYPES.map((t) => (
                <div key={t.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <div className="text-4xl mb-4">{t.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{t.title}</h3>
                  <p className="text-white/60 text-sm mb-5 leading-relaxed">{t.desc}</p>
                  <ul className="space-y-2">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <svg className="w-4 h-4 text-sprout-moss shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 파트너십 혜택 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="bg-spore-cream rounded-3xl p-10 md:p-14 text-center">
              <h2 className="text-3xl font-black text-forest-soil mb-4">파트너사가 되면?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10">
                {[
                  { title: '공동 연구 기회', desc: '균사체 소재 및 교육 효과 관련 공동 연구 및 발표 기회를 제공합니다.' },
                  { title: '브랜드 노출', desc: '웹사이트, 키트 패키지, 교육 자료에 파트너 로고 및 브랜드를 노출합니다.' },
                  { title: '우선 공급권', desc: '신규 키트 출시 시 파트너사에게 우선 공급 및 특별 할인을 제공합니다.' },
                  { title: '네트워크 연결', desc: '교육 기관, 환경 단체 등 MyCo-Kit 생태계 내의 다양한 파트너와의 연결을 지원합니다.' },
                ].map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sprout-moss/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-sprout-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-forest-soil mb-1">{b.title}</p>
                      <p className="text-sm text-neutral-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/contact" className="inline-block px-10 py-4 bg-forest-soil text-white font-bold rounded-full hover:bg-forest-soil/80 transition-colors">파트너십 문의하기</Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
