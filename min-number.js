function minNumber(args) {
    let input = parseInt(args[0]);
    let min = Number.POSITIVE_INFINITY;

    for (var i = 1; i <= input; i++) {
        let number = parseInt(args[i]);
        if (number < min) {
            min = number;
        }
    }
    console.log(min);
}
minNumber([4, 45, -20, 7, 99])