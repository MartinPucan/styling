// const video = {
// 	title: 'a',
// 	play() {
// 		console.log(this);
// 	}
// };
//
// video.stop = function () {
// 	console.log(this);
// }
//
// video.play();

// let fun = function () {
// 	alert(this);
// }
// fun();
//
// let obj1 = { fun: fun };
// let obj2 = { fun: fun };
//
// obj1.fun();
// obj2.fun();

// fun == obj1.fun == obj2.fun

/**
 * When your return a property, the value of the property
 * is equal to the returned value,
 * not the value set in the constructor function
 * @returns {{make: string}}
 * @constructor
 */
function Car() {
	this.make = 'Lamborghini';
	return { make: 'Ferrari' };
}

const myCar = new Car();
console.log(myCar.make);


/**
 * The .push() method returns the length of the new array
 * Previously, the array contained one element and had a length of 1
 * After adding the string 'apple' to the array, the array contains two elements and has a length of 2.
 * This gets returned from the addToList function
 * @param item
 * @param list
 * @returns {*|number}
 */
function addToList(item, list) {
	return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result);


/**
 * The rest parameter(...args) lets us "collect" all remaining arguments into an array.
 * An array is an object, so typeof args returns "object".
 * @param args
 */
function getAge(...args) {
	console.log(typeof args);
}

getAge(21);

/**
 * If you have two keys with the same name, the key will be replaced.
 * It will still be in its first position, but with the last specified value.
 * @type {{a: string, b: string}}
 */
const obj = { a: 'one', b: 'two', a: 'three'};
console.log(obj);
