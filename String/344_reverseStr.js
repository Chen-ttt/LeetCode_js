/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-10 22:13:53
 * @LastEditTime: 2022-08-10 22:14:15
 * @LastEditors:  
 */
/**
 * 344.反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0,
    right = s.length - 1

  while (left < right) {
    // 交换关键
    [s[left], s[right]] = [s[right], s[left]]

    left++
    right--
  }
}