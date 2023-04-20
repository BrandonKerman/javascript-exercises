const reverseString = function(string) {
    let stringArray = string.split('') //convert string to array of characters
    
    stringArray = stringArray.reverse(); //use reverse() method on array of characters to reverse array

    let newString = stringArray.join(''); //convert array of characters back into a string without the separation of commas

    return newString;

    /*
    the solution is the above 3 steps^ just simplified on 1 line:
        return string.split("").reverse().join("");
    */
};

// Do not edit below this line
module.exports = reverseString;
