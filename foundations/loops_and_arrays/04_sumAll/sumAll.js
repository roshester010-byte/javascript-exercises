const sumAll = function (min, max) {
    let total = 0;
    let smaller = Math.min(min, max);
    let larger = Math.max(min, max);
    if (min <= 0 || max <= 0 || !Number.isInteger(min)
        || !Number.isInteger(max)) {
        return "ERROR";
    }
    for (let i = smaller; i <= larger; i++) {
        total += i;
    }
    return total;


};

// Do not edit below this line
module.exports = sumAll;
