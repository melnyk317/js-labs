"use strict";

const cat = {
    sound: "mav"
};

const cow = {
    sound: "moo"
};

const values = [true, "cazzo", cat, 13, false, 17.17, false, "mannagia", -3];
const values_1 = ["cavolo", 18, cat, cow, -1246];
const values_2 = [0, false, 1, true, 33, cow, 3, cat];

const types = {};

for (const val of values_1) {
    const type = typeof val;
    if (types[type] === undefined) {
        types[type] = 0;
    }
    ++types[type];
}

console.log(types);
