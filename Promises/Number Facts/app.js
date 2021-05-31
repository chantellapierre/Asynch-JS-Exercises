let favoriteNumber = 5;
let apiURL = 'http://numbersapi.com';

// 1.
$.getJSON(`${apiURL}/${favoriteNumber}?json`).then((data) => {
	console.log(data);
});

// 2.
let favoriteNumbers = [ 7, 11, 22 ];
$.getJSON(`${apiURL}/${favoriteNumbers}?json`).then((data) => {
	console.log(data);
});

// 3.
Promise.all(
	Array.from({ length: 4 }, () => {
		return $.getJSON(`${apiURL}/${favoriteNumber}?json`);
	})
).then((facts) => {
	facts.forEach((data) => $('body').append(`<p>${data.text}</p>`));
});
