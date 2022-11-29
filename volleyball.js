function volleyball([year, dayHolidays, dayWeekend]){
    let leapOrNormal = year.toLowerCase();
    let holiday = parseInt(dayHolidays);
    let weekends = parseInt(dayWeekend);

    let sofiaWeekend = 48 - weekends;
    let sofiaPlay = 3 * sofiaWeekend / 4 + 2 * holiday / 3;
    let totalPlay = sofiaPlay + weekends;

    if(leapOrNormal == "leap"){
        totalPlay = Math.floor(15 * totalPlay / 100 + totalPlay);
    }
    else if(leapOrNormal == "normal"){
        totalPlay = Math.floor(totalPlay);
    }
    console.log(totalPlay);
}
volleyball(["leap", 5, 2])