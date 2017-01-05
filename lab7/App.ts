
const xkurseur = 9.55;

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

function calctoeuro() {

    var x = $(document.getElementById("sek")).val();
    var v3 = x / xkurseur;
    $(document.getElementById("eur")).val(v3);
}

function calctosek() {

    var x = $(document.getElementById("eur")).val();
    var v3 = x * xkurseur
    $(document.getElementById("sek")).val(v3);

}