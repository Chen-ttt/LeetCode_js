/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-10 23:09:03
 * @LastEditTime: 2022-08-10 23:10:21
 * @LastEditors:  
 */
/**
 * 541.反转字符串II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let length = s.length

  s = s.split("") // 注意这个题目给的s是string, 和344反转字符串不一样, 需要先换成数组才能交换元素

  let left,
    right

  for (let i = 0; i < length; i += 2 * k) {
    left = i
    right = left + k > length ? length - 1 : left + k - 1
    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]]
      // console.log(s[left], s[right], s)

      left++
      right--
    }
  }
  return s.join("")
}