/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-07 09:48:00
 * @LastEditTime: 2022-08-07 09:48:22
 * @LastEditors:  
 */
/**
 * 3.无重复的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let slow = fast = 0,
    count = 0,
    result = 0

  let hash = new Map()

  while (fast < s.length) {
    if (hash.has(s[fast])) { // 重复
      let index = hash.get(s[fast]) + 1
      for (let i = slow; i < index; i++) {
        hash.delete(s[i])
      }
      slow = index

      result = Math.max(result, count)
      count = fast - slow
    } else {
      hash.set(s[fast], fast)
      count++
      fast++
    }
  }
  if (count) result = Math.max(result, count)

  return result
}