function histograma(inputNumber) {
    var input = parseInt(inputNumber);
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;

    var p1Percent = 0;
    var p2Percent = 0;
    var p3Percent = 0;
    var p4Percent = 0;
    var p5Percent = 0;

    for (let i = 1; i <= input; i++) {
        let currentNumber = Number(inputNumber[i]);
        if (currentNumber < 200) {
            p1++;
        }
        else if (currentNumber < 400) {
            p2++;
        }
        else if (currentNumber < 600) {
            p3++;
        }
        else if (currentNumber < 800) {
            p4++;
        }
        else {
            p5++;
        }
    }
    p1Percent = (p1 / input * 100).toFixed(2);
    p2Percent = (p2 / input * 100).toFixed(2);
    p3Percent = (p3 / input * 100).toFixed(2);
    p4Percent = (p4 / input * 100).toFixed(2);
    p5Percent = (p5 / input * 100).toFixed(2);

    console.log(p1Percent + "%");
    console.log(p2Percent + "%");
    console.log(p3Percent + "%");
    console.log(p4Percent + "%");
    console.log(p5Percent + "%");
}
histograma([14,
53,
7,
56,
180,
450])