const findTheOldest = function(peopleArr) {
    return peopleArr.reduce((oldestPerson, currentPerson) => {
        let currentAge = 0;
        let oldestAge = 0;

        if (!currentPerson.hasOwnProperty("yearOfDeath")) {
            currentAge = +(new Date().getFullYear()) - +currentPerson.yearOfBirth;
        } else {
            currentAge = +currentPerson.yearOfDeath - +currentPerson.yearOfBirth;
        }
        if (!oldestPerson.hasOwnProperty("yearOfDeath")) {
            oldestAge = +(new Date().getFullYear()) - +oldestPerson.yearOfBirth;
        } else {
            oldestAge = +oldestPerson.yearOfDeath - +oldestPerson.yearOfBirth;
        }

        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
