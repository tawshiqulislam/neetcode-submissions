class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let x = 0; x < nums.length; x++){
            for(let y = 0; y < x; y++){
                if(nums[x] === nums[y]){
                    return true;
                }
            }
        }
        return false;  
    }
}
