const reverse = function (yourDrink) {
	return yourDrink.split("").reverse().join("");
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

console.log("If you can make this clear, then you have a free drink", barista.request(''));

const array = ['aaa', 'bbb', 'ccc'];

function bind(pole, index) {
	console.log(this.pole + 1)
}

bind(array);
