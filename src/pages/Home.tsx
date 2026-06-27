import ScrollExpandMedia from '../components/blocks/scroll-expansion-hero';
import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. 상단 Scroll Expand Hero */}
      <ScrollExpandMedia
        mediaType="video"
        // [동영상 교체 방법] 
        // 1. asset 폴더 등에 .mp4 파일을 넣고 import 하시거나,
        // 2. 외부 호스팅된 mp4 직접 링크(Direct link)를 아래 mediaSrc에 교체하시면 됩니다.
        // 현재는 신뢰도 높은 무료 영상(Mixkit)을 임시로 사용합니다.
        mediaSrc="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
        bgImageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
        title="MyCo Kit"
        date="자연에서 온 교육"
        scrollToExpand="스크롤하여 더 알아보기"
        className="mb-32"
      >
        <div className="max-w-4xl mx-auto py-20 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-black text-forest-soil mb-6">
              버려지던 자원이<br/>아이들의 손끝에서 새로 태어납니다
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              MyCo-Kit은 버섯 폐배지를 활용한 친환경 STEAM 교육 키트입니다.
              단순한 재활용을 넘어, 생명의 순환과 성장을 직접 체험할 수 있는 특별한 경험을 제공합니다.
            </p>
          </SectionReveal>
        </div>
      </ScrollExpandMedia>

      {/* 2. 핵심 가치 소개 (중간 콘텐츠) */}
      <section className="container mx-auto px-6 py-24">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-sprout-moss/20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-sprout-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-forest-soil mb-4">자원 순환 교육</h3>
              <p className="text-neutral-600">폐기물을 자원으로 바꾸는 선순환의 가치를 직접 체험하고 배웁니다.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-spore-cream-dark/50 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-forest-soil" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-forest-soil mb-4">STEAM 융합</h3>
              <p className="text-neutral-600">과학(S), 기술(T), 예술(A)이 결합된 창의적이고 실용적인 커리큘럼입니다.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-tactile-curiosity/20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-tactile-curiosity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-forest-soil mb-4">친근한 경험</h3>
              <p className="text-neutral-600">딱딱한 이론이 아닌, 흙을 만지고 균사체를 관찰하는 생생한 체험을 제공합니다.</p>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* 3. 하단 Scroll Expand Photo (bottom_com) */}
      <ScrollExpandMedia
        mediaType="image"
        // 우리 사진/학생 활동 사진 대체 임시 이미지
        mediaSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop"
        title="Our Story"
        date="함께 만드는 내일"
        textBlend={false}
      >
        <div className="max-w-3xl mx-auto py-16 text-center">
          <h2 className="text-3xl font-bold text-forest-soil mb-6">우리의 비전에 동참하세요</h2>
          <p className="text-lg text-neutral-600 mb-8">
            MyCo-Kit은 교육 기관 및 협력 파트너를 기다립니다. 미래 세대에게 지속 가능한 가치를 전달하는 여정에 함께해주세요.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-sprout-moss text-white font-bold rounded-full hover:bg-forest-soil transition-colors duration-300"
          >
            협력 문의하기
          </a>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
