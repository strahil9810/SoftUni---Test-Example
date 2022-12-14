function powerOfTwo([input]) {
    let n = parseInt(input);
    let num = 1;

    for (let i = 0; i <= n; i++) {
        console.log(num);
        num = num * 2;
    }
}
powerOfTwo([10])