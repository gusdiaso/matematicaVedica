const input = document.getElementById("input");
const botao_soma = document.getElementById("button_soma");
const botao_sub = document.getElementById("button_sub");
const botao_mult = document.getElementById("button_mult");
const botao_div = document.getElementById("button_div");
const botao_0 = document.getElementById("button_0");
const botao_1 = document.getElementById("button_1");
const botao_2 = document.getElementById("button_2");
const botao_3 = document.getElementById("button_3");
const botao_4 = document.getElementById("button_4");
const botao_5 = document.getElementById("button_5");
const botao_6 = document.getElementById("button_6");
const botao_7 = document.getElementById("button_7");
const botao_8 = document.getElementById("button_8");
const botao_9 = document.getElementById("button_9");
const button_calcular = document.querySelector(".button_calcular");

//form.addEventListener("submit", funcaocalcular);

button_soma.addEventListener("click", () => {
    input.value += "+";
});

button_sub.addEventListener("click", () => {
    input.value += "-";
});

button_mult.addEventListener("click", () => {
    input.value += "*";
});

button_div.addEventListener("click", () => {
    input.value += "/";
});

button_0.addEventListener("click", () => {
    input.value += "0";
});

button_1.addEventListener("click", () => {
    input.value += "1";
});

button_2.addEventListener("click", () => {
    input.value += "2";
});

button_3.addEventListener("click", () => {
    input.value += "3";
});

button_4.addEventListener("click", () => {
    input.value += "4";
});

button_5.addEventListener("click", () => {
    input.value += "5";
});

button_6.addEventListener("click", () => {
    input.value += "6";
});

button_7.addEventListener("click", () => {
    input.value += "7";
});

button_8.addEventListener("click", () => {
    input.value += "8";
});

button_9.addEventListener("click", () => {
    input.value += "9";
});

button_calcular.addEventListener("click", () => {
    console.log("ok");
});