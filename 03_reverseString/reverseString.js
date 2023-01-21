const reverseString = function(word) {
    let reverse = word.split("").reverse().join("");
    return reverse;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
