function shop([product, town, quantity]){
    var productName = product;
    var city = town;
    var amount = parseFloat(quantity);
    var price = 0;

    if(city == "Sofia"){
        if(productName == "coffee"){
            price = (amount * 0.50).toFixed(2);
        }
        else if(productName == "water"){
            price = (amount * 0.80).toFixed(2);
        }
        else if(productName == "beer"){
            price = (amount * 1.20).toFixed(2);
        }
        else if(productName == "sweets"){
            price = (amount * 1.45).toFixed(2);
        }
        else if(productName == "peanuts"){
            price = (amount * 1.60).toFixed(2);
        }
    }
    else if(city == "Plovdiv"){
        if(productName == "coffee"){
            price = (amount * 0.40).toFixed(2);
        }
        else if(productName == "water"){
            price = (amount * 0.70).toFixed(2);
        }
        else if(productName == "beer"){
            price = (amount * 1.15).toFixed(2);
        }
        else if(productName == "sweets"){
            price = (amount * 1.30).toFixed(2);
        }
        else if(productName == "peanuts"){
            price = (amount * 1.50).toFixed(2);
        }
    }
    else if(city == "Varna"){
        if(productName == "coffee"){
            price = (amount * 0.45).toFixed(2);
        }
        else if(productName == "water"){
            price = (amount * 0.70).toFixed(2);
        }
        else if(productName == "beer"){
            price = (amount * 1.10).toFixed(2);
        }
        else if(productName == "sweets"){
            price = (amount * 1.35).toFixed(2);
        }
        else if(productName == "peanuts"){
            price = (amount * 1.55).toFixed(2);
        }
    }
    console.log(price);
}
shop(["water", "Plovdiv", 3])