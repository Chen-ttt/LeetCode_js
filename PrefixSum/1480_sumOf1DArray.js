/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2023-07-20 00:47:09
 * @LastEditTime: 2023-07-20 00:49:29
 * @LastEditors:  
 */
/**
 * 1480.一维数组的动态和
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1) 原地修改, 不需要新建数组
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i]
  }
  return nums
}