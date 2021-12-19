let carPedro;
let carJuca;
let carEdna;

let winPedro = 0;
let winJuca = 0;
let winEdna = 0;

let demo;

function velCarPedro(){
    return Math.floor(Math.random() * (230 - 150 + 1) ) + 150;
}

function velCarJuca(){
    return Math.floor(Math.random() * (260 - 120 + 1) ) + 120;
}

function velCarEdna(){
    return Math.floor(Math.random() * (220 - 180 + 1) ) + 180;
}

function btnRuns(runs){
    for (var i = 0; i < runs; i++){
        carPedro = velCarPedro() - (velCarPedro() * (3/100));
        carJuca = velCarJuca() - (velCarJuca() * (5/100));
        carEdna = velCarEdna() - (velCarEdna() * (1/100));

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
        demo = "pedro";
    } else if(resulttwo == winJuca){
        winner = "Juca Ganhou!";
        demo = "juca";
    } else{
        winner = "Edna Ganhou!";
        demo = "edna";
    }

    document.getElementById(demo).innerHTML += "<p>" + winner + "</p>";
    
    winPedro = 0;
    winJuca = 0;
    winEdna = 0;
}