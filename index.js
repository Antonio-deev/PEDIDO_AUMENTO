const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

// função para mover o botão para posição aleatória
function fugirBotao() {
    const maxX = window.innerWidth - botaoNao.offsetWidth;
    const maxY = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = x + 'px';
    botaoNao.style.top = y + 'px';

    // contador
    vezesNegou++;
    contadorSpan.innerText = vezesNegou;
}

// PC: mouse entra
botaoNao.addEventListener("mouseenter", fugirBotao);

// Celular: toque na tela
document.addEventListener("touchstart", function(event) {
    if(event.target === botaoNao) {
        fugirBotao();
    }
});
