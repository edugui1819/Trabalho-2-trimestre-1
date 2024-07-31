// Script para o carrossel de imagens
const carousel = document.querySelector('.carousel');


let isDown = false;
let startX;
let scrollLeft;


carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});


carousel.addEventListener('mouseleave', () => {
    isDown = false;
});


carousel.addEventListener('mouseup', () => {
    isDown = false;
});


carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do scroll
    carousel.scrollLeft = scrollLeft - walk;
});


// Script para formulário de contato
const form = document.getElementById('contact-form');


form.addEventListener('submit', function(event) {
    event.preventDefault();
   
    // Aqui você pode adicionar o código para enviar o formulário
    // Por exemplo, exibir uma mensagem de sucesso ou enviar os dados via AJAX
   
    // Resetar o formulário
    this.reset();
   
    // Exemplo de mensagem de sucesso (pode ser substituído por código de envio real)
    alert('Mensagem enviada com sucesso!');
});
