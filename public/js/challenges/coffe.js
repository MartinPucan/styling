let yourDrink = "";

const reverse = function (s) {
	return s.split("").reverse().join("");
};

const barista = {
	str1: "ion",
	str2: reverse('rcne'),
	str3: "ypt",
	request: function (preference) {
		return preference + "Secret word: "
			+ this.str2 + this.str3 + this.str1;
	}
};

console.log(barista.request(''));
