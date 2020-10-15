(() => {
	const dataSelect = {
		mainItems: [
			{
				id: 1,
				item: "Composer",
				firstLevelItems: [
					{
						id: 1,
						item: "Film"
					}
				]
			},
			{
				id: 2,
				item: "Composer"
			},
			{
				id: 3,
				item: "Composer"
			}
		]
	}

	const ul = document.createElement("ul");
	ul.setAttribute("id", "mainCategory");


	const renderSelectList = (element, index) => {

		const li = document.createElement("li");

		li.setAttribute("class", "list-group-item");
		li.setAttribute("id", index);
		ul.appendChild(li);

		li.innerHTML = `${element}()`;
	};

	document.getElementById("selectList").appendChild(ul);
	dataSelect.forEach(renderSelectList());
})();
