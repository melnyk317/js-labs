"use strict";

const generateKey = (length, characters) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        const ind = random(characters.length -1);
        result += characters[ind];
    }
    return result;
};
