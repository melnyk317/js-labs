"use strict";

const ipToNum = (ip = "127.0.0.1") => {
    return ip.split(".").map(Number).reduce((result, byte, i) => {
        return result + (byte << ((3 -i) * 8));
    }, 0) >>> 0;
};
