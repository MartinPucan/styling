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

	console.log(dataSelect	)

	// for ( let i = 0; i < )

	// var i = 0
	// document.writeln("<br><br><div align='center'><table border='1'><tr>");

	// for ( var i = 0; i < graph.sparkData.length; i++) {
	// 	var obj = graph.sparkData[i];
	// 	console.log(obj);
	// 	var crunchifyName;
	// 	var crunchifyValue;
	//
	// 	document.writeln("<td>");
	// 	document.writeln("<table border='0'  width=100 >");
	//
	// 	for ( var key in obj) {
	// 		crunchifyName = key;
	// 		crunchifyValue = obj[key].toString();
	// 		+document.writeln("<tr><td><B>" + crunchifyName
	// 			+ ":  </B></td><td width=50>" + crunchifyValue
	// 			+ "</td></tr>");
	// 		document.writeln("</table>");
	// 		document.writeln("</td>");
	//
	// 	}
	// }
	// document.writeln("</tr></table></div>");

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
})();
