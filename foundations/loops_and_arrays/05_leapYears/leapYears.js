const leapYears = function (Number) {
    if (Number % 4 === 0 && (Number % 400 === 0
        || !(Number % 100 === 0))) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
