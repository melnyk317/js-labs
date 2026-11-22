function contract(fn, ...types) {
    return function(...args) {
        const expectedReturnType = types[types.length - 1];
        const expectedArgTypes = types.slice(0, -1);
        for (let i = 0; i < expectedArgTypes.length; i++) {
            const arg = args[i];
            const expectedType = expectedArgTypes[i];
            const expectedTypeName = expectedType.name.toLowerCase();
            if (typeof arg !== expectedTypeName) {
                throw new TypeError(`Argument ${i} must be of type ${expectedType.name}`);
            }
        }
        const result = fn(...args);
        const expectedReturnName = expectedReturnType.name.toLowerCase();
        if (typeof result !== expectedReturnName) {
            throw new TypeError(`Result must be of type ${expectedReturnType.name}`);
        }
        return result;
    };
}
