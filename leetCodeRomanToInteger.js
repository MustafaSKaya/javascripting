let romanToInt = (s) => {
    let sum = 0;
    let element = s.split("");
    for (let i = 0;i < element.length; i++) {
        switch(element[i]) {
            case "I":
                if (element[i+1] === "V") {
                    sum += 4;
                    i++
                    break
                } else if (element[i+1] === "X") {
                    sum += 9;
                    i++
                    break
                }  else {
                    sum += 1;
                    break
                } 
            case "V":
                sum += 5;
                break
            case "X":
                if (element[i+1] === "L") {
                    sum += 40;
                    i++
                    break
                } else if (element[i+1] === "C") {
                    sum += 90;
                    i++
                    break
                }  else {
                    sum += 10;
                    break
                }
            case "L":
                sum += 50;
                break
            case "C":
                if (element[i+1] === "D") {
                    sum += 400;
                    i++
                    break
                } else if (element[i+1] === "M") {
                    sum += 900;
                    i++
                    break
                }  else {
                    sum += 100;
                    break
                }
            case "D":
                sum += 500;
                break
            case "M":
                sum += 1000;
                break
        }
    }
    return sum
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994