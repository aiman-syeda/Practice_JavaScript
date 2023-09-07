/* .includes method allows us to see that if a 
string is a substring of another string */


var strStr = function(haystack, needle) {
    if (haystack.length >= needle.length){
        var bool = haystack.includes(needle);
        if (bool == true){
            return 0;
        }else {
            return -1;    
        }
    }
    
    }

console.log(strStr("leetcode","leeto"));