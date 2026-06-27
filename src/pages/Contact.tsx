import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-spore-cream text-center">
        <TextReveal 
          text="함께 만드는\n자원순환의 미래" 
          className="text-4xl md:text-6xl font-extrabold text-forest-soil mb-6"
        />
        <SectionReveal delay={0.3}>
          <p className="text-lg md:text-xl text-substrate-brown font-medium max-w-2xl mx-auto">
            프로젝트 협력 및 교육 키트 도입 문의를 환영합니다.
          </p>
        </SectionReveal>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 max-w-3xl mx-auto w-full">
        <SectionReveal>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-neutral-100">
            <h2 className="text-3xl font-bold text-forest-soil mb-8">문의하기</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-substrate-brown">이름 / 기관명</label>
                <input type="text" id="name" className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-sprout-moss focus:ring-1 focus:ring-sprout-moss" placeholder="홍길동 / OO학교" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-substrate-brown">이메일</label>
                <input type="email" id="email" className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-sprout-moss focus:ring-1 focus:ring-sprout-moss" placeholder="example@email.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-substrate-brown">문의 내용</label>
                <textarea id="message" rows={5} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-sprout-moss focus:ring-1 focus:ring-sprout-moss" placeholder="문의하실 내용을 입력해주세요."></textarea>
              </div>
              <button type="submit" className="mt-4 w-full py-4 bg-forest-soil text-white font-bold rounded-xl hover:bg-forest-soil/90 transition-colors">
                메시지 보내기
              </button>
            </form>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
