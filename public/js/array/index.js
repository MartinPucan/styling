// import { cars } from './arrays';
// because of cors

const cars = ["mercedes", "audi", "bmw"];

const specialCars = [
  { name: "mercedes", power: 177 },
  { name: "audi", power: 201 },
  { name: "bmw", power: 100 },
];

console.log(Array.of(specialCars));
console.log(specialCars);

console.log(cars.lastIndexOf("bmw"));
console.log(cars);

Array.from("bmw");

Array.isArray(["a", "b", "c", "d"]);

console.log(Array.of(1, 2, 3));

["a", "b"].concat(["c", "d"]);

[1, 2, 3, "a", "b", "c"].copyWithin(3);

["a", "b", "c"].entries().next();

[10, 20, 30].every((el) => el > 5);

[1, 2, 3].fill("new", 1);

[1, 2, 3, 4, 5].filter((el) => el <= 3);

[1, 2, 3, 4, 5].find((el) => el < 3);

["dog", "cat", "bird"].findIndex((el) => el === "cat");

[1, 3, 5].flatMap((num) => [num, num + 1]);

["car", "plane", "boat"].forEach((el) => console.log(el));

["apple", "samsung", "dell"].includes("samsung");

["dog", "cat", "fish"].indexOf("cat");

["dog", "cat", "fish"].join(" - ");

["a", "b", "c"].keys().next();

["walk", "run", "swim", "run"].lastIndexOf("run");

[1, 2, 3].map((el) => el * 2);

["wine", "beer", "whiskey"].pop();

["wine", "beer"].push("whiskey");

[1, 2, 3].reduce((a, b) => a + b);

["a", "b", "c"].reduceRight((a, b) => a + b);

["first", "second", "third"].reverse();

["first", "second", "third"].shift();

["pie", "cake", "chocolate", "ice cream"].slice(1, 3);

[10, 20, 30, 40].some((el) => el > 35);

[20, 1, 4, 3, 10].sort((a, b) => a - b);

["a", "b", "c"].splice(1, 1);

const values = [0, 1, 2, 3];

const result = values.toLocaleString("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(result);

["this", "is", "an", "array"].toString();

["b", "c"].unshift("a");

console.log(["a", "b", "c"].values().next());
