// function add(a,b){
//     return a+b;
// }

// function substract(a,b){
//     return a-b;
// }

// function multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }

function operate (){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator === "+"){
        solution = previousNum + currentNum;
    }else if(operator === "-"){
        solution = previousNum - currentNum;
    }else if(operator === "x"){
        solution = previousNum * currentNum;
    }else if(operator === "/"){
        solution = previousNum / currentNum;
    }else{
        return "ERROR";
    }
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = solution;
    previousNum = solution;
    operator = "";
    currentNum = solution;
}


// let key = document.querySelectorAll('key')
// let numbDisplayed = key.getAttribute('data-value')

// numbDisplayed =

// function numbClick(id){
//     var selectedButton = document.getElementById(id).value;
//     alert("You clicked "+ selectedButton);
// }

let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

const equal = document.querySelector('.equal');
equal.addEventListener('click',operate)

const clear = document.querySelector('.clear');

const numbers = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');

numbers.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        handleNumber(e.target.textContent)
    })
    
});

function handleNumber(number){
    if(currentNum.length<11){
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
}

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    })
})

function handleOperator(op){
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + operator;
    currentNum = "";
    currentDisplayNumber.textContent = "";
}

// equal.forEach((btn) => {
//     btn.addEventListener('click', (operator,previousNum,currentNum) => {
//         previousDisplayNumber.textContent = previousNum + operator + currentNum;
//         solution = operate(operator,currentNum,previousNum);
//         currentDisplayNumber.textContent = solution;

        
//     })

    
    
//  })