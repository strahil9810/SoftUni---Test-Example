function factorial([input]) {
    let n = parseInt(input);
    let fact = 1;

    do {
        fact = fact * n;
        n--;
    }
    while (n > 1);
    console.log(fact);
}
factorial([25])