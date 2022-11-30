function sumNumber(args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += Number(args[i]);
    }
    console.log(sum);
}
sumNumber(10)