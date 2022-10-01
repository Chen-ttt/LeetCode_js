/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-01 21:25:05
 * @LastEditTime: 2022-10-01 21:27:35
 * @LastEditors:  
 */
/**
 * 238.除自身以外数组的乘积
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 要求: 时间复杂度 O(n); 空间复杂度 O(1)
 */

var productExceptSelf = function (nums) {

  let answer = new Array(nums.length).fill(1)

  // 第一趟遍历: 计算前缀乘积
  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1]
  }

  let cur = 1
  // 第二趟遍历: 计算后缀乘积 并原地修改数组
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = cur * answer[i]
    cur = nums[i] * cur
  }

  return answer
}