/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m + n - 1
    let j = n - 1
    let k = m - 1

    while (j >= 0) {
        if (k >= 0 && nums1[k] > nums2[j]) {
            nums1[i--] = nums1[k--]
        } else {
            nums1[i--] = nums2[j--]
        }
    }
};

merge([2, 0], 1, [1], 1)
