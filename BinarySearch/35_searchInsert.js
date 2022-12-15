/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-12-15 18:30:03
 * @LastEditTime: 2022-12-15 18:35:50
 * @LastEditors:  
 */
/**
 * 35.搜索插入的位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 时间复杂度 O(logN) 二分查找的时间复杂度
 * 空间复杂度 O(1) 常数空间
 */
var searchInsert = function (nums, target) {
  let left = 0
  let mid = 0
  let right = nums.length - 1

  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left

    if (nums[mid] === target) {
      return mid // 查找到target后直接return
    }
    else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  // 未查找到target, 退出循环, 此时left就是mid后一位, 即需要插入的位置
  return left
}