$(function () {
  $('#tlacitko').mouseenter(function () {
    const cislo1 = $('#cislo1').val();
    const cislo2 = $('#cislo2').val();
    const vysledek = parseInt(cislo1) + parseInt(cislo2);

    if (!isNaN(vysledek)) {
      return alert(vysledek);
    }
  });
});

window.onload = function () {
  const tlacitko = document.getElementById('tlacitko');
  const cislo1 = document.getElementById('cislo1');
  const cislo2 = document.getElementById('cislo2');

  tlacitko.onclick = function () {
    alert(parseInt(cislo1.value) + parseInt(cislo2.value));
  };
};
