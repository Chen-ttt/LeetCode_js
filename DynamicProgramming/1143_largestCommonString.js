/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-28 17:03:36
 * @LastEditTime: 2022-07-28 17:36:45
 * @LastEditors:  
 */
/**
 * 1143.最长公共子序列
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * 
 * 思路:
 * 和62不同路径相似, 每个父问题的值都取决于左边格子, 上面格子, 或者左上格子
 */

// 1. 二维数组维护
// 思路:
// 当求解text1[0:i]和text2[0:j]的公共子序列f(i,j), 即text1前i位和text2前j位的公共部分
// 首先先看text1[i]和text2[j]两个字符是否相等:
//    a.相等, 则子问题为text1[0:i-1]和text2[0:j-1]的公共子序列, 加一即可得到当前子序列长度
//      此时f(i,j) = f(i-1,j-1) + 1
//    b.不相等, 那么只需要取前面的公共子序列长度即可
//      子问题有两个, text1[0:i-1]和text2[0:j]的公共子序列, 和text1[0:i]和text2[0:j-1]的公共子序列
//      此时f(i,j) = max(f(i-1,j), f(i,j-1))
var longestCommonSubsequence = function (text1, text2) {
  var arr = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
      }
    }
  }
  return arr[arr.length - 1][arr[0].length - 1]
}

// 2. 队列维护 - 可降低空间复杂度, 但用队列存取数据, 时间复杂度提高
longestCommonSubsequence = function (text1, text2) {
  var arr = new Array(text2.length + 2).fill(0)

  for (let i = 0; i < text1.length; i++) { // 遍历列
    arr.push(0)
    arr.shift()
    for (let j = 0; j < text2.length; j++) { // 遍历行
      if (text1[i] === text2[j]) {
        arr.push(arr[0] + 1)
      } else {
        arr.push(Math.max(arr[1], arr[arr.length - 1]))
      }
      arr.shift()
    }
  }
  return arr[arr.length - 1]
}