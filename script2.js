"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = +prompt('На сколько оцените его?', '');

	personalMovieDB.movies[a] = b;

	if (a != null && b!= null && a.length < 50 && a!= '' && b != '') {
		i--
	}
 }

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = +prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);