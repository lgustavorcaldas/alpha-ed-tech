const teste = []

function reciver(...add){
    return teste.push(...add)
}

reciver([4,5],3,2,1,3,41,53,82,11,33,4,3,2,1,3,41,53,82,11,33)

console.log(teste)