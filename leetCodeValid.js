var isValid = function(s) {
    let arr = [];
    for(let char of s){
        switch(char){
            case '(':
                arr.push(')');
                break;
            case '{':
                arr.push('}');
                break;
            case '[':
                arr.push(']');
                break;
            default:
                if(char !== arr.pop()){
                    return false;
                break;
            }
        }
    }
    
    return arr.length === 0;
};

//console.log(isValid("()")) //true

//console.log(isValid("()[]{}")) //true

//console.log(isValid("(]")) //false

console.log(isValid("{[]}")) //true

//console.log(isValid("{[]}")) //true
