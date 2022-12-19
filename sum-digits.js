function sumDigits([input]) {
    let n = parseInt(input);
    let sum = 0;

    do {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    }
    while (n > 0);

    console.log("Sum of digits: " + sum);
}
sumDigits([5634])