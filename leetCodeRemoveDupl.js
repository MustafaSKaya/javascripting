var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[i++] = nums[j];
    }
    return i++;
};

console.log(removeDuplicates([1,1,2])) //2, nums = [1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) //5, nums = [0,1,2,3,4,_,_,_,_,_]