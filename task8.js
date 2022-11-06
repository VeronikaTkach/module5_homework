//Задание 8
let map = new Map ();
map.set('number', 1);
map.set(true, 2);
map.set('string', 3);

for (let item of map){
console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}