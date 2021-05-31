let apiURL = 'http://numbersapi.com';
let favoriteNumber = 1;

// 1.
$.getJSON(`${apiURL}/${favoriteNumber}?json`, function(data) {
	console.log(data);
});

// 2.
let favoriteNumbers = [ 2, 22, 44 ];
$.getJSON(`${apiURL}/${favoriteNumbers}?json`, function(data) {
	console.log(data);
});

// 3.
let facts = [];
$.getJSON(`${apiURL}/${favoriteNumber}?json`, function(data) {
	facts.push(data.text);
	$.getJSON(`${apiURL}/${favoriteNumber}?json`, function(data) {
		facts.push(data.text);
		$.getJSON(`${apiURL}/${favoriteNumber}?json`, function(data) {
			facts.push(data.text);
			$.getJSON(`${apiURL}/${favoriteNumber}?json`, function(data) {
				facts.push(data.text);
				facts.forEach((fact) => {
					$('body').append(`<p>${fact}</p>`);
				});
			});
		});
	});
});
