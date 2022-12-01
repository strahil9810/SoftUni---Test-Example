function oddEvenPosition(inputNumber) {
    var input = parseInt(inputNumber);
    var oddSum = 0;
    var evenSum = 0;
    var oddMax = -10000000;
    var evenMax = -10000000;
    var oddMin = 10000000;
    var evenMin = 10000000;

    for (var i = 1; i <= input; i++) {
        var number = Number(inputNumber[i]);

        if (i % 2 == 0) {
            if (number > evenMax) {
                evenMax = number;
            }
            if (number < evenMin) {
                evenMin = number;
            }
            evenSum += number;
        }
        else {
            if (number > oddMax) {
                oddMax = number;
            }
            if (number < oddMin) {
                oddMin = number;
            }
            oddSum += number;
        }
    }

    console.log("OddSum=" + oddSum);

    if (oddMin == 10000000) {
        console.log("OddMin=No");
    } else {
        console.log("OddMin=" + oddMin);
    }

    if (oddMax == -10000000) {
        console.log("OddMax=No");
    } else {
        console.log("OddMax=" + oddMax);
    }

    console.log("EvenSum=" + evenSum);

    if (evenMin == 10000000) {
        console.log("EvenMin=No");
    } else {
        console.log("EvenMin=" + evenMin);
    }

    if (evenMax == -10000000) {
        console.log("EvenMax=No");
    } else {
        console.log("EvenMax=" + evenMax);
    }
}
oddEvenPosition([3, -1,-2,-3])