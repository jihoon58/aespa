// =========================
// MBTI 연애 질문 4개 예시
// =========================
const questions = [
  // E / I
  {
    id: 1,
    image: '../img/quiz/q1.png',
    question: '더 끌리는 데이트는?',
    options: [
      { text: '사람 많은 핫플레이스!', mbtiKey: 'e', next: 2 },
      { text: '안돼, 난 무조건 집!', mbtiKey: 'i', next: 2 }
    ]
  },
  {
    id: 2,
    image: '../img/quiz/q2.png',
    question: '데이트할 때, 너라면...',
    options: [
      { text: '신나게 사람들이 모인 파티에서 사랑을 꽃피운다', mbtiKey: 'e', next: 3 },
      { text: '별빛 아래 조용한 카페에서 마음을 나눈다', mbtiKey: 'i', next: 3 }
    ]
  },
  {
    id: 3,
    image: '../img/quiz/q3.png',
    question: '파티에서 이상형을 만났다면..?',
    options: [
      { text: '바로 직진하여 번호를 물어본다', mbtiKey: 'e', next: 4 },
      { text: '주변에서 서성이며 관심을 끈다', mbtiKey: 'i', next: 4 }
    ]
  },

  // N / S
  {
    id: 4,
    image: '../img/quiz/q4.png',
    question: '선물 고를 때 나는?',
    options: [
      { text: '실용적인 것을 고르는 게 낫다', mbtiKey: 's', next: 5 },
      { text: '의미있는 것을 주고 싶다', mbtiKey: 'n', next: 5 }
    ]
  },
  {
    id: 5,
    image: '../img/quiz/q5.png',
    question: '누군가에게 고백 받았을 때?',
    options: [
      { text: '감정이 진짜일까?', mbtiKey: 's', next: 6 },
      { text: '나를 왜 좋아하게 됐을까?', mbtiKey: 'n', next: 6 }
    ]
  },
  {
    id: 6,
    image: '../img/quiz/q6.png',
    question: '미래에 대한 연애관은 어떤 편?',
    options: [
      { text: '현재에 충실, 하루 하루 함께가 중요해!', mbtiKey: 's', next: 7 },
      { text: '서로의 꿈과 가능성을 함께 만들어야지', mbtiKey: 'n', next: 7 }
    ]
  },

  // F / T
  {
    id: 7,
    image: '../img/quiz/q7.png',
    question: '연애에서 중요한 건?',
    options: [
      { text: '서로 존중하는 감정', mbtiKey: 'f', next: 8 },
      { text: '문제 없게 조율되는 구조', mbtiKey: 't', next: 8 }
    ]
  },
  {
    id: 8,
    image: '../img/quiz/q8.png',
    question: '상대방이 속상할 때, 어떻게 할거야?',
    options: [
      { text: '자연스럽게 감정을 나누고, 표현해야지', mbtiKey: 'f', next: 9 },
      { text: '감정보다는 생각을 말하는 게 편해', mbtiKey: 't', next: 9 }
    ]
  },
  {
    id: 9,
    image: '../img/quiz/q9.png',
    question: '연인이 힘든 일이 생겼을 때 당신은?',
    options: [
      { text: '일단 무슨 일이 생겼는지 파악하고 해결책을 구상한다', mbtiKey: 't', next: 10 },
      { text: '힘든 하루를 보낸 연인에게 따뜻한 위로를 전한다', mbtiKey: 'f', next: 10 }
    ]
  },

  // J / P
  {
    id: 10,
    image: '../img/quiz/q10.png',
    question: '연인이 갑자기 약속을 취소하면 나는?',
    options: [
      { text: '미리 말했으면 괜찮았을 텐데...', mbtiKey: 'j', next: 11 },
      { text: '어쩔 수 없는 일이였겠지', mbtiKey: 'p', next: 11 }
    ]
  },
  {
    id: 11,
    image: '../img/quiz/q11.png',
    question: '연인이 좋아하는 가수 콘서트를 가자고 할 때, 당신은?',
    options: [
      { text: '자리부터 예매하고 그날 코디를 상상한다', mbtiKey: 'j', next: 12 },
      { text: '일단 가자고 해놓고 막판에 고민한다', mbtiKey: 'p', next: 12 }
    ]
  },
  {
    id: 12,
    image: '../img/quiz/q12.png',
    question: '갑작스럽게 잡힌 데이트! 당신은 어떻게 진행할 것인가?',
    options: [
      { text: '최고의 하루를 만들기 위해 카페에 가서 계획을 정리한다', mbtiKey: 'j', next: null },
      { text: '돌아다니며 새롭고 재밌어 보이는 것들을 경험하며 하루를 보낸다', mbtiKey: 'p', next: null }
    ]
  }
];

// =========================
// 점수 구조 (확장성 고려)
// =========================
const score = { i: 0, e: 0, n: 0, s: 0, f: 0, t: 0, j: 0, p: 0 };

// =========================
// 상태 변수
// =========================
let currentIdx = 0;

// =========================
// 렌더링 함수
// =========================
function renderQuestion(idx) {
  const q = questions[idx];
  if (!q) {
    document.getElementById('quiz-message').style.display = 'block';
    document.getElementById('quiz-message').textContent = '질문을 불러올 수 없습니다.';
    return;
  }
  document.getElementById('quiz-image').src = q.image;
  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('choice1').textContent = q.options[0].text;
  document.getElementById('choice2').textContent = q.options[1].text;
}

