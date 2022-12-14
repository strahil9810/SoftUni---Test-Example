function evenPowerOfTwo([input]) {
    let n = parseInt(input);
    let num = 1;

    for (let i = 0; i <= n; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }
}
evenPowerOfTwo([10])