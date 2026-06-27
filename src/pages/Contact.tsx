import { useState } from 'react';
import TextReveal from '../components/TextReveal';
import SectionReveal from '../components/SectionReveal';

/**
 * Formspree 연동 안내:
 * 1. https://formspree.io 접속 → 무료 계정 생성
 * 2. "New Form" 생성, 이메일을 myco-kit@googlegroups.com 으로 설정
 * 3. 발급받은 endpoint (https://formspree.io/f/XXXXXXXX) 를 아래 값으로 교체
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const INQUIRY_TYPES = [
  { value: '', label: '문의 유형을 선택하세요' },
  { value: 'school', label: '학교 / 방과후 프로그램 도입' },
  { value: 'camp', label: '기관 / 과학캠프 특강' },
  { value: 'homeschool', label: '가정용 키트 구매' },
  { value: 'partner', label: '파트너십 / 협력 제안' },
  { value: 'other', label: '기타 문의' },
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          이름_기관명: form.name,
          이메일: form.email,
          문의유형: form.type,
          문의내용: form.message,
        }),
      });

      if (res.ok) {
        setFormState('success');
        setForm({ name: '', email: '', type: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-spore-cream text-center">
        <TextReveal
          text="함께 만드는 자원순환의 미래"
          className="text-4xl md:text-6xl font-extrabold text-forest-soil mb-6"
        />
        <SectionReveal delay={0.3}>
          <p className="text-lg md:text-xl text-substrate-brown font-medium max-w-2xl mx-auto">
            프로젝트 협력 및 교육 키트 도입 문의를 환영합니다.
          </p>
        </SectionReveal>
      </section>

      {/* 연락처 정보 + 폼 */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* 왼쪽: 안내 정보 */}
          <SectionReveal className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-forest-soil mb-4">문의 채널</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sprout-moss/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-sprout-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-forest-soil text-sm">이메일</p>
                      <a href="mailto:myco-kit@googlegroups.com" className="text-sprout-moss hover:underline text-sm">
                        myco-kit@googlegroups.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sprout-moss/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-sprout-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-forest-soil text-sm">응답 시간</p>
                      <p className="text-neutral-500 text-sm">영업일 기준 1~2일 이내</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-spore-cream rounded-2xl border border-neutral-100">
                <h3 className="font-bold text-forest-soil mb-3 text-sm">이런 분들이 연락주세요</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  {['방과후 / 과학 수업에 키트 도입을 원하는 선생님', '환경 교육 특강을 찾는 기관 담당자', '홈스쿨링 / 가정 체험 키트가 필요한 부모님', '협력 파트너십을 논의하고 싶은 기업'].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-sprout-moss mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>

          {/* 오른쪽: 폼 */}
          <SectionReveal delay={0.15} className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-neutral-100">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-sprout-moss/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-sprout-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-forest-soil mb-3">문의가 접수되었습니다</h3>
                  <p className="text-neutral-500 mb-8">영업일 기준 1~2일 내로 이메일로 답변드리겠습니다.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-6 py-3 rounded-full border-2 border-sprout-moss text-sprout-moss font-bold hover:bg-sprout-moss hover:text-white transition-colors"
                  >
                    새 문의 작성하기
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-forest-soil mb-8">문의하기</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm font-semibold text-substrate-brown">이름 / 기관명 *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-sprout-moss focus:ring-1 focus:ring-sprout-moss text-sm"
                          placeholder="홍길동 / OO학교"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-semibold text-substrate-brown">이메일 *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-sprout-moss focus:ring-1 focus:ring-sprout-moss text-sm"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="type" className="text-sm font-semibold text-substrate-brown">문의 유형</label>
                      <select
                        id="type"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-sprout-moss focus:ring-1 focus:ring-sprout-moss text-sm text-neutral-700"
                      >
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-semibold text-substrate-brown">문의 내용 *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-sprout-moss focus:ring-1 focus:ring-sprout-moss text-sm resize-none"
                        placeholder="문의하실 내용을 자유롭게 입력해주세요."
                      />
                    </div>

                    {formState === 'error' && (
                      <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                        전송에 실패했습니다. 잠시 후 다시 시도하거나 이메일로 직접 연락해주세요.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="mt-2 w-full py-4 bg-forest-soil text-white font-bold rounded-xl hover:bg-forest-soil/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {formState === 'loading' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          전송 중...
                        </>
                      ) : '메시지 보내기'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
