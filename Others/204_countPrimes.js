/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-31 22:52:07
 * @LastEditTime: 2022-07-31 22:57:29
 * @LastEditors:  
 */
/**
 * 204.质数计数
 * @param {number} n
 * @return {number}
 * 
 * O(nloglogn)
 * O(n)
 */

// 埃氏筛
var countPrimes = function (n) {
  // 1表示质数, 0表示合数
  let arr = new Array(n).fill(1)
  let count = 0

  for (let i = 2; i < n; i++) {
    if (arr[i]) { // 跳过合数
      count++
      for (let j = i * i; j < n; j += i) { // 将该数在n以内所有的倍数都标记为合数
        arr[j] = 0
      } // 优化点: 其实从2x, 3x...开始标记是冗余的, 因为7的2倍/4倍/6倍...如果都在n内, 一定在处理2的循环中就被标记了
    }
  }
  return count
}