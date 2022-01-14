"use strict";

const arr = [1, 2, 3, 6, 8];

console.log(arr.length); // отсчет от 0, 8 будет четвертым по счету элементу.
// length = последний индекс + 1. Ответ будет 5.

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

//метод перебора всех элемпнтов в массиве
// это call-back функция. Сначала выполнится forEach, а затем то, что внутри function (коллбэки)
const arr = [1, 2, 3, 6, 8];
arr.forEach(function(item, i, array) {
	console.log(`${i}: ${item} внутри массива ${array}`);
}); 
