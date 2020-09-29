const firstName = "Martin";
const age = "22";

console.log("Jmenuji se", firstName, "a je mi", age);

confirm("Opravdu jsi tady spravne?")
	? console.log("Welcome my friend")
	: console.log("vypadni");

const ageCheck = prompt("kolik je ti let?");
if( ageCheck > 17 ) {
	document.title = "Welcome";
} else {
	alert("Nemas tady co delat, vypadni!");
}
