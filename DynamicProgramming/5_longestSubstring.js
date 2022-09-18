/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-09-18 01:49:59
 * @LastEditTime: 2022-09-18 01:55:35
 * @LastEditors:  
 */
/**
 * 5. 最长回文子串
 * @param {string} s
 * @return {string}
 * 
 * 时间复杂度 O(N^2)
 * 空间复杂度 O(N^2)
 */

// 动态规划
var longestPalindrome = function (s) {
  let arr = new Array(s.length).fill(0).map(item => new Array(s.length).fill(false))

  let maxLen = 0
  let maxIndex = 0

  for (let i = 0; i < s.length; i++) {
    arr[i][i] = true
  }

  for (let i = 1; i < s.length; i++) { // i表示范围，本轮判断间隔为i长度子串
    for (let j = 0; j < s.length; j++) { // j表示起点，本轮判断j到j+i范围的子串
      if (j >= s.length - i) break
      if (i === 1) {
        if (s[j + i] === s[j]) {
          arr[j][j + i] = true
          maxLen = i
          maxIndex = j
        }
        else arr[j][j + i] = false
      } else {
        if (s[j + i] === s[j]) {
          arr[j][j + i] = arr[j + 1][j + i - 1] // 若最外层两个字符相等，则结果为里面被包裹的字符串的判断结果
          if (arr[j][j + i]) {
            maxLen = i
            maxIndex = j
          }
        }
        else arr[j][j + i] = false
      }
    }
  }

  return s.substring(maxIndex, maxIndex + maxLen + 1) // substring返回值不包括end参数的那一位字符，因此需要+1
}