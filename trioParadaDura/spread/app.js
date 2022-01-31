// Exercicio a
const arr = [1,2,3,4]

function produtoDosParametros(x,y,z,k){

    return console.log(x*y*z*k);
}

produtoDosParametros(...arr)

// Exercicio b
const arr1 = ["Luiz", "Gustao"]
const arr2 = ["Ribeiro", "Caldas", "da","Silva"]

const nomeCompleto = []

function contatenacao (vetor, vetor2){
    nomeCompleto.push(...vetor)
    nomeCompleto.push(...vetor2)

    return console.log(...nomeCompleto);
}

contatenacao(arr1,arr2)

// Exercicio c
const arr3 = []

function sorteioDeNumero(){
    while(arr3.length < 10) arr3.push(Math.floor(Math.random() * (100 - 1 + 1 ) +1))

    return console.log(Math.max(...arr3));
}

sorteioDeNumero()