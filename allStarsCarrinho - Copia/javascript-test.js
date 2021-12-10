// Variaveis
let carSS;
let carSp;
let carPop;
let demo;
let win;
let points = [0, 0, 0];
let x = 0;
let wins ={
    Pedro: [0],
    Juca: [0],
    Edna: [0]
}

let cars ={     
    Pedro:{ 
        points: [0],
        Level: [0], 
        Vel: [0, 0],
        Der: [0],    
        Speed: [0] },

    Juca:{  
        points: [0],
        Level: [0], 
        Vel: [0, 0],
        Der: [0],    
        Speed: [0] },

    Edna:{  
        points: [0],
        Level: [0], 
        Vel: [0, 0],
        Der: [0],    
        Speed: [0] }
    }
    
document.getElementById("lvlPedro").innerHTML = cars.Pedro.points
document.getElementById("lvlJuca").innerHTML = cars.Juca.points
document.getElementById("lvlEdna").innerHTML = cars.Edna.points

let rules ={       
    CarSS:{     
            velMax: [230, 210],
            velMin: [160, 140],
            der: [175, 100]     },
                    
    CarSp:{   
            velMax: [215, 195],
            velMin: [145, 125],
            der: [300, 200]     },

    CarPop: {   
            velMax: [200, 180],
            velMin: [130, 110],
            der: [400, 300]     }       
}

function randomCars(){
    carSS ={        
            velMax: (Math.floor(Math.random() * (rules.CarSS.velMax[0] - rules.CarSS.velMax[1] + 1) ) + rules.CarSS.velMax[1]),
            velMin:  (Math.floor(Math.random() * (rules.CarSS.velMin[0] - rules.CarSS.velMin[1] + 1) ) + rules.CarSS.velMin[1]),
            der: parseFloat((Math.floor(Math.random() * (rules.CarSS.der[0] - rules.CarSS.der[1] + 1) ) + rules.CarSS.der[1])/10000)       }
    
    carSp ={        
            velMax: (Math.floor(Math.random() * (rules.CarSp.velMax[0] - rules.CarSp.velMax[1] + 1) ) + rules.CarSp.velMax[1]),
            velMin: (Math.floor(Math.random() * (rules.CarSp.velMin[0] - rules.CarSp.velMin[1] + 1) ) + rules.CarSp.velMin[1]),
            der: parseFloat((Math.floor(Math.random() * (rules.CarSp.der[0] - rules.CarSp.der[1] + 1) ) + rules.CarSp.der[1])/10000)                 }

    carPop ={       
            velMax: (Math.floor(Math.random() * (rules.CarPop.velMax[0] - rules.CarPop.velMax[1] + 1) ) + rules.CarPop.velMax[1]),
            velMin: (Math.floor(Math.random() * (rules.CarPop.velMin[0] - rules.CarPop.velMin[1] + 1) ) + rules.CarPop.velMin[1]),
            der: parseFloat((Math.floor(Math.random() * (rules.CarPop.der[0] - rules.CarPop.der[1] + 1) ) + rules.CarPop.der[1])/10000)           }
}

