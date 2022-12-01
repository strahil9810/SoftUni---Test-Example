function halfSumElement(inputNumber) {
    var input = parseInt(inputNumber[0]);
    var sum = 0;
    var max = 0;

    for (var i = 1; i <= input; i++) {
        let number = Number(inputNumber[i]);
        if (number > max) {
            max = number;
        }
        sum += number;
    }

    sum = sum - max;
    if (sum == max) {
        console.log("Yes");
        console.log("Sum = " + max);
    }
    else {
        console.log("No");
        console.log("Diff = " + Math.abs(max - sum));
    }
}
halfSumElement([4,
6,
1,
2,
3])