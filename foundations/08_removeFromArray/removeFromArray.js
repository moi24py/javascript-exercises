const removeFromArray = function(arr, ...numbers) {
    let newArr = [];
    newArr = arr.filter((n) => !numbers.includes(n));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
