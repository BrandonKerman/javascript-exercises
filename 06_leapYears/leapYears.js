//function that determines whether or not a given year is a leap year
//takes in a year (Int) as an argument and returns either true or false
const leapYears = function(year) {
    //if 'year' is divisible by 4, return true
    if (year % 4 === 0) {
        return true;
    }
    //if 'year' is divisible by 100 AND NOT divisible by 400, return false
    else if (year % 100 === 0 && year % 400 != 0) {
        return false
    }
    //if 'year' is divisible by 100 AND divisible by 400, return true
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
