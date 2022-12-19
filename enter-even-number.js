function enterEvenNumber(input){
    let i=0;
    let num=0;

    while(true){
        num=parseInt(input[i]);

        if(num%2===0){
            break;
        }
        console.log("The number is not even.");
        i++;
    }
    console.log(`Even number entered: ${num}`);
}
enterEvenNumber([2])