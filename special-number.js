function specialNumber(input) {
    var n = parseInt(input);
    var result = "";

    for (var i = 1; i < 10; i++) {
        if (n % i == 0) {
            for (var j = 1; j < 10; j++) {
                if (n % j == 0) {
                    for (var h = 1; h < 10; h++) {
                        if (n % h == 0) {
                            for(var s=1;s<10;s++){
                                if(n%s==0){
                                    result+=`${i}${j}${h}${s} `;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}
console.log(specialNumber(3));