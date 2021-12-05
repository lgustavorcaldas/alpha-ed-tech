let changTurn = true;

let matrix =[["", "", ""],
             ["", "", ""],
             ["", "", ""]];

function changeMatrix(x,y){
    if(matrix[x][y] == ""){
        if(changTurn == true){
            matrix[x][y] = 1;
            changTurn = !changTurn
        } else if (changTurn == false){
            matrix[x][y] = 2;
            changTurn = !changTurn
        } else{
            console.log("ERRO")
        }
    }
    console.log(matrix)
}