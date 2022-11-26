function address([age, gender]){
    if(gender == "woman"){
        if(age >= 16){
            console.log("Hello Ms.");
        }
        else{
            console.log("Hello Miss.");
        }
    }
    else{
        if(age >= 16){
            console.log("Hello Mr.");
        }
        else{
            console.log("Hello Master.");
        }
    }
}
address([13.5, "man"])