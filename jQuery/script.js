$(document).ready(function () {
    let moeda;
    $.ajax({url: "http://code.jquery.com/jquery-3.6.0.min.js"})
    .done((data) => {
        Object.entries(data).forEach((moeda) => {
            $('#moedas').append(`<option> ${moeda[0]} </option>`);
        })
    });
    $('#data-in').on("change", function() {
        const data = $(this).val().replaceAll("-","");
        const moeda = $("#moedas").val()
        $.ajax( {url:`https://economia.awesomeapi.com.br/USD-BRL/${moeda}?start_date=${data}&end_date=${data}`})
        .done((data) => {
            $("#retorno").html(JSON.stringify(data));
            console.log(JSON.stringify(data));
        });
    })
});