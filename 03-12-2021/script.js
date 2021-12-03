const cellElements = document.querySelectorAll("[data-cell")
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circleTurn;
let xTurn;


cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})})

function handleClick(e){
    
}