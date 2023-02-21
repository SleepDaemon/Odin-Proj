const reverseString = function(word) {
    let splitString = word.split("");
    let reverseWords = splitString.reverse()
    let joinWords = reverseWords.join("")
    return joinWords;

};

// Do not edit below this line
module.exports = reverseString;
