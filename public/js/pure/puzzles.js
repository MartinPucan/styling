/**
 * When your return a property, the value of the property
 * is equal to the returned value,
 * not the value set in the constructor function
 * @returns {{make: string}}
 * @constructor
 */
function car () {
  this.make = 'Lamborghini'
  this.wut = 'WoW'
  this.name = 'Audi'
  const obj = { make: 'Ferrari' }
  // console.log(typeof obj);

  return obj
}

console.log(typeof car()) // object

const myCar = new car()

const betterCar = { make: 'Volvo', wut: 'good', name: 'blues' }
// Object.assign(myCar, betterCar);

console.log(myCar.make) // Ferrari
console.log(myCar.wut) //
console.log(myCar)

function Car () {
  this.make = 'Lamborghini'
  this.delete = 'Lamborghini'
  return { make: 'Ferrari' }
}
const myTrash = new Car()
console.log(myTrash)

/**
 * The .push() method returns the length of the new array
 * Previously, the array contained one element and had a length of 1
 * After adding the string 'apple' to the array, the array contains two elements and has a length of 2.
 * This gets returned from the addToList function
 * @param item
 * @param list
 * @returns {*|number}
 */
function addToList (item, list) {
  return list.push(item)
}

const result = addToList('apple', ['banana'])
console.log(result)

/**
 * The rest parameter(...args) lets us "collect" all remaining arguments into an array.
 * An array is an object, so typeof args returns "object".
 * @param args
 */
function getAge (...args) {
  console.log(typeof args)
}

getAge(21)

/**
 * If you have two keys with the same name, the key will be replaced.
 * It will still be in its first position, but with the last specified value.
 * @type {{a: string, b: string}}
 */
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)

/* Declare the function 'myFunc' */
function myFunc (theObject) {
  theObject.brand = 'Toyota'
}

/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
const myVehicle = {
  brand: 'Honda',
  model: 'Accord',
  year: 1998
}

/* Logs 'Honda' */
console.log(myVehicle.brand)

/* Pass object reference to the function */
myFunc(myVehicle)

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(myVehicle.brand)
