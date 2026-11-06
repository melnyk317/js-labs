function composeRightToLeft(...fns) {
    let errorCallbacks = [];
    const f = function (x) {
        return fns.reduceRight((pre, fn) => {
            if (pre === undefined) return undefined;
            try {
                return fn(pre);
            } catch (error) {
                errorCallbacks.forEach(callback => callback(error));
                return undefined;
            }
        }, x);

    };

    f.on = function (eventName, callback) {
        if (eventName === 'error' && typeof callback === 'function') {
            errorCallbacks.push(callback);
        }
    };

    return f;
}
