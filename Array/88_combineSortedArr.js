/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-16 17:06:52
 * @LastEditTime: 2022-08-16 17:08:14
 * @LastEditors:  
 */
/**
 * 88.合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * 时间复杂度 O(m+n)
 * 空间复杂度 O(1)
 */

// 思路 - 双指针从后向前遍历, 对nums1从后往前进行原地修改
var merge = function (nums1, m, nums2, n) {
  let pointer = m - 1,
    pCom = nums1.length - 1

  n--

  while (pointer >= 0 && n >= 0) {
    if (nums1[pointer] >= nums2[n]) {
      nums1[pCom--] = nums1[pointer--]
    } else {
      nums1[pCom--] = nums2[n--]
    }
  }

  if (n === -1) return

  while (n >= 0) {
    nums1[pCom--] = nums2[n--]
  }
}