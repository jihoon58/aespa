const mbtiResults = {
  INFP: {
    name: "INFP", nickname: "감성 몽상가", desc: "상상력과 감성이 풍부한 몽상가형 연애 스타일.", image: "../img/mbti/INFP.jpg", sides: [ { side: "left", text: "이상주의자" }, { side: "left", text: "감성적" }, { side: "right", text: "자유로운" }, { side: "right", text: "몽상가" } ] },
  ENFP: {
    name: "ENFP", nickname: "열정적인 자유인", desc: "자유롭고 열정적인 연애를 추구하는 스타일.", image: "../img/mbti/ENFP.jpg", sides: [ { side: "left", text: "열정" }, { side: "left", text: "창의적" }, { side: "right", text: "자유로운" }, { side: "right", text: "외향적" } ] },
  INFJ: {
    name: "INFJ", nickname: "이상적 조언자", desc: "깊은 공감과 이상을 추구하는 연애 스타일.", image: "../img/mbti/INFJ.jpg", sides: [ { side: "left", text: "이상주의" }, { side: "left", text: "공감" }, { side: "right", text: "조언자" }, { side: "right", text: "신념" } ] },
  ENFJ: {
    name: "ENFJ", nickname: "따뜻한 리더", desc: "상대방을 잘 이끌고 배려하는 연애 스타일.", image: "../img/mbti/ENFJ.jpg", sides: [ { side: "left", text: "리더십" }, { side: "left", text: "배려" }, { side: "right", text: "따뜻함" }, { side: "right", text: "헌신" } ] },
  INTJ: {
    name: "INTJ", nickname: "전략가", desc: "계획적이고 논리적인 연애를 선호하는 스타일.", image: "../img/mbti/INTJ.jpg", sides: [ { side: "left", text: "전략" }, { side: "left", text: "분석" }, { side: "right", text: "독립적" }, { side: "right", text: "계획적" } ] },
  ENTJ: {
    name: "ENTJ", nickname: "당당한 리더", desc: "주도적이고 목표지향적인 연애 스타일.", image: "../img/mbti/ENTJ.jpg", sides: [ { side: "left", text: "리더십" }, { side: "left", text: "당당함" }, { side: "right", text: "목표지향" }, { side: "right", text: "결단력" } ] },
  INTP: {
    name: "INTP", nickname: "논리적 사색가", desc: "논리와 아이디어를 중시하는 연애 스타일.", image: "../img/mbti/INTP.jpg", sides: [ { side: "left", text: "사색" }, { side: "left", text: "논리" }, { side: "right", text: "창의적" }, { side: "right", text: "분석적" } ] },
  ENTP: {
    name: "ENTP", nickname: "아이디어 뱅크", desc: "새로운 자극과 대화를 즐기는 연애 스타일.", image: "../img/mbti/ENTP.jpg", sides: [ { side: "left", text: "아이디어" }, { side: "left", text: "유쾌함" }, { side: "right", text: "도전적" }, { side: "right", text: "창의적" } ] },
  ISFP: {
    name: "ISFP", nickname: "따뜻한 예술가", desc: "감성적이고 따뜻한 연애를 선호하는 스타일.", image: "../img/mbti/ISFP.jpg", sides: [ { side: "left", text: "예술적" }, { side: "left", text: "감성" }, { side: "right", text: "따뜻함" }, { side: "right", text: "자유로움" } ] },
  ESFP: {
    name: "ESFP", nickname: "사교적인 연예인", desc: "즐겁고 즉흥적인 연애를 즐기는 스타일.", image: "../img/mbti/ESFP.jpg", sides: [ { side: "left", text: "사교적" }, { side: "left", text: "즉흥적" }, { side: "right", text: "유쾌함" }, { side: "right", text: "에너지" } ] },
  ISTP: {
    name: "ISTP", nickname: "실용주의자", desc: "실용적이고 자유로운 연애를 선호하는 스타일.", image: "../img/mbti/ISTP.jpg", sides: [ { side: "left", text: "실용적" }, { side: "left", text: "자유" }, { side: "right", text: "쿨함" }, { side: "right", text: "유연함" } ] },
  ESTP: {
    name: "ESTP", nickname: "모험가", desc: "모험과 자극을 즐기는 연애 스타일.", image: "../img/mbti/ESTP.jpg", sides: [ { side: "left", text: "모험" }, { side: "left", text: "도전" }, { side: "right", text: "즉흥적" }, { side: "right", text: "에너지" } ] },
  ISFJ: {
    name: "ISFJ", nickname: "헌신적인 수호자", desc: "배려와 헌신이 가득한 연애 스타일.", image: "../img/mbti/ISFJ.jpg", sides: [ { side: "left", text: "헌신" }, { side: "left", text: "배려" }, { side: "right", text: "수호자" }, { side: "right", text: "신뢰" } ] },
  ESFJ: {
    name: "ESFJ", nickname: "친절한 사교가", desc: "친절하고 사교적인 연애를 선호하는 스타일.", image: "../img/mbti/ESFJ.jpg", sides: [ { side: "left", text: "친절" }, { side: "left", text: "사교" }, { side: "right", text: "배려" }, { side: "right", text: "조화" } ] },
  ISTJ: {
    name: "ISTJ", nickname: "원칙주의자", desc: "원칙과 신뢰를 중시하는 연애 스타일.", image: "../img/mbti/ISTJ.jpg", sides: [ { side: "left", text: "원칙" }, { side: "left", text: "신뢰" }, { side: "right", text: "책임감" }, { side: "right", text: "성실함" } ] },
  ESTJ: {
    name: "ESTJ", nickname: "현실적 관리자", desc: "현실적이고 체계적인 연애를 선호하는 스타일.", image: "../img/mbti/ESTJ.jpg", sides: [ { side: "left", text: "현실적" }, { side: "left", text: "체계" }, { side: "right", text: "관리자" }, { side: "right", text: "실용적" } ] }
};

function getMbtiTypeFromParams() {
  const params = new URLSearchParams(window.location.search);
  const pairs = [
    ['i', 'e'],
    ['n', 's'],
    ['f', 't'],
    ['j', 'p']
  ];
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

document.addEventListener('DOMContentLoaded', () => {
  const mbti = getMbtiTypeFromParams();
  const result = mbtiResults[mbti] || mbtiResults['INFP'];
  const img = document.getElementById('mbti-image');
  img.src = result.image;
  img.alt = result.name + ' 이미지';
  img.onerror = function() {
    img.src = '../img/mbti/default.jpg';
  };
  document.getElementById('mbti-type-name').textContent = result.name;
  document.getElementById('mbti-type-nickname').textContent = result.nickname;
  document.getElementById('mbti-type-desc').textContent = result.desc;
  const left = result.sides.filter(s => s.side === 'left').map(s => `<div class="mbti-side-label">${s.text}</div>`).join('');
  const right = result.sides.filter(s => s.side === 'right').map(s => `<div class="mbti-side-label">${s.text}</div>`).join('');
  document.getElementById('mbti-side-labels-left').innerHTML = left;
  document.getElementById('mbti-side-labels-right').innerHTML = right;
  document.getElementById('share-btn').onclick = shareResult;
}); 