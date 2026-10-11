"use strict";

const sum = (...numbers) => {
    let i = 0;
    let result = 0;
    while (i < numbers.length) {
        result += numbers[i];
        i++;
    }   
    return result;
}
