const options = {
	name: 'test',
	width: '1024',
	height: '1024',
	colors: {
		border: 'black',
		bg: 'red',
	}
};

// console.log(options.name); // test name

// delete options.name;

// console.log(options); // name удалилось из объекта


// перебор объектов
for (let key in options) {
	console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
