/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-05 14:22:54
 * @LastEditTime: 2022-08-05 14:28:54
 * @LastEditors:  
 */
/**
 * 276.栅栏涂色
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 也可以简化 - 只用三个变量去维护

// 思路
// 设第i个栅栏的涂色方案有dp[i]种, 那么应该考虑两种情况:
// 1. 该栅栏和前一个颜色不同: 则dp[i] = dp[i-1]*(k-1)
// 2. 相同: 则该栅栏颜色和第i-2个栅栏不同, dp[i] = dp[i-2]*(k-1)
// 注意, 第二种情况, dp[i]和dp[i-1]中的情况1的方案数相同, 不是完全相等的, 因为最多连续两个栅栏颜色一样, 因此必须借助dp[i-2]
var numWays = function (n, k) {
  if (n === 1) return k
  let color = new Array(n)
  color[0] = k
  color[1] = k + k * (k - 1)

  for (let i = 2; i < n; i++) {
    color[i] = color[i - 1] * (k - 1) + color[i - 2] * (k - 1)
  }

  return color.pop()
}