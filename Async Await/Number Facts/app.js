let apiURL = 'http://numbersapi.com';
let favoriteoriteNumber = 1;

// 1.
async function part1() {
	let data = await $.getJSON(`${apiURL}/${favoriteNumber}?json`);
	console.log(data);
}
part1();

// 2.
const favoriteNumbers = [ 2, 22, 44 ];
async function part2() {
	let data = await $.getJSON(`${apiURL}/${favoriteNumbers}?json`);
	console.log(data);
}
part2();

// 3.
async function part3() {
	let facts = await Promise.all(Array.from({ length: 4 }, () => $.getJSON(`${apiURL}/${favoriteNumber}?json`)));
	facts.forEach((data) => {
		$('body').append(`<p>${data.text}</p>`);
	});
}
part3();
