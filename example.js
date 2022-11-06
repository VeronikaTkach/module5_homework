//Задание 1
let value = prompt ('Enter value')

if (isNaN(Number(value))) {
  console.log("Ops!");
} else {
  console.log(value % 2 == 0 ? 'четное': 'нечетное');
}

//Задание 2
let x;
if (typeof x == 'number'){
  console.log('x-это число')
}
else if (typeof x == 'string'){
  console.log('x-это строка')
}
else if (typeof x == 'boolean'){
  console.log('x-это логический тип')
}
else {
  console.log('тип х не определен')
}

//Задание 3
let string = 'Sator arepO'
let massiv = [...string]
  console.log(massiv.reverse().join(''))

//Задание 4
let num = Math.floor(Math.random() * 101);
  console.log(num);

//Задание 5
let arr=[1, 2, 'three', null];
  console.log(arr.length)
for (i = 0; i < arr.length; i++) { 
  console.log(arr[i]); 
}

//Задание 6
const arr = ["q", "q", "q", 1];
let elementsIsEqual = true;
for (let i=0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i+1]) {
    elementsIsEqual = false;
  }
}
  console.log(elementsIsEqual)

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

//Задание 8
let map = new Map ();
map.set('number', 1);
map.set(true, 2);
map.set('string', 3);

for (let item of map){
console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}