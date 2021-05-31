
// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];
// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];


var generateAvailability = (myTeam) => {
    for (var person of myTeam) {
        for (var i = 0; i < person.availability.length; i++) {
            Math.round(Math.random()) ? person.availability[i] = true : person.availability[i] = false;
        }
    }
}

var showSchedules = (myTeam) => {
    var availible = "";

    for (var person of myTeam) {
        console.log("Disponibilidad de " + person.name);
        for (var i = 0; i < person.availability.length; i++) {
            person.availability[i] ? availible = "Si" : availible = "No"
            console.log(WORK_HOURS[i] + ": " + availible);
        }
    }
}


var showFirstAllAvailibles = (myTeam) => {

    var cont = 0;
    var hueco = false;
    var y = 0;

    for (y = 0; y < myTeam[0].availability.length && hueco === false; y++) {
        if (myTeam[0].availability[y]) {
            cont = 0;
            for (var i = 1; i < myTeam.length; i++) {
                if (myTeam[i].availability[y]) cont++;
            }
            cont === myTeam.length - 1 ? hueco = true : hueco = false;
        }
    }

    if (y === myTeam[0].availability.length) {
        console.log("************************");
        console.log("Lo siento. No hay hueco disponible en el equipo");
    } else {
        console.log("************************");        
        console.log("Hueco encontrado en el horario " + WORK_HOURS[y-1]);
    }

}

generateAvailability(myTeam);
showSchedules(myTeam);
showFirstAllAvailibles(myTeam);


const EUROS = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];


var showResult = () => {
    var salida="";
    var entrega = document.getElementById("entregado").value;
    var precio = document.getElementById("total").value; 
    var cambio = entrega - precio;

    document.getElementById("devolver").innerText = "Cambio: " + cambio + " €.";

    if(cambio < 0){
        document.getElementById("resultado").innerText = "Falta dinero para pagar la factura";
    }else if(cambio === 0){
        document.getElementById("resultado").innerText = "Ha entregado el dinero exacto, No hay devolución";
    }else{
    var contador=0;
    var aux=0;
    var terminacion="";

    while(cambio > 0 && contador < EUROS.length){
        aux=Math.floor(cambio/EUROS[contador]);
            if(aux > 0 && EUROS[contador] > 2){//billetes

            cambio = cambio - (aux * EUROS[contador]);
            cambio = cambio.toFixed(2);
            aux === 1 ? terminacion = " billete de " : terminacion = " billetes de ";
            salida += "\n- " + aux + "" + terminacion + EUROS[contador] + " euros."

        }else if(aux > 0 && EUROS[contador] >= 1){//euros
            cambio = cambio - (aux * EUROS[contador]);
            cambio = cambio.toFixed(2);
            aux === 1 ? terminacion = " moneda de " : terminacion = " monedas de ";
            salida += "\n- " + aux + "" + terminacion + EUROS[contador] + " euros."

        }else if(aux > 0){//centimos
            cambio = cambio - (aux * EUROS[contador]);
            cambio = cambio.toFixed(2);
            aux === 1 ? terminacion = " moneda de " : terminacion = " moneda de ";
            salida += "\n- " + aux + "" + terminacion + EUROS[contador] + " centimos."
        }
        contador++;
    }
        document.getElementById("resultado").innerText = salida;
    }
    
}

document.getElementById("calcular").addEventListener("click", showResult);



