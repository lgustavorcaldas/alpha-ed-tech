document.querySelector("*").style = "font-size: 16px;overflow-x: hidden"

document.querySelector("body").style = "padding: 0;margin: 0 auto;display: flex;flex-direction:column;justify-content: center;align-items: center;"

document.querySelector("#container").style = "margin: 0 auto;display: flex;flex-direction: column;justify-content: center;align-items: center;"

document.querySelector("header").style = "width: 100vw;height: 200px;background-color: white;display: flex;justify-content: center;align-items: center;"

document.querySelector("#head").style = "display: flex;height: 150px;flex-direction: column;justify-content: center;align-items: center;padding: 0 10px;box-shadow: 2px 2px 0px 1px black;"

document.querySelector("#titulo").style = "font-family: 'Open Sans', sans-serif;font-weight: 300;font-size: 72px;margin: 0 0 10px 0;"

document.querySelector("section").style = "width: 100vw;background-color: lightgray;margin: 0 auto;display: flex;flex-direction: column;justify-content: center;align-items: center;"

document.querySelector("#txt").style = "margin: 0 auto;text-align: center;"

document.querySelector("footer").style = "display: flex;justify-content: center;background-color: white;width: 100vw;height: 200px;"

document.querySelector("#fot").style = "width: 300px;display: flex;align-items: center;justify-content: space-between;"

document.querySelector("#pic").style = "height: 150px;width: 150px;border-radius: 50%;"

let links = document.querySelectorAll("#txt a:visited, #txt a:link, #txt a:focus");
links.forEach(element => {
    //estilização nativa
    element.style = "color: black;text-decoration: none; padding: none;"
    //estilização hover
    element.addEventListener('mouseenter', function () { 
        element.style = "text-decoration: underline;color:black; padding: none"
    });
    element.addEventListener('mouseleave', function () { 
        element.style = "color: black;text-decoration: none; padding: none;"
    });    
});