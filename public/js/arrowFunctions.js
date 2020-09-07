// const multiplyByTen = (num) => {
// 	return 10 * num;
// }

const printToTen = () => {
	for (let i = 0; i <= 10; i++) {
		const random = document.getElementById("demo").innerHTML = Math.floor(Math.random() * 100);
		console.log(random);
	}
}

printToTen();
