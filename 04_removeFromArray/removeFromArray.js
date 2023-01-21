const removeFromArray = function (...args) {
    let array = args[0];
    let numbers = [];

    array.forEach((element) => {
        if (!args.includes(element)) {
            numbers.push(element)
        }
    });
    return numbers;
}


removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3,2);
removeFromArray([1, 2, 3, 4], 7,"tacos");
removeFromArray([1, 2, 3, 4], 7,2);
removeFromArray([1, 2, 3, 4], 1,2,3,4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
