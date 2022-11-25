function poolDay([numberOfPeople, entranceFee, priceOneLounger, priceOneUmbrella]){
    let peopleNumber = parseInt(numberOfPeople);
    let fee = parseFloat(entranceFee);
    let loungerPrice = parseFloat(priceOneLounger);
    let umbrellaPrice = parseFloat(priceOneUmbrella);

    let inputPrce = peopleNumber * fee;
    let procentOfPeople = Math.round(peopleNumber * 0.75);
    let lounger = procentOfPeople * loungerPrice;
    let halfPeople = Math.round(peopleNumber * 0.50);

    let umbrella = halfPeople * umbrellaPrice;
    let allPrice = (inputPrce + lounger + umbrella).toFixed(2);
    console.log(allPrice);
}
poolDay([100, 8, 6, 4])