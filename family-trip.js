function familyTrip([budget, numberOfNights, nightsPrice, percentageForAdditionalCosts]){
    var allBudget = parseFloat(budget);
    var nights = parseInt(numberOfNights);
    var allprice = parseFloat(nightsPrice);
    var additionalCosts = parseInt(percentageForAdditionalCosts);

    if(nights > 7){
        let priceWithpercent = allprice * 0.05;
        let nightPrice = allprice - priceWithpercent;
        let allNightPrice = nights * nightPrice;
        let costs = (allBudget * additionalCosts) / 100;
        if(allNightPrice + costs <= allBudget){
            let left = (allBudget - (allNightPrice + costs)).toFixed(2);
            console.log(`Ivanovi will be left with ${left} leva after vacation`);
        }
        else{
            let need = ((allNightPrice + costs) - allBudget).toFixed(2);
            console.log(`${need} leva needed`);
        }
    }
    else if(nights <= 7){
        let priceWithpercent = 0;
        let nightPrice = allprice - priceWithpercent;
        let allNightPrice = nights * nightPrice;
        let costs = (allBudget * additionalCosts) / 100;
        if(allNightPrice + costs <= allBudget){
            let left = (allBudget - (allNightPrice + costs)).toFixed(2);
            console.log(`Ivanovi will be left with ${left} leva after vacation`);
        }
        else{
            let need = ((allNightPrice + costs) - allBudget).toFixed(2);
            console.log(`${need} leva needed`);
        }
    }
}
familyTrip([500, 7, 66, 15])