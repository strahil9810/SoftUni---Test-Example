function numbers(input) {
    var [first, second, third] = input.toString().split('').map(Number);
    var row = first + second;
    var col = first + third;
    var result = "";
    var number = parseInt(input);

    for (var i = 0; i < row; i++) {
        result = "";
        for (var j = 0; j < col; j++) {
            if (number % 5 === 0) {
                number -= first;
            }
            else if (number % 3 === 0) {
                number -= second;
            }
            else {
                number += third;
            }
            result += `${number} `;
        }
        console.log(result);
    }
}
numbers(376)