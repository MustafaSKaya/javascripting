var removeDuplicates = function(nums) {
    let k=nums.length;
    let currChar
    for (let i=0; i<nums.length; i++) {
        currChar = nums[i];
        if (currChar === "_") {
            return k;
        }
        while (nums[i] === nums[i+1]) {
            k--;
            nums.splice(i+1, 1);
            nums.splice(nums.length, 0, '_');
        }
    }
};

console.log(removeDuplicates([1,1,2])) //2, nums = [1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) //5, nums = [0,1,2,3,4,_,_,_,_,_]