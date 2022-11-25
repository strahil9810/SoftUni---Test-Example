function coffeeMachine([dring, sugar, dringNumber]){
    var dringTip = dring;
    var sugarTip = sugar;
    var numberDring = parseInt(dringNumber);
    var needPrice = 0;
    var discount = 0;
    var secondDiscount = 0;
    var thirdDiscount = 0;
    var price = 0;
    var finishPrice = 0;

    if(sugarTip == "without" && dringTip == "espresso"){
        needPrice = numberDring * 0.90;
        discount = needPrice * 0.35;
        price = (needPrice - discount).toFixed(2);
        if(numberDring >= 5){
            secondDiscount = price * 0.25;
            finishPrice = (price - secondDiscount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
        if(finishPrice > 15){
            thirdDiscount = finishPrice * 0.20;
            finishPrice = (finishPrice - thirdDiscount).toFixed(2);
        }
    }
    else if(sugarTip == "normal" && dringTip == "espresso"){
        price = numberDring * 1;
        if(numberDring >= 5){
            discount = price * 0.25;
            finishPrice = (price - discount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
        if(finishPrice > 15){
            thirdDiscount = finishPrice * 0.20;
            finishPrice = (finishPrice - thirdDiscount).toFixed(2);
        }
    }
    else if(sugarTip == "extra" && dringTip == "espresso"){
        price = numberDring * 1.20;
        if(numberDring >= 5){
            discount = price * 0.25;
            finishPrice = price - discount;
        }
        else{
            finishPrice = price;
        }
        if(finishPrice > 15){
            thirdDiscount = finishPrice * 0.20;
            finishPrice = (finishPrice - thirdDiscount).toFixed(2);
        }
    }
    else if(sugarTip == "without" && dringTip == "cappuccino"){
        needPrice = numberDring * 1;
        discount = needPrice * 0.35;
        price = (needPrice - discount).toFixed(2);
        if(price > 15){
            thirdDiscount = price * 0.20;
            finishPrice = (price - thirdDiscount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
    }
    else if(sugarTip == "normal" && dringTip == "cappuccino"){
        price = (numberDring * 1.20).toFixed(2);
        if(price > 15){
            thirdDiscount = price * 0.20;
            finishPrice = (price - thirdDiscount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
    }
    else if(sugarTip == "extra" && dringTip == "cappuccino"){
        price = (numberDring * 1.60).toFixed(2);
        if(price > 15){
            thirdDiscount = price * 0.20;
            finishPrice = (price - thirdDiscount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
    }
    else if(sugarTip == "without" && dringTip == "tea"){
        needPrice = numberDring * 0.50;
        discount = needPrice * 0.35;
        price = (needPrice - discount).toFixed(2);
        if(price > 15){
            thirdDiscount = price * 0.20;
            finishPrice = (price - thirdDiscount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
    }
    else if(sugarTip == "normal" && dringTip == "tea"){
        price = (numberDring * 0.60).toFixed(2);
        if(price > 15){
            thirdDiscount = price * 0.20;
            finishPrice = (price - thirdDiscount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
    }
    else if(sugarTip == "extra" && dringTip == "tea"){
        price = (numberDring * 0.70).toFixed(2);
        if(price > 15){
            thirdDiscount = price * 0.20;
            finishPrice = (price - thirdDiscount).toFixed(2);
        }
        else{
            finishPrice = price;
        }
    }
    console.log(`You bought ${numberDring} cups of ${dringTip} for ${finishPrice}lv.`);
}
coffeeMachine(["tea", "extra", 3])