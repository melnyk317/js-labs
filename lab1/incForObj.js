"use strict";

const obj = {
    n: 5
};

function inc(num) {
    num.n = ++num.n;
}

console.log(obj);
inc(obj);
console.log(obj);
