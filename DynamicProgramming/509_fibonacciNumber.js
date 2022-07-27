/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-27 16:06:17
 * @LastEditTime: 2022-07-27 16:17:12
 * @LastEditors:  
 */
/**
 * 509.斐波那契数
 * @param {number} n
 * @return {number}
 */

// 递归
var fib = function (n) {
  if (n === 0 || n === 1) return n
  else {
    return fib(n - 1) + fib(n - 2)
  }
}

// 自底向上动态规划 -- 核心:记住已经解决过的子问题的解
// 时间复杂度 O(n)
// 空间复杂度 O(1)
var fib = function (n) {
  if (n < 2) return n
  var p = 0,
    q = 0,
    r = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}