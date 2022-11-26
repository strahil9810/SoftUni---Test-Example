function invalidNumber(number){
    let num = parseFloat(number);
    let inRange = (num >= 100 && num <= 200) || num === 0;

    if(!inRange){
        console.log("invalid");
    }
}
invalidNumber(220)