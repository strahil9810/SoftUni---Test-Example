function house([input]) {
    let stars = 1;
    if (input % 2 === 0) {
        stars++;
    }
    let roofLength = Math.ceil(parseInt(input) / 2);
    for (let i = 0; i < roofLength; i++) {
        let padding = (input - stars) / 2;
        let line = "-".repeat(padding);
        line += "*".repeat(stars);
        line += "-".repeat(padding);
        console.log(line);
        stars += 2;
    }
    for (let i = 0; i < Math.floor(input / 2); i++) {
        console.log("|" + "*".repeat(input - 2) + "|");
    }
}
house([5])