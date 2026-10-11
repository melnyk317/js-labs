"use strict";

const sum = (...numbers) => {
    let i = 0;
    let result = 0;
    if (numbers.length === 0) {
        return result;
    }
    do {
        result += numbers[i];
        i++;
    } while (i < numbers.length);
    return result;
}
