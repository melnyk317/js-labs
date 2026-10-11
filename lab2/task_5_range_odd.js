'use strict';

const rangeOdd = (start, end) => {
    const result = [];
    if (start % 2 === 0) {
        ++start;
    }
    for (let i = 0; start <= end; i++) {
        result[i] = start;
        start += 2;
    }
    return result;
};
