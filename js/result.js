const mbtiResults = {
  INFP: {
    name: "INFP", nickname: "감성 폭발 로맨티스트", desc: "감정보다 지적 교류를 중시하는 스타일.", image: "../img/mbti/INFP.png", sides: [ { side: "left", text: "이상주의자" }, { side: "left", text: "감성적" }, { side: "right", text: "자유로운" }, { side: "right", text: "몽상가" } ] },
  ENFP: {
    name: "ENFP", nickname: "자유로운 영혼의 연인", desc: "감정 표현이 풍부하고 에너지 넘치는 스타일.", image: "../img/mbti/ENFP.png", sides: [ { side: "left", text: "열정" }, { side: "left", text: "창의적" }, { side: "right", text: "자유로운" }, { side: "right", text: "외향적" } ] },
  INFJ: {
    name: "INFJ", nickname: "감정 예언자", desc: "깊고 의미 있는 감정적 연결을 추구하는 스타일.", image: "../img/mbti/INFJ.png", sides: [ { side: "left", text: "이상주의" }, { side: "left", text: "공감" }, { side: "right", text: "조언자" }, { side: "right", text: "신념" } ] },
  ENFJ: {
    name: "ENFJ", nickname: "사랑 주는 햇살", desc: "정 많고 다정한 배려형 스타일.", image: "../img/mbti/ENFJ.png", sides: [ { side: "left", text: "리더십" }, { side: "left", text: "배려" }, { side: "right", text: "따뜻함" }, { side: "right", text: "헌신" } ] },
  INTJ: {
    name: "INTJ", nickname: "계획된 연애 마스터", desc: "논리적이고 미래를 함께 설계하는 스타일.", image: "../img/mbti/INTJ.png", sides: [ { side: "left", text: "전략" }, { side: "left", text: "분석" }, { side: "right", text: "독립적" }, { side: "right", text: "계획적" } ] },
  ENTJ: {
    name: "ENTJ", nickname: "당당한 매력인간", desc: "열정적으로 이끄는 추진력 있는 스타일.", image: "../img/mbti/ENTJ.png", sides: [ { side: "left", text: "리더십" }, { side: "left", text: "당당함" }, { side: "right", text: "목표지향" }, { side: "right", text: "결단력" } ] },
  INTP: {
    name: "INTP", nickname: "논리 사랑 탐구자", desc: "감정보다 지적 교류를 중시하는 스타일.", image: "../img/mbti/INTP.png", sides: [ { side: "left", text: "사색" }, { side: "left", text: "논리" }, { side: "right", text: "창의적" }, { side: "right", text: "분석적" } ] },
  ENTP: {
    name: "ENTP", nickname: "논리도, 감정도 다 해보는 연애 실험가", desc: "자유롭고 유쾌한 연애를 즐기는 스타일.", image: "../img/mbti/ENTP.png", sides: [ { side: "left", text: "아이디어" }, { side: "left", text: "유쾌함" }, { side: "right", text: "도전적" }, { side: "right", text: "창의적" } ] },
  ISFP: {
    name: "ISFP", nickname: "자유로운 낭만가", desc: "따뜻하고 조용히 표현하는 감성적인 스타일.", image: "../img/mbti/ISFP.png", sides: [ { side: "left", text: "예술적" }, { side: "left", text: "감성" }, { side: "right", text: "따뜻함" }, { side: "right", text: "자유로움" } ] },
  ESFP: {
    name: "ESFP", nickname: "무대 위 사랑꾼", desc: "사랑을 즐기고 적극적으로 표현하는 스타일.", image: "../img/mbti/ESFP.png", sides: [ { side: "left", text: "사교적" }, { side: "left", text: "즉흥적" }, { side: "right", text: "유쾌함" }, { side: "right", text: "에너지" } ] },
  ISTP: {
    name: "ISTP", nickname: "즉흥적인 연애마스터", desc: "쿨하고 독립적인 연애를 선호하는 스타일.", image: "../img/mbti/ISTP.png", sides: [ { side: "left", text: "실용적" }, { side: "left", text: "자유" }, { side: "right", text: "쿨함" }, { side: "right", text: "유연함" } ] },
  ESTP: {
    name: "ESTP", nickname: "반짝이는 눈빛의 유혹인간", desc: "즉흥적이고 모험을 즐기는 스타일.", image: "../img/mbti/ESTP.png", sides: [ { side: "left", text: "모험" }, { side: "left", text: "도전" }, { side: "right", text: "즉흥적" }, { side: "right", text: "에너지" } ] },
  ISFJ: {
    name: "ISFJ", nickname: "연애 내조왕", desc: "조용히 챙겨주는 보호자 같은 스타일.", image: "../img/mbti/ISFJ.png", sides: [ { side: "left", text: "헌신" }, { side: "left", text: "배려" }, { side: "right", text: "수호자" }, { side: "right", text: "신뢰" } ] },
  ESFJ: {
    name: "ESFJ", nickname: "마음 챙김 로맨티스트", desc: "정 많고 다정한 배려형 스타일.", image: "../img/mbti/ESFJ.png", sides: [ { side: "left", text: "친절" }, { side: "left", text: "사교" }, { side: "right", text: "배려" }, { side: "right", text: "조화" } ] },
  ISTJ: {
    name: "ISTJ", nickname: "계획왕 쿨가이", desc: "책임감 있고 안정적인 연애 스타일.", image: "../img/mbti/ISTJ.png", sides: [ { side: "left", text: "원칙" }, { side: "left", text: "신뢰" }, { side: "right", text: "책임감" }, { side: "right", text: "성실함" } ] },
  ESTJ: {
    name: "ESTJ", nickname: "당당한 매력인간", desc: "주도적이고 계획적인 연애 스타일.", image: "../img/mbti/ESTJ.png", sides: [ { side: "left", text: "현실적" }, { side: "left", text: "체계" }, { side: "right", text: "관리자" }, { side: "right", text: "실용적" } ] }
};

