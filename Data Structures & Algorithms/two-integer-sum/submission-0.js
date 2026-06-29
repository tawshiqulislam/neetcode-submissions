class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const seen = new Map();

        for(let x = 0; x < nums.length; x++){
            let extraNumber = target - nums[x];
            if(seen.has(extraNumber)){
                return [seen.get(extraNumber), x]
            }

            seen.set(nums[x], x)
        }

    }
}
