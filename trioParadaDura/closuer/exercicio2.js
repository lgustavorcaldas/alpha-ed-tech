function tamanhoFonte(size){
    return function(){
        document.body.style.fontSize  = size + "px";
    }
}

let size14 = tamanhoFonte(14)
let size22 = tamanhoFonte(22)

document.getElementById("14").onclick = size14
document.getElementById("22").onclick = size22