function getMbtiTypeFromParams() {
  const params = new URLSearchParams(window.location.search);
  const pairs = [['i', 'e'], ['n', 's'], ['f', 't'], ['j', 'p']];
  let mbti = '';
  pairs.forEach(([a, b]) => {
    mbti += (Number(params.get(a)) >= Number(params.get(b))) ? a.toUpperCase() : b.toUpperCase();
  });
  return mbti;
}

function shareResult() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: 'MBTI 연애 성향 결과',
      text: '나의 연애 MBTI 결과를 확인해보세요!',
      url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert('링크가 복사되었습니다!');
  }
}

function getMbtiSubtitle(mbti) {
  const subtitles = {
    INFP: '감정에 젖어드는 로맨틱한 몽상가',
    ENFP: '첫눈에 반하고 마음 깊이 빠지는 금사빠',
    INFJ: '썸 속에서도 연애의 깊이를 꿈꾸는 사람',
    ENFJ: '사랑 앞에서는 누구보다 솔직한 표현러',
    ISTJ: '한번 마음 주면 오래가는 조용한 연애',
    ESTJ: '썸도 리드하는 계획형 연애 지휘자',
    ISFJ: '말없이 다 챙기는 조용한 헌신러',
    ESFJ: '썸이라도 진심을 다하는 정많은 연애꾼',
    ISTP: '조용히 다가와 존재감 남기는 타입',
    ESTP: '밀당? 필요 없어, 나는 직진형',
    ISFP: '말보다 분위기로 감정을 전하는 사람',
    ESFP: '함께하는 순간을 최대로 즐기는 연애형',
    INTJ: '썸보다 연결 가능성과 궁합을 보는 연애',
    ENTJ: '감정보다 방향이 먼저인 전략적 연애꾼',
    INTP: '머릿속에서 사랑이 먼저 시작되는 사람',
    ENTP: '연애는 뇌 자극이 되어야 재밌는 타입'
  };
  return subtitles[mbti.toUpperCase()] || '개성 있는 연애인';
}

document.addEventListener('DOMContentLoaded', () => {
  const mbti = getMbtiTypeFromParams();
  const result = mbtiResults[mbti] || mbtiResults['INFP'];

  // 이미지 설정
  const img = document.getElementById('mbti-image');
  if (img) {
    img.src = result.image;
    img.alt = `${result.name} 이미지`;
    img.onerror = () => {
      img.src = '../img/mbti/default.jpg';
    };
  }

  // MBTI + 닉네임 (공백 없이 붙이기)
  const nameNickname = document.getElementById('mbti-type-name-nickname');
  if (nameNickname) nameNickname.textContent = `${result.name}${result.nickname}`;

  // resultHighlight에 nickname 표시
  const resultHighlight = document.getElementById('resultHighlight');
  if (resultHighlight) resultHighlight.textContent = result.nickname;

  // mbti-type-desc-card에 desc 표시
  const descCard = document.getElementById('mbti-type-desc-card');
  if (descCard) descCard.textContent = result.desc;

  // 설명 문장 (기존 desc)
  const desc = document.getElementById('mbti-type-desc');
  if (desc) desc.textContent = result.desc;

  // 좌우 성격 키워드
  const leftLabels = result.sides
    .filter(s => s.side === 'left')
    .map(s => `<div class="mbti-side-label">${s.text}</div>`).join('');
  const rightLabels = result.sides
    .filter(s => s.side === 'right')
    .map(s => `<div class="mbti-side-label">${s.text}</div>`).join('');
  document.getElementById('mbti-side-labels-left').innerHTML = leftLabels;
  document.getElementById('mbti-side-labels-right').innerHTML = rightLabels;

  // ✂ 대표 문구 삭제: subtitle 요소 비우기
  const subtitle = document.getElementById('mbti-subtitle');
  if (subtitle) {
    subtitle.textContent = '';
  }

  // 🔁 대표 문구를 카드 안 문장 박스에 삽입
  const typeSummary = document.getElementById('mbti-type-summary');
  if (typeSummary) {
    typeSummary.textContent = getMbtiSubtitle(mbti);
  }

  // 공유 버튼
  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', shareResult);
  }

  // 테스트 다시하기 버튼
  const retryBtn = document.getElementById('retry-btn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      location.href = 'index.html';
    });
  } else {
    console.warn('retry-btn 요소를 찾을 수 없습니다.');
  }
});