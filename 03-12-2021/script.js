let changTurn = true;

let matrix =[["", "", ""],
             ["", "", ""],
             ["", "", ""]];

function winningtest(){
    if((matrix[0][0] !== "" && matrix[0][0] == matrix[0][1] && matrix[0][0] == matrix[0][2]) ||
    (matrix[1][0] !== "" && matrix[1][0] == matrix[1][1] && matrix[1][0] == matrix[1][2]) ||
    (matrix[2][0] !== "" && matrix[2][0] == matrix[2][1] && matrix[2][0] == matrix[2][2]) ||
    (matrix[0][0] !== "" && matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]) ||
    (matrix[0][2] !== "" && matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0]) || 
    (matrix[0][0] !== "" && matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0]) ||
    (matrix[0][1] !== "" && matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1]) || 
    (matrix[0][2] !== "" && matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2])   ){
        if(changTurn == true){
            changTurn = !changTurn
            console.log("Jogador 2 ganhou")
        } else if (changTurn == false){
            changTurn = !changTurn
            console.log("Jogador 1 ganhou")
        }
        for (x = 0; x < 4 ; x++){
            for (y = 0; y < 4 ; y++){
                matrix[x][y] = 69;
            }}
    }}

function changeMatrix(x,y){
    seletor = x+"x"+y; 
    if(matrix[x][y] == ""){
        if(changTurn == true){
            matrix[x][y] = 1;
            changTurn = !changTurn;
            document.getElementById(seletor).style.backgroundImage = "url(assets/circle.png)";
        } else if (changTurn == false){
            matrix[x][y] = 2;
            changTurn = !changTurn
            document.getElementById(seletor).style.backgroundImage = "url(assets/xis.png)";
        } else{
            console.log("ERRO")
        }
    winningtest()
    console.log(matrix)}
}