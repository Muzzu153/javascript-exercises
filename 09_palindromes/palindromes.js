const palindromes = function (sentence) {
  const processedstring = sentence.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedString = processedstring.split("").reverse().join("");
  return reversedString === processedstring;
};

// Do not edit below this line
module.exports = palindromes;
