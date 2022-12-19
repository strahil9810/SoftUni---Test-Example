function magicNumber(input) {
    let number = parseInt(input);
    let result = '';

    for (var num1 = 1; num1 < 10; num1++) {
        for (var num2 = 1; num2 < 10; num2++) {
            for (var num3 = 1; num3 < 10; num3++) {
                for (var num4 = 1; num4 < 10; num4++) {
                    for (var num5 = 1; num5 < 10; num5++) {
                        for (var num6 = 1; num6 < 10; num6++) {
                            let solution = num1 * num2 * num3 * num4 * num5 * num6;
                            if (solution == number) {
                                result += `${num1}${num2}${num3}${num4}${num5}${num6}` + " ";
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}
console.log(magicNumber(12));