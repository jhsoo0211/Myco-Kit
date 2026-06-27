import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';
import { MEDIA } from '../config/media';

export default function About() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-spore-cream text-center">
        <TextReveal 
          text="미래를 위한 작은 포자" 
          className="text-4xl md:text-6xl font-extrabold text-forest-soil mb-6"
        />
        <SectionReveal delay={0.3}>
          <p className="text-lg md:text-xl text-substrate-brown font-medium max-w-2xl mx-auto">
            MyCo-Kit 팀은 버섯 폐배지의 잠재력에 주목하여 환경 문제를 교육적 가치로 전환합니다.
          </p>
        </SectionReveal>
      </section>

      {/* Story */}
      <section id="team" className="py-24 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col gap-16">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-forest-soil mb-6 border-b border-sprout-moss pb-4 inline-block">우리의 여정</h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <div className="w-24 shrink-0 font-bold text-sprout-moss text-xl">2026.01</div>
                <div>
                  <h3 className="text-xl font-bold text-forest-soil mb-2">버섯 농가 현장 조사</h3>
                  <p className="text-substrate-brown">연간 90만 톤이 발생하는 버섯 폐배지의 처리 문제를 목격하고 자원화 방안을 모색하기 시작했습니다.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-24 shrink-0 font-bold text-sprout-moss text-xl">2026.03</div>
                <div>
                  <h3 className="text-xl font-bold text-forest-soil mb-2">균사체 바이오소재 연구</h3>
                  <p className="text-substrate-brown">버섯 배지를 분쇄하고 균사체를 접종하여 친환경 포장재를 대체할 수 있는 소재 개발에 성공했습니다.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-24 shrink-0 font-bold text-sprout-moss text-xl">2026.06</div>
                <div>
                  <h3 className="text-xl font-bold text-forest-soil mb-2">교육 키트 프로토타입 완성</h3>
                  <p className="text-substrate-brown">연구 과정의 경험을 아이들도 안전하게 체험할 수 있도록 STEAM 교육용 올인원 키트를 완성했습니다.</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission Image */}
      <section id="mission" className="px-4 md:px-8 mb-24">
        <SectionReveal>
          <div className="w-full max-w-6xl mx-auto h-[60vh] rounded-3xl overflow-hidden relative">
            <img src={MEDIA.images.education} alt="Education" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-forest-soil/40 flex items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
                "모든 생명은 연결되어 있습니다.<br/>MyCo-Kit은 그 연결을 가르칩니다."
              </h2>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Partnership */}
      <section className="py-24 bg-white" id="partnership" data-nav="partnership">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forest-soil mb-4">함께 만드는 미래</h2>
              <p className="text-neutral-600">다양한 파트너와 함께 지속 가능한 교육 생태계를 연구하고 있습니다.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { name: '장흥군 버섯산업연구원', desc: '기술 자문 및 생장 연구' },
                { name: '국립원예특작과학원', desc: '기술특허 협업 (협의중)' },
                { name: '건국대 3D프린팅센터', desc: '몰드 도면 설계 및 시제품 제작' },
                { name: '농부의순정', desc: '폐배지 원재료 수급' },
                { name: 'FSC 패키지 제조사', desc: '친환경 포장재 연계' },
                { name: '건국대 창업지원단', desc: '인프라 및 R&D 지원' },
              ].map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-8 bg-spore-cream-light/50 rounded-2xl border border-neutral-100 text-center group hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-bold text-forest-soil mb-2">{partner.name}</h3>
                  <p className="text-sm text-neutral-500">{partner.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
