function GCD([inputA, inputB]) {
    let a = parseInt(inputA);
    let b = parseInt(inputB);

    while (b !== 0) {
        let oldB = b;
        b = a % b;
        a = oldB;
    }
    console.log("GCD = " + a);
}
GCD([100, 50])