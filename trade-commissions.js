function tradeCommision([town, salesVolume]){
    var city = town;
    var sales = parseFloat(salesVolume);
    var commission = 0;

    if(sales >= 0 && sales <= 500){
        if(city == "Sofia"){
            commission = (sales * 5 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Varna"){
            commission = (sales * 4.5 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Plovdiv"){
            commission = (sales * 5.5 / 100).toFixed(2);
            console.log(commission);
        }
        else{
            console.log("error");
        }
    }
    else if(sales > 500 && sales <= 1000){
        if(city == "Sofia"){
            commission = (sales * 7 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Varna"){
            commission = (sales * 7.5 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Plovdiv"){
            commission = (sales * 8 / 100).toFixed(2);
            console.log(commission);
        }
        else{
            console.log("error");
        }
    }
    else if(sales > 1000 && sales <= 10000){
        if(city == "Sofia"){
            commission = (sales * 8 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Varna"){
            commission = (sales * 10 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Plovdiv"){
            commission = (sales * 12 / 100).toFixed(2);
            console.log(commission);
        }
        else{
            console.log("error");
        }
    }
    else if(sales > 10000){
        if(city == "Sofia"){
            commission = (sales * 12 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Varna"){
            commission = (sales * 13 / 100).toFixed(2);
            console.log(commission);
        }
        else if(city == "Plovdiv"){
            commission = (sales * 14.5 / 100).toFixed(2);
            console.log(commission);
        }
        else{
            console.log("error");
        }
    }
    else if(sales < 0){
        console.log("error");
    }
}
tradeCommision(["Sofia", -50])