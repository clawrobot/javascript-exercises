
const palindromes = function (words) {
    const cleaned = words.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
