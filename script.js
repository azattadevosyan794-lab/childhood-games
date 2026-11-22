const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator__button[data-value]");
for( const button of buttons) {
    button.addEventListener("click",function(){
        if(justcalculated){
            display.textContent = "0";
            justcalculated = false;
        }
       if(display.textContent === "0"){
    display.textContent = button.dataset.value;
       } else {
        display.textContent +=button.dataset.value;
       }
    });
}
const ecualbutton = document.getElementById("equal-button");
ecualbutton.addEventListener("click",function(){
    const expression = display.textContent;
    const result = calculate(expression);
    display.textContent = result;
    justcalculated = true;
});
function calculate(expression)  {
    if(expression.includes("+")){
     const parts = expression.split("+"); 
     const a = parseFloat(parts[0]);
     const b = parseFloat(parts[1]);
     const result = a + b;
    return result;
}
if(expression.includes("-")){
    const parts = expression.split("-");
    const a = parseFloat(parts[0]);
    const b = parseFloat(parts[1]);
    const result = a - b;
    return result;
}
if(expression.includes("*")){
    const parts = expression.split("*");
    const a = parseFloat(parts[0]);
    const b = parseFloat(parts[1]);
    const result = a * b;
    return result;
}
if(expression.includes("/")){
    const parts = expression.split("/");
    const a = parseFloat(parts[0]);
    const b = parseFloat(parts[1]);
    if(b === 0){
        return "на ноль делить нельзя";
    }
    const result = a / b;
    return result;
}
return expression;
}
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    display.textContent = "0";
});
let justcalculated = false;


// ===============tic-tac-toe=================
const cells = document.querySelectorAll(".tic-tac-toe__cell");
let currentPlayer ="x";
const win__combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
for(const cell of cells){
    cell.addEventListener("click",function(){
        if(cell.textContent !==""){
            return;
        }
    cell.textContent = currentPlayer;
    for(const combination of win__combinations){
        const [a,b,c] = combination;
        if (cells[a].textContent ===currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
        alert(`победил игрок ${currentPlayer}`);
        for(const cell of cells){
            cell.textContent = ""};
            return;
        }}
        let isDraw = true;
        for(const cell of cells){
            if(cell.textContent === "") {
                isDraw =false
            }
        }
        if(isDraw){
            alert("ничья");
            for(const cell of cells) {
                cell.textContent = "";
            }
            return;
            }
    if(currentPlayer === "x"){
        currentPlayer = "o";
    } else {
        currentPlayer = "x";
    }
});
}
// ===============header=================
const headerButtons = document.querySelectorAll(".header__button");
const sections = document.querySelectorAll("main section");
for(const button of headerButtons){
    button.addEventListener("click",function(){
for(const section of sections){
    section.classList.add("hidden");
}
const target = document.querySelector("." + button.dataset.section);
target.classList.remove("hidden");
    });}