function func(){
    var bread = document.querySelector('input[name="breadtype"]:checked'); 
    if( bread == null){
        bread = 0;
    } else{
        bread = parseFloat(bread.value);
    }

    var burguer = document.querySelector('input[name="burguertype"]:checked');  
    if( burguer == null){
        burguer = 0;
    } else{
        burguer = parseFloat(burguer.value);
    }

    var salad = document.querySelector('input[name="saladtype"]:checked');  
    if( salad == null){
        salad = 0;
    } else{
        salad = parseFloat(salad.value);
    }
    
    var cheese = document.querySelector('input[name="cheesetype"]:checked'); 
    if( cheese == null){
        cheese = 0;
    } else{
        cheese = parseFloat(cheese.value);
    }


    let result = bread + burguer + salad + cheese;

    document.getElementById("demo").innerHTML = "R$ " + result;
}  