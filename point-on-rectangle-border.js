function pointOnRectangle([X1, Y1, X2, Y2, X, Y]){
    let x1 = parseFloat(X1);
    let y1 = parseFloat(Y1);
    let x2 = parseFloat(X2);
    let y2 = parseFloat(Y2);
    let x = parseFloat(X);
    let y = parseFloat(Y);

    if(((x === x1 || x === x2) && (y >= y1) && (y <= y2)) || ((y === y1 || y === y2) && (x >= x1) && (x <= x2))){
        console.log("Border");
    }
    else{
        console.log("Inside/Outsite");
    }
}
pointOnRectangle([2, -3, 12, 3, 12, -1])