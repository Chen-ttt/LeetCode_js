/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-09-18 03:40:24
 * @LastEditTime: 2022-09-18 03:42:27
 * @LastEditors:  
 */
/**
 * 45. 跳跃游戏II
 * @param {number[]} nums
 * @return {number}
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */

// 贪心
var jump = function (nums) {
  let end = 0
  let maxIndex = 0
  let step = 0

  // 细节: 由于每次都是在开始新的阶段时, step++, 因此for不需要遍历最后一个点, 不然会多走一步
  for (let i = 0; i < nums.length - 1; i++) {
    maxIndex = Math.max(maxIndex, nums[i] + i) // nums[i] + i为当前能到达的最远位置

    // 无论当前节点选择条几步，都看作一个阶段
    if (i === end) { // 每次走到边界，意味着当前阶段走完，即当前节点能走的所有可能性都已遍历过，则更新边界
      end = maxIndex // 更新后的边界为 刚刚遍历过的所有可能里，能到达的最远位置
      step++ // 每个阶段 步数为1
    }
  }

  return step
}