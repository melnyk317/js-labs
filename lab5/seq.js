function seq(...args) {
    const queue = (...smth) => {
        const arg = smth[0];
        if (typeof arg === 'number') {
            return args.reduce((result, curentFn) => curentFn(result), arg);
        }
        if (typeof arg === 'function') {
            return seq(...args, arg);
        }
    };
}
