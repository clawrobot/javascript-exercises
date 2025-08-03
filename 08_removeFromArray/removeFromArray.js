const removeFromArray = function () {
    const arr = arguments[0];
    const itemsToRemove = Array.prototype.slice.call(arguments, 1);

    return arr.filter((item) => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
