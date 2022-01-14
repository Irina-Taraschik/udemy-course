const options = {
	name: 'test',  // ключ: значение
	width: '1024',
	height: '1024',
	colors: {
		border: 'black',
		bg: 'red',
	},
	// метод, который работает внутри options
	makeTest: function() {
		console.log('Test');
	}
};

options.makeTest();

const {border, bg} = options.colors; // деструктуризация
console.log(border);

console.log(Object.keys(options));

console.log(Object.keys(options).length); // 4 - количество элементов

// console.log(options.name); // test name

// delete options.name;

// console.log(options); // name удалилось из объекта


// перебор объектов
for (let key in options) {
	console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
