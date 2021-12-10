// Variaveis
let cars ={     Pedro: [0],
                Juca: [0],
                Edna: [0]   }

let wins ={     Pedro: [0],
                Juca: [0],
                Edna: [0]   }

let rules ={       CarSS:{     velMax: [230, 210],
                                velMin: [160, 140],
                                der: [175, 100]     },

                    CarSp: {    velMax: [215, 195],
                                velMin: [145, 125],
                                der: [300, 200]     },

                    CarPop: {   velMax: [200, 180],
                                velMin: [130, 110],
                                der: [400, 300]     }   }

let carSS;
let carSp;
let carPop;
let demo;
let win;
let x = 0;

function randomCars(){
    carSS ={        velMax: (Math.floor(Math.random() * (rules.CarSS.velMax[0] - rules.CarSS.velMax[1] + 1) ) + rules.CarSS.velMax[1]),
                    velMin:  (Math.floor(Math.random() * (rules.CarSS.velMin[0] - rules.CarSS.velMin[1] + 1) ) + rules.CarSS.velMin[1]),
                    der: parseFloat((Math.floor(Math.random() * (rules.CarSS.der[0] - rules.CarSS.der[1] + 1) ) + rules.CarSS.der[1])/10000)       }
    
    carSp ={        velMax: (Math.floor(Math.random() * (rules.CarSp.velMax[0] - rules.CarSp.velMax[1] + 1) ) + rules.CarSp.velMax[1]),
                    velMin: (Math.floor(Math.random() * (rules.CarSp.velMin[0] - rules.CarSp.velMin[1] + 1) ) + rules.CarSp.velMin[1]),
                    der: parseFloat((Math.floor(Math.random() * (rules.CarSp.der[0] - rules.CarSp.der[1] + 1) ) + rules.CarSp.der[1])/10000)                 }

    carPop ={       velMax: (Math.floor(Math.random() * (rules.CarPop.velMax[0] - rules.CarPop.velMax[1] + 1) ) + rules.CarPop.velMax[1]),
                    velMin: (Math.floor(Math.random() * (rules.CarPop.velMin[0] - rules.CarPop.velMin[1] + 1) ) + rules.CarPop.velMin[1]),
                    der: parseFloat((Math.floor(Math.random() * (rules.CarPop.der[0] - rules.CarPop.der[1] + 1) ) + rules.CarPop.der[1])/10000)           }
}

function rollCar(){
    let rolls = {       Pedro: Math.floor((Math.random() * 20)+1),
                        Juca: Math.floor((Math.random() * 20)+1),
                        Edna: Math.floor((Math.random() * 20)+1)     }

    if(rolls.Pedro == 20){
        cars.Pedro = (Math.floor(Math.random() * (carSS.velMax - carSS.velMin + 1) ) + carSS.velMin);
        cars.Pedro = (cars.Pedro - (cars.Pedro * carSS.der));
    } else if(rolls.Pedro >= 13 && rolls.Pedro <= 19 ){
        cars.Pedro = (Math.floor(Math.random() * (carSp.velMax - carSp.velMin + 1) ) + carSp.velMin);
        cars.Pedro = (cars.Pedro - (cars.Pedro * carSp.der));
    } else{
        cars.Pedro = (Math.floor(Math.random() * (carPop.velMax - carPop.velMin + 1) ) + carPop.velMin);
        cars.Pedro = (cars.Pedro - (cars.Pedro * carPop.der));
    }

    if(rolls.Juca == 20){
        cars.Juca = (Math.floor(Math.random() * (carSS.velMax - carSS.velMin + 1) ) + carSS.velMin);
        cars.Juca = (cars.Juca - (cars.Juca * carSS.der));
    } else if(rolls.Juca >= 13 && rolls.Juca <= 19 ){
        cars.Juca = (Math.floor(Math.random() * (carSp.velMax - carSp.velMin + 1) ) + carSp.velMin);
        cars.Juca = (cars.Juca - (cars.Juca * carSp.der));
    } else{
        cars.Juca = (Math.floor(Math.random() * (carPop.velMax - carPop.velMin + 1) ) + carPop.velMin);
        cars.Juca = (cars.Juca - (cars.Juca * carPop.der));
    }

    if(rolls.Edna == 20){
        cars.Edna = (Math.floor(Math.random() * (carSS.velMax - carSS.velMin + 1) ) + carSS.velMin);
        cars.Edna = (cars.Edna - (cars.Edna * carSS.der));
    } else if(rolls.Edna >= 13 && rolls.Edna <= 19 ){
        cars.Edna = (Math.floor(Math.random() * (carSp.velMax - carSp.velMin + 1) ) + carSp.velMin);
        cars.Edna = (cars.Edna - (cars.Edna * carSp.der));
    } else{
        cars.Edna = (Math.floor(Math.random() * (carPop.velMax - carPop.velMin + 1) ) + carPop.velMin);
        cars.Edna = (cars.Edna - (cars.Edna * carPop.der));
    }
}
function btnRuns(runs){
    if(x != 0){
        document.getElementById(demo).style.marginLeft = "50px";
        document.getElementById(win).innerHTML = "";
    }
    x++

    rollCar()

    for (var i = 0; i < runs; i++){

        if(cars.Pedro > cars.Juca && cars.Pedro > cars.Edna){
            wins.Pedro++
        } else if(cars.Juca > cars.Pedro && cars.Juca > cars.Edna){
            wins.Juca++
        } else if(cars.Edna > cars.Pedro && cars.Edna > cars.Juca){
            wins.Edna++
        } else{
            runs++
        }
        
        if(i == runs -1){
            if(wins.Pedro == wins.Juca && wins.Pedro > wins.Edna){
                runs++
            } else if(wins.Pedro == wins.Edna && wins.Pedro > wins.Juca){
                runs++
            } else if(wins.Juca == wins.Edna && wins.Juca > wins.Pedro){
                runs++
            } else if(wins.Pedro == wins.Juca && wins.Juca == wins.Edna){
                runs++
            }
        }
    }
    
    let resultone = ( wins.Pedro+wins.Juca + Math.abs(wins.Juca-wins.Pedro) )/2
    let resulttwo = ( resultone+wins.Edna + Math.abs(wins.Edna-resultone) )/2

    if(resulttwo == wins.Pedro){
        demo = "carPedro"
        win = "winPedro"
    } else if(resulttwo == wins.Juca){
        demo = "carJuca"
        win = "winJuca"
    } else{
        demo = "carEdna"
        win = "winEdna"
    }
    document.getElementById(demo).style.marginLeft = "450px";
    document.getElementById(win).innerHTML = "GANHADOR!";

    wins.Pedro = 0;
    wins.Juca = 0;
    wins.Edna = 0;
}