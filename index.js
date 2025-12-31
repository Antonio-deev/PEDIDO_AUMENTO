/* DEIXANDO O MOUSE "ARISCO" */

console.log("Funcionando");



const botaoNao = document.getElementById("nao");
const contadorSpan = document.getElementById("vezes")

let vezesNegou = 0;

botaoNao.addEventListener ("mouseenter", function () {

    const x = Math.random () * 300 - 150;
    const y = Math.random () * 200 - 100;

    botaoNao.style.transform = `translate(${x}px, ${y}px)`;

    vezesNegou++;
    contadorSpan.innerText = vezesNegou;
});