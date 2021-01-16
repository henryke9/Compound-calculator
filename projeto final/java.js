function printDiv(divID) {
    var divElements = document.getElementById(divID).innerHTML;
    //var oldPage = document.body.innerHTML;
    //document.body.innerHTML ="<html><head><title></title></head><body>" + divElements + "</body>";
    window.print();
    //document.body.innerHTML = oldPage;
}

function mostrar() {
    do {
        alert("mostrar");
        var pcontr = document.getElementById("pcontr_col_head").style.display;
        var contr = document.getElementById("contr_col_head").style.display;
        switch (contr) {
            case "none":
                coluna = "pcontr";
                break;
            default:
                coluna = "contr";
                break;
        }
        var all_col = document.getElementsByClassName(coluna+"_col");
        for(i=0 ; i< all_col.length; i++){
            all_col[i].style.display = "table-cell";
        }
        document.getElementById(coluna + "_col_head").style.display = "table-cell";
        document.getElementById(coluna + "_col").value = "hide";
    } while (pcontr != "table-cell" && contr != "table-cell");
}


function ocultar() {
    do {
        var pcontr = document.getElementById("pcontr_col_head").style.display;
        var contr = document.getElementById("contr_col_head").style.display;
        switch (contr) {
            case "none":
                coluna = "pcontr";
                break;
            default:
                coluna = "contr";
                break;
        }
        var all_col = document.getElementsByClassName(coluna + "_col");
        for (i = 0; i < all_col.length; i++) {
            all_col[i].style.display = "none";
        }
        document.getElementById(coluna + "_col_head").style.display = "none";
        //document.getElementById(coluna + "_col").value = "show";
    } while (pcontr != "none" && contr != "none");
}

function verificarnum(id) {
    //verifica se os valores introduzidos sao numericos ou "." 
    var num = document.getElementById(id).value;
    if (num != "") {
        var val = !isNaN(num);
        if (val == false) {
            window.alert("valor invalido");
            var del = num.slice(0, -1);
            document.getElementById(id).value = del;
        }
    }
    switch (id) {
        case "val":
        case "valjuro":
        case "year":
            calcular();
            ocultar();
            break;
        case "valinvest":
        case "valjuro_1":
        case "year_1":
            calcularinvest();
            for (i = 1; i > 0; i--) {
                ocultar();
            }
            break;
        case "val1":
        case "contr":
        case "valjuro1":
        case "year1":
            calcular2();
            
            break;
        case "val2":
        case "contr1":
        case "valjuro2":
        case "year2":
            break;
    }
}

function calcular() {
    // função para calcular valor futuro sem reforço 
    var juro = document.getElementById('juro').value;
    var anos = document.getElementById('year').value;
    var valjuro = document.getElementById('valjuro').value;
    var num = parseFloat(document.getElementById('val').value);
    var check = isNaN(num);
    if (anos != "" && valjuros != "" && check != true) {
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
    } else {
        document.getElementById("resultado").innerHTML = " ";
    }
}


function calcularinvest() {
    //função de calculo do valor inicial do investimento sem reforço
    var num = parseFloat(document.getElementById('valinvest').value);
    var juro = document.getElementById('juro_1').value;
    var valjuro = document.getElementById('valjuro_1').value;
    var anos = document.getElementById('year_1').value;
    var check = isNaN(num);
    if (anos != "" && valjuros != "" && check != true) {
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
    } else {
        document.getElementById("resultado").innerHTML = " ";
    }
}

