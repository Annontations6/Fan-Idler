let jeehanmoney = 0;
let jeehanmoneyclick = 1;
let cost1 =  100;
let cost2 = 1000;

document.getElementById('click').onclick = () => {
    jeehanmoney = jeehanmoney + jeehanmoneyclick;
    document.getElementById('jeehanmoney').innerText = "You Have " + jeehanmoney + " Jeehan Money.";
    if (jeehanmoney > 100) {
        document.getElementById('cost1').innerHTML = "<cost1 class=\u0022green\u0022>Cursor Cost:" + cost1 + " jeehan money"
    } else {
        document.getElementById('cost1').innerHTML = "<cost1 class=\u0022red\u0022>Cursor Cost:" + cost1 + " jeehan money"
    }
    if (jeehanmoney > 1000) {
        document.getElementById('cost2').innerHTML = "<cost2 class=\u0022green\u0022>Gradma Cost:" + cost2 + " jeehan money"
    } else {
        document.getElementById('cost2').innerHTML = "<cost2 class=\u0022red\u0022>Gradma Cost:" + cost2 + " jeehan money"
    }
}

document.getElementById('cost1').innerHTML = "<cost1 class=\u0022red\u0022>Cursor Cost:100 jeehan money</cost1>"
document.getElementById('cost2').innerHTML = "<cost2 class=\u0022red\u0022>Gradma Cost:1000 jeehan money</cost2>"

document.getElementById('cost1').onclick = () => {
    if (jeehanmoney > 100) {
        jeehanmoney = jeehanmoney - 100;
        jeehanmoneyclick = jeehanmoneyclick + 1;
        cost1 = cost1 * 1.3
        document.getElementById('jeehanmoney').innerHTML = "You Have " + jeehanmoney + " Jeehan Money."
    } else {
        alert("Need " + 100 - jeehanmoney + " Jeehan Money!")
    }
}

document.getElementById('cost2').onclick = () => {
    if (jeehanmoney > 1000) {
        jeehanmoney = jeehanmoney - 1000;
        jeehanmoneyclick = jeehanmoneyclick + 5;
        cost1 = cost1 * 1.4
        document.getElementById('jeehanmoney').innerHTML = "You Have " + jeehanmoney + " Jeehan Money."
    } else {
        alert("Need " + 1000 - jeehanmoney + " Jeehan Money!")
    }
}

function NameofCost(namenumber, hello) {
    if (hello == 1) {
        return "whT"
    }
    if (namenumber == 1) {
        return "Cursor"
    }
    if (namenumber == 2) {
        return "Gradma"
    }
    if (namenumber == 3) {
        return "Farm"
    }
    if (namenumber == 4) {
        return "Mine"
    }
    if (namenumber == 5) {
        return "Wizard Tower"
    }
    if (namenumber == 6) {
        return "Portal"
    }
} 

document.getElementById('1').innerHTML = NameofCost(1, 0)
document.getElementById('2').innerHTML = NameofCost(2, 0)
document.getElementById('3').innerHTML = NameofCost(3, 0)
document.getElementById('4').innerHTML = NameofCost(4, 0)
document.getElementById('5').innerHTML = NameofCost(5, 0)
document.getElementById('6').innerHTML = NameofCost(6, 0)