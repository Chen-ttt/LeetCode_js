/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-10-11 22:37:15
 * @LastEditTime: 2022-10-11 22:44:42
 * @LastEditors:  
 */

/**
 * 11.盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */

// 双指针法
// 1. 左右指针分别从前后两端向中间遍历, 每次计算以左右指针为界的情况下, 盛水的多少, 并更新最大值
// 2. 判断哪个指针处于短板, 则移动短板指针
//    因为盛水的多少由短板长度决定, area = 两板间距 * 短板高度
//    a. 若移动短板, 则间距-1, 而高度变化, 那么area有可能增加
//    b. 若移动长板, 则间距-1, 而高度仍由短板决定, 不会变化(甚至可能出现更短板), 那么area必定减少

var maxArea = function (height) {
  let left = 0
  let right = height.length - 1

  let maxArea = 0

  while (left < right) {
    // 计算当前情况的解, 并更新最大值
    maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]))

    // 通过判断左右指针谁是短板, 以决定移动谁
    if (height[left] > height[right]) {
      right--
    } else left++
  }

  return maxArea
}