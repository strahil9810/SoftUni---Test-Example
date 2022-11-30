function maxNumber(args) {
    let input = parseInt(args[0]);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= input; i++) {
        let num = parseInt(args[i]);
        if (num > max) {
            max = num;
        }
    }
    console.log("max = " + max);
}
maxNumber([2, -1, -2])