function rhombus([arg1]){
    let n = Number(arg1);
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "* ".repeat(i) + " ".repeat(n-i));
    }
    for (let i = n-1; i >= 1; i--) {
        console.log(" ".repeat(n-i) + "* ".repeat(i) + " ".repeat(n-i));
    }
}
rhombus([3])