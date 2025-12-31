const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

function fugirBotao() {
    const container = botaoNao.parentElement; // container relativo
    const margin = 10;

    const maxX = container.offsetWidth - botaoNao.offsetWidth - margin;
    const maxY = container.offsetHeight - botaoNao.offsetHeight - margin;

    const x = margin + Math.random() * maxX;
    const y = margin + Math.random() * maxY;

    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

    vezesNegou++;
    contadorSpan.innerText = vezesNegou;
}

// PC: mouse entra
botaoNao.addEventListener("mouseenter", fugirBotao);

// Celular: toque
botaoNao.addEventListener("touchstart", fugirBotao);
