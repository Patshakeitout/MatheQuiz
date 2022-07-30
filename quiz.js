"use strict";
function weiter() {
    if (frage(spielstand)) {
        spielstand++;
        let hervorheben = "feld" + (spielstand-1);
        document.getElementById(hervorheben).style.background = "white";
        
        if (spielstand == 10) {
            alert(decodeURI("Herzlichen Gl%C3%BCckwunsch, Du hast gewonnen!"));
            spielstand = 1;
        }
        hevorheben = "feld" + spielstand;
        document.getElementById(hervorheben).style.background = "red";
        localStorage.setItem("spielstand",spielstand);
    }
}

function neu() {
    let hervorheben = "feld" + spielstand;
    document.getElementById(hervorheben).style.background = "white";
    spielstand = 1;
    hevorheben = "feld" + spielstand;
    document.getElementById(hervorheben).style.background = "red";
    localStorage.setItem("spielstand",spielstand);
}

let spielstand;
if (localStorage.getItem("spielstand") == null) {
    spielstand = 1;
}
else {
    spielstand = localStorage.getItem("spielstand");
}

let hervorheben = "feld" + spielstand;
document.getElementById(hervorheben).style.background = "red";

naechsterZug.onclick = weiter;
neuesSpiel.onclick = neu;
