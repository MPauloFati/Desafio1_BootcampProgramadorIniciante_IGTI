var carros = ['Gol', 'Palio', 'Uno', 'Lancer'];
var carro = carros.pop();
// POP remove o último elemento do array
// console.log(carros);
// console.log(carros[carros.length - 1]);
// console.log(carro);

// SHIFT remove o primeiro elemento do array
carro = carros.shift();
// console.log(carros);

// UNSHIFT add um elemento no início do array
carro = carros.unshift("Eclipse");
//console.log(carros);

// ARRAY[NUM] substitui o respectivo elemento
carros[1] = "Camry";
//console.log(carros);

// DELETE remove o respectivo elemento deixando "undefined" no lugar
// delete carros[1];
// console.log(carros);

// SPLICE --> primeiro parametro: posicao inicial
//            segundo parametro: quantos elentos serao removidos a partir da posicao inicial
//            terceito parametro: elementos que serap inseridos no array a partir da posicao inicial
carros.splice(2, 0, "GT-R", "GT");
//console.log(carros);

// CONCAT concatena arrays e retorna um novo array
var carrosHyper = ["Agera", "Aventador", "Sallen"]
var todosCarros = carros.concat(carrosHyper);
//console.log(todosCarros);

// SLICE --> primeiro parametro: remove o elemento do array indicado no parametro
//           segundo parametro: elimina o restante do array a partir dele proprio
var novoArray = todosCarros.slice(1);
//console.log(novoArray);
var novoArray2 = todosCarros.slice(2, 4);
//console.log(novoArray2);
