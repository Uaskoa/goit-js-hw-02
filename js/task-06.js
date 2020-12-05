let input;
let numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число");
  if (input === null) {
    break;
  }
  input = Number(input);

  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(input);
}

for (const number of numbers) {
  total += number;
}

if (numbers.length !== 0) {
  console.log(`Общая сумма чисел равна ${total}.`);
}

// С ИСПОЛЬЗОВАНИЕМ ФУНКЦИИ
// const sum = function() {
//   for (const number of numbers) {
//   total += number;
// }

// if (numbers.length !== 0) {
//   return `Общая сумма чисел равна ${total}.`;
// }
// }

// console.log(sum(numbers));
