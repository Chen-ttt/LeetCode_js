/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-08 20:16:54
 * @LastEditTime: 2022-10-08 20:56:32
 * @LastEditors:  
 */
/**
 * 15.三数之和
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 时间复杂度 O(N^2) N为数组长度
 */

// 回溯方法的复杂度太高了, 可以用三指针

function threeSum (nums) {
  // 为了去除重复解, 先对nums数组进行去重
  nums.sort((a, b) => a - b)
  let result = []

  for (let i = 0; i < nums.length; i++) {
    // i是主指针, 主指针i指向的数表示第一个数

    if (nums[i] > 0) break // 如果第一个数已经大于0, 则说明之后已经无解
    if (i > 0 && nums[i] == nums[i - 1]) continue // 如果第一个数和之前重复, 则都是重复的解, 无需考虑

    // left指针指向第二个数
    let left = i + 1
    // right指针指向第三个数
    let right = nums.length - 1
    // 两指针分别从主指针之后的部分的首尾开始扫描
    while (left < right) {
      const curSum = nums[i] + nums[left] + nums[right] // 当前解

      if (curSum === 0) {
        result.push([nums[i], nums[left], nums[right]]) // 正解, 存入result数组

        // 移动左右指针, 寻找下一个解
        left++
        right--

        // 去重, 将左右指针移动到不和当前解重复的地方
        while (left < right && nums[left] === nums[left - 1]) left++
        while (left < right && nums[right] === nums[right + 1]) right--
      }

      // curSum小于0, 说明三个数不够大, 因此只移动左指针寻找更大的数
      else if (curSum < 0) left++
      // curSum大于0, 说明三个数不够小, 因此只移动右指针寻找更小的数
      else right--
    }
  }

  return result
}