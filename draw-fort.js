function drawFort(input) {
    let n = Number(input);
    let colSize = Math.trunc(n / 2);
    let midSize = 2 * n - 4 - colSize * 2;

    let towerTop = "/" + "^".repeat(colSize) + "\\";
    console.log(towerTop + "_".repeat(midSize) + towerTop);

    for (let row = 0; row < n - 3; row++) {
        console.log("|" + " ".repeat(2 * n - 2) + "|");
    }

    console.log("|" + " ".repeat(colSize + 1) + "_".repeat(midSize) + " ".repeat(colSize + 1) + "|");

    let towerBottom = "\\" + "_".repeat(colSize) + "/";
    console.log(towerBottom + " ".repeat(midSize) + towerBottom);
}
drawFort(5)