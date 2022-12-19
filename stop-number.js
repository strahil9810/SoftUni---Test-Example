function stopNumber([input, input1, input2]) {
    let start = Number(input);
    let number = Number(input1);
    let finish = Number(input2);
    var solution = "";

    for (var i = number; i >= start; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i == finish) {
                break;
            }
            solution += `${i} `;
        }
    }
    return solution;
}
console.log(stopNumber([1, 36, 12]));