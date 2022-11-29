function hotelRoom([month, nightNumber]) {
    var monthName = month;
    var nights = parseInt(nightNumber);
    var priceS = 0;
    var priseA = 0;
    var priceInApartment = 0;
    var priceInStudio = 0;
    var priceApartmen = 0;
    var priceStudio = 0;

    if (monthName == "May" || monthName == "Octomber") {
        if (nights > 7 && nights <= 14) {
            priceS = 50 * 0.05;
            priceInStudio = 50 - priceS;
            priceApartmen = (nights * 65).toFixed(2);
            console.log(`Apartment: ${priceApartmen} lv.`);
            priceStudio = (nights * priceInStudio).toFixed(2);
            console.log(`Studio: ${priceStudio} lv.`);
        }
        else if (nights > 14) {
            priseA = 65 * 0.10;
            priceInApartment = 65 - priseA;
            priceApartmen = (nights * priceInApartment).toFixed(2);
            console.log(`Apartment: ${priceApartmen} lv.`);
            priceS = 50 * 0.30;
            priceInStudio = 50 - priceS;
            priceStudio = (nights * priceInStudio).toFixed(2);
            console.log(`Studio: ${priceStudio} lv.`);
        }
        else {
            priceApartmen = (nights * 65).toFixed(2);
            console.log(`Apartment: ${priceApartmen} lv.`);
            priceStudio = (nights * 50).toFixed(2);
            console.log(`Studio: ${priceStudio} lv.`);
        }
    }
    else if (monthName == "June" || monthName == "September") {
        if (nights > 14) {
            priseA = 68.70 * 0.10;
            priceInApartment = 68.70 - priseA;
            priceApartmen = (nights * priceInApartment).toFixed(2);
            console.log(`Apartment: ${priceApartmen} lv.`);
            priceS = 75.20 * 0.20;
            priceInStudio = 75.20 - priceS;
            priceStudio = (nights * priceInStudio).toFixed(2);
            console.log(`Studio: ${priceStudio} lv.`);
        }
        else {
            priceApartmen = (nights * 68.70).toFixed(2);
            console.log(`Apartment: ${priceApartmen} lv.`);
            priceStudio = (nights * 75.20).toFixed(2);
            console.log(`Studio: ${priceStudio} lv.`);
        }
    }
    else if (monthName == "July" || monthName == "August") {
        if (nights > 14) {
            priseA = 77 * 0.10;
            priceInApartment = 77 - priseA;
            priceApartmen = (nights * priceInApartment).toFixed(2);
            console.log(`Apartment: ${priceApartmen} lv.`);
            priceStudio = (nights * 76).toFixed(2);
            console.log(`Studio: ${priceStudio} lv.`);
        }
        else {
            priceApartmen = (nights * 77).toFixed(2);
            console.log(`Apartment: ${priceApartmen} lv.`);
            priceStudio = (nights * 76).toFixed(2);
            console.log(`Studio: ${priceStudio} lv.`);
        }
    }

}
hotelRoom(["September", 20])