const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

function fugirBotao() {
    const margin = 20; // margem mínima da tela
    const maxX = window.innerWidth - botaoNao.offsetWidth - margin;
    const maxY = window.innerHeight - botaoNao.offsetHeight - margin;

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
