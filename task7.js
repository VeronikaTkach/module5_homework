//Задание 7
const arr = [1, null, 'three', "!", 1, "six"];
let countEven = 0;
let countOdd = 0;
let countZero = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === 0) {
    countZero += 1;
  } else if (arr[i] %2 === 0) {
    countEven += 1;
  } else if (arr[i] %2 !== 0) {
    countOdd += 1;
  }
}

  console.log(`В массиве ${countEven} четных элемента`);
  console.log(`В массиве ${countOdd} нечетных элемента`);

if (countZero !== 0) {
  console.log(`В массиве ${countZero} ноль`);
}

