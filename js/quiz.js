// =========================
// MBTI 연애 질문 4개 예시
// =========================
const questions = [
  {
    id: 1,
    image: '../img/mbti_q1.jpg',
    question: '연인과의 데이트에서 더 설레는 순간은?',
    options: [
      { text: '사람 많은 곳에서 신나게 놀 때', mbtiKey: 'e', next: 2 },
      { text: '조용한 카페에서 둘이만 대화할 때', mbtiKey: 'i', next: 2 }
    ]
  },
  {
    id: 2,
    image: '../img/mbti_q2.jpg',
    question: '연애할 때 더 중요한 건?',
    options: [
      { text: '미래에 대한 확신과 계획', mbtiKey: 'j', next: 3 },
      { text: '즉흥적이고 자유로운 만남', mbtiKey: 'p', next: 3 }
    ]
  },
  {
    id: 3,
    image: '../img/mbti_q3.jpg',
    question: '연인과의 대화에서 더 공감되는 건?',
    options: [
      { text: '감정과 분위기를 나누는 대화', mbtiKey: 'f', next: 4 },
      { text: '논리적이고 현실적인 대화', mbtiKey: 't', next: 4 }
    ]
  },
  {
    id: 4,
    image: '../img/mbti_q4.jpg',
    question: '데이트 코스를 고를 때 나는?',
    options: [
      { text: '새로운 곳, 색다른 경험을 선호', mbtiKey: 'n', next: null },
      { text: '익숙하고 편안한 곳이 좋아', mbtiKey: 's', next: null }
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
    // 결과 페이지로 이동 (점수 파라미터 전달)
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
  // 실제 공유 기능은 추후 구현
  alert('공유 기능은 곧 제공됩니다!');
};

// MBTI 유형별 데이터 예시
const mbtiResults = {
  INFP: {
    name: "INFP",
    nickname: "감성 몽상가",
    desc: "당신은 사랑에 있어 상상력이 풍부하고, 감성적인 몽상가입니다...",
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
    nickname: "열정적인 자유인",
    desc: "당신은 연애에서도 자유롭고 열정적인 스타일입니다!",
    image: "../img/mbti/ENFP.jpg",
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