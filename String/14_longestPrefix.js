/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-01 22:37:52
 * @LastEditTime: 2022-10-01 22:39:36
 * @LastEditors:  
 */
/**
 * 14.最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */

// 纵向比较
var longestCommonPrefix = function (strs) {
  let round = 0
  let result = ""

  while (1) {
    const cur = strs[0][round]
    let curFlag = true

    // 对每一个str的第round位进行比较, 一旦有不同或者round位越界(即读取到undefined), 则本轮标记为失败
    for (const str of strs) {
      if (str[round] !== cur || str[round] === undefined) curFlag = false
    }

    // 纵向全部比较成功, 则写入result
    if (curFlag) {
      result += cur
      round++
    }
    else break // 否则直接跳出while并返回结果
  }

  return result
}