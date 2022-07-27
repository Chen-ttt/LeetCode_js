/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-27 17:11:23
 * @LastEditTime: 2022-07-27 17:18:08
 * @LastEditors:  
 */
/**
 * 746.最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */

// 思路:
// 题目计算的是到达楼梯顶部的最低花费, 有两种方案
//   1. 爬到第n级台阶, 再爬一级到达楼顶
//   2. 爬到第n-1级台阶, 再爬两级到达楼顶

// 那么如何计算哪种更省钱呢? 需要计算爬到n和n-1的最小花费
// 假设爬到n级最小花费是f(n)
// 那么就应当先对比爬到n-2和n-1级时的最小花费, 再加上第n级台阶的花费
// 即f(n) = min(f(n-2), f(n-1)) + cost[n]

var minCostClimbingStairs = function (cost) {
  var highest = cost.length - 1
  var p = 0, q = cost[0], r = cost[1]
  for (let i = 2; i <= highest; i++) {
    p = q // f(n-2)
    q = r // f(n-1)
    r = Math.min(p, q) + cost[i]
  }
  return Math.min(r, q) // 注意, 最后需要比较两种方案, 当第n级台阶特别贵的时候, 可能在n-1级直接迈两步更划算
}