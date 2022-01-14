"use strict";

const arr = [1, 2, 3, 6, 8];

arr.pop(); // удаляет последний элемент

arr.push(10); // 10 добавится в конце

console.log(arr);

// переберет все значения в массиве
for(let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value)  // value это каждый отдельный элемент
}