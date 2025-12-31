const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes");
let vezesNegou = 0;

// Função para o botão "Não" fugir perto do centro
function fugirBotao() {
    const amplitude = 80; // pixels que ele pode se mover do centro

    const x = (window.innerWidth / 2) - (botaoNao.offsetWidth / 2) + (Math.random() * amplitude * 2 - amplitude);
    const y = (window.innerHeight / 2) - (botaoNao.offsetHeight / 2) + (Math.random() * amplitude * 2 - amplitude);

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
