class Solution:
    def nextGreaterElement(self, nums1, nums2):
        res = [-1] * len(nums1)
        for i, num1 in enumerate(nums1):
            found = False
            for j, num2 in enumerate(nums2):
                if found and num2 > num1:
                    res[i] = num2
                    break

                if num2 == num1:
                    found = True

        return res
    