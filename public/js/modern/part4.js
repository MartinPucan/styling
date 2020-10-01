function calculateAge(yearOfBirth) {
	return 2020 - yearOfBirth;
}

function leftToRetirement(age) {
	const currentAge = calculateAge(age);
	const retirementNumber = 65 - currentAge;

	if (retirementNumber > 0) {
		console.log(retirementNumber + " years left to retirement.")
	} else {
		console.log(Math.abs(retirementNumber) + " in retirement")
	}
}

const output = leftToRetirement(1950) + "";

document.write('p', output);
leftToRetirement(1920);
leftToRetirement(2000);
