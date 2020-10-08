// import { cars } from './arrays';

const cars = ['mercedes', 'audi', 'bmw'];

console.log(cars.lastIndexOf('bmw'));
console.log(cars);

Array.from('bmw');

Array.isArray(['a', 'b', 'c', 'd']);

Array.of(1, 2, 3);

['a', 'b'].concat(['c', 'd']);

[1, 2, 3, 'a', 'b', 'c'].copyWithin(3);

['a', 'b', 'c'].entries().next();

[10, 20, 30].every((el) => el > 5);

[1, 2, 3].fill('new', 1);

[1, 2, 3, 4, 5].filter((el) => el <= 3);

[1, 2, 3, 4, 5].find((el) => el < 3);

['dog', 'cat', 'bird'].findIndex((el) => el === 'cat');

[1, 3, 5].flatMap((num) => [num, num + 1 ]);

['car', 'plane', 'boat'].forEach((el) => console.log(el));

['apple', 'samsung', 'dell'].includes('samsung');

['dog', 'cat', 'fish'].indexOf('cat');

console.log(cars.join(' - '));
console.log(cars);

['a', 'b', 'c'].keys().next();

['walk', 'run', 'swim', 'run'].lastIndexOf('run');