// =========================
// 선택지 클릭 처리
// =========================
function handleChoice(choiceIdx) {
  const q = questions[currentIdx];
  const selected = q.options[choiceIdx];
  score[selected.mbtiKey]++;
  if (selected.next !== null) {
    currentIdx = questions.findIndex(q => q.id === selected.next);
    renderQuestion(currentIdx);
  } else {
    const params = new URLSearchParams(score).toString();
    window.location.href = `result.html?${params}`;
  }
}

// =========================
// 초기화
// =========================
document.addEventListener('DOMContentLoaded', () => {
  renderQuestion(currentIdx);
  document.getElementById('choice1').onclick = () => handleChoice(0);
  document.getElementById('choice2').onclick = () => handleChoice(1);
});

document.getElementById('share-btn').onclick = function() {
  alert('공유 기능은 곧 제공됩니다!');
};


// MBTI 유형별 데이터 예시
const mbtiResults = {
  INFP: {
    name: "INFP",
    nickname: "감성 폭발 로맨티스트",
    desc: "낡은 필름 속 기억을 꺼내어, 오늘도 사랑을 쓴다.",
    image: "../img/mbti/INFP.jpg",
    subs: [
      { key: "I", label: "내향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ENFP: {
    name: "ENFP",
    nickname: "자유로운 영혼의 연인",
    desc: "머물지 않지만, 사랑만은 깊이 안고 간다.",
    image: "../img/mbti/ENFP.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  INTJ:{
    name: "INTJ",
    nickname: "계획된 연애 마스터",
    desc: "감정은 진심이지만, 타이밍은 계산한다.",
    image: "../img/mbti/INTJ.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  INFJ: {
    name: "INFJ",
    nickname: "감정 예언자",
    desc: "말하지 않아도, 당신의 마음이 먼저 들린다.",
    image: "../img/mbti/INFJ.jpg",
    subs: [
      { key: "I", label: "내향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ENFJ: {
    name: "ENFJ",
    nickname: "사랑 주는 햇살",
    desc: "그 어떤 추운 날에도 마음을 녹이는 온기.",
    image: "../img/mbti/ENFJ.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ESTJ: {
    name: "ESTJ",
    nickname: "섹시한 자신감",
    desc: "넘치지 않지만, 부족함도 없는 완벽한 균형.",
    image: "../img/mbti/ESTJ.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ISFJ: {
    name: "ISFJ",
    nickname: "연애 내조왕",
    desc: "잔소리도 사랑으로 포장 가능한 연애 마스터.",
    image: "../img/mbti/ISFJ.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ISTP: {
    name: "ISTP",
    nickname: "즉흥적인 연애마스터",
    desc: "계획은 없지만, 설렘은 정확하게 도착한다.",
    image: "../img/mbti/ISTP.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ESTP: {
    name: "ESTP",
    nickname: "반짝이는 눈빛의 유혹인간",
    desc: "한 번 마주치면, 마음이 그 자리에 멈춘다.",
    image: "../img/mbti/ESTP.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ISFP: {
    name: "ISFP",
    nickname: "자유로운 낭만가",
    desc: "머무르지 않지만, 지나간 자리엔 늘 향기가 남는다.",
    image: "../img/mbti/ISFP.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ESFP: {
    name: "ESFP",
    nickname: "무대 위 사랑꾼",
    desc: "사랑도 퍼포먼스처럼, 언제나 혼신을 다하는 사람.",
    image: "../img/mbti/ESFP.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ISTJ: {
    name: "ISTJ",
    nickname: "계획왕 쿨가이",
    desc: "계획은 내 무기, 쿨함은 내 스타일",
    image: "../img/mbti/ISTJ.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ENTJ: {
    name: "ENTJ",
    nickname: "당당한 매력인간",
    desc: "나는 나답게 빛날 때 가장 매력 있다.",
    image: "../img/mbti/ENTJ.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  INTP: {
    name: "INTP",
    nickname: "논리 사랑 탐구자",
    desc: "감정에 빠지기 전, 먼저 마음의 구조를 해석한다.",
    image: "../img/mbti/INTP.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ENTP: {
    name: "ENTP",
    nickname: "논리도, 감정도 다 해보는 연애 실험가",
    desc: "사랑이라는 미지의 세계를 탐험한다.",
    image: "../img/mbti/ENTP.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  },
  ESFJ: {
    name: "ESFJ",
    nickname: "마음 챙김 로맨티스트",
    desc: "상대 감정 먼저 살피는 다정한 연애꾼.",
    image: "../img/mbti/ESFJ.jpg",
    subs: [
      { key: "E", label: "외향" },
      { key: "N", label: "직관" },
      { key: "F", label: "감정" },
      { key: "P", label: "인식" }
    ]
  }
  // ...다른 유형 추가
};

// URL에서 점수 파라미터 읽어서 MBTI 계산
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

document.addEventListener('DOMContentLoaded', () => {
  const mbti = getMbtiTypeFromParams();
  const result = mbtiResults[mbti] || mbtiResults['INFP']; // 기본값
  document.getElementById('mbti-image').src = result.image;
  document.getElementById('mbti-type-name').textContent = result.name;
  document.getElementById('mbti-type-nickname').textContent = result.nickname;
  document.getElementById('mbti-type-desc').textContent = result.desc;
  document.getElementById('mbti-sub-labels').innerHTML = result.subs.map(
    s => `<span>${s.key} <small>${s.label}</small></span>`
  ).join('');
  document.getElementById('share-btn').onclick = function() {
    alert('공유 기능은 곧 제공됩니다!');
  };
  document.getElementById('mbti-image').alt = result.name + ' 이미지';
}); 