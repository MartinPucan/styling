$(function() {
	$("#tlacitko").mouseenter(function() {
		const cislo1 = $("#cislo1").val();
		const cislo2 = $("#cislo2").val();
		const vysledek = parseInt(cislo1) + parseInt(cislo2);

		if (!isNaN(vysledek)) {
			return alert(vysledek);
		}
	});
});

window.onload = function() {
	let tlacitko = document.getElementById("tlacitko");
	let cislo1 = document.getElementById("cislo1");
	let cislo2 = document.getElementById("cislo2");

	tlacitko.onclick = function() {
		alert(parseInt(cislo1.value) + parseInt(cislo2.value));
	};
}
