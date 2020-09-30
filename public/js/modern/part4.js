function calculateAge(age) {
	return 2020 - age;
}

function retirement(year) {
	const number = calculateAge(year);
	const retirement = 65 - number;
	console.log("Amount years to retirement", retirement, " years.");
}

retirement(2001);
