function sumNumber(args) {
    let sum = 0;
    for (let i = 1; i < args.length; i++) {
        sum += Number(args[i]);
    }
    console.log(sum);
}
sumNumber([0])