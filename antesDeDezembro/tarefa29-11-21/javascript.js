let n = 0;

let myVar = setInterval(myTimer, 500);

function myTimer() {
    if(n < 11){
        document.getElementById("left-side").innerHTML += "<p>Quando eu dormi na sala de aula não era para ajudar o Leo Dicaprio</p>";
    } else if(n < 22){
        document.getElementById("right-side").innerHTML += "<p>Quando eu dormi na sala de aula não era para ajudar o Leo Dicaprio</p>";
    } else{
        clearInterval(myVar)
    }
    n++;
}
