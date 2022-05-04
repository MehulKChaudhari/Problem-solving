function getPhoneNumber(s) {
    const stringNumbers = {
        "zero" : 0,
        "one": 1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9
    }
    const repetations = {
        "double": 2,
        "triple":3,        
    }

    // Write your code here
    const numbers = s.split(' ')
    let digits = "";

        if(s.length ===0){
        return 0;
    }
    numbers.forEach((element,index) => {
        if(stringNumbers.hasOwnProperty(element) && !repetations.hasOwnProperty(numbers[index-1])){
            console.log("syri",stringNumbers[element])
            digits = digits + stringNumbers[element];
            return
        }
        else if (repetations.hasOwnProperty(element)){
            const repeat = repetations[element];
            for(i = 0; i< repeat; i++){
                console.log("sdjasdas",stringNumbers[numbers[index+1]]) 
                digits = digits + stringNumbers[numbers[index+1]]
            }
            return
            
        }
    });

    console.log("digits",typeof(digits), parseInt(digits,10))

}

getPhoneNumber('six double two eight nine five six one three four triple zero')
