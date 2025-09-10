class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        size = len(nums)
        insertIndex = 1
        for i in range(1, size):
        
            if nums[i - 1] != nums[i]:
                
                nums[insertIndex] = nums[i]

                insertIndex = insertIndex + 1
        return insertIndex
    