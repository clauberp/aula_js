let titulo = document.querySelector("h1");
titulo.innerHTML = "jogo do numero secreto";

function numeroSecreto() {

    // Gera um número secreto aleatório entre 1 e 10
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    console.log(numeroSecreto); // (Para testes, pode remover depois)

    // Variável para armazenar o chute do usuário
    let chute;
    let tentativas = 0; // Inicia o contador de tentativas

    while (chute != numeroSecreto) {
      chute = parseInt(prompt('Escolha um número entre 1 e 10'));
      tentativas++; // Soma +1 a cada tentativa

      if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
      } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente.`);
      } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente.`);
      }
    }
}

function calculaMedia() {
let totalNumeros = parseInt(prompt("Quantos números você quer calcular a média?"));
let soma = 0;
for (let i = 0; i < totalNumeros; i++) {
  let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
  soma += numero;
  }
let media = soma / totalNumeros;
alert(`A média dos números digitados é: ${media.toFixed(2)}`);
}

function somaNumeros() {
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let resultado = num1 + num2;
alert("O resultado da soma é: " + resultado);
let msg = document.querySelector("p");
msg.innerHTML = "jogo finalizado";
}