/**
 * MyCo-Kit 미디어 설정 파일
 *
 * 동영상 교체 방법:
 * 1. public/videos/ 폴더에 mp4 파일을 넣는다
 * 2. heroVideo.src 를 '/videos/파일명.mp4' 로 바꾼다
 * 3. heroVideo.poster 는 첫 프레임 이미지 (없으면 그대로 둬도 됨)
 */

export const MEDIA = {
  heroVideo: {
    // 자체 영상으로 교체시 아래 주석을 해제하고 src를 수정하세요
    // src: '/videos/myco-kit-hero.mp4',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-plant-growing-in-timelapse-40267-large.mp4',
    poster: '/images/hero.png',
  },
  images: {
    heroBg: '/images/hero.png',
    mycelium: '/images/mycelium.png',
    education: '/images/education.png',
    kit: '/images/kit.png',
    impact: '/images/impact.png',
  },
} as const;
