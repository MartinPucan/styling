(() => {
	const ul = document.createElement('ul');
	ul.setAttribute('id','arrayMethods');

	const arrayMethods = [ 'from()', 'isArray()', 'of()', 'concat()', 'copyWithin()', 'entries()', 'every()', 'fill()', 'filter()', 'find()', 'findIndex()', 'flat()', 'flatMap()', 'foreach()', 'includes()', 'indexOf()', 'join()', 'keys()', 'lastIndexOf()', 'map()', 'pop()', 'push()', 'reduce()', 'reverse()', 'shift()', 'slice()', 'some()', 'sort()', 'splice()', 'toLocaleString()', 'toString()', 'unShift()', 'values()'];

	const renderProductList = (element, index) => {
		const li = document.createElement('li');

		li.setAttribute('class', 'list-group-item');
		li.setAttribute('id', index);
		ul.appendChild(li);

		li.innerHTML = li.innerHTML + element;
	}

	document.getElementById('arrayMethodsList').appendChild(ul);
	arrayMethods.forEach(renderProductList);

})();

