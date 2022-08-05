/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-05 17:52:23
 * @LastEditTime: 2022-08-05 17:55:22
 * @LastEditors:  
 */
/**
 * 53.最大子序列的和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0],
    count = 0

  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > max) { // 不断更新max值
      max = count
    }
    if (count < 0) { // 贪心贪在这里, 如果当前的子序列的和是负数, 那对接下来毫无益处, 因此直接抛弃当前子序列
      count = 0 // 由于不需要返回序列本身, 因此将和归零即为抛弃当前子序列, 下一轮for循环将从i+1元素重新计算
    }
  }

  return max
}