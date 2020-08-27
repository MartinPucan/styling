$(document).ready(function() {
	$("#tlacitko").mouseenter(function() {
		const cislo1 = $("#cislo1").val();
		const cislo2 = $("#cislo2").val();
		const vysledek = parseInt(cislo1) + parseInt(cislo2);

		if (!isNaN(vysledek)) {
			return alert(vysledek);
		}
	});
});
