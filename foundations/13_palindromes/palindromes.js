/* I really don't link this solution. It's messy, unnecessary complicated,
uses too many veriables and almost harcodes puntuation chars. */

const palindromes = function(string) {
        let str = string.replaceAll(/[ ,.!?#§°*]/g, '');
        let start = 0;
        let end = str.length - 1;
        let isAlphaNumStart = true;
        let isAlphaNumEnd = true;
        let let1;
        let let2;
 
        while (start < end) {
            let1 = str[start].toLowerCase();
            let2 = str[end].toLowerCase();
            isAlphaNumStart = /^[a-z0-9]+$/.test(let1);
            isAlphaNumEnd = /^[a-z0-9]+$/.test(let2);
            if (isAlphaNumStart !== true) let1 = str[++start].toLowerCase();
            if (isAlphaNumEnd !== true) let2 = str[--end].toLowerCase();

            if ((isAlphaNumStart == true) && (isAlphaNumEnd == true)) {
                if ( let1 !== let2) {
                    return false;
                }
            }
            start++;
            end--;
        }
        return true;
    };

// Do not edit below this line
module.exports = palindromes;
