const findTheOldest = function(arr) {
        const currDate = new Date().getFullYear();
        let yearsLived1 = 0;
        let yearsLived2 = 0;
        arr.sort(
            (a,b) => {
                if(a?.yearOfDeath == undefined) {
                    yearsLived1 = currDate - a.yearOfBirth;
                    console.log(yearsLived1);
                } else {
                    yearsLived1 = a.yearOfDeath - a.yearOfBirth;
                    console.log(yearsLived1);
                }
                if(b?.yearOfDeath == undefined){
                    yearsLived2 = currDate - b.yearOfBirth;
                    console.log(yearsLived2);
                } else {
                    yearsLived2 = b.yearOfDeath - b.yearOfBirth;
                    console.log(yearsLived2);
                }
                
                return yearsLived1 < yearsLived2 ? 1 : -1;
            }
        )
            return arr[0];
    };


// Do not edit below this line
module.exports = findTheOldest;
