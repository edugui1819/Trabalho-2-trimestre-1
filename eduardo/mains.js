const questions = [
    { 
        question: "Quem ganhou a copa de 2018?", 
        options: ["França", "Inglaterra"], 
        answer: 0 // índice da opção correta
    },
    { 
        question: "Quem ganhou a ultima bola de ouro?", 
        options: ["Vini jr", "Messi"], 
        answer: 0 
    },
    { 
        question: "Qual é o país com mais copas do mundo?", 
        options: ["Brasil", "Alemanha"], 
        answer: 0 
    },
    { 
        question: "Como é chamado o campeonato nacional italiano?", 
        options: ["Série A tim", "Premier League"], 
        answer: 0 
    },
    { 
        question: "Qual o jogador com mais bolas de ouro?", 
        options: ["Messi", "Cr7"], 
        answer: 0 
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-btn');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;

    optionsContainer.innerHTML = '';
    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', function() {
            checkAnswer(index);
        });
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestion].answer;
    if (selectedOption === correctOption) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultText.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    resultContainer.style.display = 'block';
    optionsContainer.style.display = 'none';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.style.display = 'none';
    optionsContainer.style.display = 'block';
    loadQuestion();
}

loadQuestion();