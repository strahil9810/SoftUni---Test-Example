function pointOnFigures([number, cordinateX, cordinateY]){
    let h = parseInt(number);
    let x = parseInt(cordinateX);
    let y = parseInt(cordinateY);

    let outRectangle1 = (x < 0 || x > 3 * h) || (y < 0 || y > h);
    let outRectangle2 = (x < h || x > 2 * h) || (y < h || y > 4 * h);

    let inRectangle1 = (x > 0 && x < 3 * h) && (y > 0 && y < h);
    let inRectangle2 = (x > h && x < 2 * h) && (y > h && y < 4 * h);

    let commonBorder = x > h && x < 2 * h && y === h;

    if(outRectangle1 && outRectangle2){
        console.log("outside");
    }
    else if(inRectangle1 || inRectangle2 || commonBorder){
        console.log("inside");
    }
    else{
        console.log("border");
    }
}
pointOnFigures([15, 37, 18])