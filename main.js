function calculate(event) {
    // console.log(event);
    console.log(event.target.value);
    const inputValue=event.target.value;
    // regesx we will use to separate the input value into numbers and operator
    const expression=/\+|\-|\*|\//;
    const numbers=inputValue.split(expression);
    console.log("The data are :",numbers)
    // we could use parseInt(numbers[0]) too. We use +  
    const num1=+numbers[0];
    const num2=+numbers[1];
    const operation = inputValue.match(expression);
    console.log("The operator is :",operation);
    if(operation ===null || isNaN(num1) || isNaN(num2)){
        updateResult("Operation not recognized");
        return;
    }
  
    const operator =operation[0];
    const calculator=new Calculator();
    calculator.add(num1);
    let result;
    switch(operator){
        case '+':
            result=calculator.add(num2);
            break;
        case '-':
            result=calculator.subtract(num2)
            break;
        case '*':
            result=calculator.multiply(num2);
            break;
        case '/':
            result=calculator.divide(num2)
            break;
    }
    console.log("Answer is :",result);
    updateResult(result);

}
function updateResult(result){
    let element=document.getElementById("result");
    if(element){
        element.innerText=result;
    }

}

document.getElementById('inputValue').addEventListener('change',calculate);