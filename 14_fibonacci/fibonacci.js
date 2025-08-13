const fibonacci = function (num) {
    num = Number(num);
    if (num < 0) return 'OOPS';
    function fib(num) {
        if (num === 0) return 0;
        if (num === 1) return 1;
        return (fib(num - 1) + fib(num - 2));
    }
    return fib(num);
};

// Do not edit below this line
module.exports = fibonacci;
