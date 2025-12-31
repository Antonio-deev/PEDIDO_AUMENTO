const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

function fugirBotao() {
    const amplitude = 80; // pixels que ele pode se mover do centro
    const margin = 10;    // margem da tela

    const centroX = window.innerWidth / 2 - botaoNao.offsetWidth / 2;
    const centroY = window.innerHeight / 2 - botaoNao.offsetHeight / 2;

    let x = centroX + (Math.random() * amplitude * 2 - amplitude);
    let y = centroY + (Math.random() * amplitude * 2 - amplitude);

    // garante que o botão nunca saia da tela
    x = Math.max(margin, Math.min(x, window.innerWidth - botaoNao.offsetWidth - margin));
    y = Math.max(margin, Math.min(y, window.innerHeight - botaoNao.offsetHeight - margin));

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
