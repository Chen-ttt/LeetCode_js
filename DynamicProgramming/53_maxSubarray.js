/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-05 18:15:06
 * @LastEditTime: 2022-08-05 18:20:09
 * @LastEditors:  
 */
/**
 * 53.最大子序列的和
 * @param {number[]} nums
 * @return {number}
 */

// 思想
// 其实核心点和本题的贪心算法一样, 主要需要判断当前元素之前的最优子序列的和对本元素的dp是否有益处
// 当本元素加上之前的和 小于本元素的值, 那就立即放弃之前的子序列, 自己单独成列
// 反之, 并入子序列, 即将本元素的值计入总和
var maxSubArray = function (nums) {
  let dp = new Array(nums.length)
  let max = dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]) // 关键在这里, 需要判断是自己单独成列, 还是加入f(i-1)的序列
    if (dp[i] > max) max = dp[i]
  }

  return max
}