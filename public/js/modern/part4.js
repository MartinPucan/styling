function calculateAge(age) {
	return 2020 - age;
}

function retirement() {
	const year = calculateAge(60);

	return console.log(year > 1920 ? "true" : "false");
}
