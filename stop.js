function stoppSchild([input]) {
    let n = Number(input);
    let dots = n + 1;
    let underScores = 2 * n + 1;

    console.log(".".repeat(dots) + "_".repeat(underScores) + ".".repeat(dots));
    underScores = n * 2 - 1;

    for (let i = 0; i < n; i++) {
        dots--;
        console.log(".".repeat(dots) + "//" + "_".repeat(underScores) + "\\\\" + ".".repeat(dots));
        underScores += 2;
    }

    console.log("//" + "_".repeat((underScores - 5) / 2) + "STOP!" + "_".repeat((underScores - 5) / 2) + "\\\\");

    for (let i = 0; i < n; i++) {
        console.log(".".repeat(i) + "\\\\" + "_".repeat(underScores) + "//" + ".".repeat(i));
        underScores -= 2;
    }
}
stoppSchild([3])