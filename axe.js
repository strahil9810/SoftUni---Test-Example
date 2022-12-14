function axe([input]) {
    let n = Number(input);

    let width = 5 * n;
    let leftDashes = 3 * n;
    let middleDashes = 0;
    let rightDashes = width - leftDashes - middleDashes - 2;

    for (let i = 0; i < n; i++) {
        console.log("-".repeat(leftDashes) + "*" + "-".repeat(middleDashes) + "*" + "-".repeat(rightDashes));
        middleDashes++;
        rightDashes--;
    }

    middleDashes--;
    leftDashes++;
    rightDashes++;

    let axeHeight = Math.trunc(n / 2);

    for (let i = 0; i < axeHeight; i++) {
        console.log("*".repeat(leftDashes) + "-".repeat(middleDashes) + "*" + "-".repeat(rightDashes));
    }

    leftDashes--;

    for (let i = 0; i < axeHeight - 1; i++) {
        console.log("-".repeat(leftDashes) + "*" + "-".repeat(middleDashes) + "*" + "-".repeat(rightDashes));

        middleDashes += 2;
        leftDashes--;
        rightDashes--;
    }

    console.log("-".repeat(leftDashes) + "*" + "*".repeat(middleDashes) + "*" + "-".repeat(rightDashes));
}
axe([5])