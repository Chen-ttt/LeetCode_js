/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-28 18:09:08
 * @LastEditTime: 2022-07-28 18:09:37
 * @LastEditors:  
 */
/**
 * 66*.最长公共子串 -- 返回子串
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS (str1, str2) {
  var arr = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0))

  var largeIndex = 0,
    largeLen = 0
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1
        if (arr[i][j] > largeLen) {
          largeLen = arr[i][j]
          largeIndex = i
        }
      }
    }
  }
  return str1.substring(largeIndex - largeLen, largeIndex)
}