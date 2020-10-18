(() => {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "arrayMethods");

  const arrayMethods = Object.getOwnPropertyNames(Array.prototype);

  const renderProductList = (element, index) => {
    if (element === "length") {
      return;
    }

    const li = document.createElement("li");

    Object.assign(li, {
    	className: 'list-group-item',
			id: index
		})
    ul.appendChild(li);

    li.innerHTML = `${element}()`;
  };

  document.getElementById("arrayMethodsList").appendChild(ul);
  arrayMethods.forEach(renderProductList);
})();
