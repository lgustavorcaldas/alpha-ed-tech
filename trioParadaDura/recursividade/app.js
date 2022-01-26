const superObj = 
{
    no1: {
        filho1: {
        nome: "Filho",
        idade: 31,
        carros: {
            carro1: "Focus",
            carro2: "Silverado"
        }
        },  
        filho2: {
        nome: "Filho 2",
        idade: 27
        },
    },  
    no2: {
        filho1: {
        nome: "Filho 1 do nó 2",
        idade: 30
        },
        filho2: {
        nome: "Filho 2 do nó 2",
        idade: 29
        },
        filho3: {
        nome: "Filho 3 do nó 2",
        idade: 26
        }
    }
};


function mostraTodoObj(obj) {

    for (let key in obj) {
        if (typeof obj[key] === "object") {
        console.log("----" + key + "----");
        mostraTodoObj(obj[key]);
        } else {
        console.log(`${key} -> ${obj[key]}`);
        }
    }
}

mostraTodoObj(superObj);