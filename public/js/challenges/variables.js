// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable.

// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."


// const variable1 = prompt('Whats your name?');
// const variable2 = prompt('Whats your last name');
// const wholeName = variable1.toUpperCase() + " " + variable2.toUpperCase();
// const lengthName = wholeName.length;
// alert(`The string ${wholeName} is ${lengthName} characters long.`);


// const firstName = prompt('What is your first name?');
// const lastName = prompt('What is your last name?');
// const completeName = firstName.toUpperCase() + " " + lastName.toUpperCase();
// const lengthName = completeName.match(/\S/g).length;

// alert(`The string ${completeName} is ${lengthName} characters long.`);

// const result = lengthName + '';
// const p = document.createElement('p')
// const div = document.getElementById('name').appendChild(p);


// p.innerText = result;


const dataset = [2,2,4,2,6,4,7,8,4,2,4,2,6,8,5,0,2];
const search = 2;

const count = dataset.reduce((n, val) => {
	return n + (val === search);
}, 0);

console.log(count);

class Users {

	constructor(users) {
		this.users = users;
	}

	printAll() {
		for (let user of this.users) {
			console.log(user.id);
		}
	}

}
(async () => {

	let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
	let users = new Users( await response.json() );

	users.printAll();
})();




class Cities {

	constructor(cities) {
		this.cities = cities;
	}

	printCities() {
		for (const city of this.cities) {

			const div = document.getElementById('name');
			const ul = document.createElement('ul');
			const li = document.createElement('li');
			div.appendChild(ul);
			ul.appendChild(li);
			li.innerHTML = city;
		}
	}
}

(() => {
	const cities = ['Monaco', 'Rio', 'Monte Carlo', 'Prague'];

	const allCities = new Cities(cities);

	allCities.printCities();
})();


const body = (name) => {
	return `Hello, ${name}`;
}

const age = (age) => {
	return `Je mi ${age} let.`;
}

const address = (address) => {
	return `Bydlim na adrese ${address}`;
}

const human = {
	parts: body,
	age: age,
	address: address
}

const adresa = prompt('Kde bydlis')

console.log(human.parts('Simonek kokotek'));
console.log(human.age(28));
console.log(human.address(adresa));

const light = ['Luke', 'Obi-Wan', 'Yoda'];
const dark = ['Vader', 'Palpatine'];

const whichSideOfTheForce = name => {
	return light.includes(name) ? 'light' :
		dark.includes(name) ? 'dark' : 'unknown';
}

console.log(whichSideOfTheForce('Yoda'));   // returns "light"
console.log(whichSideOfTheForce('Vader')); // returns "unknown"
