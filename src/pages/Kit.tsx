import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';
import { Link } from 'react-router-dom';
import { MEDIA } from '../config/media';

export default function Kit() {
  return (
    <div className="pt-20">
      {/* 히어로 섹션 */}
      <section className="bg-spore-cream py-20">
        <div className="container mx-auto px-6 text-center">
          <TextReveal text="MyCo-Kit 구성품" className="text-4xl md:text-6xl font-black text-forest-soil mb-6" />
          <p className="text-xl text-forest-soil/80 max-w-2xl mx-auto">
            자연과 아이들을 연결하는 친환경 STEAM 교육 키트
          </p>
        </div>
      </section>

      {/* 구성물 소개 (아이콘 6칸 그리드 - 바이오룸 레퍼런스) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forest-soil mb-4">무엇이 들어있나요?</h2>
              <p className="text-neutral-600">모든 구성품은 자연에서 와서 자연으로 돌아갑니다.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: '폐배지 전배양 블록', desc: '멸균 및 종균 접종이 완료되어 바로 배양 가능한 블록', icon: '🍄' },
                { title: '교체형 플라스틱 몰드', desc: '3D 프린터로 제작된 성형용 다회용 몰드', icon: '🧊' },
                { title: '밀봉 배양 용기', desc: '안전한 성장을 돕는 투명 배양 컨테이너', icon: '🫙' },
                { title: '교육용 교재 4종', desc: '학생용 매뉴얼, 실험 노트, 교사용 가이드 등', icon: '📖' },
                { title: '온도 스티커', desc: '직관적으로 온도를 확인할 수 있는 변색 스티커', icon: '🌡️' },
                { title: '실험 도구 세트', desc: '알코올 스왑 5개 및 밀봉 보조 도구', icon: '🔬' },
              ].map((item, idx) => (
                <div key={idx} className="bg-spore-cream-light rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-forest-soil mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 활용 사례 갤러리 */}
      <section className="py-24 bg-spore-cream" id="cases">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forest-soil mb-4">교육 현장 활용 사례</h2>
              <p className="text-neutral-600 mb-8">아이들의 손끝에서 피어나는 상상력과 생명력</p>
              <Link to="/cases" className="inline-flex items-center gap-2 text-sprout-moss font-bold hover:underline">
                상세 사례 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Link to="/cases" className="group rounded-2xl overflow-hidden cursor-pointer relative h-80 block">
                <img src={MEDIA.images.education} alt="수업 사진" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                  <h3 className="text-white text-2xl font-bold group-hover:text-sprout-moss transition-colors">초등학교 과학 수업 →</h3>
                </div>
              </Link>
              <Link to="/cases" className="group rounded-2xl overflow-hidden cursor-pointer relative h-80 block">
                <img src={MEDIA.images.kit} alt="체험학습 사진" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                  <h3 className="text-white text-2xl font-bold group-hover:text-sprout-moss transition-colors">방과후 방학 캠프 →</h3>
                </div>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
