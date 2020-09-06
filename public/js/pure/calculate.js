window.onload = function() {
	let button = document.getElementById("button");
	let number1 = document.getElementById("number1");
	let number2 = document.getElementById("number2");

	button.onclick = function() {
		alert(parseInt(number1.value) + parseInt(number2.value));
	};
}

document.addEventListener('keyup', function (event) {
	if (event.defaultPrevented) {
		return;
	}

	const key = event.key || event.keyCode;

	if (key === 'Enter' || key === 13) {
		document.getElementById("calculator").click();
	}
});
