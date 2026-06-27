import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';

export default function Technology() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-spore-cream py-20">
        <div className="container mx-auto px-6 text-center">
          <TextReveal text="핵심 원리" className="text-4xl md:text-6xl font-black text-forest-soil mb-6" />
          <p className="text-xl text-forest-soil/80 max-w-2xl mx-auto">
            균사체가 버려진 배지를 분해하며 단단한 소재로 자라나는 과정
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forest-soil mb-4">자연이 만드는 바이오 소재</h2>
              <p className="text-neutral-600">접종부터 성형까지, 눈앞에서 펼쳐지는 생명의 경이로움</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-spore-cream-light rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-neutral-100 shadow-sm">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-sprout-moss shadow-sm mb-6">1</div>
                <h3 className="text-xl font-bold text-forest-soil mb-4">폐배지 혼합 및 멸균</h3>
                <p className="text-neutral-600 leading-relaxed">
                  버섯을 수확하고 남은 영양가 높은 폐배지를 분쇄합니다. 다른 오염원이 자라지 않도록 고온 고압으로 멸균 처리하여 균사체가 잘 자랄 수 있는 깨끗한 환경을 만듭니다.
                </p>
              </div>

              <div className="bg-spore-cream-light rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-neutral-100 shadow-sm">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-sprout-moss shadow-sm mb-6">2</div>
                <h3 className="text-xl font-bold text-forest-soil mb-4">종균 접종 및 배양</h3>
                <p className="text-neutral-600 leading-relaxed">
                  준비된 배지에 균사체 종균을 섞어줍니다. 균사체는 배지의 유기물을 영양분 삼아 섭취하며 하얀 실처럼 뻗어나가 배지 조각들을 단단하게 엮기 시작합니다.
                </p>
              </div>

              <div className="bg-spore-cream-light rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-neutral-100 shadow-sm">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-sprout-moss shadow-sm mb-6">3</div>
                <h3 className="text-xl font-bold text-forest-soil mb-4">3D 몰드 성형 및 건조</h3>
                <p className="text-neutral-600 leading-relaxed">
                  원하는 모양의 3D 플라스틱 몰드에 배양 중인 배지를 채워 넣습니다. 균사체가 몰드 형태대로 꽉 차게 자라면 꺼내어 건조시킵니다. 성장을 멈춘 균사체는 가볍고 단단한 친환경 소재가 됩니다.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
