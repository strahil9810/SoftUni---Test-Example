function fruitOrVegetable(product){
    let name = product;

    if(name == "banana" || name == "apple" || name == "kiwi" || name == "cherry" || name == "lemon" || name == "grapes"){
        console.log("fruit");
    }
    else if(name == "tomato" || name == "cucumber" || name == "pepper" || name == "carrot"){
        console.log("vegetable");
    }
    else{
        console.log("unknown");
    }
}
fruitOrVegetable("banana")