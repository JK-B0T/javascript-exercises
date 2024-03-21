const palindromes = function (string) {
    const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz0123456789";
    let cleanString = string;
    let reverseString = string;

    cleanString = string.toLowerCase()
    .split("") 
    .filter((char) => ALPHANUMERIC.includes(char))
    .join("");

    reverseString = reverseString.toLowerCase()
    .split("") 
    .filter((char) => ALPHANUMERIC.includes(char))
    .reverse()
    .join("")

    if (cleanString === reverseString) {
        return true;
    } else {
        return false;
    }
};
palindromes('Hola buenas')
// Do not edit below this line
module.exports = palindromes;
