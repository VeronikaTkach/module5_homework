//Задание 6
const arr = ["q", "q", "q", 1];
let elementsIsEqual = true;
for (let i=0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i+1]) {
    elementsIsEqual = false;
  }
}
  console.log(elementsIsEqual)
