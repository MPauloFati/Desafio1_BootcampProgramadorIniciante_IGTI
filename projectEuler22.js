/* Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file? */
// 1 - realizar a leitura do arquivo e armazenar em memoria
// 2 - ordenar em ordem alfabetica
// 3 - para cada nome, calcular seu SCORE
// 4 - somar todos os SCORES

var fs = require("fs")
fs.readFile("p022_names.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err)
    } 
    else {
        var nomes = data.split(",")
        nomes.sort()

        var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        var maiorScore = 0
        var nomeMaiorScore = ""
        var somaTotal = 0
        for(var i = 0; i < nomes.length; i++) {
            var nome = nomes[i]
            var soma = 0
            
            for (var j = 0; j < nome.length; j++) {
                var letra = nome[j]
                var valor = alfabeto.indexOf(letra)
                if (valor !== -1) {
                    soma += valor + 1
                }
            }

            var score = soma * (i + 1)
            somaTotal += score
            
            if (score > maiorScore) {
                maiorScore = score
                nomeMaiorScore = nome
            }
        }
        console.log(somaTotal)
        console.log(nomeMaiorScore + " " + maiorScore)

    }
        
})










/*
if (letra === "A") {
    soma = soma + 1;
} else if (letra === "B") {
    soma += 2;
} else if (letra === "C") {
    soma += 3;
}
//...
*/

/*
switch (letra) {
    case "A":
        soma += 1;
        break;
    case "B":
        soma += 2;
        break;
    case "C":
        soma += 3;
        break;
}
//...
*/