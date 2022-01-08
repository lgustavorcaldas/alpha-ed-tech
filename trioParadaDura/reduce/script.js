const groupArr = [
{"clientName": "Jorge","valor": 1000,"dataVenci": "15/04"},
{"clientName": "Jorge","valor": 5000,"dataVenci": "30/08"},
{"clientName": "Rogerio","valor": 3000,"dataVenci": "13/12"}
]

// const groupArrTituloPorclientName = groupArr.reduce((groupOfClients, currentClient, index) =>{
//     console.log(`Execução ~~~~~~ ${index}`);
//     console.log(groupOfClients);
//     console.log(currentClient);
// })

const groupArrTituloPorclientName = groupArr.reduce((groupOfClients, currentClient) =>{
    const clientName = currentClient.clientName

    // if(groupOfClients[clientName] == null) groupOfClients[clientName] = []
    // if(!groupOfClients[clientName]) groupOfClients[clientName] = []
    
    if(!groupOfClients[clientName]){
        groupOfClients[clientName] = []
    }
        
    groupOfClients[clientName].push(currentClient)

    return groupOfClients
}, {})


for( let key in groupArrTituloPorclientName){
    let somaTitulos = 0;

    console.log(key);

    groupArrTituloPorclientName[key].forEach(function(obj, index){
        // console.log(obj);
        somaTitulos += obj.valor

    });
    console.log(`Valor total dos Titulos ${somaTitulos}`);
}

// console.log(groupArrTituloPorclientName);