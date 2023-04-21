//function takes in 2 integers: 'numberA' and 'numberB'
//function will return the sum of every number in between (and including) them
const sumAll = function(numberA, numberB) {
    //create variables to hold the final sum, the greater, and lesser of the 2 arg integers
    //initialize them to 0 (type Int)
    let sum = 0;
    let greaterNum = 0; 
    let lesserNum = 0;

    //determine the greater and lesser of the 2 arg integers
    //these will be used to loop through their range with a "for" loop
    if (numberA > numberB) {
        greaterNum = numberA;
        lesserNum = numberB;
    } else if (numberB > numberA) {
        greaterNum = numberB;
        lesserNum = numberA;
    }
    
    //loop through the given numbers
    //sum all numbers in between (and including) the 2 args integers
    for (let i = lesserNum; i <= greaterNum; i++) {
        sum += i; //on each iteration add the number to the sum
    }

    //return the sum after finishing the loop
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