function rollCar(){
    let rolls ={       
                Pedro: Math.floor((Math.random() * 20)+1),
                Juca: Math.floor((Math.random() * 20)+1),
                Edna: Math.floor((Math.random() * 20)+1)     }
// Pedro
    if(cars.Pedro.points > 450){
        if(cars.Pedro.Level < 10){
                cars.Pedro.Level++;
                cars.Pedro.points = cars.Pedro.points - 450;
        }
    }
        if(rolls.Pedro == 20){
                randomCars()
                cars.Pedro.Vel[0] = carSS.velMax + (carSS.velMax * (cars.Pedro.Level/100));
                cars.Pedro.Vel[1] = carSS.velMin + (carSS.velMax * (cars.Pedro.Level/100));
                cars.Pedro.Der = carSS.der;
                
                cars.Pedro.Speed = parseFloat(Math.floor(Math.random() * (cars.Pedro.Vel[0] - cars.Pedro.Vel[1] + 1) ) + cars.Pedro.Vel[1]);
                cars.Pedro.Speed = parseFloat((cars.Pedro.Speed - (cars.Pedro.Speed * cars.Pedro.Der).toFixed(2)));
            } 
            else if(rolls.Pedro >= 13 && rolls.Pedro <= 19 ){    
                randomCars()     
                cars.Pedro.Vel[0] = carSp.velMax + (carSp.velMax * (cars.Pedro.Level/100));
                cars.Pedro.Vel[1] = carSp.velMin + (carSp.velMax * (cars.Pedro.Level/100));
                cars.Pedro.Der = carSp.der;
                
                cars.Pedro.Speed = parseFloat(Math.floor(Math.random() * (cars.Pedro.Vel[0] - cars.Pedro.Vel[1] + 1) ) + cars.Pedro.Vel[1]);
                cars.Pedro.Speed = parseFloat((cars.Pedro.Speed - (cars.Pedro.Speed * cars.Pedro.Der).toFixed(2)));
            } 
            else{
                randomCars()
                cars.Pedro.Vel[0] = carPop.velMax + (carPop.velMax * (cars.Pedro.Level/100));
                cars.Pedro.Vel[1] = carPop.velMin + (carPop.velMax * (cars.Pedro.Level/100));
                cars.Pedro.Der = carPop.der;
                
                cars.Pedro.Speed = parseFloat(Math.floor(Math.random() * (cars.Pedro.Vel[0] - cars.Pedro.Vel[1] + 1) ) + cars.Pedro.Vel[1]);
                cars.Pedro.Speed = parseFloat((cars.Pedro.Speed - (cars.Pedro.Speed * cars.Pedro.Der).toFixed(2)));
        }
// Juca
    if(cars.Juca.points > 450){
        if(cars.Juca.Level < 10){
                cars.Juca.Level++;
                cars.Juca.points = cars.Juca.points - 450;
        }
    }
        if(rolls.Juca == 20){
                randomCars()
                cars.Juca.Vel[0] = carSS.velMax + (carSS.velMax * (cars.Juca.Level/100));
                cars.Juca.Vel[1] = carSS.velMin + (carSS.velMax * (cars.Juca.Level/100));
                cars.Juca.Der = carSS.der;
                
                cars.Juca.Speed = parseFloat(Math.floor(Math.random() * (cars.Juca.Vel[0] - cars.Juca.Vel[1] + 1) ) + cars.Juca.Vel[1]);
                cars.Juca.Speed = parseFloat((cars.Juca.Speed - (cars.Juca.Speed * cars.Juca.Der).toFixed(2)));
            } 
            else if(rolls.Juca >= 13 && rolls.Juca <= 19 ){  
                randomCars()       
                cars.Juca.Vel[0] = carSp.velMax + (carSp.velMax * (cars.Juca.Level/100));
                cars.Juca.Vel[1] = carSp.velMin + (carSp.velMax * (cars.Juca.Level/100));
                cars.Juca.Der = carSp.der;
                
                cars.Juca.Speed = parseFloat(Math.floor(Math.random() * (cars.Juca.Vel[0] - cars.Juca.Vel[1] + 1) ) + cars.Juca.Vel[1]);
                cars.Juca.Speed = parseFloat((cars.Juca.Speed - (cars.Juca.Speed * cars.Juca.Der).toFixed(2)));
            } 
            else{
                randomCars()
                cars.Juca.Vel[0] = carPop.velMax + (carPop.velMax * (cars.Juca.Level/100));
                cars.Juca.Vel[1] = carPop.velMin + (carPop.velMax * (cars.Juca.Level/100));
                cars.Juca.Der = carPop.der;
                
                cars.Juca.Speed = parseFloat(Math.floor(Math.random() * (cars.Juca.Vel[0] - cars.Juca.Vel[1] + 1) ) + cars.Juca.Vel[1]);
                cars.Juca.Speed = parseFloat((cars.Juca.Speed - (cars.Juca.Speed * cars.Juca.Der).toFixed(2)));
        }
// Edna
    if(cars.Edna.points > 450){
        if(cars.Edna.Level < 10){
                cars.Edna.Level++;
                cars.Edna.points = cars.Edna.points - 450;
        }
    }
    if(rolls.Edna == 20){
            randomCars()
            cars.Edna.Vel[0] = carSS.velMax + (carSS.velMax * (cars.Edna.Level/100));
            cars.Edna.Vel[1] = carSS.velMin + (carSS.velMax * (cars.Edna.Level/100));
            cars.Edna.Der = carSS.der;
            
            cars.Edna.Speed = parseFloat(Math.floor(Math.random() * (cars.Edna.Vel[0] - cars.Edna.Vel[1] + 1) ) + cars.Edna.Vel[1]);
            cars.Edna.Speed = parseFloat((cars.Edna.Speed - (cars.Edna.Speed * cars.Edna.Der).toFixed(2)));
        } 
        else if(rolls.Edna >= 13 && rolls.Edna <= 19 ){  
            randomCars()       
            cars.Edna.Vel[0] = carSp.velMax + (carSp.velMax * (cars.Edna.Level/100));
            cars.Edna.Vel[1] = carSp.velMin + (carSp.velMax * (cars.Edna.Level/100));
            cars.Edna.Der = carSp.der;
            
            cars.Edna.Speed = parseFloat(Math.floor(Math.random() * (cars.Edna.Vel[0] - cars.Edna.Vel[1] + 1) ) + cars.Edna.Vel[1]);
            cars.Edna.Speed = parseFloat((cars.Edna.Speed - (cars.Edna.Speed * cars.Edna.Der).toFixed(2)));
        } 
        else{
            randomCars()
            cars.Edna.Vel[0] = carPop.velMax + (carPop.velMax * (cars.Edna.Level/100));
            cars.Edna.Vel[1] = carPop.velMin + (carPop.velMax * (cars.Edna.Level/100));
            cars.Edna.Der = carPop.der;
            
            cars.Edna.Speed = parseFloat(Math.floor(Math.random() * (cars.Edna.Vel[0] - cars.Edna.Vel[1] + 1) ) + cars.Edna.Vel[1]);
            cars.Edna.Speed = parseFloat((cars.Edna.Speed - (cars.Edna.Speed * cars.Edna.Der).toFixed(2)));
    }
}
function btnRuns(runs){
    if(runs == 10){
            points[0] = 20
            points[1] = 12
            points[2] = 5
        } else if(runs == 70){
            points[0] = 22
            points[1] = 13
            points[2] = 75
        } else if(runs == 160){
            points[0] = 25
            points[1] = 15
            points[2] = 9
    }

    if(x != 0){
        document.getElementById(demo).style.marginLeft = "50px";
        document.getElementById(win).innerHTML = "";
    }
    x++
    
    for (var i = 0; i < runs; i++){    
        rollCar()

        if(cars.Pedro.Speed > cars.Juca.Speed && cars.Pedro.Speed > cars.Edna.Speed){
            wins.Pedro++
            } else if(cars.Juca.Speed > cars.Pedro.Speed && cars.Juca.Speed > cars.Edna.Speed){
                wins.Juca++
            } else if(cars.Edna.Speed > cars.Pedro.Speed && cars.Edna.Speed > cars.Juca.Speed){
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
    console.log(wins.Pedro + " " + wins.Juca + " " + wins.Edna)

    let aux = parseFloat((wins.Pedro+wins.Juca + Math.abs(wins.Juca-wins.Pedro))/2)
    let aux2 = parseFloat((aux+wins.Edna + Math.abs(wins.Edna-aux))/2)

    if(wins.Pedro == aux2){
        demo = "carPedro"
        win = "winPedro"
        document.getElementById("champ").innerHTML = "Pedro"
        if(wins.Juca > wins.Edna){
            document.getElementById("vice").innerHTML = "Juca"
            document.getElementById("terceiro").innerHTML = "Edna"
            cars.Pedro.points = parseInt(cars.Pedro.points + points[0])
            cars.Juca.points = parseInt(cars.Juca.points +  points[1])
            cars.Edna.points = parseInt(cars.Edna.points +  points[2])
        } else{
            document.getElementById("vice").innerHTML = "Edna"
            document.getElementById("terceiro").innerHTML = "Juca"
            cars.Pedro.points = parseInt(cars.Pedro.points + points[0])
            cars.Edna.points = parseInt(cars.Edna.points + points[1])
            cars.Juca.points = parseInt(cars.Juca.points + points[2])
        }
    } else if(wins.Juca == aux2){
        demo = "carJuca"
        win = "winJuca"
        document.getElementById("champ").innerHTML = "Juca"
        if(wins.Pedro > wins.Edna){
            document.getElementById("vice").innerHTML = "Pedro"
            document.getElementById("terceiro").innerHTML = "Edna"
            cars.Juca.points += parseInt(cars.Juca.points + points[0])
            cars.Pedro.points += parseInt(cars.Pedro.points + points[1])
            cars.Edna.points += parseInt(cars.Edna.points + points[2])
        } else{
            document.getElementById("vice").innerHTML = "Edna"
            document.getElementById("terceiro").innerHTML = "Pedro"
            cars.Juca.points = parseInt(cars.Juca.points + points[0])
            cars.Edna.points = parseInt(cars.Edna.points + points[2])
            cars.Pedro.points = parseInt(cars.Pedro.points + points[1])
        }    
        } else{
        demo = "carEdna"
        win = "winEdna"
        document.getElementById("champ").innerHTML = "Edna"
        if(wins.Pedro > wins.Juca){
            document.getElementById("vice").innerHTML = "Pedro"
            document.getElementById("terceiro").innerHTML = "Juca"
            cars.Edna.points = parseInt(cars.Edna.points + points[0])
            cars.Pedro.points = parseInt(cars.Pedro.points + points[1])
            cars.Juca.points = parseInt(cars.Juca.points + points[2])
        } else{
            document.getElementById("vice").innerHTML = "Juca"
            document.getElementById("terceiro").innerHTML = "Pedro"
            cars.Edna.points = parseInt(cars.Edna.points + points[0])
            cars.Juca.points = parseInt(cars.Juca.points + points[2])
            cars.Pedro.points = parseInt(cars.Pedro.points + points[1])
        }
    }

    document.getElementById("lvlPedro").innerHTML = cars.Pedro.Level
    document.getElementById("lvlJuca").innerHTML = cars.Juca.Level
    document.getElementById("lvlEdna").innerHTML = cars.Edna.Level

    document.getElementById(demo).style.marginLeft = "450px";
    document.getElementById(win).innerHTML = "GANHADOR!";

    wins.Pedro = 0;
    wins.Juca = 0;
    wins.Edna = 0;
    console.log(cars.Pedro.points)
}

function hard(){
    for(var j = 0; j < 75; j++){
        btnRuns(160)
    }
}