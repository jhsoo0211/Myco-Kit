import ScrollExpandMedia from '../components/blocks/scroll-expansion-hero';
import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';
import { Link } from 'react-router-dom';
import { MEDIA } from '../config/media';

const VALUES = [
  {
    title: '자원 순환 교육',
    desc: '폐기물을 자원으로 바꾸는 선순환의 가치를 직접 체험하고 배웁니다.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-sprout-moss" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18" />
        <path d="M42 6l-6 6m6-6v8m0-8h-8" />
        <path d="M20 24c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
        <path d="M24 16v4M24 28v4M16 24h4M28 24h4" />
      </svg>
    ),
    bg: 'bg-sprout-moss/10',
  },
  {
    title: 'STEAM 융합 교육',
    desc: '과학(S), 기술(T), 예술(A)이 결합된 창의적이고 실용적인 커리큘럼입니다.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-forest-soil" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="4" />
        <ellipse cx="24" cy="24" rx="20" ry="8" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
    bg: 'bg-forest-soil/10',
  },
  {
    title: '직접 만지는 경험',
    desc: '딱딱한 이론이 아닌, 흙을 만지고 균사체를 관찰하는 생생한 체험을 제공합니다.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-tactile-curiosity" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8c0 0-4 4-4 10v6l-4 2v8a6 6 0 0012 0V18a6 6 0 00-6-6" />
        <path d="M28 18c2-1 4 0 4 2v8" />
        <path d="M32 20c2-1 4 0 4 2v6" />
        <path d="M20 18c-2-1-4 0-4 2v6" />
        <path d="M22 8c1-2 3-4 5-3" />
        <path d="M26 6c2 1 4 4 4 8" />
      </svg>
    ),
    bg: 'bg-amber-500/10',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. 스크롤 확장 히어로 영상 */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={MEDIA.heroVideo.src}
        posterSrc={MEDIA.heroVideo.poster}
        bgImageSrc={MEDIA.images.heroBg}
        title="MyCo Kit"
        date="자연에서 온 교육"
        scrollToExpand="스크롤하여 더 알아보기"
        className="mb-32"
      >
        <div className="max-w-4xl mx-auto py-20 text-center px-6">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-black text-forest-soil mb-6 leading-tight">
              버려지던 자원이<br />아이들의 손끝에서 새로 태어납니다
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              MyCo-Kit은 버섯 폐배지를 활용한 친환경 STEAM 교육 키트입니다.
              단순한 재활용을 넘어, 생명의 순환과 성장을 직접 체험할 수 있는 특별한 경험을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/kit"
                className="px-8 py-4 bg-sprout-moss text-white font-bold rounded-full hover:bg-forest-soil transition-colors duration-300"
              >
                키트 살펴보기
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent text-forest-soil font-bold rounded-full border-2 border-sprout-moss hover:bg-sprout-moss hover:text-white transition-colors duration-300"
              >
                도입 문의
              </Link>
            </div>
          </SectionReveal>
        </div>
      </ScrollExpandMedia>

      {/* 2. 핵심 가치 3가지 */}
      <section className="container mx-auto px-6 py-24">
        <SectionReveal>
          <div className="text-center mb-16">
            <TextReveal text="왜 MyCo-Kit인가요?" className="text-3xl md:text-4xl font-black text-forest-soil mb-4" />
            <p className="text-neutral-500 text-lg">균사체가 가르쳐주는 세 가지 가치</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col items-center group">
                <div className={`w-24 h-24 rounded-3xl ${v.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-soil mb-3">{v.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm max-w-xs mx-auto">{v.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* 수치 강조 */}
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
            {[
              { num: '90만 톤', label: '연간 폐배지 발생량' },
              { num: '100%', label: '자연 생분해 소재' },
              { num: 'STEAM', label: '융합 교육 커리큘럼' },
            ].map((s) => (
              <div key={s.label} className="text-center py-8 px-4 rounded-2xl bg-spore-cream border border-neutral-100">
                <div className="text-3xl font-black text-sprout-moss mb-1">{s.num}</div>
                <div className="text-sm text-neutral-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* 3. 하단 비전 섹션 */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={MEDIA.images.education}
        bgImageSrc={MEDIA.images.mycelium}
        title="Our Story"
        date="함께 만드는 내일"
        textBlend={false}
      >
        <div className="max-w-3xl mx-auto py-16 text-center px-6">
          <h2 className="text-3xl font-bold text-forest-soil mb-6">우리의 비전에 동참하세요</h2>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            MyCo-Kit은 교육 기관 및 협력 파트너를 기다립니다.
            미래 세대에게 지속 가능한 가치를 전달하는 여정에 함께해주세요.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-sprout-moss text-white font-bold rounded-full hover:bg-forest-soil transition-colors duration-300"
          >
            협력 문의하기
          </Link>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
