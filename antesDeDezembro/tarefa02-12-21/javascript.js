const numbs = [];
let aux = document.querySelectorAll(".inputs");
function clearAll(){
    document.getElementById("demo").innerHTML = " ";
    numbs.length = 0;
    aux.forEach(element => {
        element.value = ""
    });
}
function getNumbs(){
    numbs.push(parseInt(document.getElementById("four").value))
    numbs.push(parseInt(document.getElementById("three").value))
    numbs.push(parseInt(document.getElementById("two").value))
    numbs.push(parseInt(document.getElementById("one").value))
}
function invert(){
    getNumbs()
    document.getElementById("demo").innerHTML = numbs;
}
function increasing() {
    getNumbs()
    for(let i=0; i<9; i++){
        if(numbs[0] > numbs[1] && numbs[0] > numbs[2] && numbs[0] > numbs[3]){
            numbs.push(numbs[0]);
            numbs[0] = "";
        } else if(numbs[1] > numbs[0] && numbs[1] > numbs[2] && numbs[1] > numbs[3]){
            numbs.push(numbs[1]);
            numbs[1] = "";
        } else if(numbs[2] > numbs[0] && numbs[2] > numbs[1] && numbs[2] > numbs[3]){
            numbs.push(numbs[2]);
            numbs[2] = "";
        } else if(numbs[3] > numbs[0] && numbs[3] > numbs[1] && numbs[3] > numbs[2]){
            numbs.push(numbs[3]);
            numbs[3] = "";
        } else{
            i++
        }
    }
    numbs.splice(0,4);
    document.getElementById("demo").innerHTML = numbs;
}