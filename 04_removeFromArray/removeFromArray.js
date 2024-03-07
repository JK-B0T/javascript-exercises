const removeFromArray = function(array) {
    let modifiedArray = array;
    const args = Array.from(arguments);
    let arrayLenght = array.length;

    for (let i = 0; i < arrayLenght; i++) {
        for (let j = 1; j < args.length; j++) {
            if (modifiedArray[i] === args[j]) {
                modifiedArray = modifiedArray.toSpliced(i, 1);
                arrayLenght--;
                i--;
                continue;
            }
        }
    }
    return modifiedArray;
};

removeFromArray([1,2,3,4], 2 ,3);

// Do not edit below this line
module.exports = removeFromArray;
