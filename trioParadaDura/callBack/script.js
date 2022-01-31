let arr = [];

function test(){
    let ramdomNumber = []
    let min = 1;
    let max = 60;
    let intervalo;
    // const show = document.getElementById("show")
    // const showAll = document.getElementById("showAll")

    function callBack(){
        let num = Math.floor(Math.random() * (max - min + 1) + min);

        let verificarNum = ramdomNumber.indexOf(num);

        if(verificarNum == -1){
            ramdomNumber.push(num)
            // show.innerHTML = num
        } else{
            callBack()
        }

        if(ramdomNumber.length == 6){
            // console.log(ramdomNumber);
            clearInterval(intervalo)
            return ramdomNumber
            // showAll.innerHTML = ramdomNumber
        }
    }

    function start(){
        intervalo = setInterval(callBack, 100)

        callBack()
    }

    start()
}

arr.push(test())
arr.push(test())
arr.push(test())

console.log(arr);