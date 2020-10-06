var clear = 22
var axe = 22
var gillete = 13
var pasta = 8

if (clear != axe) {
    console.log("cocô");
} else {
    console.log("xixi");
}

var fruta = "mamão";
var frutaValor = 0;
if (fruta === "banana") {
    frutaValor = 4;
}  else if (fruta === "maça") {
    frutaValor = 8;
}  else if (fruta === "abacaxi") {
    frutaValor = 4;
}  else if (fruta === "melancia") {
    frutaValor = 15;
}  else if (fruta === "mamão") {
    frutaValor = 6;
}  else {
    frutaValor = 10;
}


switch(fruta) {
    case "banana":
        frutaValor = 4;
        break;
    case "maça":
        frutaValor = 8;
        break;
    case "abacaxi":
        frutaValor = 4;
        break;
    case "melancia":
        frutaValor = 15;
        break;
    case "mamão":
        frutaValor = 6;
        break;
    default:
        frutaValor = 10;
}
console.log("Preço: " + frutaValor);