const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Quem venceu a copa do mundo de 2006?",
    answers: [
      { text: "<Alemanha>", correct: false },
      { text: "<Brasil>", correct: false },
      { text: "<Espanha>", correct: true },
      { text: "<Inglaterra>", correct: false }
    ]
  },
  {
    question: "Onde se localiza o maior estádio do mundo?",
    answers: [
      { text: "Coreia", correct: true },
      { text: "Espanha", correct: false },
      { text: "Estados Unidos", correct: false },
      { text: "Inglaterra", correct: false }
    ]
  },
  {
    question: 'Qual é o jogador com mais bola de ouro"',
    answers: [
      { text: 'Messi">', correct: true },
      { text: 'CR7', correct: false },
      { text: 'Maradona">', correct: false },
      { text: "Di Estefano", correct: false }
    ]
  },
  {
    question: 'Quem vai vencer a libertadores de 2024 ',
    answers: [
      { text: "Outro", correct: false },
      { text: "Flamengo", correct: true }
    ]
  },
  {
    question: 'Quem foi o artilheiro do brasileirão de 2023',
    answers: [
      { text: 'Gabigol', correct: false },
      { text: 'Paulinho', correct: true },
      { text: 'Hulk', correct: false },
      { text: 'Bob charlton', correct: false }
    ]
  },
  {
    question: 'Quando o.... tá feio exxquece é frase de qual jogador?',
    answers: [
      { text: 'Bruno Henrique', correct: false },
      { text: 'Michael', correct: true },
      { text: 'Beckham', correct: false },
      { text: 'Hulk', correct: false }
    ]
  },
  {
    question: 'Série A tim é o nome do campeonato de qual país"?',
    answers: [
      { text: 'Inglaterra', correct: false },
      { text: 'Suiça', correct: false },
      { text: 'Turquia', correct: false },
      { text: 'Italia', correct: true },
    ]
  },
]