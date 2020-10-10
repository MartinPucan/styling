const changeBackground = (className) => {
	const select = document.querySelectorAll(className);
	const length = select.length;
	for (let i = 0; i < length; i++) {
		select[i].style.background = 'black';
		select[i].style.color = 'white';
	}
}

const choose = prompt('Which element you want to choose?');

changeBackground(choose);
