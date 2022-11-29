function solve([number1, number2, operation]){
    let firstNumber = parseInt(number1);
    let secondNumber = parseInt(number2);
    let some = operation;
    var result = 0;

    if((some === "/" || some === "%") && secondNumber === 0){
        console.log(`Cannot divide ${firstNumber} by zero`);
        return;
    }
    switch(some){
        case '+':
            result = firstNumber + secondNumber;
        break;
        case '-':
            result = firstNumber - secondNumber;
        break;
        case '*':
            result = firstNumber * secondNumber;
        break;
        case '/':
            result = (firstNumber / secondNumber).toFixed(2);
            console.log(`${firstNumber} ${some} ${secondNumber} = ${result}`);
        return;
        case '%':
            result = firstNumber % secondNumber;
            console.log(`${firstNumber} ${some} ${secondNumber} = ${result}`);
        return;
    }
    if(result % 2 === 0){
        console.log(`${firstNumber} ${some} ${secondNumber} = ${result} - even`);
    }
    else{
        console.log(`${firstNumber} ${some} ${secondNumber} = ${result} - odd`);
    }
}
solve([10, 1, "-"])