function smartLilly([yearLilly, washingMachinePrice, toyPrice]) {
    var year = parseInt(yearLilly);
    var washingMachine = parseFloat(washingMachinePrice);
    var toy = parseInt(toyPrice);

    var toyCount = 0;
    var birthdayMoney = 0;

    for (var i = 1; i <= year; i++) {
        if (i % 2 == 1) {
            toyCount++;
        }
        else {
            birthdayMoney += 10 * i / 2;
            birthdayMoney--;
        }
    }
    var money = birthdayMoney + toy * toyCount;

    if (money >= washingMachine) {
        console.log(`Yes! ${(money - washingMachine).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(washingMachine - money).toFixed(2)}`);
    }
}
smartLilly([10, 170.00, 6])