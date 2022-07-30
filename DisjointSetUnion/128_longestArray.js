/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-30 23:10:47
 * @LastEditTime: 2022-07-30 23:14:59
 * @LastEditors:  
 */
/**
 * 128.最长连续序列
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let longest = 0,
    set = new Set(nums) // 1. 去重

  for (let num of nums) { // 2. 遍历每个元素
    if (set.has(num - 1)) { // 3. 只对连续序列的头节点进行处理, 若该节点不是连续序列的头, 则跳过, 避免不必要的计算
      continue
    }
    let currentLen = 1
    while (set.has(num + 1)) { // 4. 找到头节点, 不断加一搜索, 直到找到该连续序列的尽头
      num++
      currentLen++
    }
    longest = Math.max(currentLen, longest) // 5. 如果该连续序列比以前的那些都长, 记录下来
  }
  return longest
}