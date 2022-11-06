//Задание 1
let value = prompt ('Enter value')

if (isNaN(Number(value))) {
  console.log("Ops!");
} else {
  console.log(value % 2 == 0 ? 'четное': 'нечетное');
}

