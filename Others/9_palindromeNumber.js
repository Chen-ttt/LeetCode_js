/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-01 22:12:04
 * @LastEditTime: 2022-10-01 22:12:56
 * @LastEditors:  
 */
/**
 * 9. 回文数
 * @param {number} x
 * @return {boolean}
 */

// 双指针判断回文
var isPalindrome = function (x) {
  x += ""
  let left = 0
  let right = x.length - 1

  while (left < right) {
    if (x[left] !== x[right]) return false
    left++
    right--
  }
  return true
}