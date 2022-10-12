/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-12 12:37:27
 * @LastEditTime: 2022-10-12 12:40:20
 * @LastEditors:  
 */
/**
 * 6.Z字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows < 2) return s

  // true表示正在读竖边, i递增; false表示正在读斜边, i递减
  let flag = false // 初始需要设为false, 因为一进for循环会变为true

  // 数组中每个元素表示每行对应的字符串
  let result = new Array(numRows).fill("")

  let i = 0
  for (const ch of s) {
    // 将当前字符写入正确的行
    result[i] += ch

    if (i === numRows - 1 || i === 0) { // 每当走到最底下或最顶上的行, 变换flag, 使下一轮的i转变方向
      flag = !flag
    }

    if (flag) i++ // 往下走
    else i-- // 往斜上方走
  }

  return result.join("")
}