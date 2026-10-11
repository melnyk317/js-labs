'use strict';

const range = (start, end) => {
    const result = [];
    for (let i = 0; start <= end; i++) {
        result[i] = start++;
    }
    return result;
};
