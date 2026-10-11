"use strict";

const sum = (...numbers) => {
    return numbers.reduce((result, number) => result + number, 0);
}
