function starsSquare(input) {
    for (let i = 1; i <= input; i++) {
        let stars = "*";
        for (let j = 1; j < input; j++) {
            stars += " *";
        }
        console.log(stars);
    }
}
starsSquare(3)