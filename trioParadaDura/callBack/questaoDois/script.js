const array = []
for (let i = 1; i < 61; i++){
    array.push(i)
}
const max = 59
const min = 0
const randomArray = []
let j = 0
const show = document.getElementById("show")
const showAll = document.getElementById("showAll")

function lottery(){
    const indiceAleatorio = Math.floor(Math.random() * ((max - j) - min + 1) + min) 
    let splice = array.splice(indiceAleatorio, 1)
    randomArray.push(splice)
    show.innerHTML = splice
    j++
    if(randomArray.length == 6){
        clearInterval(interval)
        showAll.innerHTML = randomArray
    }
}

let interval = setInterval(lottery,1000)