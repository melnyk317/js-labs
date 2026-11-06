const pipe = (...fns) => {
    fns.forEach(fn => {
        if (typeof fn !== 'function') {
            throw new Error(fn + " is not a function");
        }
    });
  return (x) => {    
    const result = fns.reduce(function(pre, fn) {
        return fn(pre);
    }, x);
    return result;
  };
};
