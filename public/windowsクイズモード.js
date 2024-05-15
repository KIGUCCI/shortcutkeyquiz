'use strict';


const $question = document.getElementById('question');
const $options = document.getElementById('options');
const $result = document.getElementById('result');
const $nextBtn = document.getElementById('nextBtn');

let quizData = null;
let currentQuestionIndex = 0;
let correctAnswers = 0; // 正解数を格納する変数

fetch('windowsクイズモード.json')
  .then(response => response.json())
  .then(data => {
    quizData = data;
    displayQuestion();
  })
  .catch(error => console.error('Error fetching quiz data:', error));

$nextBtn.addEventListener('click', displayNextQuestion);


function displayQuestion() {
  const questionData = quizData[currentQuestionIndex];
  $question.textContent = questionData['question' + (currentQuestionIndex + 1)]; // 問題文を表示
  $options.innerHTML = '';

  questionData.answers.forEach((answer, index) => {     //選択肢をボタンに表示
    const $button = document.createElement('button');
    $button.textContent = answer;
    $button.addEventListener('click', () => checkAnswer(index));
    $options.appendChild($button);
  });
}

function checkAnswer(selectedIndex) {
  const questionData = quizData[currentQuestionIndex];
  if (questionData.correct === questionData.answers[selectedIndex]) {
    $result.textContent = '正解！';
    correctAnswers++; // 正解数をインクリメント
  } else {
    $result.textContent = '不正解！';
  }
}

function displayResult() {                                 //答えの正誤確認と表示
  const score = correctAnswers + '/' + quizData.length;
  $question.textContent = '終了！あなたのスコアは' + score + 'です';
  $options.innerHTML = '';
  $result.textContent = '';
  $nextBtn.style.display = 'none';
}

function displayNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
    $result.textContent = '';
  } else {
    displayResult(); // 次の問題を表示する前に前の結果をクリア。最後の問題を解いたら結果を表示
  }
}

document.getElementById('shortcutQuiz').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  
  document.getElementById('quiz').addEventListener('click', () => {
      window.location.href = 'クイズモード.html';
    });
    