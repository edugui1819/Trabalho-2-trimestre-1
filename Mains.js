// Definindo as perguntas e resultados
const perguntas = [
    { pergunta: "Você gosta de programação?", sim: "Legal! Que tal estudar mais sobre isso?" },
    { pergunta: "Você prefere chá ou café?", sim: "Ótima escolha! Café é revigorante.", nao: "Chá é uma escolha relaxante." }
];

let indicePergunta = 0;
let respostas = [];

// Função para exibir a próxima pergunta
function exibirPergunta() {
    if (indicePergunta < perguntas.length) {
        const perguntaAtual = perguntas[indicePergunta];
        document.getElementById('question').textContent = perguntaAtual.pergunta;
        indicePergunta++;
    } else {
        exibirResultado();
    }
}

// Função para processar a resposta
function responder(resposta) {
    respostas.push(resposta);
    exibirPergunta();
}

// Função para exibir o resultado final
function exibirResultado() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';

    const resultadoTexto = document.getElementById('resultado-texto');
    if (respostas[0]) {
        resultadoTexto.textContent = perguntas[0].sim;
    } else {
        resultadoTexto.textContent = perguntas[1].nao;
    }
}

// Iniciar o questionário
exibirPergunta();
