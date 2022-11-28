function cinema([projectName, row, cow]){
    var project = projectName;
    var r = parseInt(row);
    var c = parseInt(cow);
    var price = 0;

    switch(project){
        case "Premiere":
            price = (r * c * 12).toFixed(2);
        break;
        case "Normal":
            price = (r * c * 7.50).toFixed(2);
        break;
        case "Discount":
            price = (r * c * 5).toFixed(2);
        break;
    }
    console.log(`${price} leva`);
}
cinema(["Normal", 21, 13])