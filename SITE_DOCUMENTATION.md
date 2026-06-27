# MyCo-Kit 사이트 상세 문서 (SITE DOCUMENTATION)

이 문서는 MyCo-Kit 랜딩페이지의 전체 구조, 디자인 시스템, 그리고 향후 콘텐츠 유지보수 방법에 대해 설명합니다.

## 1. 페이지 구조 (Routing)
사이트는 `React Router`를 사용하여 다중 페이지(Multi-page) 구조로 설계되었습니다.

- `/` (**Home**): 메인 랜딩. 스크롤 확장형 히어로 영상(ScrollExpandMedia) 적용.
- `/about` (**About**): 프로젝트 미션, 비전, 그리고 파트너십 안내.
- `/kit` (**Product / Kit**): U300 기반 6가지 키트 구성품 안내 및 사례 연결.
- `/technology` (**Technology**): 폐배지가 균사체 소재로 변환되는 3단계 핵심 원리.
- `/cases` (**Case Study**): 초등학교 및 과학 캠프 등 교육 현장 활용 상세 사례.
- `/impact` (**Impact**): 폐배지 자원화가 미치는 환경적 임팩트 수치화.
- `/experience` (**Experience**): B2G, B2C 등 대상별 체험 프로그램 안내 및 오픈소스 도면(CAD), 교육 영상 제공.
- `/story` (**Story**): 버려진 배지산을 발견하고 키트를 개발하기까지의 팀 비하인드 스토리.
- `/contact` (**Contact**): 프로그램 도입 및 제휴 문의 폼.

## 2. 디자인 시스템 (Design System)
### 컬러 팔레트 (tailwind.config 호환)
- **Sprout Moss (`#7C9A5E`)**: 브랜드 메인 그린 컬러. 강조 포인트, 버튼 등에 사용.
- **Forest Soil (`#2D3A26`)**: 짙은 올리브 브라운. 제목 텍스트 및 어두운 배경에 사용.
- **Spore Cream (`#F4F1EA`)**: 은은한 크림 베이지. 전체 배경색으로 사용하여 편안한 무드 제공.
- **Substrate Brown (`#8B7355`)**: 보조 텍스트 컬러. 부드러운 설명글에 사용.

### 타이포그래피 (Typography)
- `Pretendard` 폰트를 기본으로 사용합니다. `10K Checklist` 원칙에 따라 제목과 본문의 두께(Weight) 및 크기 대비를 확실하게 주어 시인성을 높였습니다.

### 애니메이션 (Animation)
- **TextReveal**: `framer-motion`과 `gsap`을 결합하여 글자가 쪼개지며 부드럽게 나타나는 헤더 전용 효과 (`src/components/TextReveal.tsx`).
- **SectionReveal**: 스크롤 시 섹션이 아래에서 위로 자연스럽게 페이드인 되는 효과 (`src/components/SectionReveal.tsx`).
- **ScrollExpandMedia**: 스크롤 시 영상이나 이미지가 전체 화면으로 부드럽게 확장되는 몰입형 컴포넌트 (`src/components/blocks/scroll-expansion-hero.tsx`).

## 3. 콘텐츠 교체 및 유지보수 가이드

### 3.1 메인 동영상 교체 방법
메인 화면의 첫 번째 배경 동영상을 교체하려면 `src/pages/Home.tsx` 파일을 수정합니다.
1. `asset` 폴더에 `my_video.mp4` 파일을 추가합니다.
2. `Home.tsx` 상단에서 `import myVideo from '../../asset/my_video.mp4';` (또는 public 폴더에 넣고 절대 경로 사용) 방식으로 불러옵니다.
3. `<ScrollExpandMedia mediaSrc={myVideo} ... />`와 같이 교체합니다.
*(현재는 외부 직링크 URL을 사용하도록 임시 설정되어 있습니다.)*

### 3.2 로고 교체
로고 파일은 `public/logos/` 경로에 저장되어 있습니다. 
- `마이코키트_combination_mark_white.png`
- `마이코키트_combination_mark_black.png`
`src/components/Navbar.tsx`에서 스크롤 상태에 따라 흰색/검은색 로고를 동적으로 불러오도록 설계되어 있습니다.

### 3.3 파트너사 및 키트 내용 수정
- 파트너사 수정: `src/pages/About.tsx` 내부의 `partnership` 그리드 배열 수정.
- 구성품 수정: `src/pages/Kit.tsx` 내부의 카드 배열 수정.
