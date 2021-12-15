var client ={
    name: "",
    dateExpiry: "",
    value: "",
    valueJuros: ""
}
var timeInMs = Date.now();
let arr = [];
let arr1 = [];
let x = 0;
let porcent = 0;
let juros;
let DifferenceInTime;
let DifferenceInDays;
let date;
let dateAux;

function store(){
    client.name = document.getElementById("name").value;
    client.dateExpiry = document.getElementById("date").value;
    client.value = parseFloat(document.getElementById("value").value);

    document.getElementById("frm").reset();

    arr.push(client.value);
    arr1.push(client.name);

    document.getElementById("table").innerHTML += "<td>" + client.name + "</td><td>" + client.dateExpiry + "</td><td>" + client.value + "</td>";   
}

function tardy(){
    date = new Date(client.dateExpiry);
    dateAux = new Date();

    DifferenceInTime = dateAux.getTime() - date.getTime();
    DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
    porcent =  parseFloat((DifferenceInDays * 0.1) / 100);

    juros = parseFloat(arr[x] + ((arr[x] + (arr[x] * 0.02)) * porcent)).toFixed(2);

    document.getElementById("table2").innerHTML += "<td>" + arr1[x] + "</td><td>" + "R$ " + juros + "</td>";

    x++;
    date = 0;
    dateAux = 0;
    DifferenceInTime = 0;
    DifferenceInDays = 0;
    client.name = 0;
    client.value = 0;
    client.dateExpiry = 0;
}