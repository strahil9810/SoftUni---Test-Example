function butterfly([input]) {
    let n = Number(input);
    let halfRowSize = n - 2;


        for (let i = 0; i < halfRowSize; i++) {
            if (i % 2 == 1) {
                console.log("-".repeat(halfRowSize) + "\\" + " " + "/" + "-".repeat(halfRowSize));
            }
            else {
                console.log("*".repeat(halfRowSize) + "\\" + " " + "/" + "*".repeat(halfRowSize));
            }
        }
    
    console.log(" ".repeat(n - 1) + "@" + " ".repeat(n - 1));


        for (let i = 0; i < halfRowSize; i++) {
            if (i % 2 == 1) {
                console.log("-".repeat(halfRowSize) + "/" + " " + "\\" + "-".repeat(halfRowSize));
            }
            else {
                console.log("*".repeat(halfRowSize) + "/" + " " + "\\" + "*".repeat(halfRowSize));
            }
        }
    
}
butterfly([5])