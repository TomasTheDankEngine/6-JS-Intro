function lifePathNum(dateOfBirth) {
    let lifeNumber = 0;
    dateOfBirth = dateOfBirth + '';
    const dateArray = dateOfBirth.split("-");

    let num = 0;

    for (let i = 0; i < dateArray.length; i++) {
        console.log(dateArray[i]);
        let digits = dateArray[i];

        if (digits.length < 2) {
            lifeNumber += parseInt(digits);
        } else {digits.toString('');
                for (let j = 0; j < digits.length; j++) {
                    num += parseInt(digits[i][j]);
                    console.log(digits[i][j]);
                    digits = num;
                    digits.toString();
                }            
        }      
        
    }
    return lifeNumber;
}

console.log(lifePathNum("1879-03-14"));
//console.log(lifePathNum("1815-12-10"));
//console.log(lifePathNum("1961-07-04"));