const sumAll = function (num1, num2) {
    let sum = 0;
    if ((num1 < 0 || num2 < 0) ||
        ((typeof (num1) === "string") || (typeof (num2) === "string")) ||
        ((typeof (num1) === "object") || (typeof (num2) === "object"))) {
        sum = "ERROR";
    }
    else if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            sum += i;
        }
    }
    else if (num1 > num2) {
        for (i = num2; i <= num1; i++) {
            sum += i;
        }
    }

    return sum;
}
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
