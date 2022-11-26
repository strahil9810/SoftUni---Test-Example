function travelAgency([nameTown, packeTip, VIP, dayOfStay]){
    var town = nameTown;
    var tip = packeTip;
    var possession = VIP;
    var days  = parseInt(dayOfStay);
    var needPrice = 0;
    var price = 0;

    switch(town){
        case 'Borovets':
            if(possession == "yes"){
                switch(tip){
                    case 'noEquipment':
                        needPrice = 80 - 80 * 0.05;
                        price = (days * needPrice).toFixed(2);
                        break;
                    case 'withEquipment':
                        needPrice = 100 - 100 * 0.10;
                        price = (days * needPrice).toFixed(2);
                        break;
                }
            }
            else if(possession == "no"){
                switch(tip){
                    case 'noEquipment':
                        price = (days * 80).toFixed(2);
                        break;
                    case 'withEquipment':
                        price = (days * 100).toFixed(2);
                        break;
                }
            }
            break;
        case 'Bansko':
            if(possession == "yes"){
                switch(tip){
                    case 'noEquipment':
                        needPrice = 80 - 80 * 0.05;
                        price = (days * needPrice).toFixed(2);
                        break;
                    case 'withEquipment':
                        needPrice = 100 - 100 * 0.10;
                        price = (days * needPrice).toFixed(2);
                        break;
                }
            }
            else if(possession == "no"){
                switch(tip){
                    case 'noEquipment':
                        price = (days * 80).toFixed(2);
                        break;
                    case 'withEquipment':
                        price = (days * 100).toFixed(2);
                        break;
                }
            }
            break;
    }
    switch(town){
        case 'Burgas':
            if(possession == "yes"){
                switch(tip){
                    case 'withBreakfast':
                        needPrice = 130 - 130 * 0.12;
                        price = (days * needPrice).toFixed(2);
                        break;
                    case 'noBreakfast':
                        needPrice = 100 - 100 * 0.07;
                        price = (days * needPrice).toFixed(2);
                        break;
                }
            }
            else if(possession == "no"){
                switch(tip){
                    case 'withBreakfast':
                        price = (days * 130).toFixed(2);
                        break;
                    case 'noBreakfast':
                        price = (days * 100).toFixed(2);
                        break;
                }
            }
            break;
        case 'Burgas':
            if(possession == "yes"){
                switch(tip){
                    case 'withBreakfast':
                        needPrice = 130 - 130 * 0.12;
                        price = (days * needPrice).toFixed(2);
                        break;
                    case 'noBreakfast':
                        needPrice = 100 - 100 * 0.07;
                        price = (days * needPrice).toFixed(2);
                        break;
                }
            }
            else if(possession == "no"){
                switch(tip){
                    case 'withBreakfast':
                        price = (days * 130).toFixed(2);
                        break;
                    case 'noBreakfast':
                        price = (days * 100).toFixed(2);
                        break;
                }
            }
            break;
        case 'Varna':
            if(possession == "yes"){
                switch(tip){
                    case 'withBreakfast':
                        needPrice = 130 - 130 * 0.12;
                        price = (days * needPrice).toFixed(2);
                        break;
                    case 'noBreakfast':
                        needPrice = 100 - 100 * 0.07;
                        price = (days * needPrice).toFixed(2);
                        break;
                }
            }
            else if(possession == "no"){
                switch(tip){
                    case 'withBreakfast':
                        price = (days * 130).toFixed(2);
                        break;
                    case 'noBreakfast':
                        price = (days * 100).toFixed(2);
                        break;
                }
            }
            break;
    }
    if(days <= 0){
        console.log(`Days must be positive number!`);
    }
    else if(town != "Bansko" && town != "Borovets" && town != "Varna" && town != "Burgas"){
        console.log(`Invalid input!`);
    }
    else{
        console.log(`The price is ${price} lv! Have a nice time!`);
    }
}
travelAgency(["Borovets", "noEquipment", "yes", 6])