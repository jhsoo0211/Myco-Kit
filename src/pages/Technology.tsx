import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';
import { Link } from 'react-router-dom';
import { MEDIA } from '../config/media';

const STEPS = [
  {
    num: '01',
    title: '폐배지 혼합 및 멸균',
    subtitle: 'Substrate Preparation',
    desc: '버섯을 수확하고 남은 영양가 높은 폐배지를 분쇄합니다. 다른 오염원이 자라지 않도록 고온 고압으로 멸균 처리하여 균사체가 잘 자랄 수 있는 깨끗한 환경을 만듭니다.',
    detail: '폐배지의 주성분은 셀룰로오스, 헤미셀룰로오스, 리그닌입니다. 균사체는 이 성분을 분해하며 성장하고, 그 과정에서 배지 입자들을 단단하게 결합시킵니다.',
    color: 'bg-forest-soil',
    img: MEDIA.images.mycelium,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" />
        <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M24 32v-8M20 28l4 4 4-4" />
        <path d="M12 20l4 2M36 20l-4 2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '종균 접종 및 균사 배양',
    subtitle: 'Inoculation & Mycelium Growth',
    desc: '준비된 배지에 균사체 종균을 섞어줍니다. 균사체는 배지의 유기물을 영양분 삼아 하얀 실처럼 뻗어나가 배지 조각들을 단단하게 엮기 시작합니다.',
    detail: '균사체(Mycelium)는 버섯의 뿌리 역할을 하는 실 모양의 구조입니다. 1cm³의 배지 안에 수 킬로미터의 균사체가 자라며 놀라운 강도를 만들어냅니다. 이 과정이 MyCo-Kit 소재의 핵심입니다.',
    color: 'bg-sprout-moss',
    img: MEDIA.images.kit,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8c0 0-8 6-8 14v8M24 8c0 0 8 6 8 14v8" />
        <path d="M16 22c-4 2-6 6-6 10M32 22c4 2 6 6 6 10" />
        <path d="M10 32c0 0 4 4 14 4s14-4 14-4" />
        <circle cx="24" cy="18" r="3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '3D 몰드 성형 및 건조',
    subtitle: 'Molding & Drying',
    desc: '원하는 모양의 3D 플라스틱 몰드에 배양 중인 배지를 채워 넣습니다. 균사체가 몰드 형태대로 꽉 차게 자라면 꺼내어 건조시킵니다. 성장을 멈춘 균사체 복합소재는 가볍고 단단한 친환경 소재가 됩니다.',
    detail: '건조 과정에서 열처리(약 60°C, 2시간)를 통해 균사체의 추가 성장을 완전히 중단시킵니다. 완성된 소재는 EPS(스티로폼) 대비 동등한 강도를 가지면서 100% 자연 생분해가 가능합니다.',
    color: 'bg-tactile-curiosity',
    img: MEDIA.images.education,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="16" width="28" height="22" rx="3" />
        <path d="M17 16V12a7 7 0 0114 0v4" />
        <path d="M24 26v4M20 28h8" />
      </svg>
    ),
  },
];

const COMPARE = [
  { prop: '원재료', myco: '버섯 폐배지 (폐기물 재활용)', eps: '석유 기반 원료' },
  { prop: '생분해', myco: '100% 자연 생분해', eps: '500년 이상 잔존' },
  { prop: '탄소 발생', myco: '음성 탄소 (CO₂ 흡수)', eps: '탄소 양성 (CO₂ 배출)' },
  { prop: '강도', myco: 'EPS 동급 (밀도 조절 가능)', eps: '기준값' },
  { prop: '독성', myco: '무독성, 아이도 안전', eps: '발포제 첨가제 포함' },
  { prop: '비용', myco: '폐기물 활용으로 저비용', eps: '석유 가격 연동' },
];

export default function Technology() {
  return (
    <div className="flex flex-col w-full">
      {/* 헤더 */}
      <section className="py-20 px-4 bg-spore-cream-light text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sprout-moss font-bold uppercase tracking-widest text-sm mb-4">Core Technology</p>
          <TextReveal text="핵심 원리" className="text-4xl md:text-6xl font-black text-forest-soil mb-6" />
          <SectionReveal delay={0.3}>
            <p className="text-xl text-forest-soil/70 max-w-2xl mx-auto">
              균사체가 버려진 배지를 분해하며 단단한 소재로 자라나는 3단계 과정
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 3단계 프로세스 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-24">
          {STEPS.map((step, i) => (
            <SectionReveal key={step.num} delay={0.1}>
              <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                {/* 이미지 */}
                <div className="w-full md:w-5/12">
                  <div className="relative rounded-3xl overflow-hidden aspect-square shadow-lg">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${step.color} opacity-30`} />
                    <div className={`absolute top-4 left-4 w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`text-white font-black text-6xl opacity-20 leading-none`}>{step.num}</span>
                    </div>
                  </div>
                </div>

                {/* 텍스트 */}
                <div className="w-full md:w-7/12">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${step.color} mb-4`}>
                    STEP {step.num} — {step.subtitle}
                  </div>
                  <h2 className="text-3xl font-black text-forest-soil mb-4">{step.title}</h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">{step.desc}</p>
                  <div className="bg-spore-cream-light rounded-2xl p-5 border-l-4 border-sprout-moss">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      <span className="font-bold text-forest-soil">📌 과학적 원리: </span>
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* 소재 비교표 */}
      <section className="py-20 px-4 bg-spore-cream-light">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Material Comparison</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">균사체 소재 vs 기존 포장재</h2>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm">
              <div className="grid grid-cols-3 bg-forest-soil text-white text-sm font-bold">
                <div className="p-4">특성</div>
                <div className="p-4 text-sprout-moss">🍄 균사체 소재</div>
                <div className="p-4 text-neutral-300">🏭 EPS (스티로폼)</div>
              </div>
              {COMPARE.map((row, i) => (
                <div key={row.prop} className={`grid grid-cols-3 text-sm border-t border-neutral-100 ${i % 2 === 0 ? 'bg-white' : 'bg-spore-cream-light/50'}`}>
                  <div className="p-4 font-semibold text-neutral-400">{row.prop}</div>
                  <div className="p-4 font-medium text-forest-soil">{row.myco}</div>
                  <div className="p-4 text-neutral-400">{row.eps}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white text-center">
        <SectionReveal>
          <h2 className="text-2xl font-black text-forest-soil mb-4">이 기술을 직접 체험해 보세요</h2>
          <p className="text-neutral-500 mb-8">MyCo-Kit과 함께라면 아이들도 균사체 소재를 직접 만들 수 있습니다.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/kit" className="px-8 py-4 bg-sprout-moss text-white font-bold rounded-full hover:bg-forest-soil transition-colors">키트 구성 보기</Link>
            <Link to="/experience" className="px-8 py-4 border-2 border-forest-soil text-forest-soil font-bold rounded-full hover:bg-forest-soil hover:text-white transition-colors">체험 프로그램 신청</Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
