function createMutiplier(){
    return function(x){
        return x * 5
    }
}

// Você precisa colocar a execução da função(no caso o return dela) para uma variavel
const multiplyBy5 = createMutiplier()

console.log(multiplyBy5(5))