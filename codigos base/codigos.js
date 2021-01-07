
function verificarnum() {
    var num = document.getElementById('val').value;
    if (num != "") {
        var val = !isNaN(num);
        if (val == false) {
            window.alert("valor invalido");
            var del = num.slice(0, -1);
            document.getElementById('val').value = del;
        }
    }
}
function verificarnum2() {
    var num = document.getElementById('contr').value;
    if (num != "") {
        var val = !isNaN(num);
        if (val == false) {
            window.alert("valor invalido");
            var del = num.slice(0, -1);
            document.getElementById('contr').value = del;
        }
    }
}
function calcular() {
    var juro = document.getElementById('juro').value;
    var anos = document.getElementById('year').value;
    var valjuro = document.getElementById('valjuro').value;
    var num = parseFloat(document.getElementById('val').value);
    switch (juro) {
        case "composto":
            var valjuros = num;
            for (i = 0; i < anos; i++) {
                valjuros = valjuros + (valjuros * (valjuro / 100));
            }
            valjuros = parseFloat(valjuros.toFixed(2));
            document.getElementById("resultado").innerHTML = valjuros;
            break;
        case "simples":
            var valjuros = num;
            for (i = 0; i < anos; i++) {
                valjuros = valjuros + (num * (valjuro / 100));
            }
            valjuros = parseFloat(valjuros.toFixed(2));
            document.getElementById("resultado").innerHTML = valjuros;
            break;
    }
}
function calcularinvest() {
    var num = parseFloat(document.getElementById('valinvest').value);
    var juro = document.getElementById('juro_1').value;
    var valjuro = document.getElementById('valjuro_1').value;
    var anos = document.getElementById('year_1').value;
    switch (juro) {
        case "composto":
            var valjuros = (num / Math.pow((1 + (valjuro / 100)), anos));
            valjuros = parseFloat(valjuros.toFixed(2));
            document.getElementById("resultado_1").innerHTML = valjuros;
            break;
        case "simples":
            var valjuros = num / (1 + ((valjuro / 100) * anos));
            valjuros = parseFloat(valjuros.toFixed(2));
            document.getElementById("resultado_1").innerHTML = valjuros;
            break;
    }
}
function calcular2() {
    var num = parseInt(document.getElementById('val1').value);
    var contr = document.getElementById('contr').value;
    var juro = document.getElementById('juro1').value;
    var valjuro = document.getElementById('valjuro1').value;
    var anos = document.getElementById('year1').value;
    var valmensal = (contr * 12);
    switch (juro) {
        case "composto":
            var valjuros = num;
            for (i = 0; i < anos; i++) {
                valjuros = valjuros + ((valjuros + valmensal) * (valjuro / 100));
            }
            valjuros = parseFloat(valjuros.toFixed(2));
            document.getElementById("resultado1").innerHTML = valjuros;
            break;
        case "simples":
            var valjuros = num;
            for (i = 0; i < anos; i++) {
                valjuros = valjuros + ((num + valmensal) * (valjuro / 100));
            }
            valjuros = parseFloat(valjuros.toFixed(2));
            document.getElementById("resultado1").innerHTML = valjuros;
            break;
    }
}