function factorial(x){
    if(x === 1){
        return x
    } else{
        return x * factorial(x-1);
    }
}

console.log(fatorial(6))
//////////////

function fatorialLuiz(n){
    let i = 0 
    let arr = []
    while(i < n){
        arr.push(n-i)
        i++
    }
    const reducer = (pre,curr) => pre * curr

    console.log(arr.reduce(reducer));
}

fatorialLuiz(6)
//////////////

function fatorialZaum(n) {
    for (let i = n - 1; i > 1; i-- ) {
      n = n * i;
    }
    return n
}

console.log(fatorialZaum(6));