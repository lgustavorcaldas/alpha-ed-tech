function createMutiplier(){
    return function(x){
        return x * 5
    }
}

const multiplyBy5 = createMutiplier()

console.log(multiplyBy5(5))