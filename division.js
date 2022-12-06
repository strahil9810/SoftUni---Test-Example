function division(inputNumber) {
    var input = parseInt(inputNumber[0]);

    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p1Percent = 0;
    var p2Percent = 0;
    var p3Percent = 0;

    for (var index = 1; index <= input; index++) {
        var currentNumber = Number(inputNumber[index]);
        if (currentNumber % 2 == 0) {
            p1++;
        }
        if (currentNumber % 3 == 0) {
            p2++;
        }
        if (currentNumber % 4 == 0) {
            p3++;
        }
    }

    p1Percent = ((p1 / input) * 100).toFixed(2);
    p2Percent = ((p2 / input) * 100).toFixed(2);
    p3Percent = ((p3 / input) * 100).toFixed(2);
    console.log(p1Percent + "%");
    console.log(p2Percent + "%");
    console.log(p3Percent + "%");
}
division([10,
    680,
    2,
    600,
    200,
    800,
    799,
    199,
    46,
    128,
    65])