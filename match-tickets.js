function solve([budget, categoria, numberPeople]){
    let VipOrNormal = categoria;
    let people = parseInt(numberPeople);
    var money = parseFloat(budget);

    if(people >= 1 && people <= 4){
        money = money - (money * 0.75);
        switch(VipOrNormal){
            case 'Normal':
                money = (money - (people * 249.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
            case 'VIP':
                money = (money - (people * 499.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
        }
    }
    if(people >= 5 && people <= 9){
        money = money - (money * 0.60);
        switch(VipOrNormal){
            case 'Normal':
                money = (money - (people * 249.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
            case 'VIP':
                money = (money - (people * 499.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
        }
    }
    if(people >= 10 && people <= 24){
        money = money - (money * 0.50);
        switch(VipOrNormal){
            case 'Normal':
                money = (money - (people * 249.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
            case 'VIP':
                money = (money - (people * 499.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
        }
    }
    if(people >= 25 && people <= 49){
        money = money - (money * 0.40);
        switch(VipOrNormal){
            case 'Normal':
                money = (money - (people * 249.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
            case 'VIP':
                money = (money - (people * 499.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money)} leva.`)
                }
            break;
        }
    }
    if(people >= 50){
        money = money - (money * 0.25);
        switch(VipOrNormal){
            case 'Normal':
                money = (money - (people * 249.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money).toFixed(2)} leva.`)
                }
            break;
            case 'VIP':
                money = (money - (people * 499.99)).toFixed(2);
                if(money >= 0){
                    console.log(`Yes! You have ${money} leva left.`);
                }
                else{
                    console.log(`Not enough money! You need ${Math.abs(money).toFixed(2)} leva.`)
                }
            break;
        }
    }
}
solve([1000, "Normal", 1])