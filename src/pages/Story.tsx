import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';

export default function Story() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-spore-cream py-20">
        <div className="container mx-auto px-6 text-center">
          <TextReveal text="Our Story" className="text-4xl md:text-6xl font-black text-forest-soil mb-6" />
          <p className="text-xl text-forest-soil/80 max-w-2xl mx-auto">
            작은 포자에서 시작된 커다란 변화, MyCo-Kit 개발 비하인드
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-4 border-sprout-moss/30 ml-6 md:ml-0 md:pl-12 space-y-16 py-8">
                
                {/* Story 1 */}
                <div className="relative">
                  <div className="absolute -left-[45px] md:-left-[69px] w-8 h-8 bg-sprout-moss rounded-full border-4 border-white"></div>
                  <h3 className="text-2xl font-bold text-forest-soil mb-4">버려진 배지산과의 첫 만남</h3>
                  <div className="bg-spore-cream-light p-8 rounded-2xl shadow-sm mb-6">
                    <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1000&auto=format&fit=crop" alt="농장 사진" className="w-full h-64 object-cover rounded-xl mb-6" />
                    <p className="text-neutral-600 leading-relaxed">
                      "버섯을 수확하고 남은 톱밥 배지는 어떻게 될까?" 단순한 호기심으로 방문한 농장 한켠에는 거대한 폐배지 산이 쌓여 있었습니다.
                      매년 수십만 톤이 폐기되며 환경 문제를 일으킨다는 사실을 알게 된 순간, 우리는 이를 자원으로 탈바꿈시킬 방법을 고민하기 시작했습니다.
                    </p>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="relative">
                  <div className="absolute -left-[45px] md:-left-[69px] w-8 h-8 bg-sprout-moss rounded-full border-4 border-white"></div>
                  <h3 className="text-2xl font-bold text-forest-soil mb-4">수백 번의 배양 실험</h3>
                  <div className="bg-white border border-neutral-100 p-8 rounded-2xl shadow-sm mb-6">
                    <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop" alt="실험 사진" className="w-full h-64 object-cover rounded-xl mb-6 filter sepia-[0.3]" />
                    <p className="text-neutral-600 leading-relaxed">
                      아이들이 만져도 안전하면서 튼튼한 형태를 유지하는 최적의 배합 비율을 찾기 위해 수백 개의 샘플을 만들었습니다.
                      때로는 곰팡이가 피어 실패하기도 했고, 모양이 부서지기도 했지만 그 과정 자체가 훌륭한 탐구 기록이 되었습니다.
                    </p>
                  </div>
                </div>

                {/* Story 3 */}
                <div className="relative">
                  <div className="absolute -left-[45px] md:-left-[69px] w-8 h-8 bg-sprout-moss rounded-full border-4 border-white"></div>
                  <h3 className="text-2xl font-bold text-forest-soil mb-4">교육 현장으로의 첫 걸음</h3>
                  <div className="bg-spore-cream-light p-8 rounded-2xl shadow-sm">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="교육 사진" className="w-full h-64 object-cover rounded-xl mb-6" />
                    <p className="text-neutral-600 leading-relaxed">
                      마침내 완성된 MyCo-Kit을 들고 초등학교 방과후 교실을 찾았습니다. 
                      "이게 정말 버섯으로 만든 거예요?" 눈을 반짝이며 흙을 만지고 관찰하는 아이들의 모습에서, 
                      우리는 환경 교육의 진정한 가치가 '직접 만지는 경험'에 있다는 것을 확신했습니다.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
