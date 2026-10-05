'use strict';

const average = (a, b) => {
    return (a + b) / 2;
};

const square = (x) => {
    return x * x;
};

const cube = (x) => {
    return x * x * x;
};

const calculate = () => {
    const max = 9;
    const result = [];
    for (let i = 0; i <= max; i++) {
        result[i] = average(square(i), cube(i));
    }
    return result;
}
