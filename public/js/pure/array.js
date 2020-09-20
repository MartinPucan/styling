
const allWords = document.querySelectorAll('p');


const array = [];

const elements = document.body.getElementsByTagName("p");

for(let i = 0; i < elements.length; i++) {
	const current = elements[i];

	array.push(current.textContent);
}

