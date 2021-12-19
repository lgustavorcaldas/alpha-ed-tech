let arr =[ [0,0,0],
           [0,0,0],
           [0,0,0]  ];
// true = cirucilo ;; false = xis
let changeTurn = true;
let id;
function game(x,y){
    id = x + "x" + y
    if(arr[x][y] == 0){
    if(changeTurn == true){
        arr[x][y] = 1;
        document.getElementById(id).innerHTML = "o";
        document.getElementById(id).style.color = "#f72585"
    } else if(changeTurn == false){
        arr[x][y] = 2;
        document.getElementById(id).innerHTML = "x";
        document.getElementById(id).style.color = "#DEFF89"
    }
    changeTurn = !changeTurn
    }
    console.clear()
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
    mariaAmanda()
    return true
}
function mariaAmanda(){
    if(arr[0][0] != 13){
        if(arr[0][0] != 0 && arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2] || 
        arr[1][0] != 0 && arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2] ||
        arr[2][0] != 0 && arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2] ||
        arr[0][0] != 0 && arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0] ||
        arr[0][1] != 0 && arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1] ||
        arr[0][2] != 0 && arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2] ||
        arr[0][0] != 0 && arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] ||
        arr[0][2] != 0 && arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0] ){
            changeTurn = !changeTurn
            if(changeTurn == true){
                document.getElementById("winner").innerHTML = "Circlo Ganhou!"
                document.getElementById("winner").style.color = "#f72585"
            } else{
                document.getElementById("winner").innerHTML = "Xis Ganhou!"
                document.getElementById("winner").style.color = "#DEFF89"
            }
            arr = [[13,13,13],[13,13,13],[13,13,13]]
        }
    }
    return true
}
function refresh(){
    arr =[ [0,0,0],
           [0,0,0],
           [0,0,0]  ];
    document.getElementById("winner").innerHTML = ""
    for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
            document.getElementById(x + "x" + y).innerHTML = "";
        }
    }
}