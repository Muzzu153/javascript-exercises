let random = Math.floor(Math.random()*1000)

const repeatString = function(word, num) {
    if (num<0) return "ERROR";
    let string = "";
    for(let i=0; i<num; i++){
        string += word;
    }
    return string;
};

repeatString("hey", 3)
repeatString("hey", 10)
repeatString("hey", 1)
repeatString("hey", )
repeatString("hey", -1)
repeatString("hey", )
repeatString(" ", random)

// Do not edit below this line
module.exports = repeatString;
