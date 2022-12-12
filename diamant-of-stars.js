function solve([n]) {
    n = Number(n);
    if (n <= 2) {
        console.log("*".repeat(n));
        return;
    }
    let startingStars = 1;
    let height = Math.floor(n / 2);
    let middleDashes = "-";

    if (n % 2 == 0) {
        startingStars = 2;
        height = (n / 2) - 1;
        middleDashes = "--";
    }
    let dasshes = (n - startingStars) / 2;

    console.log("-".repeat(dasshes) +
        "*".repeat(startingStars) +
        "-".repeat(dasshes));

    for (let row = 1; row < height; row++) {
        console.log("-".repeat(dasshes - row) + "*" + middleDashes + "*" + "-".repeat(dasshes - row));

        middleDashes += "--";
    }

    console.log(`*${middleDashes}*`);

    for (let row = 1; row < height; row++) {
        console.log("-".repeat(row) + "*" + "-".repeat(n - 2 - row * 2) + "*" + "-".repeat(row));

        middleDashes += "--";
    }

    console.log("-".repeat(dasshes) +
        "*".repeat(startingStars) +
        "-".repeat(dasshes));
}
solve([8])