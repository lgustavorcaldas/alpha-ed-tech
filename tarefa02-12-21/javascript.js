const numbs = [];
let i;
let numbOne;
let numbTwo;
let numbThree;
let numbFour;

function getnumbs(){
    numbOne = document.getElementById("one").value;
    numbTwo = document.getElementById("two").value;
    numbThree = document.getElementById("three").value;
    numbFour = document.getElementById("four").value;
}

function clearAll(){
    document.getElementById("demo").innerHTML = " ";
    numbs.length = 0;
}

function invert(){
    getnumbs()
    numbs.push(numbFour)
    numbs.push(numbThree)
    numbs.push(numbTwo)
    numbs.push(numbOne)

    document.getElementById("demo").innerHTML = numbs;
}

function increasing() {
    getnumbs()
    for(i=0; i<9; i++){
        if(numbOne > numbTwo && numbOne > numbThree && numbOne > numbFour){
            numbs.push(numbOne);
            numbOne = 0;
        } else if(numbTwo > numbOne && numbTwo > numbThree && numbTwo > numbFour){
            numbs.push(numbTwo);
            numbTwo = 0;
        } else if(numbThree > numbOne && numbThree > numbTwo && numbThree > numbFour){
            numbs.push(numbThree);
            numbThree = 0;
        } else if(numbFour > numbOne && numbFour > numbTwo && numbFour > numbThree){
            numbs.push(numbFour);
            numbFour = 0;
        }
    }
    document.getElementById("demo").innerHTML = numbs;
}