var totalRowCount = 0;
function calcular2() {
    //função de calculo do valor futuro com reforço
    var num = parseFloat(document.getElementById('val1').value);
    var contr = document.getElementById('contr').value;
    var juro = document.getElementById('juro1').value;
    var valjuro = document.getElementById('valjuro1').value;
    var anos = document.getElementById('year1').value;
    var tipo = document.getElementById('tipcontr').value;
    var contar = document.getElementById("myTable").rows.length;
    var check = isNaN(num);
    var valmensal;
    alert(num);
    alert(contr);
    alert(juro);
    alert(valjuro);
    alert(anos);
    alert(tipo);
    switch (tipo) {
        case "semanal":
            valmensal = (contr * 4) * 12;
            break;
        case "mensal":
            valmensal = contr * 12;
            break;
        case "trimestral":
            valmensal = contr * 4;
            break;
        case "semestral":
            valmensal = contr * 2;
            break;
        case "anual":
            valmensal = contr;
            break;
    }
    if (contar > 1) {
        for (i = totalRowCount; i > 0; i--) {
            document.getElementById("myTable").deleteRow(i);
        }
    }
    if (anos != "" && valjuros != "" && contr != "" && check != true) {
        switch (juro) {
            case "composto":
                var valjuros = num;
                var taxjuros;
                for (i = 0; i < anos; i++) {
                    totalRowCount = i + 1;
                    taxjuros = ((valjuros + valmensal) * (valjuro / 100));
                    valjuros = valjuros + taxjuros;
                    var table = document.getElementById("myTable");
                    var row = table.insertRow(-1);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(1);
                    cell2.classList.add("Invest_col");
                    var cell3 = row.insertCell(2);
                    cell3.classList.add("tpjuro_col");
                    var cell4 = row.insertCell(3);
                    cell4.classList.add("tajuro_col");
                    var cell5 = row.insertCell(4);
                    cell5.classList.add("pcontr_col");
                    var cell6 = row.insertCell(5);
                    cell6.classList.add("contr_col");
                    var cell7 = row.insertCell(6);
                    cell7.classList.add("vjuro_col");
                    var cell8 = row.insertCell(7);
                    cell8.classList.add("vfinal_col");
                    cell1.innerHTML = totalRowCount;
                    cell2.innerHTML = valjuros.toFixed(2);
                    cell3.innerHTML = juro;
                    cell4.innerHTML = valjuro;
                    cell5.innerHTML = tipo;
                    cell6.innerHTML = valmensal;
                    cell7.innerHTML = taxjuros.toFixed(2);
                    cell8.innerHTML = valjuros.toFixed(2);
                }
                valjuros = parseFloat(valjuros.toFixed(2));
                document.getElementById("resultado1").innerHTML = valjuros;
                break;
            case "simples":
                var valjuros = num;
                var taxjuros;
                for (i = 0; i < anos; i++) {
                    totalRowCount = i + 1;
                    taxjuros = ((num + valmensal) * (valjuro / 100));
                    var table = document.getElementById("myTable");
                    var row = table.insertRow(-1);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(1);
                    cell2.classList.add("Invest_col");
                    var cell3 = row.insertCell(2);
                    cell3.classList.add("tpjuro_col");
                    var cell4 = row.insertCell(3);
                    cell4.classList.add("tajuro_col");
                    var cell5 = row.insertCell(4);
                    cell5.classList.add("pcontr_col");
                    var cell6 = row.insertCell(5);
                    cell6.classList.add("contr_col");
                    var cell7 = row.insertCell(6);
                    cell7.classList.add("vjuro_col");
                    var cell8 = row.insertCell(7);
                    cell8.classList.add("vfinal_col");
                    cell1.innerHTML = totalRowCount;
                    cell2.innerHTML = valjuros.toFixed(2);
                    cell3.innerHTML = juro;
                    cell4.innerHTML = valjuro;
                    cell5.innerHTML = tipo;
                    cell6.innerHTML = valmensal;
                    cell7.innerHTML = taxjuros.toFixed(2);
                    cell8.innerHTML = valjuros.toFixed(2);
                    valjuros = valjuros + taxjuros;
                }
                valjuros = parseFloat(valjuros.toFixed(2));
                document.getElementById("resultado1").innerHTML = valjuros;
                break;
        }
    } else {
        document.getElementById("resultado").innerHTML = " ";
    }
}