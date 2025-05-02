const questions = JSON.parse(localStorage.getItem('questions')) || [
  { optionA: 'Be invisible for a day', optionB: 'Fly for a day' },
  { optionA: 'Only eat sweet food', optionB: 'Only eat salty food' },
  { optionA: 'Live in space', optionB: 'Live under the sea' },
  { optionA: 'Always be 10 minutes late', optionB: 'Always be 20 minutes early' },
  { optionA: 'Have super strength', optionB: 'Have super speed' },
  { optionA: 'Speak all languages', optionB: 'Talk to animals' },
  { optionA: 'Never use social media again', optionB: 'Never watch TV again' },
  { optionA: 'Be rich and lonely', optionB: 'Be poor and surrounded by friends' },
  { optionA: 'Time travel', optionB: 'Freeze time' },
  { optionA: 'Sing instead of speak', optionB: 'Dance everywhere' }
];

let currentIndex = 0;
const optionAButton = document.getElementById('optionA');
const optionBButton = document.getElementById('optionB');
const thanksMessage = document.getElementById('thanksMessage');
const newAInput = document.getElementById('newA');
const newBInput = document.getElementById('newB');
const submitBtn = document.getElementById('submitBtn');

function loadQuestion() {
  const q = questions[currentIndex];
  optionAButton.textContent = q.optionA;
  optionBButton.textContent = q.optionB;
  thanksMessage.classList.add('hidden');
}

function vote(choice) {
  thanksMessage.classList.remove('hidden');
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % questions.length;
    loadQuestion();
  }, 1000);
}

function submitQuestion() {
  const optionA = newAInput.value.trim();
  const optionB = newBInput.value.trim();
  if (optionA && optionB) {
    questions.push({ optionA, optionB });
    localStorage.setItem('questions', JSON.stringify(questions));
    newAInput.value = '';
    newBInput.value = '';
  }
}

optionAButton.addEventListener('click', () => vote('A'));
optionBButton.addEventListener('click', () => vote('B'));
submitBtn.addEventListener('click', submitQuestion);

loadQuestion();