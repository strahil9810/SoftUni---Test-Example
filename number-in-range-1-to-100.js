function numberInRange(input) {
    let num = parseInt(input);
    let i = 0;

    while (num < 1 || num > 100) {
        i++;
        console.log("Invalid number!");
        num = parseInt(input[i]);
    }

    console.log(`The number is: ${num}`);
}
numberInRange([140])