/* Anderson Soares
Ezio Lorenzetti
Fabiana Yumi
Julio  Campos
Felipe Toniolo
*/

let userPoints = 0;
let botPoints = 0;

function winner() {
  if (userPoints === 2) alert("Usuário venceu a partida.");
  if (botPoints === 2) alert("Computador venceu a partida.");
}

do {
  let userChoide = parseInt(prompt("1- Pedra, 2- Papel, 3- Tesoura"));
  let botChoice = parseInt(Math.random() * 3 + 1);
  switch (userChoide) {
    case 1:
      if (botChoice === 1) console.log("empatou");
      else if (botChoice === 2) {
        console.log("Bot ganhou");
        botPoints++;
      } else if (botChoice === 3) {
        console.log("Você ganhou");
        userPoints++;
      }
      console.log(
        "Você escolheu: " +
          userChoide +
          " e o computador escolheu: " +
          botChoice
      );
      break;
    case 2:
      if (botChoice === 1) {
        console.log("Você ganhou");
        userPoints++;
      } else if (botChoice === 2) console.log("Empate");
      else if (botChoice === 3) {
        console.log("Bot ganhou");
        botPoints++;
      }
      console.log(
        "Você escolheu: " +
          userChoide +
          " e o computador escolheu: " +
          botChoice
      );
      break;

    case 3:
      if (botChoice === 1) {
        console.log("Bot ganhou");
        botPoints++;
      } else if (botChoice === 2) {
        console.log("Você ganhou");
        userPoints++;
      } else if (botChoice === 3) console.log("empatou");
      console.log(
        "Você escolheu: " +
          userChoide +
          " e o computador escolheu: " +
          botChoice
      );
      break;

    default:
      console.log("Você digitou errado");
      break;
  }
  winner();
} while (userPoints < 2 && botPoints < 2);
