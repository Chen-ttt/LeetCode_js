/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-23 19:41:05
 * @LastEditTime: 2022-07-24 14:11:47
 * @LastEditors:  
 */
/**
 * 704.二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 时间复杂度 O(logN)
 * 空间复杂度 O(1)
 */
var search = function (nums, target) {
  var mid = 0,
    left = 0,
    right = nums.length - 1

  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left
    var midNum = nums[mid]
    if (midNum === target) return mid
    else if (midNum > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}