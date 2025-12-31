const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

function fugirBotao() {
    // largura e altura máximas para que o botão não saia da tela
    const maxX = window.innerWidth - botaoNao.offsetWidth;
    const maxY = window.innerHeight - botaoNao.offsetHeight;

    // posições aleatórias dentro da tela
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

    vezesNegou++;
    contadorSpan.innerText = vezesNegou;
}

// PC: mouse entra
botaoNao.addEventListener("mouseenter", fugirBotao);

// Celular: toque
botaoNao.addEventListener("touchstart", fugirBotao);
