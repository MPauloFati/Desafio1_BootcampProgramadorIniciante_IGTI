var fs = require("fs")
var nomeArquivo = "carros.json"
var carros = ["Agera", "Aventador", "Sallen", "911"]
var concessionaria = {
    nome: "Concessionaria XYZ",
    carros
}
fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function(err) {
    if (err) {
        console.log(err)
    }
    else {
        fs.readFile(nomeArquivo, "utf-8", function(err, data) {
            if (err) {
                console.log(err)
            }
            else {
                var obj = JSON.parse(data)
                obj.carros.push("Supra")
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
    }
})