function fruitShop([fruit, dayOfWeek, quantity]){
    var fruitName = fruit;
    var day = dayOfWeek;
    var amount = parseFloat(quantity)
    var price = 0;

    if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
        if(fruitName == "banana"){
            price = (amount * 2.50).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "apple"){
            price = (amount * 1.20).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "orange"){
            price = (amount * 0.85).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "grapefruit"){
            price = (amount * 1.45).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "kiwi"){
            price = (amount * 2.70).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "pineapple"){
            price = (amount * 5.50).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "grapes"){
            price = (amount * 3.85).toFixed(2);
            console.log(price);
        }
        else{
            console.log("error");
        }
    }
    else if(day == "Saturday" || day == "Sunday"){
        if(fruitName == "banana"){
            price = (amount * 2.70).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "apple"){
            price = (amount * 1.25).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "orange"){
            price = (amount * 0.90).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "grapefruit"){
            price = (amount * 1.60).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "kiwi"){
            price = (amount * 3.00).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "pineapple"){
            price = (amount * 5.60).toFixed(2);
            console.log(price);
        }
        else if(fruitName == "grapes"){
            price = (amount * 4.20).toFixed(2);
            console.log(price);
        }
        else{
            console.log("error");
        }
    }
    else{
        console.log("error");
    }
}
fruitShop(["tomato", "Monday", 0.5])