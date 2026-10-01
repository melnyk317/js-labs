"use strict";

const values = [true, "cazzo", null, 13, false, 17.17, false, "mannagia", -3];

const types = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0
};

for (const val of values) {
    switch (typeof val) {
        case "number":
            ++types.number;
            break;
        case "string":
            ++types.string;
            break;
        case "boolean":
            ++types.boolean;
            break;
        default:
            ++types.object;
            break;
    }
}
