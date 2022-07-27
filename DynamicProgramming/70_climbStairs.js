/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-27 16:31:10
 * @LastEditTime: 2022-07-27 16:35:51
 * @LastEditors:  
 */
/**
 * 70.爬楼梯
 * @param {number} n
 * @return {number}
 */

// 思路:
// 对于爬n级台阶来说, 假设有f(n)种方案
// 并且最后一步必定是走1步或走两步, 那么当最后一步是走1步时, 走法和爬n-1级台阶时一样, 这种情况就有f(n-1)种方案
// 那么当最后一步是走2步时, 走法和爬n-2级台阶时一样, 这种情况就有f(n-2)种方案
// 那么可以得出f(n) = f(n-1) + f(n-2)
var climbStairs = function (n) {
  // 要注意, 爬0级台阶的时候, 设定有1种方案, 这样n=2时才有2种方案才正确
  var p = 0, q = 1, r = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}