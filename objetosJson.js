var pessoa = {
    nome: "Jão",
    idade: 40,
    telefone: "11 983024038",
    temCarro : true,
    animaisDeEstimacao: ["Huxley", "Orwell", "Nietzche"],
    autores: {
        nome: "Huxley",
        fodometro: 10.1,
    }
}

//console.log(pessoa.animaisDeEstimacao)
//pessoa.animaisDeEstimacao.push("Kafka")
//pessoa.nome = pessoa.nome + ", Você é um"
//pessoa.nome += ", Você é um"
//console.log(pessoa)

pessoa.autora = {
    nome: "Atwood",
    fodometro: 9.8,
}

console.log(JSON.stringify(pessoa))



/*salvarDadosPessoa(pessoa)
function salvarDadosPessoa(pessoa) {
    console.log(pessoa)
}*/

