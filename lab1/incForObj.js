"use strict";

const obj = {
    n: 5
}

function inc(num) {
    num.n = ++num.n;
}

console.dir(obj);
inc(obj);
console.dir(obj);
