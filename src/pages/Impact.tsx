import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';

const stats = [
  { value: '70~90만 톤', label: '연간 폐배지 발생량' },
  { value: '1,400억+', label: '연간 처리비용 (원)' },
  { value: '100%', label: '자연 생분해율' },
];

export default function Impact() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-sprout-moss text-center">
        <TextReveal 
          text="환경을 위한\n가장 확실한 투자" 
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
        />
        <SectionReveal delay={0.3}>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            우리가 만들어내는 사회적, 환경적 가치를 숫자로 확인하세요.
          </p>
        </SectionReveal>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.2}>
              <div className="bg-spore-cream rounded-3xl p-10 text-center flex flex-col justify-center items-center h-64 hover:-translate-y-2 transition-transform duration-300">
                <span className="text-4xl md:text-5xl font-bold text-forest-soil mb-4 font-heading">{stat.value}</span>
                <span className="text-lg text-substrate-brown font-semibold">{stat.label}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Visual Impact */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden h-[50vh]">
            <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop" alt="Nature Impact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-soil/80 to-transparent flex items-end p-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
                지속 가능한 순환경제,<br/>교육에서 시작됩니다.
              </h2>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
