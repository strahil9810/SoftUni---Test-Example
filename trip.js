function solve([budge, season]){
    let money = parseFloat(budge);
    let tide = season;

    switch(tide){
        case 'summer':
            if(money <= 100){
                console.log("Somewhere in Bulgaria");
                money = (money * 0.30).toFixed(2);
                console.log("Camp - " + money);
            }
            else if(money <= 1000 && money > 100){
                console.log("Somewhere in Balkans");
                money = (money * 0.40).toFixed(2);
                console.log("Camp - " + money);
            }
            else if(money > 1000){
                console.log("Somewhere in Europe");
                money = (money * 0.90).toFixed(2);
                console.log("Hotel - " + money);
            }
        break;
        case 'winter':
            if(money <= 100){
                console.log("Somewhere in Bulgaria");
                money = (money * 0.70).toFixed(2);
                console.log("Hotel - " + money);
            }
            else if(money <= 1000 && money > 100){
                console.log("Somewhere in Balkans");
                money = (money * 0.80).toFixed(2);
                console.log("Hotel - " + money);
            }
            else if(money > 1000){
                console.log("Somewhere in Europe");
                money = (money * 0.90).toFixed(2);
                console.log("Hotel - " + money);
            }
        break;
    }
}
solve([50, "summer"])