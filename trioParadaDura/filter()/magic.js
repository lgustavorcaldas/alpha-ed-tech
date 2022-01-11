// Array com os valores que serão analizados
let dado,mes;
const arr = [{
        mes: "janeiro",
        data: 15,
        valor: 2000
    },
    {
        mes: "abril",
        data: 09,
        valor: 1000
    },
    {
        mes: "abril",
        data: 07,
        valor: 800
    },
    {
        mes: "fevereiro",
        data: 19,
        valor: 500
    },
    {
        mes: "marco",
        data: 04,
        valor: 12
    },
    {
        mes: "janeiro",
        data: 24,
        valor: 9000
    },
    {
        mes: "abril",
        data: 24,
        valor: 800
    },
    {
        mes: "feveriro",
        data: 05,
        valor: 150
    },
    {
        mes: "janeiro",
        data: 19,
        valor: 1500
    },
    {
        mes: "marco",
        data: 29,
        valor: 1200
    },
    {
        mes: "janeiro",
        data: 16,
        valor: 300
    },
    {
        mes: "marco",
        data: 14,
        valor: 1900
    },
    {
        mes: "abril",
        data: 15,
        valor: 3000
    },
    {
        mes: "fevereiro",
        data: 05,
        valor: 1720
    }
]
// Funcao que filtra o mes
function verficarMes(mesDoItemDoArr){
    mes = document.getElementById("selecao").value

    if(mesDoItemDoArr.mes == mes){
        return true;
    }
}

// Funcao que filtra o valor/data
function verificarSeEDiaOuPreco(itemDoArr){
    dado = document.getElementById("dados").value

    if( dado == "Preco"){
        return itemDoArr.valor;
    } else if( dado == "Data"){
        return itemDoArr.data;
    } 
}

// Organiza em ordem crescente
function ordenarCrescente(){

    const verificadoraDoMesCrescente = arr.filter(verficarMes).map(verificarSeEDiaOuPreco).sort((a, b) => b - a);

    document.getElementById("mostrar").innerHTML = `<td> ${verificadoraDoMesCrescente} </td>`
}
// Organiza em ordem decrescente
function ordenarDecrescente(){

    const verificadoraDoMesDecrescente = arr.filter(verficarMes).map(verificarSeEDiaOuPreco).sort((a, b) => a - b);

    document.getElementById("mostrar").innerHTML = `<td> ${verificadoraDoMesDecrescente} </td>`
    
}