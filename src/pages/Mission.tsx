import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';
import { Link } from 'react-router-dom';
import { MEDIA } from '../config/media';

const CORE_VALUES = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="16" />
        <path d="M20 10c0 0-6 5-6 10v4l-2 1v4a8 8 0 0016 0v-4l-2-1v-4c0-5-6-10-6-10z" />
        <path d="M14 24c2 1 4 2 6 2s4-1 6-2" />
      </svg>
    ),
    title: '자원 순환',
    desc: '버려지는 자원을 교육적 가치로 전환합니다. 버섯 폐배지는 쓰레기가 아닌, 아이들이 배울 수 있는 살아있는 교재입니다.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="4" />
        <ellipse cx="20" cy="20" rx="16" ry="6" />
        <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(120 20 20)" />
      </svg>
    ),
    title: 'STEAM 교육',
    desc: '과학, 기술, 공학, 예술, 수학이 하나의 활동으로 연결됩니다. 균사체는 단순한 생물이 아닌 융합 교육의 매개체입니다.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 5L8 12v10l12 7 12-7V12L20 5z" />
        <path d="M20 17v8M14 13.5l6 3.5 6-3.5" />
      </svg>
    ),
    title: '지속 가능성',
    desc: '모든 구성품은 자연에서 와서 자연으로 돌아갑니다. 친환경 소재와 공정을 통해 교육과 환경 보전을 동시에 실현합니다.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 30s0-8 10-12c10 4 10 12 10 12" />
        <circle cx="20" cy="14" r="4" />
        <path d="M6 24s0-5 6-8M34 24s0-5-6-8" />
      </svg>
    ),
    title: '접근성',
    desc: '학교, 기관, 가정 어디서든 안전하게 사용할 수 있도록 설계했습니다. 누구든 균사체 생명과학의 경이로움을 경험할 수 있어야 합니다.',
  },
];

const VISION_STEPS = [
  { year: '2026', title: '교육 현장 파일럿', desc: '초등학교 및 청소년 센터에서의 파일럿 프로그램을 통해 교육적 효과를 검증합니다.' },
  { year: '2027', title: '전국 학교 확장', desc: '나라장터를 통한 공공조달로 전국 학교 방과후 프로그램에 MyCo-Kit을 공급합니다.' },
  { year: '2028', title: '글로벌 진출', desc: '균사체 기반 교육 키트를 통해 아시아 시장으로 친환경 STEAM 교육 모델을 확산시킵니다.' },
];

export default function Mission() {
  return (
    <div className="flex flex-col w-full">
      {/* 헤더 */}
      <section className="py-24 px-4 bg-forest-soil text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={MEDIA.images.mycelium} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sprout-moss font-bold uppercase tracking-widest text-sm mb-4">Mission & Vision</p>
          <TextReveal text="균사체처럼, 연결하고 성장합니다" className="text-4xl md:text-5xl font-black text-white mb-6" />
          <SectionReveal delay={0.3}>
            <p className="text-lg text-white/80 leading-relaxed">
              MyCo-Kit은 버려지던 자원에서 교육적 가능성을 발견합니다.<br />
              자연의 순환 원리를 배우며, 아이들이 지속 가능한 미래를 설계할 수 있도록 돕습니다.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 미션 선언문 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-black text-forest-soil mt-3 mb-6 leading-tight">
                  폐배지를 교육 자원으로,<br />환경 문제를<br />배움의 기회로
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  연간 70~90만 톤 발생하는 버섯 폐배지는 처리 비용만 연간 1,400억 원에 달하는 사회적 과제입니다. MyCo-Kit은 이 자원을 균사체 STEAM 교육 키트로 전환하여, 환경 문제 해결과 교육적 가치를 동시에 창출합니다.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  아이들은 직접 균사체를 배양하며 생명의 순환을 배우고, 자신이 만든 친환경 소재가 다시 자연으로 돌아가는 과정을 체험합니다.
                </p>
              </div>
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden aspect-square">
                <img src={MEDIA.images.mycelium} alt="균사체" className="w-full h-full object-cover" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20 px-4 bg-spore-cream-light">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Core Values</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">MyCo-Kit이 추구하는 가치</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORE_VALUES.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-8 border border-neutral-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sprout-moss/10 flex items-center justify-center text-sprout-moss mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-forest-soil mb-3">{v.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 비전 로드맵 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Vision Roadmap</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">우리가 그리는 미래</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-sprout-moss/20" />
              <div className="space-y-10">
                {VISION_STEPS.map((step, i) => (
                  <SectionReveal key={step.year} delay={i * 0.15}>
                    <div className={`flex items-start gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 rounded-full bg-sprout-moss flex items-center justify-center text-white font-black text-sm shadow-lg">
                          {step.year}
                        </div>
                      </div>
                      <div className={`bg-spore-cream-light rounded-2xl p-6 flex-1 border border-neutral-100 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                        <h3 className="text-xl font-bold text-forest-soil mb-2">{step.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-sprout-moss text-center">
        <SectionReveal>
          <h2 className="text-3xl font-black text-forest-soil mb-4">이 비전에 함께 하시겠습니까?</h2>
          <p className="text-forest-soil/80 mb-8 max-w-xl mx-auto">MyCo-Kit의 미션에 공감하신다면 파트너십이나 도입 문의를 통해 함께 해주세요.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/partnership" className="px-8 py-4 bg-forest-soil text-white font-bold rounded-full hover:bg-forest-soil/80 transition-colors">파트너십 알아보기</Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-forest-soil font-bold rounded-full hover:bg-white/80 transition-colors">도입 문의하기</Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
