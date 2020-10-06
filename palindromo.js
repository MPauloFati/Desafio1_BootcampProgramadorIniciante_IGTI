var palavra = "arara";
var palavraInvertida = "";

// for (var i = 0; i < palavra.length; i++) {
//     palavraInvertida = palavraInvertida + palavra[i];
// }

for (var i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
}

if (palavra === palavraInvertida) {
    console.log(palavra + " é um palindromo.")
} else {
    console.log(palavra + " não é um palindromo.")
}
