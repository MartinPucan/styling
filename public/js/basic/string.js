const firstName = 'Joe';
const lastName = 'Doe';

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

const completeName = firstName + ' ' + lastName;

console.log(completeName);

const modifiedName = `<h2>${completeName}</h2>`;

document.querySelector('span').innerHTML = modifiedName;



