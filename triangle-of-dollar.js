function triangleOfStars(input){
    for(let i=1;i<=input;i++){
        let dollar="$";
        for(let j=1;j<i;j++){
            dollar+=" $";
        }
        console.log(dollar);
    }
}
triangleOfStars(3)