/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-05 14:22:54
 * @LastEditTime: 2022-08-05 14:23:05
 * @LastEditors:  
 */
/**
 * 276.栅栏涂色
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
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