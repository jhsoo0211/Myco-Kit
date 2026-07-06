<!-- 스크린샷 없는 텍스트 전용 버전입니다. 화면 이미지가 포함된 버전은 SITE_DOCUMENTATION.md 참고. -->

# 🍄 MyCo-Kit 웹사이트 설계·요구사항 정의서 & 운영 가이드 (텍스트 버전)

> **한 줄 요약**: MyCo-Kit 웹사이트가 **무엇으로 · 어떻게 만들어졌고 · 어디를 어떻게 고치는지**를 정리한 문서입니다.

📅 최종 수정일: 2026-06-28 · 🌐 배포 주소: **https://ornate-beignet-ae6be6.netlify.app/**

> 🖼️ **이 문서는 "스크린샷 없는 텍스트 전용" 버전입니다.** 각 페이지의 화면 이미지가 포함된 버전은 → [`SITE_DOCUMENTATION.md`](SITE_DOCUMENTATION.md)
> (스크린샷 파일은 `docs/screenshots/` 폴더에 있습니다.)

---

## 목차
1. [프로젝트 기본 정보](#1-프로젝트-기본-정보)
2. [디자인 시스템 & 브랜드 가이드](#2-디자인-시스템--브랜드-가이드)
3. [사이트 지도 (메뉴 구조)](#3-사이트-지도-메뉴-구조)
4. [페이지별 구성](#4-페이지별-구성)
5. [모바일 화면](#5-모바일-화면)
6. [기능 요구사항 & 현재 구현 상태](#6-기능-요구사항--현재-구현-상태)
7. [기술 스택 & 배포](#7-기술-스택--배포)
8. [콘텐츠 교체 가이드 (실무용)](#8-콘텐츠-교체-가이드-실무용)
9. [✅ 오픈 전 반드시 채워야 할 항목](#9--오픈-전-반드시-채워야-할-항목)
10. [🚀 앞으로 필요한 기능 (로드맵)](#10--앞으로-필요한-기능-로드맵)
11. [운영 FAQ](#11-운영-faq)
12. [업데이트 이력](#12-업데이트-이력)

---

## 1. 프로젝트 기본 정보

| 구분 | 내용 |
| --- | --- |
| 프로젝트명 | **MyCo-Kit 공식 웹사이트** (브랜드 소개 + 펀딩/후원 유도) |
| 서비스명 | MyCo-Kit — *My(나만의) + Co(함께 만드는) + Kit* |
| 소속 | 인액터스 건국대학교 |
| 제품 | 버섯 폐배지를 활용한 친환경 STEAM 교육 키트 |
| 사업 모델 | B2G (학교·기관) + B2C (가정) |
| 웹사이트 목적 | ① 브랜드/제품 소개 ② 와디즈 펀딩·직접 후원 유도 ③ 교육기관 도입 문의 |
| 배포 위치 | Netlify — https://ornate-beignet-ae6be6.netlify.app/ |
| 대표 문의 | myco-kit@googlegroups.com |
| 언어 | 한국어 (단일 언어, 영문은 추후 과제 → [10번](#10--앞으로-필요한-기능-로드맵)) |

---

## 2. 디자인 시스템 & 브랜드 가이드

### 2.1 브랜드 키워드 & 무드
- **키워드**: 자연 · 순환 · 교육 · 손끝으로 느끼는 · 함께 · 친환경
- **톤 앤 매너**: 따뜻하고 신뢰감 있게 / 과학적이지만 아이들에게 친근하게 / 딱딱하지 않되 진지하게 / 텍스처감 있는 자연 소재 이미지 활용

### 2.2 컬러 팔레트
소스 위치: [`src/index.css`](../src/index.css)

| 색상명 | HEX | 용도 |
| --- | --- | --- |
| Spore Cream | `#FEECA7` | 밝은 배경, 포인트 블록 |
| Spore Cream Light | `#FFF8E1` | 카드/섹션의 은은한 배경 |
| Sprout Moss | `#B8E04A` | **메인 포인트·CTA 버튼**, 강조 텍스트 |
| Tactile Curiosity | `#40C7B9` | 보조 포인트 |
| Substrate Brown | `#88603D` | 텍스처, 보조 텍스트 |
| Forest Soil | `#463A39` | 본문 텍스트, 다크 배경(푸터 등) |

> 💡 3~5색으로 제한된 팔레트를 일관되게 사용합니다. 색을 새로 추가하기보다 위 6색 안에서 조합하세요.

### 2.3 타이포그래피
| 용도 | 폰트 | 로딩 방식 |
| --- | --- | --- |
| 제목 (Headline) | **SUIT Variable** | CDN (jsDelivr) — `index.html` |
| 본문 (Body) | **Pretendard Variable** | CDN (jsDelivr) — `index.html` |

- 한글 줄바꿈은 `word-break: keep-all`로 단어 단위로 끊어 가독성을 높였습니다.

### 2.4 로고 자산 (`public/logos/`)
| 파일 | 용도 |
| --- | --- |
| `마이코키트_combination_mark_black.png` | 기본 로고(밝은 배경용) — 헤더에서 사용 |
| `마이코키트_combination_mark_white.png` | 어두운 배경용 |
| `마이코키트_symbol.png` | 심볼 단독 (파비콘) |
| `마이코키트_wordmark_black/white.png` | 글자만 |

---

## 3. 사이트 지도 (메뉴 구조)

상단 내비게이션은 **5개 그룹**으로 구성됩니다. (편집: [`src/components/Navbar.tsx`](../src/components/Navbar.tsx))

| 메뉴 | 하위 페이지 (경로) |
| --- | --- |
| **About** | 브랜드 스토리 `/story` · 미션 및 비전 `/mission` · 파트너십 `/partnership` · (개요 `/about`) |
| **Product** | 균사체 키트 소개 `/kit` · 핵심 원리 `/technology` · 환경 임팩트 `/impact` · 활용 사례 `/cases` |
| **Experience** | 체험 프로그램 `/experience` · CAD 설계도 `/cad` |
| **Funding** | 와디즈 펀딩 `/funding` · 직접 후원 `/donation` |
| **Contact** | 문의하기 `/contact` |

- 우측 상단 고정 버튼: **[펀딩 참여]** → `/funding`, **[도입 문의]** → `/contact`
- 전체 라우트는 [`src/App.tsx`](../src/App.tsx)에서 관리됩니다. (총 14개 페이지)

---

## 4. 페이지별 구성

> 각 페이지의 역할과, 내용을 고칠 때 열어야 할 파일 위치입니다.
> 화면 이미지가 필요하면 [스크린샷 포함 버전](SITE_DOCUMENTATION.md) 또는 `docs/screenshots/` 폴더를 참고하세요.

| 페이지 | 경로 | 편집 파일 | 구성 요약 | 스크린샷 파일 |
| --- | --- | --- | --- | --- |
| **Home** | `/` | `src/pages/Home.tsx` | 풀스크린 히어로 → 슬로건 → 핵심 가치 3가지 → 임팩트 수치 → 펀딩 유도 | `docs/screenshots/home.jpg` |
| 브랜드 스토리 | `/story` | `src/pages/Story.tsx` | 배지산 발견 ~ 키트 개발까지 개발 비하인드 타임라인 | `docs/screenshots/story.jpg` |
| 미션 & 비전 | `/mission` | `src/pages/Mission.tsx` | 우리가 만드는 변화, 미션·비전 서술 | `docs/screenshots/mission.jpg` |
| 파트너십 | `/partnership` | `src/pages/Partnership.tsx` | 협력처 로고/카드 그리드 | `docs/screenshots/partnership.jpg` |
| About 개요 | `/about` | `src/pages/About.tsx` | About 진입 개요 페이지 | `docs/screenshots/about.jpg` |
| **Kit(구성품)** | `/kit` | `src/pages/Kit.tsx` | 구성품 6종 아이콘 그리드 + 활용 사례 카드 | `docs/screenshots/kit.jpg` |
| 핵심 원리 | `/technology` | `src/pages/Technology.tsx` | 폐배지 → 균사체 소재 3단계 원리 | `docs/screenshots/technology.jpg` |
| 환경 임팩트 | `/impact` | `src/pages/Impact.tsx` | 핵심 환경 수치 강조 + 자원 선순환 | `docs/screenshots/impact.jpg` |
| 활용 사례 | `/cases` | `src/pages/CaseStudy.tsx` | 초등 과학 수업·방과후 캠프 등 현장 사례 | `docs/screenshots/cases.jpg` |
| 체험 프로그램 | `/experience` | `src/pages/Experience.tsx` | B2G/B2C 대상별 체험 프로그램 + 교육 영상 | `docs/screenshots/experience.jpg` |
| CAD 설계도 | `/cad` | `src/pages/CAD.tsx` | 오픈소스 3D 몰드 도면 다운로드 | `docs/screenshots/cad.jpg` |
| **와디즈 펀딩** | `/funding` | `src/pages/Funding.tsx` | 펀딩 배경 설명 + 와디즈 참여 CTA | `docs/screenshots/funding.jpg` |
| 직접 후원 | `/donation` | `src/pages/Donation.tsx` | 계좌이체 직접 후원 안내 | `docs/screenshots/donation.jpg` |
| **Contact** | `/contact` | `src/pages/Contact.tsx` | 문의 폼(이름/이메일/내용) + 이메일 안내 | `docs/screenshots/contact.jpg` |

---

## 5. 모바일 화면

모든 페이지는 반응형입니다. 모바일에서는 상단 우측 **☰ 버튼**으로 전체 메뉴(아코디언)가 열립니다.

- 모바일 홈: `docs/screenshots/m-home.jpg`
- 모바일 전체 메뉴: `docs/screenshots/m-menu.jpg`
- 모바일 키트: `docs/screenshots/m-kit.jpg`
- 모바일 펀딩: `docs/screenshots/m-funding.jpg`

---

## 6. 기능 요구사항 & 현재 구현 상태

| 기능 | 설명 | 우선순위 | 현재 상태 |
| --- | --- | --- | --- |
| 반응형 디자인 | PC·태블릿·모바일 최적화 | 상 | ✅ 완료 |
| 다중 페이지 라우팅 | 14개 페이지 SPA | 상 | ✅ 완료 |
| 스크롤 애니메이션 | 히어로 확장·텍스트/섹션 리빌 | 중 | ✅ 완료 |
| 펀딩 유도 CTA | 와디즈 펀딩 / 직접 후원 연결 | 상 | ⚠️ **링크·계좌 임시값** (→ [9번](#9--오픈-전-반드시-채워야-할-항목)) |
| 문의 폼 (메일 발송) | Formspree로 문의 메일 전송 | 상 | ⚠️ **endpoint 미설정** (→ 9번) |
| 메인 히어로 영상 | 배경 동영상 | 중 | ⚠️ **외부 임시 영상** 사용 (→ 8·9번) |
| SEO 메타태그 | title/description/OG | 중 | 🔶 기본값 O, **공유 썸네일(og:image) 없음** |
| 다국어(영문) | 한/영 전환 | 하 | ❌ 미구현 (로드맵) |
| 방문 분석 | GA/Search Console | 중 | ❌ 미연동 (로드맵) |

범례: ✅ 완료 · 🔶 부분 · ⚠️ 값만 채우면 동작 · ❌ 미구현

---

## 7. 기술 스택 & 배포

| 항목 | 내용 |
| --- | --- |
| 프레임워크 | React 19 + TypeScript |
| 빌드 도구 | Vite 8 |
| 스타일 | Tailwind CSS v4 (`src/index.css`의 `@theme`) |
| 라우팅 | react-router-dom v7 |
| 애니메이션 | framer-motion, GSAP (ScrollTrigger) |
| 아이콘/메뉴 | lucide-react, Radix Navigation Menu |
| 배포 | Netlify (`public/_redirects`로 SPA 라우팅 처리) |
| 브라우저 지원 | Chrome, Safari, Edge 등 최신 브라우저 |

**로컬 실행 방법**
```bash
npm install     # 최초 1회 (의존성 설치)
npm run dev     # 개발 서버 → http://localhost:5173
npm run build   # 배포용 빌드 (결과: dist/)
```
> ⚠️ 폴더를 복사/이동하면 `node_modules`는 따라오지 않습니다. 새 위치에서 반드시 `npm install`을 다시 실행하세요.

---

## 8. 콘텐츠 교체 가이드 (실무용)

> 대부분의 수정은 아래 파일 한 곳만 열면 됩니다. 코드를 몰라도 **따옴표 안의 글자/주소만** 바꾸면 됩니다.

| 무엇을 바꾸나 | 어디를 여나 | 어떻게 |
| --- | --- | --- |
| 메인/교육 **영상** | [`src/config/media.ts`](../src/config/media.ts) | `public/videos/`에 mp4를 넣고 `heroVideo.src`를 `'/videos/파일명.mp4'`로 교체 |
| 페이지 **이미지** | `public/images/` | 같은 파일명으로 덮어쓰거나, `src/config/media.ts`의 경로 수정 |
| **로고** | `public/logos/` | 같은 파일명으로 교체 |
| **와디즈 링크** | `src/pages/Funding.tsx` | 상단 `WADIZ_URL` 값을 실제 캠페인 주소로 |
| **후원 계좌** | `src/pages/Donation.tsx` | 상단 `BANK_INFO`의 은행명·계좌번호·예금주 입력 |
| **문의 폼 수신** | `src/pages/Contact.tsx` | `FORMSPREE_ENDPOINT`를 발급받은 주소로 교체 (아래 9번 참고) |
| 메뉴 **항목/문구** | `src/components/Navbar.tsx` | `NAV_ITEMS` 배열 수정 |
| 키트 **구성품** | `src/pages/Kit.tsx` | 구성품 카드 배열 수정 |
| 파트너사 | `src/pages/Partnership.tsx` | 파트너 배열 수정 |

---

## 9. ✅ 오픈 전 반드시 채워야 할 항목

> 지금은 **임시값(placeholder)** 이 들어 있어 실제로 동작하지 않는 부분입니다. 와디즈 오픈 전에 꼭 채워주세요.

- [ ] **문의 폼 연결** — [Formspree](https://formspree.io) 무료 가입 → 수신 메일을 `myco-kit@googlegroups.com`로 설정 → 발급된 endpoint를 `Contact.tsx`의 `FORMSPREE_ENDPOINT`에 입력
- [ ] **와디즈 실제 URL** — `Funding.tsx`의 `WADIZ_URL`이 현재 `https://www.wadiz.kr`(임시). 실제 캠페인 주소로 교체
- [ ] **후원 계좌 정보** — `Donation.tsx`의 `BANK_INFO`가 `'은행명' / '계좌번호'`(임시). 실제 정보 입력
- [ ] **자체 히어로 영상** — 현재 외부 링크(mixkit)라 끊길 수 있음. 자체 mp4를 `public/videos/`에 넣고 교체 (교육 영상도 `Experience.tsx`의 외부 링크 → 자체 영상 권장)
- [ ] **공유 썸네일(og:image)** — `index.html`에 `<meta property="og:image" ...>` 추가 (카톡/인스타 공유 시 표시될 이미지)
- [ ] **SNS 링크** — 푸터 인스타그램/블로그 아이콘의 실제 주소 연결 (`src/components/Footer.tsx`)
- [ ] **대표 이메일 확정** — `myco-kit@googlegroups.com`이 실제 사용 주소인지 확인

---

## 10. 🚀 앞으로 필요한 기능 (로드맵)

> 당장은 없어도 되지만, 운영을 시작하면 필요해지는 "현업 기능"들입니다. 우선순위 순으로 정리했습니다.

**오픈 직후 (필수급)**
- [ ] **방문 분석 연동** — Google Analytics 4 + Search Console (유입/전환 측정, 특히 인스타 유입 추적)
- [ ] **커스텀 도메인** — `*.netlify.app` 대신 `mycokit.kr` 같은 자체 도메인 연결
- [ ] **개인정보 처리방침 페이지** — 문의 폼으로 개인정보(이름·이메일)를 받으므로 법적으로 필요
- [ ] **폼 스팸 방지** — reCAPTCHA 또는 honeypot (스팸 문의 차단)
- [ ] **성능 최적화** — 이미지 WebP 변환·압축, 빌드 코드 스플리팅(현재 번들 500KB↑ 경고), 외부 영상 대신 자체 호스팅

**성장기 (있으면 좋음)**
- [ ] **영문(다국어) 지원** — 해외/영어권 노출 대비
- [ ] **콘텐츠 관리(CMS)** — 코드 수정 없이 팀원이 문구/이미지 편집 (예: Netlify CMS, Contentful)
- [ ] **와디즈 종료 후 CTA 전환 로직** — 펀딩 종료 시 버튼을 '스토어 구매' 또는 '다음 알림 신청'으로 자동 전환
- [ ] **뉴스레터/사전알림 신청** — 이메일 수집 (펀딩 오픈 알림)
- [ ] **접근성(WCAG AA)** — 색 대비, 키보드 내비게이션, 스크린리더 대응
- [ ] **블로그/소식 게시판** — 개발 비하인드·활동 소식 업데이트

**확장기 (사업 확대 시)**
- [ ] **자체 결제/스토어** — 홈페이지 내 직접 구매 (현재는 와디즈/문의로 유도)
- [ ] **B2G 문의 관리 시스템** — 학교·기관 문의를 스프레드시트/CRM로 자동 수집
- [ ] **교사용 자료 다운로드 게이트** — 이메일 입력 후 지도안/PPT 제공

---

## 11. 운영 FAQ

**Q. 내용을 수정하면 사이트에 바로 반영되나요?**
A. 아니요. 코드 수정 → GitHub `main`에 push → Netlify가 자동으로 다시 빌드·배포합니다(보통 1~2분). 로컬에서 `npm run dev`로 미리 확인 후 올리세요.

**Q. 영상이 안 나와요.**
A. 현재 히어로 영상은 외부(mixkit) 링크라 네트워크 상황에 따라 안 뜰 수 있습니다. 자체 mp4로 교체하는 것을 권장합니다([8번](#8-콘텐츠-교체-가이드-실무용) 참고). 영상이 없을 때는 포스터 이미지(`/images/hero.png`)가 대신 표시됩니다.

**Q. 문의 폼으로 보낸 메일이 안 와요.**
A. `FORMSPREE_ENDPOINT`가 아직 임시값입니다([9번](#9--오픈-전-반드시-채워야-할-항목) 참고). Formspree 연결 전까지는 화면의 이메일 주소로 직접 문의받는 구조입니다.

**Q. 스크린샷은 어디서 보나요?**
A. `docs/screenshots/` 폴더, 또는 화면 이미지가 삽입된 [스크린샷 포함 버전](SITE_DOCUMENTATION.md)에서 볼 수 있습니다.

---

## 12. 업데이트 이력

| 날짜 | 수정 내용 | 담당자 | 비고 |
| --- | --- | --- | --- |
| 2026-06-28 | 문서 전면 개편: 실제 사이트 기준 재작성. 스크린샷 포함/텍스트 전용 2개 버전 작성 | — | 본 문서 |
| 2026-06-27 | Funding·Mission·Partnership·Technology 등 페이지 추가, 미디어 핸들링 정비 | jhsoo0211 | 커밋 `bfeec58`, `ba078a7` |
| 2026-06-27 | MyCo-Kit 랜딩페이지 최초 구축 | jhsoo0211 | 커밋 `e8390c9` |

---

> 📌 이 문서는 사이트가 바뀔 때마다 함께 업데이트해 주세요. 특히 [9번 체크리스트](#9--오픈-전-반드시-채워야-할-항목)는 오픈 전 최종 점검용입니다.
