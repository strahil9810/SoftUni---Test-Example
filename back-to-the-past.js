function backToThePast([inheritedMoney, liveYear]) {
    var money = parseFloat(inheritedMoney);
    var yearToLive = parseInt(liveYear);
    var years = 18;

    for (var currentYear = 1800; currentYear <= yearToLive; currentYear++) {
        if (currentYear % 2 == 0) {
            money -= 12000;
        }
        else {
            money -= (12000 + 50 * years);
        }
        years++;
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    }
    else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}
backToThePast([100000.15, 1808])