import SectionReveal from '../components/SectionReveal';
import TextReveal from '../components/TextReveal';
import { Link } from 'react-router-dom';

export default function CaseStudy() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-spore-cream py-20">
        <div className="container mx-auto px-6 text-center">
          <TextReveal text="교육 현장 활용 사례" className="text-4xl md:text-6xl font-black text-forest-soil mb-6" />
          <p className="text-xl text-forest-soil/80 max-w-2xl mx-auto">
            실제 수업에서 만들어진 학생들의 창의적인 결과물과 후기
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionReveal>
            <div className="flex flex-col gap-16">
              
              {/* Case 1 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" alt="초등학교 수업" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-forest-soil mb-4">서울 OO초등학교 과학 수업</h2>
                  <p className="text-sprout-moss font-bold mb-6">대상: 초등학교 5학년 / 기간: 2주</p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    생태계와 환경 단원과 연계하여 균사체 배양 실험을 진행했습니다. 학생들은 폐배지가 하얗게 균사체로 덮이는 과정을 매일 관찰 일지에 기록하며 생명의 신비로움을 체험했습니다. 완성된 균사체 화분에 씨앗을 심는 확장 활동까지 성공적으로 마쳤습니다.
                  </p>
                  <div className="bg-spore-cream-light p-6 rounded-2xl italic text-forest-soil">
                    "처음에는 냄새날 것 같다고 꺼리던 아이들이, 하얀 솜털처럼 자라는 균사체를 보고는 매일 아침 제일 먼저 관찰하러 뛰어갑니다. 생물 다양성과 자원 순환을 이보다 더 생생하게 가르칠 수 있는 교구는 없었습니다." - 담당 교사 후기
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="w-full md:w-1/2 aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop" alt="방과후 방학 캠프" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-forest-soil mb-4">지역 청소년 센터 친환경 캠프</h2>
                  <p className="text-sprout-moss font-bold mb-6">대상: 중학생 / 기간: 여름방학</p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    직접 3D 도면을 설계하고 출력한 몰드에 균사체를 배양하는 메이커 융합(STEAM) 교육을 진행했습니다. 각자 개성 있는 모양의 친환경 연필꽂이와 트레이를 완성했으며, 플라스틱 사용을 줄이자는 환경 캠페인으로 이어졌습니다.
                  </p>
                  <div className="bg-spore-cream-light p-6 rounded-2xl italic text-forest-soil">
                    "버려지는 쓰레기가 내가 디자인한 물건이 된다는 게 신기했어요. 다 쓰고 나서 땅에 묻으면 다시 흙으로 돌아간다는 사실이 가장 멋져요." - 참여 학생 후기
                  </div>
                </div>
              </div>

            </div>
            
            <div className="mt-20 text-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-sprout-moss text-white font-bold rounded-full hover:bg-forest-soil transition-colors duration-300">
                우리 학교도 도입 문의하기
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
