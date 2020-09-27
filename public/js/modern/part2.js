(async () => {

	let response = await fetch('https://jsonplaceholder.typicode.com/users');
	let users = await response.json();

	let { email, address } = users;



	console.log(users);

	if (address === undefined) {
		console.log("That's right");
	}
	console.log( address, email);

})();


