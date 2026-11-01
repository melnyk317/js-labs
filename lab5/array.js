function array() {
    const arr = [];
    const innerArr = function(index) {
        return arr[index];
    };
    innerArr.push = function(value) {
        return arr.push(value);
    };
    innerArr.pop = function() {
        return arr.pop();
    };
    return innerArr;
}
