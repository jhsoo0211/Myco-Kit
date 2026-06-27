import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';

/**
 * CAD 다운로드 설정
 * - 각 shape의 downloadUrl을 실제 파일 경로로 교체하세요
 * - 파일은 public/cad/ 폴더에 넣으면 됩니다 (예: '/cad/basic-rect.zip')
 */
const SHAPES = [
  {
    id: 'basic-rect',
    name: '기본형 직사각형',
    dimensions: '120 × 80 × 40 mm',
    tag: '입문용',
    tagColor: 'bg-green-50 text-green-700',
    desc: '가장 표준적인 형태로 처음 배양 실험에 적합합니다. 균사체가 고르게 자라 성공률이 높습니다.',
    icon: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="8" y="12" width="64" height="36" rx="3" fill="#B8E04A" fillOpacity="0.2" stroke="#B8E04A" strokeWidth="2"/>
        <text x="40" y="34" textAnchor="middle" fontSize="8" fill="#463A39" fontWeight="bold">120×80</text>
      </svg>
    ),
    files: ['STL', 'STEP', 'DXF'],
    downloadUrl: '/cad/basic-rect.zip',
  },
  {
    id: 'square',
    name: '정사각형',
    dimensions: '80 × 80 × 40 mm',
    tag: '표준',
    tagColor: 'bg-blue-50 text-blue-700',
    desc: '가로세로 비율이 동일한 정사각형 형태. 화분, 코스터, 트레이 등 다양한 용도로 활용됩니다.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <rect x="12" y="12" width="56" height="56" rx="3" fill="#40C7B9" fillOpacity="0.2" stroke="#40C7B9" strokeWidth="2"/>
        <text x="40" y="42" textAnchor="middle" fontSize="8" fill="#463A39" fontWeight="bold">80×80</text>
      </svg>
    ),
    files: ['STL', 'STEP'],
    downloadUrl: '/cad/square.zip',
  },
  {
    id: 'circle',
    name: '원형',
    dimensions: 'Ø 90 × 35 mm',
    tag: '디자인',
    tagColor: 'bg-purple-50 text-purple-700',
    desc: '원형 몰드로 컵받침, 장식용 오브제 등 미적 완성도가 높은 결과물을 만들 수 있습니다.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <circle cx="40" cy="40" r="30" fill="#B8E04A" fillOpacity="0.15" stroke="#B8E04A" strokeWidth="2"/>
        <text x="40" y="44" textAnchor="middle" fontSize="8" fill="#463A39" fontWeight="bold">Ø90</text>
      </svg>
    ),
    files: ['STL', 'STEP'],
    downloadUrl: '/cad/circle.zip',
  },
  {
    id: 'hexagon',
    name: '육각형',
    dimensions: '85 × 98 × 30 mm',
    tag: '심화',
    tagColor: 'bg-orange-50 text-orange-700',
    desc: '벌집 구조에서 영감을 받은 육각형 형태. 자연 속 기하학을 배우는 심화 과정에 활용됩니다.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <polygon points="40,8 68,24 68,56 40,72 12,56 12,24" fill="#FEECA7" fillOpacity="0.4" stroke="#88603D" strokeWidth="2"/>
        <text x="40" y="44" textAnchor="middle" fontSize="7" fill="#463A39" fontWeight="bold">육각형</text>
      </svg>
    ),
    files: ['STL', 'STEP', 'DXF'],
    downloadUrl: '/cad/hexagon.zip',
  },
  {
    id: 'arch',
    name: '아치형',
    dimensions: '100 × 60 × 50 mm',
    tag: '고급',
    tagColor: 'bg-rose-50 text-rose-700',
    desc: '위쪽이 둥근 아치 형태로 책꽂이, 미니 화분 등 실용적인 오브제 제작에 적합합니다.',
    icon: (
      <svg viewBox="0 0 80 70" className="w-full h-full" fill="none">
        <path d="M12 60 L12 32 Q12 8 40 8 Q68 8 68 32 L68 60 Z" fill="#40C7B9" fillOpacity="0.15" stroke="#40C7B9" strokeWidth="2"/>
        <text x="40" y="52" textAnchor="middle" fontSize="7" fill="#463A39" fontWeight="bold">아치형</text>
      </svg>
    ),
    files: ['STL', 'STEP'],
    downloadUrl: '/cad/arch.zip',
  },
  {
    id: 'custom',
    name: '커스텀 요청',
    dimensions: '자유 설계',
    tag: '주문제작',
    tagColor: 'bg-neutral-100 text-neutral-600',
    desc: '기본 제공 몰드 외에 나만의 형태를 원한다면 커스텀 제작을 문의해 주세요. 3D 파일 제공 또는 스케치 기반 제작 가능.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <path d="M20 60 L12 68 L20 68 L20 60Z" stroke="#88603D" strokeWidth="1.5" fill="#88603D" fillOpacity="0.3"/>
        <line x1="20" y1="60" x2="60" y2="20" stroke="#88603D" strokeWidth="2"/>
        <rect x="52" y="12" width="16" height="16" rx="2" fill="#FEECA7" stroke="#88603D" strokeWidth="1.5"/>
        <line x1="56" y1="20" x2="64" y2="20" stroke="#88603D" strokeWidth="1.5"/>
        <line x1="60" y1="16" x2="60" y2="24" stroke="#88603D" strokeWidth="1.5"/>
      </svg>
    ),
    files: [],
    downloadUrl: '',
    isCustom: true,
  },
];

