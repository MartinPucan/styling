const car = {
	color: 'blue',
	picture: '',
	age: 34,
	speed(scope) {
		return scope;
	}
}

// car.drive = function () {
// 	return true;
// }


console.log("// 'string' - ", typeof car.color);
console.log("// false", typeof car.color === 'undefined');

console.log("// true - drive void 0", typeof car.drive === void 0); // why not true?
console.log("// true - drive 'undefined' ", typeof car.drive === 'undefined');

console.log("// false", typeof car.speed === void 0);
console.log("// false", typeof car.speed === 'undefined');

console.log("// false", typeof car.picture === void 0);
console.log("// false", typeof car.picture === 'undefined');

console.log("// false", typeof car.age === void 0);
console.log("// false", typeof car.age === 'undefined');

console.log("// true", typeof car.brand === void 0); // why not true?
console.log("// true", typeof car.brand === 'undefined');
