"use strict";

const methods = (iface) => {
    const result = [];
    for (const name of Object.keys(iface)) {
        if (typeof iface[name] === "function") {
            result.push([name, iface[name].length]);
        }
    }
    return result;
};
