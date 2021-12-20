let pilot =[
        Pedro={
            ptns: 0,
            lvl: 0,
            vel: 0,
            wins: 0
        },
        Juca={
            ptns: 0,
            lvl: 0,
            vel: 0,
            wins: 0
        },
        Edna={
            ptns: 0,
            lvl: 0,
            vel: 0,
            wins: 0
        }
]
// Variaveis assistencia
let n, ptns
// Rolls de Pedro, Juca e Edna
let rolls =[0,0,0]
function carRolls(item, indice){
    item = 0
    item = (item + parseFloat(Math.floor(Math.random() * 20)+1))
    rolls[indice] = item
}
// Vel[0] = Velocidade Maxima ;; Vel[1] = Velocidade Minima ;; Vel[2] = Velocidade Derapagem  
let rules ={
        CarSS: 
            [0, 0, 0],
        CarSp:
            [0, 0, 0],
        CarPop: 
            [0, 0, 0]   
}
// Sorteia a velocidade dos carros.
function carRandom(){
    rules.CarSS[0] = parseInt(Math.floor(Math.random() * (230 - 210 + 1)) + 210)
    rules.CarSS[1] = parseInt(Math.floor(Math.random() * (160 - 140 + 1)) + 140)
    rules.CarSS[2] = parseInt(Math.floor(Math.random() * (175 - 100 + 1)) + 100)

    rules.CarSp[0] = parseInt(Math.floor(Math.random() * (215 - 195 + 1)) + 195)
    rules.CarSp[1] = parseInt(Math.floor(Math.random() * (145 - 125 + 1)) + 125)
    rules.CarSp[2] = parseInt(Math.floor(Math.random() * (300 - 200 + 1)) + 200)

    rules.CarPop[0] = parseInt(Math.floor(Math.random() * (200 - 180 + 1)) + 180)
    rules.CarPop[1] = parseInt(Math.floor(Math.random() * (130 - 110 + 1)) + 110)
    rules.CarPop[2] = parseInt(Math.floor(Math.random() * (400 - 300 + 1)) + 300)
}
// Funcao para subir o lvl dos pilotos
function lvlPilot(x){
    if(pilot[x].lvl < 10){
        if( pilot[x].ptns >= 450 ){
            pilot[x].ptns -= 450;
            pilot[x].lvl++ 
        }
    }
}
function lvlPorcent(item, indice){
    rules.CarSS[indice] = item + (item * (pilot[n].lvl / 100))
}
function btnRuns(runs){
    if(runs == 10){
        ptns = [200,120,50]
    } else if( runs == 70){
        ptns = [220,130,75]
    } else{
        ptns = [250,150,90]
    }
    for(let i = 0 ; i < runs ; i++){
        rolls.forEach(carRolls)
        for(n = 0 ; n < 3 ; n++){
            carRandom()
            lvlPilot(n)
            if(rolls[n] == 20){
                rules.CarSS.forEach(lvlPorcent)
                pilot[n].vel = (parseFloat(Math.floor(Math.random() * (rules.CarSS[0] - rules.CarSS[1] + 1)) + rules.CarSS[1]) - (pilot[n].vel * (rules.CarPop[2]/10000))).toFixed(2)
            } else if(rolls[0] <= 19 && rolls[0] >= 13){
                rules.CarSp.forEach(lvlPorcent)
                pilot[n].vel = (parseFloat(Math.floor(Math.random() * (rules.CarSp[0] - rules.CarSp[1] + 1)) + rules.CarSp[1]) - (pilot[n].vel * (rules.CarPop[2]/10000))).toFixed(2)
            } else{
                rules.CarPop.forEach(lvlPorcent)
                pilot[n].vel = (parseFloat(Math.floor(Math.random() * (rules.CarPop[0] - rules.CarPop[1] + 1)) + rules.CarPop[1]) - (pilot[n].vel * (rules.CarPop[2]/10000))).toFixed(2)
            }
        }
        if( pilot[0].vel > pilot[1].vel && pilot[0].vel > pilot[2].vel){
            pilot[0].wins++
        } else if(pilot[1].vel > pilot[0].vel && pilot[1].vel > pilot[2].vel){
            pilot[1].wins++
        } else{
            pilot[2].wins++
        }
        if( runs == (i + 1) ){
            if(pilot[0].wins == pilot[1].wins && pilot[0].wins == pilot[2].wins){
                runs++
            } else if(pilot[0].wins == pilot[1].wins && pilot[0].wins > pilot[2].wins){
                runs++
            } else if(pilot[1].wins == pilot[2].wins && pilot[1].wins > pilot[0].wins){
                runs++
            } else if(pilot[2].wins == pilot[0].wins && pilot[0].wins > pilot[1].wins){
                runs++
            } 
        }
        console.log(pilot[0].wins + " " + pilot[1].wins + " " + pilot[2].wins)
    }


    let aux = [pilot[0], pilot[1], pilot[2]];
    aux.sort((a, b) => b.wins - a.wins);
    // console.log(aux)
        if(aux[0] == pilot[0].wins){
            if(aux[1] == pilot[1].wins){
                pilot[0].ptns += ptns[0]
                pilot[1].ptns += ptns[1]
                pilot[2].ptns += ptns[2]
            } else  if(aux[2] == pilot[1].wins){
                pilot[0].ptns += ptns[0]
                pilot[2].ptns += ptns[1]
                pilot[1].ptns += ptns[2]
            }
        }

    // if( pilot[0].wins > pilot[1].wins && pilot[0].wins > pilot[2].wins){
    //     if(pilot[1].wins > pilot[2].wins){
    //         pilot[0].ptns += ptns[0]
    //         pilot[1].ptns += ptns[1]
    //         pilot[2].ptns += ptns[2]
    //     } else{
    //         pilot[0].ptns += ptns[0]
    //         pilot[2].ptns += ptns[1]
    //         pilot[1].ptns += ptns[2]
    //     }
    // }
    // else if( pilot[1].wins > pilot[0].wins && pilot[1].wins > pilot[2].wins){
    //     if(pilot[0].wins > pilot[2].wins){
    //         pilot[1].ptns += ptns[0]
    //         pilot[0].ptns += ptns[1]
    //         pilot[2].ptns += ptns[2]
    //     } else{
    //         pilot[1].ptns += ptns[0]
    //         pilot[2].ptns += ptns[1]
    //         pilot[0].ptns += ptns[2]
    //     }
    // } 
    // else if( pilot[2].wins > pilot[0].wins && pilot[2].wins > pilot[1].wins){
    //     if(pilot[0].wins > pilot[1].wins){
    //         pilot[2].ptns += ptns[0]
    //         pilot[0].ptns += ptns[1]
    //         pilot[1].ptns += ptns[2]
    //     } else{
    //         pilot[2].ptns += ptns[0]
    //         pilot[1].ptns += ptns[1]
    //         pilot[0].ptns += ptns[2]
    //     }
    // }
    console.log(pilot)
    pilot[0].wins = 0
    pilot[1].wins = 0
    pilot[2].wins = 0
}
btnRuns(3)