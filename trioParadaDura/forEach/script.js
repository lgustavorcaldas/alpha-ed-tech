//Variáveis//
let speedMin = 0
let speedMax = 0
let car = {
  velMinima: [0, 0],
  velMaxima: [0, 0],
  txDerrapagem: [0, 0],
}
//Config dos carrinhos//
const cars = {  
    popular:{
        velMinima: [110, 130],
        velMaxima: [180, 200],
        txDerrapagem: [0.03, 0.04]
    },
    sport:{
        velMinima: [125, 145],
        velMaxima: [195, 215],
        txDerrapagem: [0.02, 0.03]
    },
      supersport:{
        velMinima: [140, 160],
        velMaxima: [210, 230],
        txDerrapagem: [0.01, 0.175]
    }
}

let pilotos =[
        Pedro={
            pnts: 0,
            lvl: 10,
            voltas: 0,
            velocidadeFinal: 0,
            vel: [0,0],
            der: [0]
        },
        Juca={
            pnts: 0,
            lvl: 10,
            voltas: 0,
            velocidadeFinal: 0,
            vel: [0,0],
            der: [0]
        },
        Edna={
            pnts: 0,
            lvl: 10,
            voltas: 0,
            velocidadeFinal: 0,
            vel: [0,0],
            der: [0]
        }
]
//Função parar gerar média aleatoria de velocidades/
function randomizeCar(min, max) {
  return Math.random() * (max - min + 1) + min;
}
//Gera o carro do TODOS//
function makeCars(j) {

    let cartype;

    let chance = randomizeCar(0, 100);

    if (chance < 60) {
        cartype = "Popular" 
    } else if (chance < 95) {
        cartype = "Sport"
    } else if (chance >= 96) {
        cartype = "Super Sport"
    }

    if (cartype == "Popular") {
    pilotos[j].vel[0] = parseFloat(randomizeCar(cars.popular.velMinima[0], cars.popular.velMinima[1]))
    pilotos[j].vel[1]  = parseFloat(randomizeCar(cars.popular.velMaxima[0], cars.popular.velMaxima[1]))
    pilotos[j].der[0]  = parseFloat(randomizeCar(cars.popular.txDerrapagem[0], cars.popular.txDerrapagem[1]))
    } else if (cartype == "Sport") {
    pilotos[j].vel[0]  = parseFloat(randomizeCar(cars.sport.velMinima[0], cars.sport.velMinima[1]))
    pilotos[j].vel[1] = parseFloat(randomizeCar(cars.sport.velMaxima[0], cars.sport.velMaxima[1]))
    pilotos[j].der[0] = parseFloat(randomizeCar(cars.sport.txDerrapagem[0], cars.sport.txDerrapagem[1]))
    } else if (cartype == "Super Sport") {
    pilotos[j].vel[0]  = parseFloat(randomizeCar(cars.supersport.velMinima[0], cars.supersport.velMinima[1]))
    pilotos[j].vel[1] = parseFloat(randomizeCar(cars.supersport.velMaxima[0], cars.supersport.velMaxima[1]))
    pilotos[j].der[0] = parseFloat(randomizeCar(cars.supersport.txDerrapagem[0], cars.supersport.txDerrapagem[1]))
    }

}

function lvlUp(item, indice){
    pilotos[0].vel[indice] = item + parseFloat((item * pilotos[0].lvl) / 100)
    pilotos[1].vel[indice] = item + parseFloat((item * pilotos[1].lvl) / 100)
    pilotos[2].vel[indice] = item + parseFloat((item * pilotos[2].lvl) / 100)
    return true
}

function corridaButton(numeroVoltas) {
    let arr = [0,0,0]
    if(numeroVoltas == 10){
        arr = [200,120,50]
    } else if(numeroVoltas == 70) {
       arr =[220, 130, 75] 
    }else{
        arr = [250,150,90]
    }

    for(let j = 0; j < 3; j++){
        if(pilotos[j].pnts >= 450 && pilotos[j].lvl <= 10) {
            pilotos[j].pnts -= 450
            pilotos[j].lvl++
        }
    }
  //Número de Voltas//
    for (let i = 0; i < numeroVoltas; i++) {
        // Gerar carro para cada piloto//
        for(let j = 0; j < 3; j++){
            makeCars(j)

            pilotos[j].vel.forEach(lvlUp)

            pilotos[j].velocidadeFinal = parseFloat(randomizeCar(pilotos[j].vel[0], pilotos[j].vel[1]));
            pilotos[j].velocidadeFinal -= (pilotos[j].velocidadeFinal * pilotos[j].der[0])
        }
        //Contador de voltas vencidas//
        if (pilotos[0].velocidadeFinal > pilotos[1].velocidadeFinal && pilotos[0].velocidadeFinal > pilotos[2].velocidadeFinal) {
            pilotos[0].voltas ++

        } else if (pilotos[1].velocidadeFinal > pilotos[0].velocidadeFinal && pilotos[1].velocidadeFinal > pilotos[2].velocidadeFinal) {
            pilotos[1].voltas ++

        } else if (pilotos[2].velocidadeFinal > pilotos[0].velocidadeFinal && pilotos[2].velocidadeFinal > pilotos[1].velocidadeFinal) {
            pilotos[2].voltas ++
        }
        //Contador de Vítorias/Empates//
        if(numeroVoltas == (i + 1)){
            if (pilotos[0].voltas == pilotos[1].voltas && pilotos[0].voltas == pilotos[2].voltas) {
                numeroVoltas ++
            } else if (pilotos[0].voltas == pilotos[1].voltas && pilotos[0].voltas > pilotos[2].voltas) {
                numeroVoltas ++
            } else if (pilotos[0].voltas == pilotos[2].voltas && pilotos[0].voltas > pilotos[1].voltas) {
                numeroVoltas ++
            } else if (pilotos[0].voltas > pilotos[1].voltas && pilotos[0].voltas > pilotos[2].voltas){
                if(pilotos[1].voltas > pilotos[2].voltas){
                    pilotos[0].pnts += arr[0]
                    pilotos[1].pnts += arr[1]
                    pilotos[2].pnts += arr[2]
                } else{
                    pilotos[0].pnts += arr[0]
                    pilotos[2].pnts += arr[1]
                    pilotos[1].pnts += arr[2]
                }
            } else if (pilotos[1].voltas > pilotos[0].voltas && pilotos[1].voltas > pilotos[2].voltas) {
                if(pilotos[0].voltas > pilotos[2].voltas){
                    pilotos[1].pnts += arr[0]
                    pilotos[0].pnts += arr[1]
                    pilotos[2].pnts += arr[2]
                } else{
                    pilotos[1].pnts += arr[0]
                    pilotos[2].pnts += arr[1]
                    pilotos[0].pnts += arr[2]
                }
            } else if (pilotos[2].voltas > pilotos[0].voltas && pilotos[2].voltas > pilotos[1].voltas) {
                if(pilotos[1].voltas > pilotos[0].voltas){
                    pilotos[2].pnts += arr[0]
                    pilotos[1].pnts += arr[1]
                    pilotos[0].pnts += arr[2]
                } else{
                    pilotos[2].pnts += arr[0]
                    pilotos[0].pnts += arr[1]
                    pilotos[1].pnts += arr[2]
                }
            }
        }
    }
  pilotos[0].voltas = +0
  pilotos[1].voltas = +0
  pilotos[2].voltas = +0
  return true
}

corridaButton(10)