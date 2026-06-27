import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';
import { Link } from 'react-router-dom';

/**
 * 직접 후원 계좌 정보
 * - 아래 값을 실제 정보로 교체하세요
 */
const BANK_INFO = {
  bank: '은행명',       // TODO: 실제 은행명 입력 (예: 카카오뱅크)
  account: '계좌번호',   // TODO: 실제 계좌번호 입력
  holder: '예금주',      // TODO: 실제 예금주 입력
};

const DONATION_BENEFITS = [
  { icon: '🌱', title: '자원 순환 교육 기여', desc: '폐배지를 STEAM 교육 자원으로 만드는 연구개발에 직접 기여하게 됩니다.' },
  { icon: '📬', title: '소식 공유', desc: '후원자에게는 MyCo-Kit의 성장 스토리와 연구 진행 소식을 이메일로 공유드립니다.' },
  { icon: '💌', title: '감사 인사', desc: '후원 완료 후 이메일로 알려주시면 개인 감사 메시지를 전달드립니다.' },
];

export default function Donation() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* 헤더 */}
      <section className="py-24 px-4 bg-spore-cream-light text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sprout-moss font-bold uppercase tracking-widest text-sm mb-4">Direct Support</p>
          <TextReveal text="직접 후원하기" className="text-4xl md:text-5xl font-black text-forest-soil mb-6" />
          <SectionReveal delay={0.3}>
            <p className="text-lg text-substrate-brown leading-relaxed">
              계좌이체로 MyCo-Kit의 성장을 직접 응원해 주세요.<br />
              여러분의 후원이 지속 가능한 교육의 씨앗이 됩니다.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 계좌 정보 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Account Info</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">후원 계좌</h2>
            </div>

            <div className="bg-spore-cream rounded-3xl p-10 border border-spore-cream/60 shadow-sm">
              <div className="flex flex-col gap-5">
                {[
                  { label: '은행', value: BANK_INFO.bank },
                  { label: '계좌번호', value: BANK_INFO.account },
                  { label: '예금주', value: BANK_INFO.holder },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-6 border-b border-forest-soil/10 pb-5 last:border-0 last:pb-0">
                    <span className="text-sm font-bold text-neutral-400 w-20 shrink-0">{row.label}</span>
                    <span className="text-xl font-black text-forest-soil tracking-wider">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/70 rounded-2xl text-center">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  후원 후{' '}
                  <a href="mailto:myco-kit@googlegroups.com" className="text-sprout-moss font-semibold hover:underline">
                    myco-kit@googlegroups.com
                  </a>
                  으로<br />
                  연락처와 함께 알려주시면 감사 인사를 드립니다.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 후원 혜택 */}
      <section className="py-20 px-4 bg-spore-cream-light">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Why Support</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">후원자에게 드리는 것</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DONATION_BENEFITS.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-6 text-center border border-neutral-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="font-bold text-forest-soil mb-2">{b.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 와디즈 안내 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <SectionReveal>
            <div className="rounded-3xl border-2 border-sprout-moss/30 p-8 text-center bg-sprout-moss/5">
              <p className="text-sm font-bold text-sprout-moss uppercase tracking-wider mb-3">또 다른 방법</p>
              <h3 className="text-xl font-black text-forest-soil mb-3">와디즈 크라우드 펀딩</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                리워드(키트, 워크북 등)와 함께 후원하고 싶다면<br />
                와디즈 펀딩 페이지를 이용해 주세요.
              </p>
              <Link
                to="/funding"
                className="inline-flex items-center gap-2 px-8 py-3 bg-forest-soil text-white font-bold rounded-full hover:bg-forest-soil/80 transition-colors"
              >
                와디즈 펀딩 보러가기 →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 문의 CTA */}
      <section className="py-8 px-4 text-center">
        <p className="text-neutral-400 text-sm mb-3">후원 관련 문의사항이 있으신가요?</p>
        <Link to="/contact" className="inline-block px-8 py-3 rounded-full border-2 border-forest-soil text-forest-soil font-bold hover:bg-forest-soil hover:text-white transition-colors text-sm">
          문의하기
        </Link>
      </section>
    </div>
  );
}
