/* DEIXANDO O MOUSE "ARISCO" */

const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

function fugirBotao() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    botaoNao.style.transform = `translate(${x}px, ${y}px)`;

    vezesNegou++;
    contadorSpan.innerText = vezesNegou;
}

// PC: mouse entra
botaoNao.addEventListener("mouseenter", fugirBotao);

// Celular: toque
botaoNao.addEventListener("touchstart", fugirBotao);
