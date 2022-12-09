function cristmasTree(input) {
    for (let i = 0; i <= input; i++) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(input - i);
        let body = " | ";
        let row = spaces + stars + body + stars + spaces;
        console.log(row);
    }
}
cristmasTree(3)