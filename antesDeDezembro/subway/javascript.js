function func(){
    let breadONe = document.getElementById("breadone").checked
    let breadTwo = document.getElementById("breadtwo").checked
    let breadThree = document.getElementById("breadthree").checked
    if (breadONe == true){
        breadValue = 3
    } else if (breadTwo == true){
        breadValue = 8
    } else if (breadThree == true){
        breadValue = 6
    } else{
        breadValue = 0
    }

    let burguerONe = document.getElementById("burguerone").checked
    let burguerTwo = document.getElementById("burguertwo").checked
    let burguerThree = document.getElementById("burguerthree").checked
    if (burguerONe == true){
        burguerValue = 13
    } else if (burguerTwo == true){
        burguerValue = 10
    } else if (burguerThree == true){
        burguerValue = 12
    } else{
        burguerValue = 0
    }

    let saladONe = document.getElementById("saladone").checked
    let saladTwo = document.getElementById("saladtwo").checked
    let saladThree = document.getElementById("saladthree").checked
    if (saladONe == true){
        saladValue = 1.5
    } else if (saladTwo == true){
        saladValue = 1.5
    } else if (saladThree == true){
        saladValue = 0
    } else{
        saladValue = 0
    }

    let cheeseONe = document.getElementById("cheeseone").checked
    let cheeseTwo = document.getElementById("cheesetwo").checked
    let cheeseThree = document.getElementById("cheesethree").checked
    if (cheeseONe == true){
        cheeseValue = 3
    } else if (cheeseTwo == true){
        cheeseValue = 3
    } else if (cheeseThree == true){
        cheeseValue = 5
    } else{
        cheeseValue = 0
    }

    
    document.getElementById("demo").innerHTML = "R$ " + parseFloat(breadValue + burguerValue + saladValue + cheeseValue);
}

// function func(){
//     let bread = document.querySelector('input[name="breadtype"]:checked');
//     let burguerr = document.querySelector('input[name="burguerrtype"]:checked');
//     let salad = document.querySelector('input[name="saladtype"]:checked');
//     let cheese = document.querySelector('input[name="cheesetype"]:checked');

    
//     if( bread == null){
//         bread = 0;
//     } else{
//         bread = parseFloat(bread.value);
//     }

//     if( burguerr == null){
//         burguerr = 0;
//     } else{
//         burguerr = parseFloat(burguerr.value);
//     }

//     if( salad == null){
//         salad = 0;
//     } else{
//         salad = parseFloat(salad.value);
//     }
     
//     if( cheese == null){
//         cheese = 0;
//     } else{
//         cheese = parseFloat(cheese.value);
//     }


//     let result = bread + burguerr + salad + cheese;

//     document.getElementById("demo").innerHTML = result.toLocaleString("pt-br", {style: "currency", currency: "BRL",});
    
// }  