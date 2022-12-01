function leftRightSum(args) {
    var leftIndex = parseInt(args[0]);
    var leftSum = 0;
    var rightSum = 0;

    for (var i = 1; i <= leftIndex; i++) {
        leftSum += Number(args[i]);
    }
    for (var j = leftIndex + 1; j < args.length; j++) {
        rightSum += Number(args[j]);
    }

    if (leftSum === rightSum) {
        console.log("Yes, sum = " + leftSum);
    }
    else {
        console.log("No, diff = " + Math.abs(leftSum - rightSum));
    }
}
leftRightSum([1,
    5,
    9])