console.log("linked?????!!!");

let num = document.getElementsByClassName("num");
let firstEntry = [];
let displayArray = [];
let secondArray = [];
let display = document.getElementById("display");
let ops = document.getElementsByClassName("ops");
let equals = document.getElementById("equals");
let results;
let operator;
let clear = document.getElementById("clear");

for (var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", displayNum);
    function displayNum() {
        displayArray.push(event.target.value);
        display.value = displayArray.join('');}
    }

for (var i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", displayOps);
    function displayOps(){
        firstEntry.push(displayArray.join(""));
        displayArray.push(event.target.value);
        display.value = displayArray.join("");
  }

equals.addEventListener("click", displayResults);
    function displayResults() {
        secondArray.push(displayArray);
        display.value = eval(display.value);
}

clear.addEventListener('click', clearDisplay)
    function clearDisplay(){
        location.reload();
}}
