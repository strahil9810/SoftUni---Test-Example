function solve([time, examMinute, ariveHour, ariveMinute]){
    let hourExam = parseInt(time);
    let minuteExam = parseInt(examMinute);
    let hourArive = parseInt(ariveHour);
    let minuteArive = parseInt(ariveMinute);

    let late = "Late";
    let onTime = "On Time";
    let early = "Early";

    let examTime = (hourExam * 60) + minuteExam;
    let ariveTime = (hourArive * 60) + minuteArive;

    let totalDifferenceMinutes = ariveTime -examTime;
    let studentArive = late;
    if(totalDifferenceMinutes < -30){
        studentArive = early;
    }
    else if(totalDifferenceMinutes <= 0){
        studentArive = onTime;
    }
    
    let result = "";
    if(totalDifferenceMinutes != 0){
        let hourDifference = Math.abs(~~(totalDifferenceMinutes / 60));
        let minuteDifference = Math.abs(totalDifferenceMinutes % 60);

        if(hourDifference > 0){
            result = hourDifference + ":" + (minuteDifference > 9 ? minuteDifference : "0" + minuteDifference) + " hours";
        }
        else{
            result = minuteDifference + " minutes";
        }

        if(totalDifferenceMinutes < 0){
            result += " before the start";
        }
        else{
            result += " after the start";
        }
    }
    console.log(`${studentArive} ${result}`);
}
solve([9, 00, 10 ,30])