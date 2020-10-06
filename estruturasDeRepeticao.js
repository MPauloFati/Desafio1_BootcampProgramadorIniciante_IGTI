for (var i = 0; i < 10; i++) {
    //console.log(i);
}

var carros = ["Gol", "Palio", "Uno", "Celta", "Sandeiro"];
for (var i = 0; i < carros.length; i++) {
    //console.log(carros[i]);
}

var i = 0;
while (i < carros.length) {
    //console.log(carros[i]);
    i++;
}

var j = 0;
do {
    j++;
    //console.log(j);
} while (j < 10);

for (var carro of carros) {
    console.log(carro)
}