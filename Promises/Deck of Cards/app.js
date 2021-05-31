$(function() {
	let apiURL = 'https://deckofcardsapi.com/api/deck';

	// 1.
	$.getJSON(`${apiURL}/new/draw/`).then((data) => {
		let { suit, value } = data.cards[0];
		console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
	});

	// 2.
	let firstCard = null;
	$.getJSON(`${apiURL}/new/draw/`)
		.then((data) => {
			firstCard = data.cards[0];
			let deckId = data.deck_id;
			return $.getJSON(`${apiURL}/${deckId}/draw/`);
		})
		.then((data) => {
			let secondCard = data.cards[0];
			[ firstCard, secondCard ].forEach(function(card) {
				console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
			});
		});

	// 3.
	let deckId = null;
	let $btn = $('button');
	let $cardArea = $('#card-area');

	$.getJSON(`${apiURL}/new/shuffle/`).then((data) => {
		deckId = data.deck_id;
		$btn.show();
	});

	$btn.on('click', function() {
		$.getJSON(`${apiURL}/${deckId}/draw/`).then((data) => {
			let cardSrc = data.cards[0].image;
			let angle = Math.random() * 90 - 45;
			let randomX = Math.random() * 40 - 20;
			let randomY = Math.random() * 40 - 20;
			$cardArea.append(
				$('<img>', {
					src: cardSrc,
					css: {
						transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
					}
				})
			);
			if (data.remaining === 0) $btn.remove();
		});
	});
});
