class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        seen = {}

        for x, current_num in enumerate(nums):
            complement = target - current_num
            
            if complement in seen:
                return[seen[complement], x]

            seen[current_num] = x