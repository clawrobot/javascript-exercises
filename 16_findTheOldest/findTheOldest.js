const findTheOldest = function (ppl) {
    let oldest = ppl.sort((a, b) => {
        let bAge = 0;
        let aAge = 0;
        if ("yearOfDeath" in a && "yearOfDeath" in b) {
            aAge = a.yearOfDeath - a.yearOfBirth;
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        else if ("yearOfDeath" in a) {
            aAge = a.yearOfDeath - a.yearOfBirth;
            bAge = 2025 - b.yearOfBirth;
        }
        else if ("yearOfDeath" in b) {
            aAge = 2025 - a.yearOfBirth;
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        else {
            aAge = 2025 - a.yearOfBirth;
            bAge = 2025 - b.yearOfBirth;
        }

        return bAge - aAge;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
