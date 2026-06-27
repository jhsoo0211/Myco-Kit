import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';
import { Link } from 'react-router-dom';

/**
 * 펀딩 페이지 설정
 * - WADIZ_URL: 와디즈 펀딩 페이지 URL로 교체하세요
 */
const WADIZ_URL = 'https://www.wadiz.kr'; // TODO: 실제 와디즈 펀딩 URL로 교체

const FUND_USES = [
  { icon: '🧪', title: '균사체 배양 연구', percent: 35, desc: '최적 배양 조건 연구 및 품질 개선' },
  { icon: '📦', title: '초도 생산', percent: 40, desc: '첫 번째 양산 배치 제조 및 패키징' },
  { icon: '📚', title: '교육 자료 개발', percent: 15, desc: '교사용 가이드, 학생 워크북 제작' },
  { icon: '🚀', title: '마케팅 및 배송', percent: 10, desc: '런칭 프로모션 및 후원자 배송' },
];

const REWARDS = [
  {
    tier: 'Early Bird',
    amount: '29,900원',
    badge: '얼리버드',
    color: 'border-neutral-200 bg-white',
    badgeColor: 'bg-neutral-100 text-neutral-600',
    items: ['MyCo-Kit U300 기본 구성 1세트', '디지털 교육 가이드 PDF', '배양 일지 워크북'],
  },
  {
    tier: 'Standard',
    amount: '34,900원',
    badge: '추천',
    color: 'border-sprout-moss bg-sprout-moss/5',
    badgeColor: 'bg-sprout-moss text-white',
    items: ['MyCo-Kit U300 기본 구성 1세트', '디지털 교육 가이드 PDF', '배양 일지 워크북', '리필용 균사체 블록 1개 추가'],
    highlight: true,
  },
  {
    tier: 'Class Pack',
    amount: '149,000원',
    badge: '교육기관',
    color: 'border-forest-soil/20 bg-white',
    badgeColor: 'bg-forest-soil text-white',
    items: ['MyCo-Kit U300 5세트', '교사용 수업 PPT 파일', '온라인 교사 연수 세션 참여', '이름 각인 서포터 카드'],
  },
];

export default function Funding() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* 헤더 */}
      <section className="py-24 px-4 bg-spore-cream text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-forest-soil font-bold uppercase tracking-widest text-sm mb-4">🌱 Crowdfunding</p>
          <TextReveal text="MyCo-Kit의 첫 번째 여정을 함께해 주세요" className="text-4xl md:text-5xl font-black text-forest-soil mb-6" />
          <SectionReveal delay={0.3}>
            <p className="text-lg text-substrate-brown leading-relaxed mb-10">
              버섯 폐배지가 아이들의 교육 자원이 되는 순간.<br />
              와디즈 펀딩으로 이 변화를 함께 만들어 주세요.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WADIZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-forest-soil text-white font-black rounded-full hover:bg-forest-soil/80 transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                와디즈 펀딩 참여하기
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 펀딩 활용 계획 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Fund Usage</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">펀딩 금액은 이렇게 쓰입니다</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FUND_USES.map((f) => (
                <div key={f.title} className="flex gap-5 items-start p-6 bg-spore-cream-light rounded-2xl border border-neutral-100">
                  <span className="text-3xl">{f.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-forest-soil">{f.title}</span>
                      <span className="font-black text-sprout-moss text-lg">{f.percent}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5 mb-2">
                      <div className="bg-sprout-moss h-1.5 rounded-full" style={{ width: `${f.percent}%` }} />
                    </div>
                    <p className="text-sm text-neutral-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 리워드 */}
      <section className="py-20 px-4 bg-spore-cream-light">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Rewards</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">서포터 리워드</h2>
              <p className="text-neutral-500 mt-3 text-sm">* 정확한 리워드 내용은 와디즈 펀딩 페이지에서 확인하세요</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REWARDS.map((r) => (
                <div key={r.tier} className={`rounded-2xl p-8 border-2 relative ${r.color} ${r.highlight ? 'shadow-xl' : ''}`}>
                  {r.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sprout-moss text-white text-xs font-black px-4 py-1 rounded-full">가장 인기</div>
                  )}
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${r.badgeColor}`}>{r.badge}</span>
                  <p className="text-2xl font-black text-forest-soil mt-4 mb-1">{r.amount}</p>
                  <p className="text-sm text-neutral-400 mb-6">부터</p>
                  <ul className="space-y-3">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                        <svg className="w-4 h-4 text-sprout-moss mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href={WADIZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-forest-soil text-white font-bold rounded-full hover:bg-forest-soil/80 transition-colors"
              >
                와디즈에서 전체 리워드 보기 →
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 직접 후원 안내 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <SectionReveal>
            <div className="rounded-3xl border-2 border-neutral-100 p-8 text-center bg-spore-cream-light">
              <p className="text-sm font-bold text-sprout-moss uppercase tracking-wider mb-3">또 다른 방법</p>
              <h3 className="text-xl font-black text-forest-soil mb-3">계좌 직접 후원</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                리워드 없이 계좌이체로 직접 후원하고 싶다면<br />
                아래 버튼을 이용해 주세요.
              </p>
              <Link
                to="/donation"
                className="inline-flex items-center gap-2 px-8 py-3 bg-forest-soil text-white font-bold rounded-full hover:bg-forest-soil/80 transition-colors"
              >
                직접 후원 계좌 보기 →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 문의 CTA */}
      <section className="py-10 px-4 text-center">
        <p className="text-neutral-500 mb-4 text-sm">펀딩 관련 문의사항이 있으신가요?</p>
        <Link to="/contact" className="inline-block px-8 py-3 rounded-full border-2 border-forest-soil text-forest-soil font-bold hover:bg-forest-soil hover:text-white transition-colors text-sm">문의하기</Link>
      </section>
    </div>
  );
}
