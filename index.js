const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

function fugirBotao() {
    // largura e altura máximas para manter dentro da tela
    const maxX = window.innerWidth - botaoNao.offsetWidth;
    const maxY = window.innerHeight - botaoNao.offsetHeight;

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

// Botão "Sim" navega
const botaoSim = document.getElementById("sim");
botaoSim.addEventListener("click", () => {
    window.location.href = "indexII.html";
});
