var fs = require("fs");

console.log("1");
var nomeArquivo = "meuArquivo.txt"
fs.writeFile(nomeArquivo, "um texto qualquer", function(err) {
    if(err !== null) {
        console.log(err)
    }
    else {
        fs.appendFile(nomeArquivo, "\nnova linha do texto", function(err) {
            if (err) {
                console.log(err)
            }
            else {
                fs.readFile(nomeArquivo, "utf-8", function(err, data) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(data)
                    }
                })
            }
        })
    }
})
            