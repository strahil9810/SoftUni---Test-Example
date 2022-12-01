function evenOddSum(args) {
    var input = parseInt(args[0]);
    var evenSum = 0;
    var oddSum = 0;

    for (let i = 1; i <= input; i++) {
        if (i % 2 == 0) {
            evenSum += Number(args[i]);
        }
        else {
            oddSum += Number(args[i]);
        }
    }
    if (evenSum == oddSum) {
        console.log("Yes");
        console.log("Sum = " + evenSum);
    }
    else {
        console.log("No");
        console.log("Diff = " + Math.abs(evenSum - oddSum));
    }
}
evenOddSum([3,
    5,
    8,
    1])