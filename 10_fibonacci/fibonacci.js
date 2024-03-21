const fibonacci = function(num) {
    if (+num === 0) {
        return 0;
    } else if (+num < 0) {
        return "OOPS";
    } else {
        let lastNum = 1
        let currentNum = 1;
        let tempNum = 0;
    
        for (let i = 2; i < +num; i++) {
            tempNum = currentNum;
            currentNum += lastNum;
            lastNum = tempNum;
        }
        return currentNum;
    }
};
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
