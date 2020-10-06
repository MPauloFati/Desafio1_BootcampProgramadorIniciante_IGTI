/* var num = 7

if (num % 2 === 0 && num !==2) {
    console.log("O número " + num + " não é primo!");
} else if (num % 7 === 0 && num !==7) {
    console.log("O número " + num + " não é primo!");
} else if (num % 5 === 0) {
    console.log("O número " + num + " não é primo!");
} else if ((num % 1 === 0) && (num % num === 0)) {
    console.log("O número " + num + " é primo!");
} else {
    console.log("O número " + num + " não é primo!");
}

*/
/*
var num = 957

if ((num % 2 === 0 && num !==2) || (num % 7 === 0 && num !==7) || (num % 5 === 0)) {
    console.log("O número " + num + " não é primo!");
} 
else if ((num % 1 === 0) && (num % num === 0)) {
    console.log("O número " + num + " é primo!");
} 
else {
    console.log("O número " + num + " não é primo!");
}
*/

/*var num = 961;
var numeroPrimo = true;

for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        numeroPrimo = false;
        break;
    }
}

if (numeroPrimo) {
    console.log("Numero " + num + " é primo.");
}
else {
    console.log("Numero " + num + " não é primo.")
}
*/

var num = parseInt(process.argv[2])
var numerosPrimos = []
for (var i = 2; i <= num; i++) {
    if (verificaNumPrimo(i)) {
        numerosPrimos.push(i)
    }
}
console.log(numerosPrimos)

function verificaNumPrimo(num) {
    var numeroPrimo = true
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            numeroPrimo = false;
            break
        }
    }
    return numeroPrimo
}