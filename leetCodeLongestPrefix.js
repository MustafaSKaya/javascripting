let longestCommonPrefix = function(strs) {
  const resultArr = [];
  strs.sort();
  let firstStrArr = strs[0].split("");
  let lastStrArr = strs[strs.length - 1].split("");
  //start comparing
  for (let i = 0; i < firstStrArr.length; i++) {
    if (firstStrArr[i] != lastStrArr[i]) {
        break;
    }
    resultArr.push(firstStrArr[i]);
  }
  return resultArr.join("");
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["ab","a"])); //"a"