const repeatString = function(string, num) {
    //error checking
    if (num < 0) {
        return "Error"
    }

    let newString = ""; //create variable to hold the string we will return

    //use loop to repeat the string the given number ('num') of times
    for (let i = 0; i < num; i++) {
        newString = newString + string;
    }

    return newString; //return variable which now contains the string repeated the given number of times
};

// Do not edit below this line
module.exports = repeatString;
