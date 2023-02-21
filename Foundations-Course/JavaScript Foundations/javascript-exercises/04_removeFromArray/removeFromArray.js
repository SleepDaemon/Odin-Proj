const removeFromArray = function(array, ...takeOut) {
    return array.filter(arg => !takeOut.includes(arg))

};

// Do not edit below this line
module.exports = removeFromArray;