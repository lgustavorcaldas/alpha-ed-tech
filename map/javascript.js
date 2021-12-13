var client ={
    name: "",
    dateExpiry: "",
    value: ""
}
var timeInMs = Date.now();
let arr = [];
let arr1 = [];
let x = 0;
let porcent = 0;
let DifferenceInTime;
let DifferenceInDays;
let date1;
let date2;

function store(){
    client.name = document.getElementById("name").value;
    client.dateExpiry = document.getElementById("date").value;
    client.value = parseInt(document.getElementById("value").value);

    document.getElementById("frm").reset();

    arr.push = client.value;
    arr1.push = client.name;

    document.getElementById("table").innerHTML += "<td>" + client.name + "</td><td>" + client.dateExpiry + "</td><td>" + client.value + "</td>";
        
    date1 = new Date(client.dateExpiry);
    date2 = new Date();
  
    DifferenceInTime = date2.getTime() - date1.getTime();

    DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

    arr.push = DifferenceInDays;

    porcent = DifferenceInDays * (DifferenceInDays * (2/100));
    porcent =  porcent * 0.001;

    let tardy = arr[x];

    x++;

    client.name = 0;
    client.dateExpiry = 0;
    client.value = 0;
}

function tardy(){

}