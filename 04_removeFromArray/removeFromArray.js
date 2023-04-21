/*
The rest parameter syntax ('...args') allows a function 
to accept an indefinite number of arguments as an array, 
providing a way to represent variadic functions in JavaScript
*/
const removeFromArray = function(array, ...args) {   
    //create new empty array 'newArray'
    //this will be populated with the desired output array (with given arguments removed)
    const newArray = [];

    //create variable assigned to the length of the input array
    //this will be used to loop through the array using standard "for" loop
    let arrayLen = array.length;

    //loop through input array and populate new array with desired elements
    //the new array will have all desired elements with given args "removed"
    for (let i = 0; i < arrayLen; i++) {
        if (array[i] != (args)) { //if the given value is not in input array
            newArray.push(array[i]); //insert it into the new array
        }
    }

    return newArray; //return new array
};

// Do not edit below this line
module.exports = removeFromArray;
