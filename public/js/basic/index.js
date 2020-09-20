alert("Warning, this message will self-destruct in");

for (let i = 0; i < 3; i++) {
	const num = i + 1;
	console.log(num + "...");
}

document.querySelector('h1').textContent = "🔥BOOOOM🔥";

console.log('Message destroyed!');

var message = "Hello from index!"; // var = keyword; assigning a value to the variable
console.log(this.message);
message = "Reassigned message variable";
console.log(this.message);

var number = 1;

var dunno = number + message;
console.log(dunno);

number += 10;
