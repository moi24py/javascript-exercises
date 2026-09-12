const fibonacci = function(elementh) {
    num = Number(elementh);
    
    if (num < 0 ) return "OOPS";
    if (num == 0) return 0;
    if (num == 1) return 1;

    let fibSeries = [1,1,];
    if (num > 1){
        for (let i = 1; i <= 50; i++){
            fibSeries.push(fibSeries[i] + fibSeries[i-1]); 
        }
    return fibSeries.at(num-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
