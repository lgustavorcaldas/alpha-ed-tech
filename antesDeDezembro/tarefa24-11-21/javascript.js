const name = document.getElementById("input-name")
const email = document.getElementById("input-email")
const date = document.getElementById("input-date")
const sexo = document.getElementById("input-sexo")
const range = document.getElementById("input-range")
const coment = document.getElementById("input-coment")


function func(){
    console.log(name.value)
    console.log(email.value)
    console.log(date.value)
    console.log(sexo.value)
    console.log(range.value)
    console.log(coment.value)
}

function func1(){
    document.getElementById("show-name").innerHTML = "Nome: " + name.value
    document.getElementById("show-email").innerHTML = "Email: " + email.value
    document.getElementById("show-date").innerHTML = "Data de Nasc: " + date.value
    document.getElementById("show-sexo").innerHTML = "Gênero: " + sexo.value
    document.getElementById("show-range").innerHTML = "Nota: " + range.value
    document.getElementById("show-coment").innerHTML = "Comentario: " + coment.value
}
