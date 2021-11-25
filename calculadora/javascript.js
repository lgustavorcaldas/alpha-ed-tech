const screenOne = document.getElementById("numb-one");
const screenTwo = document.getElementById("numb-two");
const screenThree = document.getElementById("numb-result");
let varOne = 0;
let varTwo = 0;
let sign = "";
let show = "";

function showNumber(num){
    if(show != ""){
        screenOne.innerHTML = "";
        screenOne.innerHTML +=  show;
    }else if(sign === ""){
        screenOne.innerHTML +=  num;
    } else{
        screenTwo.innerHTML +=  num;
    }
}
function operation(op){
    varOne = screenOne.innerHTML;
  
    sign = op;
    document.getElementById("sign").innerHTML = sign;

}
function result(){
    varTwo = screenTwo.innerHTML;
    switch(sign){
        case '*':
            show = parseFloat(varOne) * parseFloat(varTwo);
              break;
        case '-':
            show = parseFloat(varOne) - parseFloat(varTwo);
            break;
        case '/':
            show = parseFloat(varOne) / parseFloat(varTwo);
            break;
        case '+':
            show = parseFloat(varOne) + parseFloat(varTwo);
            break;
    }
    screenThree.innerHTML = show.toFixed(2);
    sign = "";
}
function trash(){
    screenOne.innerHTML = "";
    screenTwo.innerHTML = "";
    screenThree.innerHTML = "";
    varOne = 0;
    varTwo = 0;
    sign = "";
    show = "";
}