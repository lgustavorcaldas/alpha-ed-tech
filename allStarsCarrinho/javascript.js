// Variaveis
let carPedro;
let carJuca;
let carEdna;

let rollCarPedro;
let rollCarJuca;
let rollCarEdna;

let winPedro = 0;
let winJuca = 0;
let winEdna = 0;

        // Variaveis aleatorias dos carros
        let velMaxSS;
        let velMinSS;
        let derSS;

        let velMaxSp;
        let velMinSp;
        let derSp;

        let velMaxPop; 
        let velMinPop;
        let derPop;

function randomCars(){
    velMaxSS = (Math.floor(Math.random() * (230 - 210 + 1) ) + 210);
    velMinSS = (Math.floor(Math.random() * (160 - 140 + 1) ) + 140);
    derSS = ((Math.floor(Math.random() * (175 - 100 + 1) ) + 100)/10000);
    
    velMaxSp = (Math.floor(Math.random() * (215 - 195 + 1) ) + 195);
    velMinSp = (Math.floor(Math.random() * (145 - 125 + 1) ) + 125);
    derSp = ((Math.floor(Math.random() * (300 - 200 + 1) ) + 200)/10000);
    
    velMaxPop = (Math.floor(Math.random() * (200 - 180 + 1) ) + 180);
    velMinPop = (Math.floor(Math.random() * (130 - 110 + 1) ) + 110);
    derPop = ((Math.floor(Math.random() * (400 - 300 + 1) ) + 300)/10000);
}

function rollCar(){
    rollCarPedro = Math.floor((Math.random() * 20)+1);
    rollCarJuca = Math.floor((Math.random() * 20)+1);
    rollCarEdna = Math.floor((Math.random() * 20)+1);

    randomCars()

    if(rollCarPedro == 20){
        carPedro = (Math.floor(Math.random() * (velMaxSS - velMinSS + 1) ) + velMinSS);
        carPedro = (carPedro - (carPedro * derSS));
    } else if(rollCarPedro >= 13 && rollCarPedro <= 19 ){
        carPedro = (Math.floor(Math.random() * (velMaxSp - velMinSp + 1) ) + velMinSp);
        carPedro = (carPedro - (carPedro * derSp));
    } else{
        carPedro = (Math.floor(Math.random() * (velMaxPop - velMinPop + 1) ) + velMinPop);
        carPedro = (carPedro - (carPedro * derPop));
    }

    if(rollCarJuca == 20){
        carJuca = (Math.floor(Math.random() * (velMaxSS - velMinSS + 1) ) + velMinSS);
        carJuca = (carJuca - (carJuca * derSS));
    } else if(rollCarJuca >= 13 && rollCarJuca <= 19 ){
        carJuca = (Math.floor(Math.random() * (velMaxSp - velMinSp + 1) ) + velMinSp);
        carJuca = (carJuca - (carJuca * derSp));
    } else{
        carJuca = (Math.floor(Math.random() * (velMaxPop - velMinPop + 1) ) + velMinPop);
        carJuca = (carJuca - (carJuca * derPop));
    }

    if(rollCarEdna == 20){
        carEdna = (Math.floor(Math.random() * (velMaxSS - velMinSS + 1) ) + velMinSS);
        carEdna = (carEdna - (carEdna * derSS));
    } else if(rollCarEdna >= 13 && rollCarEdna <= 19 ){
        carEdna = (Math.floor(Math.random() * (velMaxSp - velMinSp + 1) ) + velMinSp);
        carEdna = (carEdna - (carEdna * derSp));
    } else{
        carEdna = (Math.floor(Math.random() * (velMaxPop - velMinPop + 1) ) + velMinPop);
        carEdna = (carEdna - (carEdna * derPop));
    }
}


function btnRuns(runs){
    rollCar()
    for (var i = 0; i < runs; i++){

        if(carPedro > carJuca && carPedro > carEdna){
            winPedro++
        } else if(carJuca > carPedro && carJuca > carEdna){
            winJuca++
        } else if(carEdna > carPedro && carEdna > carJuca){
            winEdna++
        } else{
            runs++
        }
        
        if(i == runs -1){
            if(winPedro == winJuca && winPedro > winEdna){
                runs++
            } else if(winPedro == winEdna && winPedro > winJuca){
                runs++
            } else if(winJuca == winEdna && winJuca > winPedro){
                runs++
            } else if(winPedro == winJuca && winJuca == winEdna){
                runs++
            }
        }
    }
    
    let resultone = ( winPedro+winJuca + Math.abs(winJuca-winPedro) )/2
    let resulttwo = ( resultone+winEdna + Math.abs(winEdna-resultone) )/2

    if(resulttwo == winPedro){
        winner = "Pedro Ganhou!";
    } else if(resulttwo == winJuca){
        winner = "Juca Ganhou!";
    } else{
        winner = "Edna Ganhou!";
    }

    document.getElementById("demo").innerHTML += "<p>" + winner + "</p>";
    
    console.log(rollCarPedro + " " + carPedro)
    console.log(rollCarJuca + " " + carJuca)
    console.log(rollCarEdna + " " + carEdna)
    console.log("~~~~~~~~")
    
    winPedro = 0;
    winJuca = 0;
    winEdna = 0;
}