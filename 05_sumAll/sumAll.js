const sumAll = function(num1, num2) {
    let largerNum = 0;
    let smallestNum = 0;
    let sum = 0;
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    } else {
        if (num1 < num2) {
            largerNum = num2;
            smallestNum = num1;
        } else {
            largerNum = num1;
            smallestNum = num2;
        }

        for (let i = smallestNum; i <= largerNum; i++) {
            sum += i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
