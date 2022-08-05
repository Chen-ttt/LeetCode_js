/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-05 16:49:25
 * @LastEditTime: 2022-08-05 16:52:23
 * @LastEditors:  
 */
/**
 * 455.分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 
 * 时间复杂度 O(mlogm + nlogn) 排序的复杂度是O(mlogm + nlogn), 遍历的复杂度是O(m + n), 因此...
 * 空间复杂度 O(logm + logn) 主要是排序额外的空间开销
 */

// 必须先排序
var findContentChildren = function (g, s) {
  let result = 0,
    index = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  for (let i = 0; i < s.length; i++) {
    if (index >= g.length) break
    if (s[i] >= g[index]) { // 被满足
      result++
      index++
    }
  }
  return result

}