const INSTRUCTIONS = [
  { step: '01', title: '파일 다운로드', desc: 'STL 또는 STEP 파일을 다운로드합니다. DXF는 레이저 커팅에 활용 가능합니다.' },
  { step: '02', title: '슬라이서 설정', desc: 'Cura, PrusaSlicer 등 슬라이서 프로그램에서 레이어 높이 0.2mm, 내부 채움 20% 이상으로 설정합니다.' },
  { step: '03', title: '3D 프린팅', desc: 'PLA 또는 PETG 소재로 출력합니다. 내부가 비어있어야 균사체를 채울 수 있으니 벽 두께 1.2mm 이상을 권장합니다.' },
  { step: '04', title: '몰드 사용', desc: '완성된 몰드에 균사체 배지를 꼼꼼히 채우고 MyCo-Kit 키트 가이드를 따라 배양을 시작합니다.' },
];

export default function CAD() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* 헤더 */}
      <section className="py-20 px-4 bg-spore-cream-light text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sprout-moss font-bold uppercase tracking-widest text-sm mb-4">Open Source</p>
          <TextReveal text="오픈소스 3D 몰드 설계도" className="text-4xl md:text-5xl font-black text-forest-soil mb-6" />
          <SectionReveal delay={0.3}>
            <p className="text-lg text-substrate-brown leading-relaxed">
              MyCo-Kit의 균사체 성형 몰드를 오픈소스로 공개합니다.<br />
              3D 프린터로 직접 출력하여 나만의 형태의 친환경 소재를 만들어 보세요.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 몰드 형태 그리드 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">Mold Library</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">몰드 라이브러리</h2>
              <p className="text-neutral-400 mt-2 text-sm">* 파일 준비 중인 항목은 곧 업데이트됩니다</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SHAPES.map((shape) => (
                <div
                  key={shape.id}
                  className="group border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  {/* 형태 미리보기 */}
                  <div className="h-44 bg-neutral-50 flex items-center justify-center p-8 group-hover:bg-spore-cream-light transition-colors">
                    <div className="w-28 h-28">
                      {shape.icon}
                    </div>
                  </div>

                  {/* 정보 */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-forest-soil text-lg leading-tight">{shape.name}</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ml-2 ${shape.tagColor}`}>{shape.tag}</span>
                    </div>
                    <p className="text-sm text-sprout-moss font-semibold mb-3">{shape.dimensions}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-5">{shape.desc}</p>

                    {/* 파일 형식 태그 */}
                    {shape.files.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap mb-5">
                        {shape.files.map((f) => (
                          <span key={f} className="text-xs bg-neutral-100 text-neutral-500 px-2 py-1 rounded font-mono">.{f}</span>
                        ))}
                      </div>
                    )}

                    {/* 다운로드 버튼 */}
                    {shape.isCustom ? (
                      <a
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-substrate-brown text-substrate-brown font-bold text-sm hover:bg-substrate-brown hover:text-white transition-colors"
                      >
                        커스텀 제작 문의하기
                      </a>
                    ) : (
                      <a
                        href={shape.downloadUrl}
                        download
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sprout-moss text-white font-bold text-sm hover:bg-forest-soil transition-colors group/btn"
                      >
                        <svg className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        다운로드
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 사용 방법 */}
      <section className="py-20 px-4 bg-spore-cream-light">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-sprout-moss font-bold text-sm uppercase tracking-wider">How to Use</span>
              <h2 className="text-3xl font-black text-forest-soil mt-3">3D 프린팅 사용 가이드</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {INSTRUCTIONS.map((ins) => (
                <div key={ins.step} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-neutral-100">
                  <div className="w-12 h-12 rounded-xl bg-sprout-moss flex items-center justify-center text-white font-black text-sm shrink-0">
                    {ins.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-forest-soil mb-1.5">{ins.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{ins.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-white border border-sprout-moss/20 rounded-2xl">
              <p className="text-sm text-neutral-600 leading-relaxed">
                <span className="font-bold text-forest-soil">💡 권장 프린터 설정:</span> 노즐 직경 0.4mm · 레이어 높이 0.2mm · 출력 온도 210°C (PLA) · 베드 온도 60°C · 내부 채움 20% · 서포트 없음
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 라이센스 안내 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
              <p className="text-sm text-neutral-500 leading-relaxed">
                본 설계 파일은 <strong className="text-forest-soil">CC BY-NC-SA 4.0</strong> 라이센스로 제공됩니다.<br />
                비상업적 목적의 자유로운 사용, 수정, 배포가 가능하며 출처를 표기해 주세요.<br />
                상업적 활용 문의: <a href="mailto:myco-kit@googlegroups.com" className="text-sprout-moss hover:underline">myco-kit@googlegroups.com</a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
